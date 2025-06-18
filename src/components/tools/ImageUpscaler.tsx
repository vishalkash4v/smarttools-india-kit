
import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload, Download, Image as ImageIcon, Zap, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription } from '@/components/ui/alert';

const ImageUpscaler = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [upscaledUrl, setUpscaledUrl] = useState<string | null>(null);
  const [scaleFactor, setScaleFactor] = useState<string>('2');
  const [isUpscaling, setIsUpscaling] = useState<boolean>(false);
  const [originalDimensions, setOriginalDimensions] = useState<{ width: number; height: number } | null>(null);
  const { toast } = useToast();

  const scaleOptions = [
    { value: '1.5', label: '1.5x (150%)' },
    { value: '2', label: '2x (200%)' },
    { value: '3', label: '3x (300%)' },
    { value: '4', label: '4x (400%)' }
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

      // Get original dimensions
      const img = new Image();
      img.onload = () => {
        setOriginalDimensions({ width: img.width, height: img.height });
      };
      img.src = url;
    }
  }, [toast]);

  const upscaleImage = useCallback(async () => {
    if (!selectedFile || !originalDimensions) return;

    setIsUpscaling(true);

    try {
      const scale = parseFloat(scaleFactor);
      const newWidth = Math.floor(originalDimensions.width * scale);
      const newHeight = Math.floor(originalDimensions.height * scale);

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();

      img.onload = () => {
        canvas.width = newWidth;
        canvas.height = newHeight;

        if (ctx) {
          // Use better image rendering
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';
          
          // Apply bicubic-like upscaling by drawing multiple times
          const tempCanvas = document.createElement('canvas');
          const tempCtx = tempCanvas.getContext('2d');
          
          if (tempCtx) {
            // First pass: scale to intermediate size
            const intermediateScale = Math.sqrt(scale);
            const intermediateWidth = Math.floor(originalDimensions.width * intermediateScale);
            const intermediateHeight = Math.floor(originalDimensions.height * intermediateScale);
            
            tempCanvas.width = intermediateWidth;
            tempCanvas.height = intermediateHeight;
            tempCtx.imageSmoothingEnabled = true;
            tempCtx.imageSmoothingQuality = 'high';
            tempCtx.drawImage(img, 0, 0, intermediateWidth, intermediateHeight);
            
            // Second pass: scale to final size
            ctx.drawImage(tempCanvas, 0, 0, newWidth, newHeight);
          } else {
            // Fallback to direct scaling
            ctx.drawImage(img, 0, 0, newWidth, newHeight);
          }

          // Convert to blob and create URL
          canvas.toBlob((blob) => {
            if (blob) {
              const upscaledUrl = URL.createObjectURL(blob);
              setUpscaledUrl(upscaledUrl);
              
              toast({
                title: "Image upscaled successfully!",
                description: `Upscaled from ${originalDimensions.width}×${originalDimensions.height} to ${newWidth}×${newHeight}`,
              });
            }
            setIsUpscaling(false);
          }, 'image/png', 1.0);
        }
      };

      img.src = URL.createObjectURL(selectedFile);
    } catch (error) {
      console.error('Upscaling error:', error);
      toast({
        title: "Upscaling failed",
        description: "An error occurred while upscaling the image.",
        variant: "destructive",
      });
      setIsUpscaling(false);
    }
  }, [selectedFile, scaleFactor, originalDimensions, toast]);

  const downloadUpscaled = useCallback(() => {
    if (upscaledUrl && selectedFile) {
      const link = document.createElement('a');
      link.href = upscaledUrl;
      const name = selectedFile.name.replace(/\.[^/.]+$/, '');
      const ext = selectedFile.name.split('.').pop();
      link.download = `${name}_upscaled_${scaleFactor}x.${ext}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }, [upscaledUrl, selectedFile, scaleFactor]);

  return (
    <div className="container mx-auto px-4 py-6 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Image Upscaler & Quality Enhancer
        </h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Enhance and upscale your images using advanced interpolation techniques
        </p>
      </div>

      <Alert className="mb-6">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          This tool uses client-side processing with advanced interpolation. For best results with photos, 
          consider using AI-powered upscaling services for professional needs.
        </AlertDescription>
      </Alert>

      <div className="grid gap-6 md:gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Upload className="h-5 w-5" />
              Upload Image
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
              <ImageIcon className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
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

            {previewUrl && originalDimensions && (
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="text-center">
                    <img 
                      src={previewUrl} 
                      alt="Original" 
                      className="mx-auto max-w-full max-h-48 object-contain border rounded"
                    />
                    <p className="text-sm font-medium mt-2">Original</p>
                    <p className="text-xs text-muted-foreground">
                      {originalDimensions.width} × {originalDimensions.height}px
                    </p>
                  </div>
                  
                  {upscaledUrl && (
                    <div className="text-center">
                      <img 
                        src={upscaledUrl} 
                        alt="Upscaled" 
                        className="mx-auto max-w-full max-h-48 object-contain border rounded"
                      />
                      <p className="text-sm font-medium mt-2">Upscaled</p>
                      <p className="text-xs text-muted-foreground">
                        {Math.floor(originalDimensions.width * parseFloat(scaleFactor))} × {Math.floor(originalDimensions.height * parseFloat(scaleFactor))}px
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {selectedFile && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Zap className="h-5 w-5" />
                Upscaling Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="scale-factor" className="text-sm font-medium">
                  Scale Factor
                </Label>
                <Select value={scaleFactor} onValueChange={setScaleFactor}>
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
                  <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
                    Output size will be: {Math.floor(originalDimensions.width * parseFloat(scaleFactor))} × {Math.floor(originalDimensions.height * parseFloat(scaleFactor))}px
                  </p>
                </div>
              )}

              <Button 
                onClick={upscaleImage} 
                disabled={isUpscaling}
                className="w-full"
              >
                <Zap className="h-4 w-4 mr-2" />
                {isUpscaling ? 'Upscaling...' : 'Upscale Image'}
              </Button>
            </CardContent>
          </Card>
        )}

        {upscaledUrl && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Download className="h-5 w-5" />
                Enhanced Result
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <img 
                  src={upscaledUrl} 
                  alt="Upscaled result" 
                  className="mx-auto max-w-full border rounded shadow-lg"
                />
              </div>

              <Button onClick={downloadUpscaled} className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Download Enhanced Image
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ImageUpscaler;
