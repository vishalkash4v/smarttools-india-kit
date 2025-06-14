
import React, { useState, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { QRCodeCanvas } from 'qrcode.react';
import { useToast } from '@/components/ui/use-toast';
import { Download, Image as ImageIcon, Palette, MessageCircle, Phone, Mail, Instagram, Facebook, Youtube, X } from 'lucide-react';
import { Label } from '@/components/ui/label';

type QRType = 'text' | 'whatsapp' | 'instagram' | 'facebook' | 'youtube' | 'x' | 'sms' | 'phone' | 'email';

const QRCodeGenerator: React.FC = () => {
  const [qrType, setQrType] = useState<QRType>('text');
  const [text, setText] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [countryCode, setCountryCode] = useState<string>('+1');
  const [message, setMessage] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [qrValue, setQrValue] = useState<string>('');
  const [fgColor, setFgColor] = useState<string>('#000000');
  const [bgColor, setBgColor] = useState<string>('#FFFFFF');
  const [logoSrc, setLogoSrc] = useState<string | null>(null);
  const [bgImageSrc, setBgImageSrc] = useState<string | null>(null);
  const [logoSize, setLogoSize] = useState<number>(0.15);
  const [qrCodeSize, setQrCodeSize] = useState<number>(256);

  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const bgImageInputRef = useRef<HTMLInputElement>(null);

  const qrTypeOptions = [
    { value: 'text', label: 'Text/URL', icon: MessageCircle },
    { value: 'whatsapp', label: 'WhatsApp', icon: MessageCircle },
    { value: 'instagram', label: 'Instagram', icon: Instagram },
    { value: 'facebook', label: 'Facebook', icon: Facebook },
    { value: 'youtube', label: 'YouTube', icon: Youtube },
    { value: 'x', label: 'X (Twitter)', icon: X },
    { value: 'sms', label: 'SMS', icon: MessageCircle },
    { value: 'phone', label: 'Phone Call', icon: Phone },
    { value: 'email', label: 'Email', icon: Mail },
  ];

  const generateQRValue = () => {
    switch (qrType) {
      case 'whatsapp':
        if (!phoneNumber) return '';
        const cleanPhone = phoneNumber.replace(/\D/g, '');
        return `https://wa.me/${cleanPhone}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
      
      case 'instagram':
        return username ? `https://instagram.com/${username}` : '';
      
      case 'facebook':
        return username ? `https://facebook.com/${username}` : '';
      
      case 'youtube':
        return username ? `https://youtube.com/@${username}` : '';
      
      case 'x':
        return username ? `https://x.com/${username}` : '';
      
      case 'sms':
        if (!phoneNumber) return '';
        return `sms:${countryCode}${phoneNumber.replace(/\D/g, '')}${message ? `?body=${encodeURIComponent(message)}` : ''}`;
      
      case 'phone':
        if (!phoneNumber) return '';
        return `tel:${countryCode}${phoneNumber.replace(/\D/g, '')}`;
      
      case 'email':
        if (!email) return '';
        return `mailto:${email}${subject || message ? '?' : ''}${subject ? `subject=${encodeURIComponent(subject)}` : ''}${subject && message ? '&' : ''}${message ? `body=${encodeURIComponent(message)}` : ''}`;
      
      default:
        return text;
    }
  };

  const handleGenerate = () => {
    const value = generateQRValue();
    
    if (!value.trim()) {
      const fieldName = qrType === 'text' ? 'text or URL' : 
                       qrType === 'whatsapp' || qrType === 'sms' || qrType === 'phone' ? 'phone number' :
                       qrType === 'email' ? 'email address' : 'username';
      
      toast({
        title: 'Input Required',
        description: `Please enter ${fieldName} to generate QR code.`,
        variant: 'destructive',
      });
      setQrValue('');
      return;
    }
    
    setQrValue(value);
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
      if (file.size > 1024 * 1024) {
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

  const handleBgImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 1024 * 1024) {
        toast({
          title: 'File too large',
          description: 'Please upload an image smaller than 1MB.',
          variant: 'destructive',
        });
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setBgImageSrc(reader.result as string);
        toast({
          title: 'Background Image Uploaded',
          description: 'Your background image has been added.',
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const clearLogo = () => {
    setLogoSrc(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    toast({
      title: 'Logo Cleared',
      description: 'The logo has been removed.',
    });
  };

  const clearBgImage = () => {
    setBgImageSrc(null);
    if (bgImageInputRef.current) {
      bgImageInputRef.current.value = '';
    }
    toast({
      title: 'Background Image Cleared',
      description: 'The background image has been removed.',
    });
  };

  const imageSettings = logoSrc
    ? {
        src: logoSrc,
        height: qrCodeSize * logoSize,
        width: qrCodeSize * logoSize,
        excavate: true,
        x: undefined,
        y: undefined,
      }
    : undefined;

  const renderInputFields = () => {
    switch (qrType) {
      case 'whatsapp':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number (with country code)
              </Label>
              <Input
                id="phoneNumber"
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="1234567890"
                className="text-base p-3"
              />
            </div>
            <div>
              <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Pre-filled Message (Optional)
              </Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hello! I found you through QR code..."
                className="text-base p-3"
                rows={3}
              />
            </div>
          </div>
        );

      case 'sms':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-2">
              <div>
                <Label htmlFor="countryCode" className="block text-sm font-medium text-gray-700 mb-1">
                  Country Code
                </Label>
                <Input
                  id="countryCode"
                  type="text"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  placeholder="+1"
                  className="text-base p-3"
                />
              </div>
              <div className="col-span-2">
                <Label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="1234567890"
                  className="text-base p-3"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Pre-filled Message (Optional)
              </Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message here..."
                className="text-base p-3"
                rows={3}
              />
            </div>
          </div>
        );

      case 'phone':
        return (
          <div className="grid grid-cols-3 gap-2">
            <div>
              <Label htmlFor="countryCode" className="block text-sm font-medium text-gray-700 mb-1">
                Country Code
              </Label>
              <Input
                id="countryCode"
                type="text"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                placeholder="+1"
                className="text-base p-3"
              />
            </div>
            <div className="col-span-2">
              <Label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </Label>
              <Input
                id="phoneNumber"
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="1234567890"
                className="text-base p-3"
              />
            </div>
          </div>
        );

      case 'email':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                className="text-base p-3"
              />
            </div>
            <div>
              <Label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject (Optional)
              </Label>
              <Input
                id="subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Email subject..."
                className="text-base p-3"
              />
            </div>
            <div>
              <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message (Optional)
              </Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Email body..."
                className="text-base p-3"
                rows={3}
              />
            </div>
          </div>
        );

      case 'instagram':
      case 'facebook':
      case 'youtube':
      case 'x':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                Username (without @)
              </Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="your_username"
                className="text-base p-3"
              />
            </div>
          </div>
        );

      default:
        return (
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
        );
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <div className="space-y-4">
          <div>
            <Label htmlFor="qrType" className="block text-sm font-medium text-gray-700 mb-1">
              QR Code Type
            </Label>
            <Select value={qrType} onValueChange={(value: QRType) => setQrType(value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select QR type" />
              </SelectTrigger>
              <SelectContent>
                {qrTypeOptions.map((option) => {
                  const IconComponent = option.icon;
                  return (
                    <SelectItem key={option.value} value={option.value}>
                      <div className="flex items-center gap-2">
                        <IconComponent className="h-4 w-4" />
                        {option.label}
                      </div>
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>

          {renderInputFields()}

          <Button onClick={handleGenerate} className="w-full">
            Generate QR Code
          </Button>
        </div>

        {/* Customization Section */}
        <div className="space-y-4">
          <Label className="block text-sm font-medium text-gray-700 mb-1">Customize Appearance</Label>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fgColor" className="text-xs text-muted-foreground">Foreground Color</Label>
              <Input
                id="fgColor"
                type="color"
                value={fgColor}
                onChange={(e) => setFgColor(e.target.value)}
                className="w-full h-10 p-1"
              />
            </div>
            <div>
              <Label htmlFor="bgColor" className="text-xs text-muted-foreground">Background Color</Label>
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
            <Label htmlFor="bgImageUpload" className="text-xs text-muted-foreground">Background Image (max 1MB)</Label>
            <div className="flex items-center gap-2">
              <Input
                id="bgImageUpload"
                type="file"
                accept="image/png, image/jpeg, image/svg+xml"
                onChange={handleBgImageUpload}
                ref={bgImageInputRef}
                className="text-sm file:mr-2 file:py-1 file:px-2 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
              />
              {bgImageSrc && (
                <Button onClick={clearBgImage} variant="outline" size="sm">Clear</Button>
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
            <div 
              className="p-4 inline-block shadow-md rounded-lg relative overflow-hidden" 
              style={{ backgroundColor: bgColor }}
            >
              {bgImageSrc && (
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-20"
                  style={{ backgroundImage: `url(${bgImageSrc})` }}
                />
              )}
              <div className="relative">
                <QRCodeCanvas
                  id="qrcode-canvas"
                  value={qrValue}
                  size={qrCodeSize}
                  fgColor={fgColor}
                  bgColor={bgImageSrc ? 'transparent' : bgColor}
                  level="H"
                  includeMargin={true}
                  imageSettings={imageSettings}
                />
              </div>
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
