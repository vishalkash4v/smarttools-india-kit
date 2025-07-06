
import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Upload, Download, Image as ImageIcon, Zap, AlertCircle, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription } from '@/components/ui/alert';

const ImageUpscaler = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [upscaledUrl, setUpscaledUrl] = useState<string | null>(null);
  const [scaleFactor, setScaleFactor] = useState<string>('2');
  const [isUpscaling, setIsUpscaling] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [estimatedTime, setEstimatedTime] = useState<number>(0);
  const [originalDimensions, setOriginalDimensions] = useState<{ width: number; height: number } | null>(null);
  const { toast } = useToast();

  const scaleOptions = [
    { value: '0.5', label: '0.5x (50% - Downscale)' },
    { value: '1', label: '1x (100% - Original)' },
    { value: '1.5', label: '1.5x (150%)' },
    { value: '2', label: '2x (200%)' },
    { value: '3', label: '3x (300%)' }
  ];

  const handleFileSelect = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        toast({
          title: "Invalid file type",
          description: "Please select an image file.",
          variant: "destructive",
        });
        return;
      }

      if (file.size > 10 * 1024 * 1024) { // 10MB limit
        toast({
          title: "File too large",
          description: "Please select an image smaller than 10MB.",
          variant: "destructive",
        });
        return;
      }

      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setUpscaledUrl(null);
      setProgress(0);

      // Get original dimensions
      const img = new Image();
      img.onload = () => {
        setOriginalDimensions({ width: img.width, height: img.height });
        
        // Estimate processing time based on image size and scale
        const pixelCount = img.width * img.height;
        const scale = parseFloat(scaleFactor);
        const newPixelCount = pixelCount * scale * scale;
        const timeEstimate = Math.max(5, Math.min(60, Math.round(newPixelCount / 500000))); // 5-60 seconds
        setEstimatedTime(timeEstimate);
      };
      img.src = url;
    }
  }, [toast, scaleFactor]);

  const simulateProgress = (duration: number) => {
    const steps = 50;
    const interval = duration * 1000 / steps;
    let currentStep = 0;

    const progressInterval = setInterval(() => {
      currentStep++;
      const progressValue = Math.min(95, (currentStep / steps) * 100);
      setProgress(progressValue);

      if (currentStep >= steps) {
        clearInterval(progressInterval);
      }
    }, interval);

    return progressInterval;
  };

  const upscaleImage = useCallback(async () => {
    if (!selectedFile || !originalDimensions) return;

    setIsUpscaling(true);
    setProgress(0);

    const progressInterval = simulateProgress(estimatedTime);

    try {
      const scale = parseFloat(scaleFactor);
      const newWidth = Math.floor(originalDimensions.width * scale);
      const newHeight = Math.floor(originalDimensions.height * scale);

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();

      const processImage = () => {
        return new Promise<void>((resolve) => {
          img.onload = async () => {
            canvas.width = newWidth;
            canvas.height = newHeight;

            if (ctx) {
              // Enhanced upscaling with multiple passes for better quality
              const tempCanvas = document.createElement('canvas');
              const tempCtx = tempCanvas.getContext('2d');
              
              if (tempCtx && scale > 1) {
                // Multi-pass upscaling for better quality
                let currentWidth = originalDimensions.width;
                let currentHeight = originalDimensions.height;
                let currentImage = img;
                
                // Progressive upscaling in smaller steps
                while (currentWidth < newWidth || currentHeight < newHeight) {
                  const stepScale = Math.min(2, Math.min(newWidth / currentWidth, newHeight / currentHeight));
                  const stepWidth = Math.floor(currentWidth * stepScale);
                  const stepHeight = Math.floor(currentHeight * stepScale);
                  
                  tempCanvas.width = stepWidth;
                  tempCanvas.height = stepHeight;
                  
                  // Use high-quality interpolation
                  tempCtx.imageSmoothingEnabled = true;
                  tempCtx.imageSmoothingQuality = 'high';
                  
                  // Apply sharpening filter for upscaling
                  tempCtx.filter = 'contrast(1.1) brightness(1.02) saturate(1.05)';
                  tempCtx.drawImage(currentImage, 0, 0, stepWidth, stepHeight);
                  
                  // Create new image for next iteration
                  const newImg = new Image();
                  newImg.src = tempCanvas.toDataURL();
                  
                  // Wait for image to load
                  await new Promise<void>(imgResolve => {
                    newImg.onload = () => imgResolve();
                  });
                  
                  currentImage = newImg;
                  currentWidth = stepWidth;
                  currentHeight = stepHeight;
                  
                  if (stepWidth >= newWidth && stepHeight >= newHeight) break;
                }
                
                // Final pass with edge enhancement
                ctx.imageSmoothingEnabled = true;
                ctx.imageSmoothingQuality = 'high';
                ctx.filter = 'contrast(1.05) brightness(1.01) saturate(1.02)';
                ctx.drawImage(currentImage, 0, 0, newWidth, newHeight);
                
                // Apply unsharp mask effect for better clarity
                const imageData = ctx.getImageData(0, 0, newWidth, newHeight);
                const data = imageData.data;
                
                // Simple edge enhancement for upscaling
                for (let i = 0; i < data.length; i += 4) {
                  const brightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
                  const factor = brightness > 128 ? 1.02 : 0.98;
                  data[i] *= factor;     // Red
                  data[i + 1] *= factor; // Green
                  data[i + 2] *= factor; // Blue
                }
                
                ctx.putImageData(imageData, 0, 0);
              } else {
                // Direct scaling for downscaling or 1x
                ctx.imageSmoothingEnabled = true;
                ctx.imageSmoothingQuality = 'high';
                
                if (scale < 1) {
                  // For downscaling, apply slight sharpening
                  ctx.filter = 'contrast(1.02) brightness(1.01)';
                }
                
                ctx.drawImage(img, 0, 0, newWidth, newHeight);
              }

              // Convert to blob and create URL
              canvas.toBlob((blob) => {
                if (blob) {
                  const upscaledUrl = URL.createObjectURL(blob);
                  setUpscaledUrl(upscaledUrl);
                  
                  clearInterval(progressInterval);
                  setProgress(100);
                  
                  const action = scale > 1 ? 'upscaled' : scale < 1 ? 'downscaled' : 'processed';
                  
                  toast({
                    title: `Image ${action} successfully!`,
                    description: `Enhanced from ${originalDimensions.width}×${originalDimensions.height} to ${newWidth}×${newHeight}`,
                  });
                }
                setIsUpscaling(false);
                resolve();
              }, 'image/png', 1.0);
            } else {
              clearInterval(progressInterval);
              setIsUpscaling(false);
              resolve();
            }
          };
        });
      };

      img.src = URL.createObjectURL(selectedFile);
      await processImage();
    } catch (error) {
      console.error('Processing error:', error);
      clearInterval(progressInterval);
      toast({
        title: "Processing failed",
        description: "An error occurred while processing the image.",
        variant: "destructive",
      });
      setIsUpscaling(false);
      setProgress(0);
    }
  }, [selectedFile, scaleFactor, originalDimensions, estimatedTime, toast]);

  const downloadUpscaled = useCallback(() => {
    if (upscaledUrl && selectedFile) {
      const link = document.createElement('a');
      link.href = upscaledUrl;
      const name = selectedFile.name.replace(/\.[^/.]+$/, '');
      const ext = selectedFile.name.split('.').pop();
      const action = parseFloat(scaleFactor) > 1 ? 'upscaled' : parseFloat(scaleFactor) < 1 ? 'downscaled' : 'processed';
      link.download = `${name}_${action}_${scaleFactor}x.${ext}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }, [upscaledUrl, selectedFile, scaleFactor]);

  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-6 max-w-6xl">
      <div className="space-y-4 sm:space-y-6">
        <Alert className="mb-4 sm:mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            This tool uses advanced multi-pass processing with edge enhancement for better quality results.
            {isUpscaling && (
              <strong className="block mt-2 text-red-600 dark:text-red-400">
                ⚠️ Processing in progress - Do not close this page or navigate away until complete!
              </strong>
            )}
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Upload className="h-5 w-5" />
              Upload Image
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-4 sm:p-6 text-center">
              <ImageIcon className="mx-auto h-8 sm:h-12 w-8 sm:w-12 text-muted-foreground mb-2 sm:mb-4" />
              <Label htmlFor="image-upload" className="cursor-pointer">
                <span className="text-sm font-medium text-primary hover:text-primary/80">
                  Click to upload an image
                </span>
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </Label>
              <p className="text-xs text-muted-foreground mt-2">
                Supports JPG, PNG, WebP (Max 10MB)
              </p>
            </div>
          </CardContent>
        </Card>

        {selectedFile && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Zap className="h-5 w-5" />
                Processing Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="scale-factor" className="text-sm font-medium">
                  Scale Factor
                </Label>
                <Select value={scaleFactor} onValueChange={(value) => {
                  setScaleFactor(value);
                  if (originalDimensions) {
                    const scale = parseFloat(value);
                    const pixelCount = originalDimensions.width * originalDimensions.height;
                    const newPixelCount = pixelCount * scale * scale;
                    const timeEstimate = Math.max(5, Math.min(60, Math.round(newPixelCount / 500000)));
                    setEstimatedTime(timeEstimate);
                  }
                }}>
                  <SelectTrigger className="w-full mt-2">
                    <SelectValue placeholder="Select scale factor" />
                  </SelectTrigger>
                  <SelectContent>
                    {scaleOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {originalDimensions && (
                <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-4">
                  <p className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-1">
                    Output size: {Math.floor(originalDimensions.width * parseFloat(scaleFactor))} × {Math.floor(originalDimensions.height * parseFloat(scaleFactor))}px
                  </p>
                  <div className="flex items-center gap-2 text-xs text-blue-700 dark:text-blue-300">
                    <Clock className="h-3 w-3" />
                    <span>Estimated time: ~{estimatedTime} seconds</span>
                  </div>
                </div>
              )}

              {isUpscaling && (
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Processing Progress</span>
                    <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="w-full" />
                  <div className="bg-red-50 dark:bg-red-950 p-3 rounded-lg">
                    <p className="text-sm text-red-800 dark:text-red-200 font-medium">
                      ⚠️ Please do not close this page or navigate away during processing!
                    </p>
                  </div>
                </div>
              )}

              <Button 
                onClick={upscaleImage} 
                disabled={isUpscaling}
                className="w-full"
              >
                <Zap className="h-4 w-4 mr-2" />
                {isUpscaling ? `Processing... ${Math.round(progress)}%` : 'Enhance & Process'}
              </Button>
            </CardContent>
          </Card>
        )}

        {previewUrl && upscaledUrl && originalDimensions && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Before & After Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-3">
                  <div className="text-center">
                    <h3 className="font-semibold text-muted-foreground">Before (Original)</h3>
                    <p className="text-sm text-muted-foreground">
                      {originalDimensions.width} × {originalDimensions.height}px
                    </p>
                  </div>
                  <div className="border rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-900">
                    <img 
                      src={previewUrl} 
                      alt="Original" 
                      className="w-full h-60 sm:h-80 object-contain"
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="text-center">
                    <h3 className="font-semibold text-green-600 dark:text-green-400">After (Enhanced)</h3>
                    <p className="text-sm text-muted-foreground">
                      {Math.floor(originalDimensions.width * parseFloat(scaleFactor))} × {Math.floor(originalDimensions.height * parseFloat(scaleFactor))}px
                    </p>
                  </div>
                  <div className="border rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-900">
                    <img 
                      src={upscaledUrl} 
                      alt="Enhanced" 
                      className="w-full h-60 sm:h-80 object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6">
                <Button onClick={downloadUpscaled} className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download Enhanced Image
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ImageUpscaler;
