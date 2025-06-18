
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload, Download, Image as ImageIcon, Crop, Scissors } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface CropPreset {
  name: string;
  width: number;
  height: number;
  category: string;
}

const ImageCropper = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [croppedUrl, setCroppedUrl] = useState<string | null>(null);
  const [selectedPreset, setSelectedPreset] = useState<string>('');
  const [cropArea, setCropArea] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [originalDimensions, setOriginalDimensions] = useState<{ width: number; height: number } | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const { toast } = useToast();

  const cropPresets: CropPreset[] = [
    // Instagram
    { name: 'Instagram Square Post', width: 1080, height: 1080, category: 'Instagram' },
    { name: 'Instagram Portrait Post', width: 1080, height: 1350, category: 'Instagram' },
    { name: 'Instagram Story', width: 1080, height: 1920, category: 'Instagram' },
    { name: 'Instagram Reels', width: 1080, height: 1920, category: 'Instagram' },
    
    // Facebook
    { name: 'Facebook Post', width: 1200, height: 630, category: 'Facebook' },
    { name: 'Facebook Cover Photo', width: 1640, height: 859, category: 'Facebook' },
    { name: 'Facebook Story', width: 1080, height: 1920, category: 'Facebook' },
    { name: 'Facebook Event Cover', width: 1920, height: 1005, category: 'Facebook' },
    
    // Twitter/X
    { name: 'Twitter Post', width: 1200, height: 675, category: 'Twitter' },
    { name: 'Twitter Header', width: 1500, height: 500, category: 'Twitter' },
    
    // LinkedIn
    { name: 'LinkedIn Post', width: 1200, height: 627, category: 'LinkedIn' },
    { name: 'LinkedIn Cover', width: 1584, height: 396, category: 'LinkedIn' },
    
    // YouTube
    { name: 'YouTube Thumbnail', width: 1280, height: 720, category: 'YouTube' },
    { name: 'YouTube Channel Art', width: 2560, height: 1440, category: 'YouTube' },
    
    // Common Formats
    { name: 'Square (1:1)', width: 1000, height: 1000, category: 'Common' },
    { name: 'Landscape (16:9)', width: 1920, height: 1080, category: 'Common' },
    { name: 'Portrait (4:5)', width: 1080, height: 1350, category: 'Common' },
    { name: 'Widescreen (21:9)', width: 2560, height: 1080, category: 'Common' },
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

      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setCroppedUrl(null);
      setSelectedPreset('');

      // Get original dimensions
      const img = new Image();
      img.onload = () => {
        setOriginalDimensions({ width: img.width, height: img.height });
        // Set initial crop area to center
        const size = Math.min(img.width, img.height);
        setCropArea({
          x: (img.width - size) / 2,
          y: (img.height - size) / 2,
          width: size,
          height: size
        });
      };
      img.src = url;
    }
  }, [toast]);

  const handlePresetChange = useCallback((presetName: string) => {
    setSelectedPreset(presetName);
    const preset = cropPresets.find(p => p.name === presetName);
    if (preset && originalDimensions) {
      const aspectRatio = preset.width / preset.height;
      let newWidth, newHeight;
      
      if (originalDimensions.width / originalDimensions.height > aspectRatio) {
        newHeight = originalDimensions.height;
        newWidth = newHeight * aspectRatio;
      } else {
        newWidth = originalDimensions.width;
        newHeight = newWidth / aspectRatio;
      }
      
      setCropArea({
        x: (originalDimensions.width - newWidth) / 2,
        y: (originalDimensions.height - newHeight) / 2,
        width: newWidth,
        height: newHeight
      });
    }
  }, [originalDimensions]);

  const cropImage = useCallback(async () => {
    if (!selectedFile || !originalDimensions || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      const preset = cropPresets.find(p => p.name === selectedPreset);
      if (preset) {
        canvas.width = preset.width;
        canvas.height = preset.height;
      } else {
        canvas.width = cropArea.width;
        canvas.height = cropArea.height;
      }

      if (ctx) {
        ctx.drawImage(
          img,
          cropArea.x,
          cropArea.y,
          cropArea.width,
          cropArea.height,
          0,
          0,
          canvas.width,
          canvas.height
        );

        canvas.toBlob((blob) => {
          if (blob) {
            const croppedUrl = URL.createObjectURL(blob);
            setCroppedUrl(croppedUrl);
            
            toast({
              title: "Image cropped successfully!",
              description: `Cropped to ${canvas.width}×${canvas.height}px`,
            });
          }
        }, 'image/png', 1.0);
      }
    };

    img.src = URL.createObjectURL(selectedFile);
  }, [selectedFile, originalDimensions, cropArea, selectedPreset]);

  const downloadCropped = useCallback(() => {
    if (croppedUrl && selectedFile) {
      const link = document.createElement('a');
      link.href = croppedUrl;
      const name = selectedFile.name.replace(/\.[^/.]+$/, '');
      const ext = selectedFile.name.split('.').pop();
      const presetSuffix = selectedPreset ? `_${selectedPreset.replace(/\s+/g, '_')}` : '_cropped';
      link.download = `${name}${presetSuffix}.${ext}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }, [croppedUrl, selectedFile, selectedPreset]);

  const groupedPresets = cropPresets.reduce((acc, preset) => {
    if (!acc[preset.category]) {
      acc[preset.category] = [];
    }
    acc[preset.category].push(preset);
    return acc;
  }, {} as Record<string, CropPreset[]>);

  return (
    <div className="container mx-auto px-4 py-6 max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Image Cropper & Resizer
        </h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Crop and resize images for social media and various platforms
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
          </CardContent>
        </Card>

        {selectedFile && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Crop className="h-5 w-5" />
                Cropping Options
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="preset-select" className="text-sm font-medium">
                  Choose Preset Size
                </Label>
                <Select value={selectedPreset} onValueChange={handlePresetChange}>
                  <SelectTrigger className="w-full mt-2">
                    <SelectValue placeholder="Select preset or keep custom" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(groupedPresets).map(([category, presets]) => (
                      <div key={category}>
                        <div className="px-2 py-1 text-xs font-semibold text-muted-foreground">
                          {category}
                        </div>
                        {presets.map((preset) => (
                          <SelectItem key={preset.name} value={preset.name}>
                            {preset.name} ({preset.width}×{preset.height})
                          </SelectItem>
                        ))}
                      </div>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {originalDimensions && (
                <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-4">
                  <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
                    Original: {originalDimensions.width}×{originalDimensions.height}px
                  </p>
                  {selectedPreset && (
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      Output: {cropPresets.find(p => p.name === selectedPreset)?.width}×{cropPresets.find(p => p.name === selectedPreset)?.height}px
                    </p>
                  )}
                </div>
              )}

              <Button 
                onClick={cropImage} 
                disabled={!selectedFile}
                className="w-full"
              >
                <Scissors className="h-4 w-4 mr-2" />
                Crop Image
              </Button>
            </CardContent>
          </Card>
        )}

        {previewUrl && croppedUrl && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Before & After</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="text-center">
                    <h3 className="font-semibold text-muted-foreground">Original</h3>
                    {originalDimensions && (
                      <p className="text-sm text-muted-foreground">
                        {originalDimensions.width}×{originalDimensions.height}px
                      </p>
                    )}
                  </div>
                  <div className="border rounded-lg overflow-hidden bg-gray-50">
                    <img 
                      ref={imageRef}
                      src={previewUrl} 
                      alt="Original" 
                      className="w-full h-80 object-contain"
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="text-center">
                    <h3 className="font-semibold text-green-600">Cropped</h3>
                    {selectedPreset && (
                      <p className="text-sm text-muted-foreground">
                        {cropPresets.find(p => p.name === selectedPreset)?.width}×{cropPresets.find(p => p.name === selectedPreset)?.height}px
                      </p>
                    )}
                  </div>
                  <div className="border rounded-lg overflow-hidden bg-gray-50">
                    <img 
                      src={croppedUrl} 
                      alt="Cropped" 
                      className="w-full h-80 object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Button onClick={downloadCropped} className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download Cropped Image
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
};

export default ImageCropper;
