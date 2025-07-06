
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { PenTool, Download, Type } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const TextToHandwriting = () => {
  const [inputText, setInputText] = useState('Welcome to our handwriting tool! Type your text here and see it transform into beautiful handwriting instantly.');
  const [fontStyle, setFontStyle] = useState('cursive');
  const [fontSize, setFontSize] = useState([18]);
  const [lineHeight, setLineHeight] = useState([1.6]);
  const [quality, setQuality] = useState([2]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { toast } = useToast();

  const generateHandwriting = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Enhanced quality settings
    const pixelRatio = quality[0];
    const isMobile = window.innerWidth < 768;
    const baseWidth = isMobile ? 350 : 800;
    const padding = isMobile ? 30 : 50;
    
    // Calculate dynamic height based on content
    const lines = inputText.split('\n');
    const lineSpacing = fontSize[0] * lineHeight[0];
    const estimatedHeight = Math.max(
      isMobile ? 200 : 300, 
      lines.length * lineSpacing + padding * 2 + 50
    );

    // Set actual canvas size for high DPI
    canvas.width = baseWidth * pixelRatio;
    canvas.height = estimatedHeight * pixelRatio;
    
    // Scale the canvas back down using CSS for proper mobile display
    canvas.style.width = baseWidth + 'px';
    canvas.style.height = estimatedHeight + 'px';

    // Scale the drawing context so everything draws at high resolution
    ctx.scale(pixelRatio, pixelRatio);

    // Enable anti-aliasing and high quality rendering
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    // Clear and set background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, baseWidth, estimatedHeight);

    // Add lined paper effect with better quality
    ctx.strokeStyle = '#e8e8e8';
    ctx.lineWidth = 0.5;
    const startY = padding + 20;
    for (let i = startY; i < estimatedHeight - padding; i += lineSpacing) {
      ctx.beginPath();
      ctx.moveTo(padding, i);
      ctx.lineTo(baseWidth - padding, i);
      ctx.stroke();
    }

    // Add margin line
    ctx.strokeStyle = '#ff9999';
    ctx.lineWidth = 0.8;
    const marginX = padding + (isMobile ? 20 : 30);
    ctx.beginPath();
    ctx.moveTo(marginX, padding);
    ctx.lineTo(marginX, estimatedHeight - padding);
    ctx.stroke();

    // Set enhanced text properties
    ctx.fillStyle = '#1a1a2e';
    ctx.font = `${fontSize[0]}px ${fontStyle}`;
    ctx.textBaseline = 'alphabetic';

    // Add realistic handwriting variations
    let y = startY + fontSize[0] * 0.8;
    const maxWidth = baseWidth - marginX - padding;

    lines.forEach((line) => {
      if (!line.trim()) {
        y += lineSpacing;
        return;
      }

      const words = line.split(' ');
      let x = marginX + 10;

      words.forEach((word, wordIndex) => {
        // Check for line wrapping
        const wordWidth = ctx.measureText(word + ' ').width;
        if (x + wordWidth > maxWidth && wordIndex > 0) {
          x = marginX + 10;
          y += lineSpacing;
        }

        // Enhanced random variations for more realistic handwriting
        const randomX = x + (Math.random() - 0.5) * 3;
        const randomY = y + (Math.random() - 0.5) * 4;
        
        // Slight rotation for individual words
        const angle = (Math.random() - 0.5) * 0.04;
        
        ctx.save();
        ctx.translate(randomX, randomY);
        ctx.rotate(angle);
        
        // Add slight character spacing variation
        const chars = word.split('');
        let charX = 0;
        chars.forEach((char) => {
          const charRandomX = charX + (Math.random() - 0.5) * 1;
          const charRandomY = (Math.random() - 0.5) * 2;
          ctx.fillText(char, charRandomX, charRandomY);
          charX += ctx.measureText(char).width + (Math.random() - 0.5) * 0.5;
        });
        
        ctx.restore();

        x += wordWidth + (Math.random() - 0.5) * 2;
      });

      y += lineSpacing;
    });
  };

  // Auto-generate when inputs change
  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputText.trim()) {
        generateHandwriting();
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [inputText, fontStyle, fontSize, lineHeight, quality]);

  // Initial generation
  useEffect(() => {
    generateHandwriting();
  }, []);

  const downloadImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (!inputText.trim()) {
      toast({
        title: "Error",
        description: "Please enter some text to download.",
        variant: "destructive",
      });
      return;
    }

    const link = document.createElement('a');
    link.download = 'handwriting-hq.png';
    link.href = canvas.toDataURL('image/png', 1.0);
    link.click();

    toast({
      title: "Downloaded!",
      description: "High-quality handwriting image has been downloaded.",
    });
  };

  const fontOptions = [
    { value: 'cursive', label: 'Cursive' },
    { value: '"Dancing Script", cursive', label: 'Dancing Script' },
    { value: '"Kalam", cursive', label: 'Kalam' },
    { value: '"Caveat", cursive', label: 'Caveat' },
    { value: '"Indie Flower", cursive', label: 'Indie Flower' },
    { value: '"Shadows Into Light", cursive', label: 'Shadows Into Light' },
    { value: '"Patrick Hand", cursive', label: 'Patrick Hand' },
    { value: '"Amatic SC", cursive', label: 'Amatic SC' },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PenTool className="h-6 w-6" />
            Text to Handwriting Converter
          </CardTitle>
          <CardDescription>
            Convert typed text into high-quality handwritten-style text with live preview. Changes are applied automatically as you type.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <label htmlFor="input-text" className="block text-sm font-medium mb-2">
              Enter Your Text (Live Preview)
            </label>
            <Textarea
              id="input-text"
              placeholder="Type your text here and watch it transform into handwriting automatically..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              rows={6}
              className="resize-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label htmlFor="font-style" className="block text-sm font-medium mb-2">
                Font Style
              </label>
              <Select value={fontStyle} onValueChange={setFontStyle}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {fontOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Font Size: {fontSize[0]}px
              </label>
              <Slider
                value={fontSize}
                onValueChange={setFontSize}
                max={32}
                min={14}
                step={1}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Line Height: {lineHeight[0]}
              </label>
              <Slider
                value={lineHeight}
                onValueChange={setLineHeight}
                max={3}
                min={1.2}
                step={0.1}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Quality: {quality[0]}x
              </label>
              <Slider
                value={quality}
                onValueChange={setQuality}
                max={3}
                min={1}
                step={0.5}
                className="w-full"
              />
            </div>
          </div>

          <Card className="bg-gradient-to-br from-slate-50/50 to-blue-50/30 dark:from-slate-800/50 dark:to-blue-900/20 border-slate-200 dark:border-slate-700">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Live Handwriting Preview</CardTitle>
              <CardDescription>Your handwriting updates automatically as you type and adjust settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-center overflow-auto">
                <div className="min-w-0 max-w-full">
                  <canvas 
                    ref={canvasRef} 
                    className="border rounded-lg shadow-sm bg-white max-w-full h-auto block mx-auto"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <Button onClick={downloadImage} variant="outline" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download High-Quality Image
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50/50 to-purple-50/30 dark:from-blue-950/30 dark:to-purple-950/20 border-blue-200 dark:border-blue-800/50">
            <CardContent className="pt-6">
              <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">Enhanced Quality Features</h4>
              <ul className="text-sm text-blue-700 dark:text-blue-200 space-y-1">
                <li>• Live preview - see changes instantly as you type</li>
                <li>• Mobile-optimized responsive design</li>
                <li>• High-resolution output with anti-aliasing</li>
                <li>• Realistic character spacing and rotation</li>
                <li>• 8+ handwriting font styles available</li>
                <li>• Adjustable quality settings (1x to 3x)</li>
                <li>• Lined paper with margin lines</li>
                <li>• Natural handwriting variations</li>
              </ul>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default TextToHandwriting;
