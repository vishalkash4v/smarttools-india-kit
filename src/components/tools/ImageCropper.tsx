import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Upload, Download, Image as ImageIcon, Crop, Scissors, Move, ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface CropPreset {
  name: string;
  width: number;
  height: number;
  category: string;
  description: string;
  color: string;
}

const ImageCropper = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [croppedUrl, setCroppedUrl] = useState<string | null>(null);
  const [selectedPreset, setSelectedPreset] = useState<string>('');
  const [cropArea, setCropArea] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [originalDimensions, setOriginalDimensions] = useState<{ width: number; height: number } | null>(null);
  const [previewScale, setPreviewScale] = useState(1);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const previewContainerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const cropPresets: CropPreset[] = [
    // Instagram
    { name: 'Instagram Square Post', width: 1080, height: 1080, category: 'Instagram', description: 'Perfect square for feed posts', color: 'bg-gradient-to-br from-purple-500 to-pink-500' },
    { name: 'Instagram Portrait Post', width: 1080, height: 1350, category: 'Instagram', description: 'Vertical posts for better engagement', color: 'bg-gradient-to-br from-purple-500 to-pink-500' },
    { name: 'Instagram Story', width: 1080, height: 1920, category: 'Instagram', description: 'Full-screen mobile story', color: 'bg-gradient-to-br from-purple-500 to-pink-500' },
    { name: 'Instagram Reels', width: 1080, height: 1920, category: 'Instagram', description: 'Vertical video content', color: 'bg-gradient-to-br from-purple-500 to-pink-500' },
    
    // Facebook
    { name: 'Facebook Post', width: 1200, height: 630, category: 'Facebook', description: 'Standard timeline post', color: 'bg-gradient-to-br from-blue-600 to-blue-700' },
    { name: 'Facebook Cover Photo', width: 1640, height: 859, category: 'Facebook', description: 'Profile cover image', color: 'bg-gradient-to-br from-blue-600 to-blue-700' },
    { name: 'Facebook Story', width: 1080, height: 1920, category: 'Facebook', description: 'Mobile story format', color: 'bg-gradient-to-br from-blue-600 to-blue-700' },
    { name: 'Facebook Event Cover', width: 1920, height: 1005, category: 'Facebook', description: 'Event page banner', color: 'bg-gradient-to-br from-blue-600 to-blue-700' },
    
    // Twitter/X
    { name: 'Twitter Post', width: 1200, height: 675, category: 'Twitter', description: 'Timeline image post', color: 'bg-gradient-to-br from-gray-800 to-black' },
    { name: 'Twitter Header', width: 1500, height: 500, category: 'Twitter', description: 'Profile banner', color: 'bg-gradient-to-br from-gray-800 to-black' },
    
    // LinkedIn
    { name: 'LinkedIn Post', width: 1200, height: 627, category: 'LinkedIn', description: 'Professional post image', color: 'bg-gradient-to-br from-blue-700 to-blue-800' },
    { name: 'LinkedIn Cover', width: 1584, height: 396, category: 'LinkedIn', description: 'Profile background', color: 'bg-gradient-to-br from-blue-700 to-blue-800' },
    
    // YouTube
    { name: 'YouTube Thumbnail', width: 1280, height: 720, category: 'YouTube', description: 'Video preview image', color: 'bg-gradient-to-br from-red-600 to-red-700' },
    { name: 'YouTube Channel Art', width: 2560, height: 1440, category: 'YouTube', description: 'Channel banner', color: 'bg-gradient-to-br from-red-600 to-red-700' },
    
    // Common Formats
    { name: 'Square (1:1)', width: 1000, height: 1000, category: 'Common', description: 'Perfect square ratio', color: 'bg-gradient-to-br from-gray-600 to-gray-700' },
    { name: 'Landscape (16:9)', width: 1920, height: 1080, category: 'Common', description: 'Widescreen format', color: 'bg-gradient-to-br from-gray-600 to-gray-700' },
    { name: 'Portrait (4:5)', width: 1080, height: 1350, category: 'Common', description: 'Mobile-friendly vertical', color: 'bg-gradient-to-br from-gray-600 to-gray-700' },
    { name: 'Widescreen (21:9)', width: 2560, height: 1080, category: 'Common', description: 'Ultra-wide format', color: 'bg-gradient-to-br from-gray-600 to-gray-700' },
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

  const handlePresetSelect = useCallback((presetName: string) => {
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

  const adjustCropArea = useCallback((direction: 'up' | 'down' | 'left' | 'right', amount: number = 10) => {
    if (!originalDimensions) return;
    
    setCropArea(prev => {
      const newArea = { ...prev };
      
      switch (direction) {
        case 'up':
          newArea.y = Math.max(0, prev.y - amount);
          break;
        case 'down':
          newArea.y = Math.min(originalDimensions.height - prev.height, prev.y + amount);
          break;
        case 'left':
          newArea.x = Math.max(0, prev.x - amount);
          break;
        case 'right':
          newArea.x = Math.min(originalDimensions.width - prev.width, prev.x + amount);
          break;
      }
      
      return newArea;
    });
  }, [originalDimensions]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!previewContainerRef.current || !originalDimensions) return;
    
    const rect = previewContainerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / previewScale;
    const y = (e.clientY - rect.top) / previewScale;
    
    setIsDragging(true);
    setDragStart({ x, y });
  }, [previewScale, originalDimensions]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !previewContainerRef.current || !originalDimensions) return;
    
    const rect = previewContainerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / previewScale;
    const y = (e.clientY - rect.top) / previewScale;
    
    const deltaX = x - dragStart.x;
    const deltaY = y - dragStart.y;
    
    setCropArea(prev => ({
      ...prev,
      x: Math.max(0, Math.min(originalDimensions.width - prev.width, prev.x + deltaX)),
      y: Math.max(0, Math.min(originalDimensions.height - prev.height, prev.y + deltaY))
    }));
    
    setDragStart({ x, y });
  }, [isDragging, dragStart, previewScale, originalDimensions]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

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

  useEffect(() => {
    if (previewContainerRef.current && originalDimensions) {
      const containerWidth = previewContainerRef.current.offsetWidth;
      const containerHeight = 300;
      const scaleX = containerWidth / originalDimensions.width;
      const scaleY = containerHeight / originalDimensions.height;
      setPreviewScale(Math.min(scaleX, scaleY, 1));
    }
  }, [originalDimensions]);

  const groupedPresets = cropPresets.reduce((acc, preset) => {
    if (!acc[preset.category]) {
      acc[preset.category] = [];
    }
    acc[preset.category].push(preset);
    return acc;
  }, {} as Record<string, CropPreset[]>);

  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-6 max-w-6xl">
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 sm:mb-4">
          Image Cropper & Resizer
        </h1>
        <p className="text-muted-foreground text-xs sm:text-sm md:text-base px-4">
          Crop and resize images for social media and various platforms
        </p>
      </div>

      <div className="grid gap-4 sm:gap-6 md:gap-8">
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
              <Upload className="h-4 w-4 sm:h-5 sm:w-5" />
              Upload Image
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-4 sm:p-6 text-center">
              <ImageIcon className="mx-auto h-8 w-8 sm:h-12 sm:w-12 text-muted-foreground mb-2 sm:mb-4" />
              <Label htmlFor="image-upload" className="cursor-pointer">
                <span className="text-xs sm:text-sm font-medium text-primary hover:text-primary/80">
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
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                <Crop className="h-4 w-4 sm:h-5 sm:w-5" />
                Choose Social Media Format
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              {Object.entries(groupedPresets).map(([category, presets]) => (
                <div key={category} className="space-y-3 sm:space-y-4">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground">{category}</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4">
                    {presets.map((preset) => {
                      const aspectRatio = preset.width / preset.height;
                      const isVertical = aspectRatio < 1;
                      const isSquare = Math.abs(aspectRatio - 1) < 0.1;
                      
                      return (
                        <div
                          key={preset.name}
                          className={`relative cursor-pointer transition-all duration-200 ${
                            selectedPreset === preset.name
                              ? 'ring-2 ring-primary ring-offset-2'
                              : 'hover:scale-105'
                          }`}
                          onClick={() => handlePresetSelect(preset.name)}
                        >
                          <div className={`${preset.color} rounded-lg p-3 sm:p-4 text-white min-h-[120px] sm:min-h-[140px]`}>
                            <div className="flex flex-col items-center space-y-2 h-full">
                              <div 
                                className="bg-white/20 rounded border border-white/30 flex-shrink-0"
                                style={{
                                  width: isVertical ? '30px' : isSquare ? '40px' : '50px',
                                  height: isVertical ? '50px' : isSquare ? '40px' : '30px',
                                }}
                              />
                              <div className="text-center flex-1 flex flex-col justify-center">
                                <h4 className="font-medium text-xs sm:text-sm leading-tight">{preset.name}</h4>
                                <p className="text-xs opacity-90 mt-1">{preset.width}×{preset.height}</p>
                                <p className="text-xs opacity-75 mt-1 line-clamp-2">{preset.description}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {previewUrl && originalDimensions && (
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                <Move className="h-4 w-4 sm:h-5 sm:w-5" />
                Adjust Crop Area
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              <div className="flex flex-col items-center space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => adjustCropArea('up')}
                    className="p-2"
                  >
                    <ArrowUp className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => adjustCropArea('left')}
                    className="p-2"
                  >
                    <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                  <div 
                    ref={previewContainerRef}
                    className="relative border-2 border-dashed border-gray-300 rounded-lg overflow-hidden cursor-move"
                    style={{
                      width: `${Math.min(originalDimensions.width * previewScale, 300)}px`,
                      height: `${Math.min(originalDimensions.height * previewScale, 200)}px`,
                      maxWidth: '100%'
                    }}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                  >
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="absolute inset-0 w-full h-full object-cover"
                      draggable={false}
                    />
                    <div
                      className="absolute border-2 border-primary bg-primary/10"
                      style={{
                        left: `${cropArea.x * previewScale}px`,
                        top: `${cropArea.y * previewScale}px`,
                        width: `${cropArea.width * previewScale}px`,
                        height: `${cropArea.height * previewScale}px`
                      }}
                    />
                    <div className="absolute inset-0 bg-black/30" />
                    <div
                      className="absolute bg-transparent"
                      style={{
                        left: `${cropArea.x * previewScale}px`,
                        top: `${cropArea.y * previewScale}px`,
                        width: `${cropArea.width * previewScale}px`,
                        height: `${cropArea.height * previewScale}px`,
                        boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.5)'
                      }}
                    />
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => adjustCropArea('right')}
                    className="p-2"
                  >
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => adjustCropArea('down')}
                    className="p-2"
                  >
                    <ArrowDown className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-3 sm:p-4">
                <p className="text-xs sm:text-sm font-medium text-blue-800 dark:text-blue-200">
                  Original: {originalDimensions.width}×{originalDimensions.height}px
                </p>
                {selectedPreset && (
                  <p className="text-xs sm:text-sm text-blue-700 dark:text-blue-300">
                    Output: {cropPresets.find(p => p.name === selectedPreset)?.width}×{cropPresets.find(p => p.name === selectedPreset)?.height}px
                  </p>
                )}
                <p className="text-xs text-blue-600 dark:text-blue-400 mt-2">
                  Use arrow buttons or drag the crop area to adjust position
                </p>
              </div>

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
            <CardHeader className="pb-4">
              <CardTitle className="text-base sm:text-lg">Before & After</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-3">
                  <div className="text-center">
                    <h3 className="font-semibold text-muted-foreground text-sm sm:text-base">Original</h3>
                    {originalDimensions && (
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {originalDimensions.width}×{originalDimensions.height}px
                      </p>
                    )}
                  </div>
                  <div className="border rounded-lg overflow-hidden bg-gray-50">
                    <img 
                      src={previewUrl} 
                      alt="Original" 
                      className="w-full h-48 sm:h-64 md:h-80 object-contain"
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="text-center">
                    <h3 className="font-semibold text-green-600 text-sm sm:text-base">Cropped</h3>
                    {selectedPreset && (
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {cropPresets.find(p => p.name === selectedPreset)?.width}×{cropPresets.find(p => p.name === selectedPreset)?.height}px
                      </p>
                    )}
                  </div>
                  <div className="border rounded-lg overflow-hidden bg-gray-50">
                    <img 
                      src={croppedUrl} 
                      alt="Cropped" 
                      className="w-full h-48 sm:h-64 md:h-80 object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6">
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
