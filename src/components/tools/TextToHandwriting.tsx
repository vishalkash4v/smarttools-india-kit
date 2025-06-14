
import React, { useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { PenTool, Download, Type } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const TextToHandwriting = () => {
  const [inputText, setInputText] = useState('');
  const [fontStyle, setFontStyle] = useState('cursive');
  const [fontSize, setFontSize] = useState([16]);
  const [lineHeight, setLineHeight] = useState([1.5]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { toast } = useToast();

  const generateHandwriting = () => {
    if (!inputText.trim()) {
      toast({
        title: "Error",
        description: "Please enter some text to convert.",
        variant: "destructive",
      });
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 800;
    canvas.height = Math.max(400, inputText.split('\n').length * fontSize[0] * lineHeight[0] + 100);

    // Clear and set background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add lined paper effect
    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 0.5;
    const lineSpacing = fontSize[0] * lineHeight[0];
    for (let i = 50; i < canvas.height; i += lineSpacing) {
      ctx.beginPath();
      ctx.moveTo(50, i);
      ctx.lineTo(canvas.width - 50, i);
      ctx.stroke();
    }

    // Set text properties
    ctx.fillStyle = '#1a1a1a';
    ctx.font = `${fontSize[0]}px ${fontStyle}`;
    ctx.textBaseline = 'top';

    // Add slight randomness to simulate handwriting
    const lines = inputText.split('\n');
    let y = 60;

    lines.forEach((line, lineIndex) => {
      const words = line.split(' ');
      let x = 60;

      words.forEach((word, wordIndex) => {
        // Add slight random offset for each word
        const randomX = x + (Math.random() - 0.5) * 2;
        const randomY = y + (Math.random() - 0.5) * 3;

        // Measure word width
        const wordWidth = ctx.measureText(word + ' ').width;

        // Check if word fits on current line
        if (x + wordWidth > canvas.width - 60 && wordIndex > 0) {
          x = 60;
          y += lineSpacing;
        }

        ctx.fillText(word, randomX, randomY);
        x += wordWidth;
      });

      y += lineSpacing;
    });
  };

  const downloadImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = 'handwriting.png';
    link.href = canvas.toDataURL();
    link.click();

    toast({
      title: "Downloaded!",
      description: "Handwriting image has been downloaded.",
    });
  };

  const fontOptions = [
    { value: 'cursive', label: 'Cursive' },
    { value: 'fantasy', label: 'Fantasy' },
    { value: '"Brush Script MT", cursive', label: 'Brush Script' },
    { value: '"Comic Sans MS", cursive', label: 'Comic Sans' },
    { value: '"Trebuchet MS", sans-serif', label: 'Trebuchet' },
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
            Convert typed text into handwritten-style text on lined paper.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <label htmlFor="input-text" className="block text-sm font-medium mb-2">
              Enter Your Text
            </label>
            <Textarea
              id="input-text"
              placeholder="Type your text here..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              rows={6}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                max={30}
                min={12}
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
                min={1}
                step={0.1}
                className="w-full"
              />
            </div>
          </div>

          <div className="flex gap-3">
            <Button onClick={generateHandwriting} className="flex items-center gap-2">
              <Type className="h-4 w-4" />
              Generate Handwriting
            </Button>
          </div>

          <Card className="bg-muted/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Generated Handwriting</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-center">
                <canvas 
                  ref={canvasRef} 
                  className="border rounded-lg shadow-sm bg-white max-w-full h-auto"
                  style={{ maxHeight: '500px' }}
                />
              </div>
              <div className="flex justify-center">
                <Button onClick={downloadImage} variant="outline" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download Image
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <h4 className="font-semibold mb-2">Tips for Better Results</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Keep paragraphs short for better formatting</li>
                <li>• Use line breaks to control text layout</li>
                <li>• Try different font styles to find your preferred handwriting look</li>
                <li>• Adjust font size and line height for optimal readability</li>
              </ul>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default TextToHandwriting;
