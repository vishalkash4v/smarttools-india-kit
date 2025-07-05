
import React, { useState, useRef, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Upload, Download, Link, RotateCcw } from 'lucide-react';
import { toast } from 'sonner';

const ImageResizer = () => {
  const [originalImage, setOriginalImage] = useState<HTMLImageElement | null>(null);
  const [originalSize, setOriginalSize] = useState({ width: 0, height: 0, fileSize: 0 });
  const [resizedImage, setResizedImage] = useState<string | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [quality, setQuality] = useState(90);
  const [format, setFormat] = useState('jpeg');
  const [maintainAspectRatio, setMaintainAspectRatio] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleImageUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        toast.error('Please select a valid image file');
        return;
      }

      const img = new Image();
      img.onload = () => {
        setOriginalImage(img);
        setOriginalSize({
          width: img.width,
          height: img.height,
          fileSize: file.size
        });
        setDimensions({
          width: img.width,
          height: img.height
        });
        setResizedImage(null);
      };
      img.src = URL.createObjectURL(file);
    }
  }, []);

  const handleDimensionChange = (field: 'width' | 'height', value: number) => {
    if (maintainAspectRatio && originalImage) {
      const aspectRatio = originalImage.width / originalImage.height;
      if (field === 'width') {
        setDimensions({
          width: value,
          height: Math.round(value / aspectRatio)
        });
      } else {
        setDimensions({
          width: Math.round(value * aspectRatio),
          height: value
        });
      }
    } else {
      setDimensions(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const resizeImage = useCallback(() => {
    if (!originalImage || !canvasRef.current) return;

    setIsProcessing(true);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      setIsProcessing(false);
      return;
    }

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    // Use image smoothing for better quality
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    // Draw resized image
    ctx.drawImage(originalImage, 0, 0, dimensions.width, dimensions.height);

    // Convert to desired format with quality
    const mimeType = format === 'png' ? 'image/png' : 'image/jpeg';
    const qualityValue = format === 'png' ? 1 : quality / 100;
    const dataUrl = canvas.toDataURL(mimeType, qualityValue);

    setResizedImage(dataUrl);
    setIsProcessing(false);
    toast.success('Image resized successfully!');
  }, [originalImage, dimensions, format, quality]);

  const downloadImage = () => {
    if (!resizedImage) return;

    const link = document.createElement('a');
    link.download = `resized-image.${format}`;
    link.href = resizedImage;
    link.click();
    toast.success('Image downloaded successfully!');
  };

  const resetToOriginal = () => {
    if (originalImage) {
      setDimensions({
        width: originalImage.width,
        height: originalImage.height
      });
      setResizedImage(null);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getEstimatedFileSize = () => {
    if (!originalImage) return '0 KB';
    const pixelCount = dimensions.width * dimensions.height;
    const originalPixelCount = originalImage.width * originalImage.height;
    const ratio = pixelCount / originalPixelCount;
    const qualityFactor = format === 'png' ? 1 : (quality / 100);
    const estimatedSize = originalSize.fileSize * ratio * qualityFactor;
    return formatFileSize(estimatedSize);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Image Resizer</CardTitle>
          <CardDescription>
            Manually resize dimensions and file size of images and documents
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Upload Section */}
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

          {originalImage && (
            <>
              {/* Original Image Info */}
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Original Image</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Width:</span> {originalSize.width}px
                  </div>
                  <div>
                    <span className="font-medium">Height:</span> {originalSize.height}px
                  </div>
                  <div>
                    <span className="font-medium">File Size:</span> {formatFileSize(originalSize.fileSize)}
                  </div>
                  <div>
                    <span className="font-medium">Aspect Ratio:</span> {(originalSize.width / originalSize.height).toFixed(2)}
                  </div>
                </div>
              </div>

              {/* Resize Controls */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold">Resize Settings</h3>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="width">Width (px)</Label>
                      <Input
                        id="width"
                        type="number"
                        value={dimensions.width}
                        onChange={(e) => handleDimensionChange('width', parseInt(e.target.value) || 0)}
                        min={1}
                        max={5000}
                      />
                    </div>
                    <div>
                      <Label htmlFor="height">Height (px)</Label>
                      <Input
                        id="height"
                        type="number"
                        value={dimensions.height}
                        onChange={(e) => handleDimensionChange('height', parseInt(e.target.value) || 0)}
                        min={1}
                        max={5000}
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="aspectRatio"
                      checked={maintainAspectRatio}
                      onCheckedChange={(checked) => setMaintainAspectRatio(checked === true)}
                    />
                    <Label htmlFor="aspectRatio" className="flex items-center">
                      <Link className="mr-1 h-3 w-3" />
                      Maintain aspect ratio
                    </Label>
                  </div>

                  <div>
                    <Label htmlFor="format">Output Format</Label>
                    <Select value={format} onValueChange={setFormat}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="jpeg">JPEG</SelectItem>
                        <SelectItem value="png">PNG</SelectItem>
                        <SelectItem value="webp">WebP</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {format !== 'png' && (
                    <div>
                      <Label htmlFor="quality">Quality: {quality}%</Label>
                      <Input
                        id="quality"
                        type="range"
                        min={10}
                        max={100}
                        value={quality}
                        onChange={(e) => setQuality(parseInt(e.target.value))}
                        className="mt-2"
                      />
                    </div>
                  )}

                  {/* Estimated Output Info */}
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <h4 className="font-medium mb-2">Estimated Output</h4>
                    <div className="text-sm space-y-1">
                      <div>Dimensions: {dimensions.width} × {dimensions.height}px</div>
                      <div>Estimated Size: {getEstimatedFileSize()}</div>
                      <div>Size Reduction: {((1 - (dimensions.width * dimensions.height) / (originalSize.width * originalSize.height)) * 100).toFixed(1)}%</div>
                    </div>
                  </div>
                </div>

                {/* Common Preset Sizes */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Quick Presets</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { name: 'Thumbnail', width: 150, height: 150 },
                      { name: 'Small', width: 300, height: 200 },
                      { name: 'Medium', width: 600, height: 400 },
                      { name: 'Large', width: 1200, height: 800 },
                      { name: 'HD', width: 1920, height: 1080 },
                      { name: 'Square (300)', width: 300, height: 300 },
                      { name: 'Instagram', width: 1080, height: 1080 },
                      { name: 'Facebook Cover', width: 820, height: 312 }
                    ].map((preset) => (
                      <Button
                        key={preset.name}
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          if (maintainAspectRatio) {
                            const aspectRatio = originalImage.width / originalImage.height;
                            if (aspectRatio > 1) {
                              // Landscape
                              setDimensions({
                                width: preset.width,
                                height: Math.round(preset.width / aspectRatio)
                              });
                            } else {
                              // Portrait or square
                              setDimensions({
                                width: Math.round(preset.height * aspectRatio),
                                height: preset.height
                              });
                            }
                          } else {
                            setDimensions({ width: preset.width, height: preset.height });
                          }
                        }}
                        className="text-xs"
                      >
                        {preset.name}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Preview */}
              <div className="space-y-4">
                <h3 className="font-semibold">Preview</h3>
                <div className="flex justify-center">
                  <canvas
                    ref={canvasRef}
                    className="max-w-full max-h-64 border border-border rounded-lg"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 justify-center">
                <Button onClick={resizeImage} disabled={isProcessing}>
                  {isProcessing ? 'Processing...' : 'Resize Image'}
                </Button>
                <Button onClick={resetToOriginal} variant="outline">
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Reset to Original
                </Button>
                {resizedImage && (
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

export default ImageResizer;
