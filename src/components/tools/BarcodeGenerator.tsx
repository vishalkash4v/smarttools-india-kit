
import React, { useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart3, Download, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const BarcodeGenerator = () => {
  const [inputText, setInputText] = useState('');
  const [barcodeType, setBarcodeType] = useState('code128');
  const [generatedBarcode, setGeneratedBarcode] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { toast } = useToast();

  const generateBarcode = () => {
    if (!inputText.trim()) {
      toast({
        title: "Error",
        description: "Please enter text to generate barcode.",
        variant: "destructive",
      });
      return;
    }

    // Simple barcode simulation (in a real app, you'd use a library like JsBarcode)
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Generate simple barcode pattern
    ctx.fillStyle = 'black';
    const text = inputText.slice(0, 20); // Limit length
    const barWidth = 3;
    const barHeight = 80;
    const startX = 20;
    const startY = 20;

    // Create a simple pattern based on character codes
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i);
      const pattern = charCode % 4; // Simple pattern generation
      
      for (let j = 0; j < 8; j++) {
        if ((pattern >> j) & 1) {
          ctx.fillRect(startX + (i * 8 + j) * barWidth, startY, barWidth - 1, barHeight);
        }
      }
    }

    // Add text below barcode
    ctx.fillStyle = 'black';
    ctx.font = '12px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(text, canvas.width / 2, startY + barHeight + 20);

    setGeneratedBarcode(canvas.toDataURL());
  };

  const downloadBarcode = () => {
    if (!generatedBarcode) return;
    
    const link = document.createElement('a');
    link.download = `barcode-${inputText}.png`;
    link.href = generatedBarcode;
    link.click();
    
    toast({
      title: "Downloaded!",
      description: "Barcode image has been downloaded.",
    });
  };

  const copyImage = async () => {
    if (!generatedBarcode) return;

    try {
      const response = await fetch(generatedBarcode);
      const blob = await response.blob();
      await navigator.clipboard.write([
        new ClipboardItem({ 'image/png': blob })
      ]);
      toast({
        title: "Copied!",
        description: "Barcode image copied to clipboard.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to copy image to clipboard.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-6 w-6" />
            Barcode Generator
          </CardTitle>
          <CardDescription>
            Generate barcodes from text for various applications.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="input-text" className="block text-sm font-medium mb-2">
                Text to Encode
              </label>
              <Input
                id="input-text"
                placeholder="Enter text for barcode..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                maxLength={20}
              />
              <p className="text-xs text-muted-foreground mt-1">Maximum 20 characters</p>
            </div>
            <div>
              <label htmlFor="barcode-type" className="block text-sm font-medium mb-2">
                Barcode Type
              </label>
              <Select value={barcodeType} onValueChange={setBarcodeType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="code128">Code 128</SelectItem>
                  <SelectItem value="code39">Code 39</SelectItem>
                  <SelectItem value="ean13">EAN-13</SelectItem>
                  <SelectItem value="upc">UPC</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button onClick={generateBarcode} className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Generate Barcode
          </Button>

          {generatedBarcode && (
            <Card className="bg-muted/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Generated Barcode</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-center">
                  <div className="bg-white p-4 rounded border">
                    <canvas 
                      ref={canvasRef} 
                      width={400} 
                      height={120}
                      style={{ display: generatedBarcode ? 'block' : 'none' }}
                    />
                  </div>
                </div>
                <div className="flex gap-3 justify-center">
                  <Button onClick={downloadBarcode} variant="outline" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download PNG
                  </Button>
                  <Button onClick={copyImage} variant="outline" className="flex items-center gap-2">
                    <Copy className="h-4 w-4" />
                    Copy Image
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <h4 className="font-semibold mb-2">About Barcodes</h4>
              <p className="text-sm text-muted-foreground">
                Barcodes are machine-readable optical labels that contain information about the item to which they are attached. 
                They are widely used in retail, inventory management, and logistics for quick and accurate data capture.
              </p>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default BarcodeGenerator;
