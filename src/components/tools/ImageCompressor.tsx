
import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Upload, Download, Image as ImageIcon, Settings } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ImageCompressor = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [originalPreview, setOriginalPreview] = useState<string | null>(null);
  const [compressedFile, setCompressedFile] = useState<string | null>(null);
  const [originalSize, setOriginalSize] = useState<number>(0);
  const [compressedSize, setCompressedSize] = useState<number>(0);
  const [quality, setQuality] = useState<number>(80);
  const [isCompressing, setIsCompressing] = useState<boolean>(false);
  const [compressionProgress, setCompressionProgress] = useState<number>(0);
  const { toast } = useToast();

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
      setSelectedFile(file);
      setOriginalSize(file.size);
      const previewUrl = URL.createObjectURL(file);
      setOriginalPreview(previewUrl);
      setCompressedFile(null);
      setCompressedSize(0);
    }
  }, [toast]);

  const compressImage = useCallback(async () => {
    if (!selectedFile) return;

    setIsCompressing(true);
    setCompressionProgress(0);

    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();

      img.onload = () => {
        setCompressionProgress(25);
        
        const maxWidth = 1920;
        const maxHeight = 1080;
        let { width, height } = img;

        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width *= ratio;
          height *= ratio;
        }

        canvas.width = width;
        canvas.height = height;

        setCompressionProgress(50);

        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          setCompressionProgress(75);

          canvas.toBlob(
            (blob) => {
              if (blob) {
                const compressedUrl = URL.createObjectURL(blob);
                setCompressedFile(compressedUrl);
                setCompressedSize(blob.size);
                setCompressionProgress(100);
                
                toast({
                  title: "Image compressed successfully!",
                  description: `Size reduced from ${(originalSize / 1024 / 1024).toFixed(2)}MB to ${(blob.size / 1024 / 1024).toFixed(2)}MB`,
                });
              }
              setIsCompressing(false);
            },
            'image/jpeg',
            quality / 100
          );
        }
      };

      img.src = URL.createObjectURL(selectedFile);
    } catch (error) {
      console.error('Compression error:', error);
      toast({
        title: "Compression failed",
        description: "An error occurred while compressing the image.",
        variant: "destructive",
      });
      setIsCompressing(false);
    }
  }, [selectedFile, quality, originalSize, toast]);

  const downloadCompressed = useCallback(() => {
    if (compressedFile && selectedFile) {
      const link = document.createElement('a');
      link.href = compressedFile;
      link.download = `compressed_${selectedFile.name}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }, [compressedFile, selectedFile]);

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Image Compressor
        </h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Compress images to reduce file size while maintaining quality
        </p>
      </div>

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
                Supports JPG, PNG, WebP, and other image formats
              </p>
            </div>

            {selectedFile && (
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="text-sm font-medium">Selected: {selectedFile.name}</p>
                <p className="text-xs text-muted-foreground">
                  Original size: {formatFileSize(originalSize)}
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {selectedFile && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Settings className="h-5 w-5" />
                Compression Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="quality" className="text-sm font-medium">
                  Quality: {quality}%
                </Label>
                <input
                  id="quality"
                  type="range"
                  min="10"
                  max="100"
                  value={quality}
                  onChange={(e) => setQuality(Number(e.target.value))}
                  className="w-full mt-2"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>Lower quality (smaller size)</span>
                  <span>Higher quality (larger size)</span>
                </div>
              </div>

              <Button 
                onClick={compressImage} 
                disabled={isCompressing}
                className="w-full"
              >
                {isCompressing ? 'Compressing...' : 'Compress Image'}
              </Button>

              {isCompressing && (
                <div className="space-y-2">
                  <Progress value={compressionProgress} className="w-full" />
                  <p className="text-xs text-center text-muted-foreground">
                    {compressionProgress}% complete
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {originalPreview && compressedFile && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Before & After Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="text-center">
                    <h3 className="font-semibold text-destructive">Before (Original)</h3>
                    <p className="text-sm text-muted-foreground">
                      Size: {formatFileSize(originalSize)}
                    </p>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <img 
                      src={originalPreview} 
                      alt="Original" 
                      className="w-full h-64 object-contain bg-gray-50"
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="text-center">
                    <h3 className="font-semibold text-green-600">After (Compressed)</h3>
                    <p className="text-sm text-muted-foreground">
                      Size: {formatFileSize(compressedSize)}
                    </p>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <img 
                      src={compressedFile} 
                      alt="Compressed" 
                      className="w-full h-64 object-contain bg-gray-50"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="bg-green-50 dark:bg-green-950 rounded-lg p-4">
                  <p className="text-sm font-medium text-green-800 dark:text-green-200">
                    Size reduction: {((1 - compressedSize / originalSize) * 100).toFixed(1)}%
                  </p>
                </div>

                <Button onClick={downloadCompressed} className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download Compressed Image
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ImageCompressor;
