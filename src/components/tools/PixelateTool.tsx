
import React, { useState, useRef, useCallback, useEffect } from 'react';
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
  const [cropArea, setCropArea] = useState({
    x: 50,
    y: 50,
    width: 200,
    height: 200
  });
  const [downloadFormat, setDownloadFormat] = useState('png');
  const [previewScale, setPreviewScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
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
        const maxDimension = Math.max(img.width, img.height);
        const scale = maxDimension > 500 ? 500 / maxDimension : 1;
        setPreviewScale(scale);
        
        setCropArea({
          x: Math.round(img.width * 0.2),
          y: Math.round(img.height * 0.2),
          width: Math.round(img.width * 0.3),
          height: Math.round(img.height * 0.3)
        });
        drawPreview(img);
      };
      img.src = URL.createObjectURL(file);
    }
  }, []);

  const drawPreview = useCallback((img: HTMLImageElement, showPixelation = false) => {
    const canvas = previewCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const scaledWidth = img.width * previewScale;
    const scaledHeight = img.height * previewScale;
    
    canvas.width = scaledWidth;
    canvas.height = scaledHeight;

    // Draw original image
    ctx.drawImage(img, 0, 0, scaledWidth, scaledHeight);

    if (showPixelation) {
      // Apply pixelation to the specified area
      const scaledCropArea = {
        x: cropArea.x * previewScale,
        y: cropArea.y * previewScale,
        width: cropArea.width * previewScale,
        height: cropArea.height * previewScale
      };

      // Ensure the area is within bounds
      const clampedArea = {
        x: Math.max(0, Math.min(scaledCropArea.x, scaledWidth - scaledCropArea.width)),
        y: Math.max(0, Math.min(scaledCropArea.y, scaledHeight - scaledCropArea.height)),
        width: Math.min(scaledCropArea.width, scaledWidth - scaledCropArea.x),
        height: Math.min(scaledCropArea.height, scaledHeight - scaledCropArea.y)
      };

      if (clampedArea.width > 0 && clampedArea.height > 0) {
        const imageData = ctx.getImageData(clampedArea.x, clampedArea.y, clampedArea.width, clampedArea.height);
        const data = imageData.data;
        const size = Math.max(2, pixelSize[0] * previewScale);

        for (let y = 0; y < clampedArea.height; y += size) {
          for (let x = 0; x < clampedArea.width; x += size) {
            const pixelIndex = (y * clampedArea.width + x) * 4;
            const r = data[pixelIndex];
            const g = data[pixelIndex + 1];
            const b = data[pixelIndex + 2];
            const a = data[pixelIndex + 3];

            for (let dy = 0; dy < size && y + dy < clampedArea.height; dy++) {
              for (let dx = 0; dx < size && x + dx < clampedArea.width; dx++) {
                const targetIndex = ((y + dy) * clampedArea.width + (x + dx)) * 4;
                data[targetIndex] = r;
                data[targetIndex + 1] = g;
                data[targetIndex + 2] = b;
                data[targetIndex + 3] = a;
              }
            }
          }
        }

        ctx.putImageData(imageData, clampedArea.x, clampedArea.y);
      }
    }

    // Draw selection rectangle
    ctx.strokeStyle = '#ff0000';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.strokeRect(
      cropArea.x * previewScale,
      cropArea.y * previewScale,
      cropArea.width * previewScale,
      cropArea.height * previewScale
    );
    ctx.setLineDash([]);

    // Add resize handles
    const handleSize = 8;
    ctx.fillStyle = '#ff0000';
    const scaledX = cropArea.x * previewScale;
    const scaledY = cropArea.y * previewScale;
    const scaledW = cropArea.width * previewScale;
    const scaledH = cropArea.height * previewScale;

    // Corner handles
    ctx.fillRect(scaledX - handleSize/2, scaledY - handleSize/2, handleSize, handleSize);
    ctx.fillRect(scaledX + scaledW - handleSize/2, scaledY - handleSize/2, handleSize, handleSize);
    ctx.fillRect(scaledX - handleSize/2, scaledY + scaledH - handleSize/2, handleSize, handleSize);
    ctx.fillRect(scaledX + scaledW - handleSize/2, scaledY + scaledH - handleSize/2, handleSize, handleSize);
  }, [cropArea, pixelSize, previewScale]);

  // Live preview update
  useEffect(() => {
    if (image) {
      drawPreview(image, true);
    }
  }, [image, cropArea, pixelSize, drawPreview]);

  const handleCanvasMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!image) return;
    
    const canvas = previewCanvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / previewScale;
    const mouseY = (e.clientY - rect.top) / previewScale;

    // Check if clicking inside the crop area
    if (mouseX >= cropArea.x && mouseX <= cropArea.x + cropArea.width &&
        mouseY >= cropArea.y && mouseY <= cropArea.y + cropArea.height) {
      setIsDragging(true);
      setDragStart({ x: mouseX - cropArea.x, y: mouseY - cropArea.y });
    }
  };

  const handleCanvasMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDragging || !image) return;

    const canvas = previewCanvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / previewScale;
    const mouseY = (e.clientY - rect.top) / previewScale;

    const newX = Math.max(0, Math.min(mouseX - dragStart.x, image.width - cropArea.width));
    const newY = Math.max(0, Math.min(mouseY - dragStart.y, image.height - cropArea.height));

    setCropArea(prev => ({ ...prev, x: newX, y: newY }));
  };

  const handleCanvasMouseUp = () => {
    setIsDragging(false);
    setIsResizing(false);
  };

  const applyPixelation = useCallback(() => {
    if (!image || !canvasRef.current) return;

    setIsProcessing(true);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = image.width;
    canvas.height = image.height;

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
      drawPreview(image, false);
      setProcessedImage(null);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Pixelate Tool</CardTitle>
          <CardDescription>
            Apply pixelation effects to specific areas of your images with draggable selection and live preview
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
                  <h3 className="font-semibold">Pixelation Area (Drag the red box to move)</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Label htmlFor="x">X Position</Label>
                      <Input
                        id="x"
                        type="number"
                        value={Math.round(cropArea.x)}
                        onChange={(e) => setCropArea(prev => ({ ...prev, x: Math.max(0, parseInt(e.target.value) || 0) }))}
                        min={0}
                        max={image ? image.width - cropArea.width : 0}
                      />
                    </div>
                    <div>
                      <Label htmlFor="y">Y Position</Label>
                      <Input
                        id="y"
                        type="number"
                        value={Math.round(cropArea.y)}
                        onChange={(e) => setCropArea(prev => ({ ...prev, y: Math.max(0, parseInt(e.target.value) || 0) }))}
                        min={0}
                        max={image ? image.height - cropArea.height : 0}
                      />
                    </div>
                    <div>
                      <Label htmlFor="width">Width</Label>
                      <Input
                        id="width"
                        type="number"
                        value={Math.round(cropArea.width)}
                        onChange={(e) => setCropArea(prev => ({ ...prev, width: Math.max(10, parseInt(e.target.value) || 100) }))}
                        min={10}
                        max={image ? image.width - cropArea.x : 100}
                      />
                    </div>
                    <div>
                      <Label htmlFor="height">Height</Label>
                      <Input
                        id="height"
                        type="number"
                        value={Math.round(cropArea.height)}
                        onChange={(e) => setCropArea(prev => ({ ...prev, height: Math.max(10, parseInt(e.target.value) || 100) }))}
                        min={10}
                        max={image ? image.height - cropArea.y : 100}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Preview */}
              <div className="space-y-4">
                <h3 className="font-semibold">Live Preview - Drag the red box to select pixelation area</h3>
                <div className="flex justify-center">
                  <canvas
                    ref={previewCanvasRef}
                    className="max-w-full max-h-96 border border-border rounded-lg cursor-move"
                    style={{ maxWidth: '100%', height: 'auto' }}
                    onMouseDown={handleCanvasMouseDown}
                    onMouseMove={handleCanvasMouseMove}
                    onMouseUp={handleCanvasMouseUp}
                    onMouseLeave={handleCanvasMouseUp}
                  />
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Click and drag the red selection box to move it around the image
                </p>
              </div>

              {/* Hidden canvas for final processing */}
              <canvas ref={canvasRef} className="hidden" />

              {/* Action Buttons */}
              <div className="flex gap-2 justify-center">
                <Button onClick={applyPixelation} disabled={isProcessing}>
                  {isProcessing ? 'Processing...' : 'Apply & Download'}
                </Button>
                <Button onClick={resetImage} variant="outline">
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Reset
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PixelateTool;
