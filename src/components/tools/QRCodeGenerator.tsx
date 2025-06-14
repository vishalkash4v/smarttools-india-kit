
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import QRCodeStyling from 'qrcode.react'; // Corrected import
import { useToast } from '@/components/ui/use-toast';
import { Download } from 'lucide-react';

const QRCodeGenerator: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [qrValue, setQrValue] = useState<string>('');
  const { toast } = useToast();

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
      downloadLink.download = 'qrcode.png';
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

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="qrText" className="block text-sm font-medium text-gray-700">
          Enter Text or URL
        </label>
        <Input
          id="qrText"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="e.g., https://www.example.com"
          className="text-base p-3"
        />
      </div>
      <Button onClick={handleGenerate} className="w-full sm:w-auto">
        Generate QR Code
      </Button>
      {qrValue && (
        <Card className="mt-6">
          <CardContent className="p-6 flex flex-col items-center space-y-4">
            <QRCodeStyling
              id="qrcode-canvas"
              value={qrValue}
              size={256}
              level="H"
              includeMargin={true}
            />
            <Button onClick={handleDownload} variant="outline">
              <Download className="mr-2 h-4 w-4" /> Download QR Code
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default QRCodeGenerator;
