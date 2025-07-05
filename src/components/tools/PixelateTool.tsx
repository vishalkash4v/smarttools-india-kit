
import React, { useState, useRef, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Upload, Download, RotateCcw } from 'lucide-react';
import { toast } from 'sonner';

const PixelateTool = () => {
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [pixelSize, setPixelSize] = useState([8]);
  const [pixelStrength, setPixelStrength] = useState([100]);
  const [cropArea, setCropArea] = useState({
    x: 0,
    y: 0,
    width: 100,
    height: 100
  });
  const [downloadFormat, setDownloadFormat] = useState('png');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        toast.error('Please select a valid image file');
        return;
      }

      const img = new Image();
      img.onload = () => {
        setImage(img);
        setCropArea({
          x: 0,
          y: 0,
          width: Math.min(200, img.width),
          height: Math.min(200, img.height)
        });
        drawOriginalImage(img);
      };
      img.src = URL.createObjectURL(file);
    }
  }, []);

  const drawOriginalImage = (img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
  };

  const applyPixelation = useCallback(() => {
    if (!image || !canvasRef.current) return;

    setIsProcessing(true);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Draw original image
    ctx.drawImage(image, 0, 0);

    // Apply pixelation to the specified area
    const imageData = ctx.getImageData(cropArea.x, cropArea.y, cropArea.width, cropArea.height);
    const data = imageData.data;
    const size = pixelSize[0];

    for (let y = 0; y < cropArea.height; y += size) {
      for (let x = 0; x < cropArea.width; x += size) {
        const pixelIndex = (y * cropArea.width + x) * 4;
        const r = data[pixelIndex];
        const g = data[pixelIndex + 1];
        const b = data[pixelIndex + 2];
        const a = data[pixelIndex + 3];

        // Fill the pixel block with the same color
        for (let dy = 0; dy < size && y + dy < cropArea.height; dy++) {
          for (let dx = 0; dx < size && x + dx < cropArea.width; dx++) {
            const targetIndex = ((y + dy) * cropArea.width + (x + dx)) * 4;
            data[targetIndex] = r;
            data[targetIndex + 1] = g;
            data[targetIndex + 2] = b;
            data[targetIndex + 3] = a;
          }
        }
      }
    }

    ctx.putImageData(imageData, cropArea.x, cropArea.y);
    setProcessedImage(canvas.toDataURL());
    setIsProcessing(false);
    toast.success('Pixelation applied successfully!');
  }, [image, pixelSize, cropArea]);

  const downloadImage = () => {
    if (!processedImage) return;

    const link = document.createElement('a');
    link.download = `pixelated-image.${downloadFormat}`;
    link.href = processedImage;
    link.click();
    toast.success('Image downloaded successfully!');
  };

  const resetImage = () => {
    if (image) {
      drawOriginalImage(image);
      setProcessedImage(null);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Pixelate Tool</CardTitle>
          <CardDescription>
            Apply pixelation effects to specific areas of your images
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Upload Section */}
          <div className="space-y-4">
            <div>
              <Button
                onClick={() => fileInputRef.current?.click()}
                className="w-full"
                variant="outline"
              >
                <Upload className="mr-2 h-4 w-4" />
                Upload Image
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
          </div>

          {image && (
            <>
              {/* Settings */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label>Pixelation Size: {pixelSize[0]}px</Label>
                    <Slider
                      value={pixelSize}
                      onValueChange={setPixelSize}
                      max={50}
                      min={2}
                      step={1}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label>Pixelation Strength: {pixelStrength[0]}%</Label>
                    <Slider
                      value={pixelStrength}
                      onValueChange={setPixelStrength}
                      max={100}
                      min={10}
                      step={5}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="format">Download Format</Label>
                    <Select value={downloadFormat} onValueChange={setDownloadFormat}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="png">PNG</SelectItem>
                        <SelectItem value="jpg">JPG</SelectItem>
                        <SelectItem value="jpeg">JPEG</SelectItem>
                        <SelectItem value="webp">WebP</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">Pixelation Area</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Label htmlFor="x">X Position</Label>
                      <Input
                        id="x"
                        type="number"
                        value={cropArea.x}
                        onChange={(e) => setCropArea(prev => ({ ...prev, x: parseInt(e.target.value) || 0 }))}
                        min={0}
                        max={image.width - cropArea.width}
                      />
                    </div>
                    <div>
                      <Label htmlFor="y">Y Position</Label>
                      <Input
                        id="y"
                        type="number"
                        value={cropArea.y}
                        onChange={(e) => setCropArea(prev => ({ ...prev, y: parseInt(e.target.value) || 0 }))}
                        min={0}
                        max={image.height - cropArea.height}
                      />
                    </div>
                    <div>
                      <Label htmlFor="width">Width</Label>
                      <Input
                        id="width"
                        type="number"
                        value={cropArea.width}
                        onChange={(e) => setCropArea(prev => ({ ...prev, width: parseInt(e.target.value) || 100 }))}
                        min={1}
                        max={image.width - cropArea.x}
                      />
                    </div>
                    <div>
                      <Label htmlFor="height">Height</Label>
                      <Input
                        id="height"
                        type="number"
                        value={cropArea.height}
                        onChange={(e) => setCropArea(prev => ({ ...prev, height: parseInt(e.target.value) || 100 }))}
                        min={1}
                        max={image.height - cropArea.y}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Canvas */}
              <div className="flex justify-center">
                <canvas
                  ref={canvasRef}
                  className="max-w-full max-h-96 border border-border rounded-lg"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 justify-center">
                <Button onClick={applyPixelation} disabled={isProcessing}>
                  {isProcessing ? 'Processing...' : 'Apply Pixelation'}
                </Button>
                <Button onClick={resetImage} variant="outline">
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Reset
                </Button>
                {processedImage && (
                  <Button onClick={downloadImage}>
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                )}
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PixelateTool;
