
import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Image as ImageIcon, Download, Copy, Palette } from "lucide-react";
import { toast } from "sonner";

const PlaceholderImageGenerator = () => {
  const [width, setWidth] = useState(400);
  const [height,setHeight] = useState(300);
  const [backgroundColor, setBackgroundColor] = useState('#cccccc');
  const [textColor, setTextColor] = useState('#666666');
  const [text, setText] = useState('');
  const [format, setFormat] = useState<'png' | 'jpeg' | 'webp'>('png');
  const [generatedUrl, setGeneratedUrl] = useState('');

  const commonSizes = [
    { name: 'Square', width: 400, height: 400 },
    { name: 'Landscape', width: 800, height: 600 },
    { name: 'Portrait', width: 600, height: 800 },
    { name: 'Banner', width: 1200, height: 300 },
    { name: 'Card', width: 300, height: 200 },
    { name: 'Avatar', width: 150, height: 150 },
    { name: 'HD', width: 1920, height: 1080 },
    { name: 'Mobile', width: 375, height: 812 },
  ];

  const generateImage = useCallback(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) {
      toast.error('Canvas not supported');
      return;
    }

    canvas.width = width;
    canvas.height = height;

    // Fill background
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);

    // Add border
    ctx.strokeStyle = textColor;
    ctx.lineWidth = 2;
    ctx.strokeRect(1, 1, width - 2, height - 2);

    // Add text
    const displayText = text || `${width} × ${height}`;
    ctx.fillStyle = textColor;
    
    // Calculate font size based on image size
    const fontSize = Math.min(width, height) / 15;
    ctx.font = `${fontSize}px Arial, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Add text with background for better readability
    const textMetrics = ctx.measureText(displayText);
    const textWidth = textMetrics.width;
    const textHeight = fontSize;
    
    // Semi-transparent background for text
    ctx.fillStyle = backgroundColor === '#ffffff' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)';
    ctx.fillRect(
      (width - textWidth) / 2 - 10,
      (height - textHeight) / 2 - 5,
      textWidth + 20,
      textHeight + 10
    );

    // Draw text
    ctx.fillStyle = textColor;
    ctx.fillText(displayText, width / 2, height / 2);

    // Convert to desired format
    const mimeType = `image/${format}`;
    const quality = format === 'jpeg' ? 0.9 : undefined;
    
    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        setGeneratedUrl(url);
        toast.success('Placeholder image generated!');
      }
    }, mimeType, quality);
  }, [width, height, backgroundColor, textColor, text, format]);

  const downloadImage = useCallback(() => {
    if (!generatedUrl) return;

    const link = document.createElement('a');
    link.href = generatedUrl;
    link.download = `placeholder-${width}x${height}.${format}`;
    link.click();
    toast.success('Image downloaded successfully');
  }, [generatedUrl, width, height, format]);

  const copyUrl = useCallback(() => {
    navigator.clipboard.writeText(generatedUrl);
    toast.success('Image URL copied to clipboard');
  }, [generatedUrl]);

  const applyCommonSize = useCallback((size: { width: number; height: number }) => {
    setWidth(size.width);
    setHeight(size.height);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ImageIcon className="h-5 w-5" />
              Image Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="width">Width (px)</Label>
                <Input
                  id="width"
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(Number(e.target.value))}
                  min={1}
                  max={2000}
                />
              </div>
              <div>
                <Label htmlFor="height">Height (px)</Label>
                <Input
                  id="height"
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  min={1}
                  max={2000}
                />
              </div>
            </div>

            <div>
              <Label>Common Sizes</Label>
              <div className="flex flex-wrap gap-2 mt-2">
                {commonSizes.map((size) => (
                  <Badge
                    key={size.name}
                    variant="outline"
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                    onClick={() => applyCommonSize(size)}
                  >
                    {size.name} ({size.width}×{size.height})
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="bg-color">Background Color</Label>
                <div className="flex gap-2">
                  <Input
                    id="bg-color"
                    type="color"
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                    className="w-12 h-10 p-1"
                  />
                  <Input
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                    placeholder="#cccccc"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="text-color">Text Color</Label>
                <div className="flex gap-2">
                  <Input
                    id="text-color"
                    type="color"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="w-12 h-10 p-1"
                  />
                  <Input
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    placeholder="#666666"
                  />
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="custom-text">Custom Text (optional)</Label>
              <Input
                id="custom-text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Leave empty for dimensions"
              />
            </div>

            <div>
              <Label htmlFor="format">Output Format</Label>
              <Select value={format} onValueChange={(value: 'png' | 'jpeg' | 'webp') => setFormat(value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="png">PNG</SelectItem>
                  <SelectItem value="jpeg">JPEG</SelectItem>
                  <SelectItem value="webp">WebP</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button onClick={generateImage} className="w-full">
              <Palette className="h-4 w-4 mr-2" />
              Generate Image
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Preview</CardTitle>
          </CardHeader>
          <CardContent>
            {generatedUrl ? (
              <div className="space-y-4">
                <div className="border rounded-lg p-4 bg-gray-50">
                  <img
                    src={generatedUrl}
                    alt="Generated placeholder"
                    className="max-w-full max-h-64 mx-auto"
                    style={{ imageRendering: 'pixelated' }}
                  />
                </div>
                <div className="flex gap-2">
                  <Button onClick={downloadImage} variant="outline" className="flex-1">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button onClick={copyUrl} variant="outline" className="flex-1">
                    <Copy className="h-4 w-4 mr-2" />
                    Copy URL
                  </Button>
                </div>
                <div className="text-xs text-gray-600 space-y-1">
                  <p>Size: {width} × {height} pixels</p>
                  <p>Format: {format.toUpperCase()}</p>
                  <p>Colors: {backgroundColor} / {textColor}</p>
                </div>
              </div>
            ) : (
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <ImageIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Generate an image to see preview</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PlaceholderImageGenerator;
