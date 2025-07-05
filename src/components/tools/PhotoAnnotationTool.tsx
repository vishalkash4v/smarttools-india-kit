
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Upload, Download, Plus, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

interface Annotation {
  id: string;
  type: 'text' | 'image';
  content: string;
  x: number;
  y: number;
  width: number;
  height: number;
  fontSize?: number;
  color?: string;
  removeBackground?: boolean;
}

const PhotoAnnotationTool = () => {
  const [baseImage, setBaseImage] = useState<HTMLImageElement | null>(null);
  const [annotations, setAnnotations] = useState<Annotation[]>([]);
  const [currentAnnotation, setCurrentAnnotation] = useState<Partial<Annotation>>({
    type: 'text',
    content: '',
    x: 50,
    y: 50,
    width: 200,
    height: 50,
    fontSize: 20,
    color: '#000000'
  });
  const [downloadFormat, setDownloadFormat] = useState('png');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const overlayInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        toast.error('Please select a valid image file');
        return;
      }

      const img = new Image();
      img.onload = () => {
        setBaseImage(img);
        toast.success('Image uploaded successfully!');
      };
      img.src = URL.createObjectURL(file);
    }
  }, []);

  const handleOverlayUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        toast.error('Please select a valid image file');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setCurrentAnnotation(prev => ({
          ...prev,
          type: 'image',
          content: e.target?.result as string
        }));
        toast.success('Overlay image loaded!');
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const removeImageBackground = async (imageData: string): Promise<string> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(imageData);
          return;
        }

        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const data = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const pixels = data.data;

        // Simple white background removal
        for (let i = 0; i < pixels.length; i += 4) {
          const r = pixels[i];
          const g = pixels[i + 1];
          const b = pixels[i + 2];
          
          // If pixel is close to white, make it transparent
          if (r > 240 && g > 240 && b > 240) {
            pixels[i + 3] = 0; // Make transparent
          }
        }

        ctx.putImageData(data, 0, 0);
        resolve(canvas.toDataURL());
      };
      img.src = imageData;
    });
  };

  const addAnnotation = async () => {
    if (!currentAnnotation.content) {
      toast.error('Please enter content for the annotation');
      return;
    }

    let content = currentAnnotation.content;
    
    if (currentAnnotation.type === 'image' && currentAnnotation.removeBackground) {
      content = await removeImageBackground(content);
    }

    const newAnnotation: Annotation = {
      id: Date.now().toString(),
      type: currentAnnotation.type || 'text',
      content,
      x: currentAnnotation.x || 50,
      y: currentAnnotation.y || 50,
      width: currentAnnotation.width || 200,
      height: currentAnnotation.height || 50,
      fontSize: currentAnnotation.fontSize || 20,
      color: currentAnnotation.color || '#000000',
      removeBackground: currentAnnotation.removeBackground
    };

    setAnnotations(prev => [...prev, newAnnotation]);
    setCurrentAnnotation({
      type: 'text',
      content: '',
      x: 50,
      y: 50,
      width: 200,
      height: 50,
      fontSize: 20,
      color: '#000000'
    });
    toast.success('Annotation added successfully!');
  };

  const removeAnnotation = (id: string) => {
    setAnnotations(prev => prev.filter(ann => ann.id !== id));
    toast.success('Annotation removed!');
  };

  const drawCanvas = useCallback(async () => {
    if (!baseImage || !previewCanvasRef.current) return;

    const canvas = previewCanvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Scale image for preview
    const maxWidth = 600;
    const scale = baseImage.width > maxWidth ? maxWidth / baseImage.width : 1;
    
    canvas.width = baseImage.width * scale;
    canvas.height = baseImage.height * scale;

    // Draw base image
    ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);

    // Draw annotations
    for (const annotation of annotations) {
      if (annotation.type === 'text') {
        ctx.font = `${(annotation.fontSize || 20) * scale}px Arial`;
        ctx.fillStyle = annotation.color || '#000000';
        ctx.fillText(
          annotation.content, 
          annotation.x * scale, 
          annotation.y * scale
        );
      } else if (annotation.type === 'image') {
        const img = new Image();
        await new Promise<void>((resolve) => {
          img.onload = () => {
            ctx.drawImage(
              img, 
              annotation.x * scale, 
              annotation.y * scale, 
              annotation.width * scale, 
              annotation.height * scale
            );
            resolve();
          };
          img.src = annotation.content;
        });
      }
    }
  }, [baseImage, annotations]);

  // Update preview when annotations change
  useEffect(() => {
    if (baseImage) {
      drawCanvas();
    }
  }, [baseImage, annotations, drawCanvas]);

  const downloadImage = async () => {
    if (!baseImage || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = baseImage.width;
    canvas.height = baseImage.height;

    // Draw base image at full resolution
    ctx.drawImage(baseImage, 0, 0);

    // Draw annotations at full resolution
    for (const annotation of annotations) {
      if (annotation.type === 'text') {
        ctx.font = `${annotation.fontSize || 20}px Arial`;
        ctx.fillStyle = annotation.color || '#000000';
        ctx.fillText(annotation.content, annotation.x, annotation.y);
      } else if (annotation.type === 'image') {
        const img = new Image();
        await new Promise<void>((resolve) => {
          img.onload = () => {
            ctx.drawImage(img, annotation.x, annotation.y, annotation.width, annotation.height);
            resolve();
          };
          img.src = annotation.content;
        });
      }
    }

    const link = document.createElement('a');
    link.download = `annotated-photo.${downloadFormat}`;
    link.href = canvas.toDataURL(`image/${downloadFormat}`);
    link.click();
    toast.success('Image downloaded successfully!');
  };

  const addCurrentDate = () => {
    const today = new Date().toLocaleDateString();
    setCurrentAnnotation(prev => ({
      ...prev,
      content: prev.content + (prev.content ? '\n' : '') + `Date: ${today}`
    }));
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Photo Annotation Tool</CardTitle>
          <CardDescription>
            Add name, date, signature, and fingerprint to your photos with live preview
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Upload Base Image */}
          <div>
            <Button
              onClick={() => fileInputRef.current?.click()}
              className="w-full"
              variant="outline"
            >
              <Upload className="mr-2 h-4 w-4" />
              Upload Base Photo
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>

          {baseImage && (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Annotation Controls */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Add Annotation</h3>
                  
                  <div>
                    <Label>Type</Label>
                    <Select 
                      value={currentAnnotation.type} 
                      onValueChange={(value: 'text' | 'image') => 
                        setCurrentAnnotation(prev => ({ ...prev, type: value }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="text">Text (Name/Date)</SelectItem>
                        <SelectItem value="image">Image (Signature/Fingerprint)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {currentAnnotation.type === 'text' ? (
                    <div className="space-y-3">
                      <div>
                        <Label>Text Content</Label>
                        <Textarea
                          value={currentAnnotation.content}
                          onChange={(e) => setCurrentAnnotation(prev => ({ ...prev, content: e.target.value }))}
                          placeholder="Enter name, date, or other text..."
                          rows={3}
                        />
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={addCurrentDate}
                          className="mt-2"
                        >
                          Add Current Date
                        </Button>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <Label>Font Size</Label>
                          <Input
                            type="number"
                            value={currentAnnotation.fontSize}
                            onChange={(e) => setCurrentAnnotation(prev => ({ ...prev, fontSize: parseInt(e.target.value) }))}
                            min={8}
                            max={72}
                          />
                        </div>
                        <div>
                          <Label>Color</Label>
                          <Input
                            type="color"
                            value={currentAnnotation.color}
                            onChange={(e) => setCurrentAnnotation(prev => ({ ...prev, color: e.target.value }))}
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div>
                        <Button
                          onClick={() => overlayInputRef.current?.click()}
                          variant="outline"
                          className="w-full"
                        >
                          <Upload className="mr-2 h-4 w-4" />
                          Upload Signature/Fingerprint
                        </Button>
                        <input
                          ref={overlayInputRef}
                          type="file"
                          accept="image/*"
                          onChange={handleOverlayUpload}
                          className="hidden"
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="removeBackground"
                          checked={currentAnnotation.removeBackground}
                          onCheckedChange={(checked) => 
                            setCurrentAnnotation(prev => ({ ...prev, removeBackground: checked === true }))
                          }
                        />
                        <Label htmlFor="removeBackground">Remove white background</Label>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Label>X Position</Label>
                      <Input
                        type="number"
                        value={currentAnnotation.x}
                        onChange={(e) => setCurrentAnnotation(prev => ({ ...prev, x: parseInt(e.target.value) || 0 }))}
                        min={0}
                      />
                    </div>
                    <div>
                      <Label>Y Position</Label>
                      <Input
                        type="number"
                        value={currentAnnotation.y}
                        onChange={(e) => setCurrentAnnotation(prev => ({ ...prev, y: parseInt(e.target.value) || 0 }))}
                        min={0}
                      />
                    </div>
                  </div>

                  {currentAnnotation.type === 'image' && (
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Label>Width</Label>
                        <Input
                          type="number"
                          value={currentAnnotation.width}
                          onChange={(e) => setCurrentAnnotation(prev => ({ ...prev, width: parseInt(e.target.value) || 200 }))}
                          min={10}
                        />
                      </div>
                      <div>
                        <Label>Height</Label>
                        <Input
                          type="number"
                          value={currentAnnotation.height}
                          onChange={(e) => setCurrentAnnotation(prev => ({ ...prev, height: parseInt(e.target.value) || 50 }))}
                          min={10}
                        />
                      </div>
                    </div>
                  )}

                  <Button onClick={addAnnotation} className="w-full">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Annotation
                  </Button>

                  {/* Current Annotations */}
                  {annotations.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="font-medium">Current Annotations</h4>
                      {annotations.map(annotation => (
                        <div key={annotation.id} className="flex items-center justify-between p-2 border rounded">
                          <span className="text-sm">
                            {annotation.type === 'text' ? annotation.content.substring(0, 30) : 'Image'}
                          </span>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => removeAnnotation(annotation.id)}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Live Preview */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Live Preview</h3>
                  <div className="flex justify-center">
                    <canvas
                      ref={previewCanvasRef}
                      className="max-w-full max-h-96 border border-border rounded-lg"
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  </div>
                </div>
              </div>

              {/* Hidden canvas for final processing */}
              <canvas ref={canvasRef} className="hidden" />

              {/* Download Controls */}
              <div className="flex gap-4 items-center justify-center">
                <Select value={downloadFormat} onValueChange={setDownloadFormat}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="png">PNG</SelectItem>
                    <SelectItem value="jpg">JPG</SelectItem>
                    <SelectItem value="jpeg">JPEG</SelectItem>
                    <SelectItem value="webp">WebP</SelectItem>
                  </SelectContent>
                </Select>
                <Button onClick={downloadImage}>
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PhotoAnnotationTool;
