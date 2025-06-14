
import React, { useState, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { QRCodeCanvas } from 'qrcode.react';
import { useToast } from '@/components/ui/use-toast';
import { Download, Image as ImageIcon, Palette } from 'lucide-react';
import { Label } from '@/components/ui/label'; // Import Label

const QRCodeGenerator: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [qrValue, setQrValue] = useState<string>('');
  const [fgColor, setFgColor] = useState<string>('#000000');
  const [bgColor, setBgColor] = useState<string>('#FFFFFF');
  const [logoSrc, setLogoSrc] = useState<string | null>(null);
  const [logoSize, setLogoSize] = useState<number>(0.15); // as a percentage of QR code size
  const [qrCodeSize, setQrCodeSize] = useState<number>(256); // QR Code size

  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleGenerate = () => {
    if (!text.trim()) {
      toast({
        title: 'Input Required',
        description: 'Please enter text or URL to generate QR code.',
        variant: 'destructive',
      });
      setQrValue('');
      return;
    }
    setQrValue(text);
    toast({
      title: 'QR Code Generated',
      description: 'Your QR code is ready.',
    });
  };

  const handleDownload = () => {
    if (!qrValue) {
      toast({
        title: 'Nothing to Download',
        description: 'Generate a QR code first.',
        variant: 'destructive',
      });
      return;
    }
    const canvas = document.getElementById('qrcode-canvas') as HTMLCanvasElement;
    if (canvas) {
      const pngUrl = canvas
        .toDataURL('image/png')
        .replace('image/png', 'image/octet-stream');
      let downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = 'custom-qrcode.png';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      toast({
        title: 'Download Started',
        description: 'QR code image download has started.',
      });
    } else {
       toast({
        title: 'Download Failed',
        description: 'Could not find QR code canvas element.',
        variant: 'destructive',
      });
    }
  };

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 1024 * 1024) { // 1MB limit
        toast({
          title: 'File too large',
          description: 'Please upload an image smaller than 1MB.',
          variant: 'destructive',
        });
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoSrc(reader.result as string);
        toast({
          title: 'Logo Uploaded',
          description: 'Your logo has been added to the QR code preview.',
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const clearLogo = () => {
    setLogoSrc(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // Reset file input
    }
    toast({
      title: 'Logo Cleared',
      description: 'The logo has been removed.',
    });
  };

  const imageSettings = logoSrc
    ? {
        src: logoSrc,
        height: qrCodeSize * logoSize,
        width: qrCodeSize * logoSize,
        excavate: true,
        x: undefined, // Let qrcode.react center it
        y: undefined, // Let qrcode.react center it
      }
    : undefined;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Input Section */}
        <div className="space-y-4">
          <div>
            <Label htmlFor="qrText" className="block text-sm font-medium text-gray-700 mb-1">
              Enter Text or URL
            </Label>
            <Input
              id="qrText"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="e.g., https://www.example.com"
              className="text-base p-3"
            />
          </div>
          <Button onClick={handleGenerate} className="w-full">
            Generate QR Code
          </Button>
        </div>

        {/* Customization Section */}
        <div className="space-y-4">
          <Label className="block text-sm font-medium text-gray-700 mb-1">Customize Appearance</Label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fgColor" className="text-xs text-muted-foreground">Foreground</Label>
              <Input
                id="fgColor"
                type="color"
                value={fgColor}
                onChange={(e) => setFgColor(e.target.value)}
                className="w-full h-10 p-1"
              />
            </div>
            <div>
              <Label htmlFor="bgColor" className="text-xs text-muted-foreground">Background</Label>
              <Input
                id="bgColor"
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                className="w-full h-10 p-1"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="logoUpload" className="text-xs text-muted-foreground">Upload Logo (max 1MB)</Label>
            <div className="flex items-center gap-2">
              <Input
                id="logoUpload"
                type="file"
                accept="image/png, image/jpeg, image/svg+xml"
                onChange={handleLogoUpload}
                ref={fileInputRef}
                className="text-sm file:mr-2 file:py-1 file:px-2 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
              />
              {logoSrc && (
                <Button onClick={clearLogo} variant="outline" size="sm">Clear</Button>
              )}
            </div>
          </div>
           <div>
            <Label htmlFor="qrCodeSize" className="text-xs text-muted-foreground">QR Code Size (px)</Label>
            <Input
              id="qrCodeSize"
              type="number"
              value={qrCodeSize}
              onChange={(e) => setQrCodeSize(Math.max(64, Math.min(1024, parseInt(e.target.value, 10) || 256)))}
              min="64"
              max="1024"
              step="8"
              className="w-full"
            />
          </div>
          <div>
            <Label htmlFor="logoSize" className="text-xs text-muted-foreground">Logo Size (relative to QR)</Label>
             <div className="flex items-center gap-2">
              <Input
                id="logoSizeSlider"
                type="range"
                min="0.05"
                max="0.3"
                step="0.01"
                value={logoSize}
                onChange={(e) => setLogoSize(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                disabled={!logoSrc}
              />
              <span className="text-xs text-muted-foreground w-12 text-right">{(logoSize * 100).toFixed(0)}%</span>
            </div>
          </div>
        </div>
      </div>

      {qrValue && (
        <Card className="mt-6">
          <CardContent className="p-6 flex flex-col items-center space-y-4">
            <div className="p-4 bg-white inline-block shadow-md rounded-lg" style={{ backgroundColor: bgColor }}> {/* Outer div for BG color preview before canvas renders */}
              <QRCodeCanvas
                id="qrcode-canvas"
                value={qrValue}
                size={qrCodeSize}
                fgColor={fgColor}
                bgColor={bgColor}
                level="H" // High error correction for logos
                includeMargin={true}
                imageSettings={imageSettings}
              />
            </div>
            <Button onClick={handleDownload} variant="outline" className="w-full sm:w-auto">
              <Download className="mr-2 h-4 w-4" /> Download QR Code
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default QRCodeGenerator;

