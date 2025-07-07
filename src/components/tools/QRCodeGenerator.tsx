
import React, { useState, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { QRCodeCanvas } from 'qrcode.react';
import { useToast } from '@/components/ui/use-toast';
import { Download, Image as ImageIcon, Palette, MessageCircle, Phone, Mail, Instagram, Facebook, Youtube, X, QrCode, Camera, Upload } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import QRScanner from './QRScanner';

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
    <Tabs defaultValue="generate" className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-8 bg-card/50 p-1 rounded-xl">
        <TabsTrigger 
          value="generate" 
          className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg py-3"
        >
          <QrCode className="h-4 w-4" />
          Generate QR Code
        </TabsTrigger>
        <TabsTrigger 
          value="scan" 
          className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg py-3"
        >
          <Camera className="h-4 w-4" />
          Scan QR Code
        </TabsTrigger>
      </TabsList>

      <TabsContent value="generate" className="space-y-6">
        {/* How to Create QR Code Guide */}
        <Card className="bg-gradient-to-br from-background to-muted/20 border-border/50">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-foreground mb-4">How to create a free QR Code</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Choose your QR Code type</h4>
                  <p className="text-sm text-muted-foreground">Select the QR Code type that fits your content—for example, a website URL, a phone contact, or a downloadable PDF.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Add details and customize</h4>
                  <p className="text-sm text-muted-foreground">Add elements like your brand's primary color, company logo, or a frame with a call-to-action to make your QR Code recognizable and professional.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Download and share</h4>
                  <p className="text-sm text-muted-foreground">Choose the format that best fits your use case. Download as PNG for high quality prints or use SVG for scalable graphics.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Generator Section */}
          <Card className="bg-gradient-to-br from-card via-card/95 to-muted/20 border-border/50">
            <CardContent className="p-6 space-y-4">
              <div>
                <Label htmlFor="qrType" className="block text-sm font-medium mb-2">
                  QR Code Type
                </Label>
                <Select value={qrType} onValueChange={(value: QRType) => setQrType(value)}>
                  <SelectTrigger className="w-full bg-background/50">
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

              <Button onClick={handleGenerate} className="w-full bg-primary hover:bg-primary/90">
                <QrCode className="mr-2 h-4 w-4" />
                Generate QR Code
              </Button>
            </CardContent>
          </Card>

          {/* Customization Section */}
          <Card className="bg-gradient-to-br from-card via-card/95 to-muted/20 border-border/50">
            <CardContent className="p-6 space-y-4">
              <Label className="block text-sm font-medium mb-2">Customize Appearance</Label>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fgColor" className="text-xs text-muted-foreground">Foreground Color</Label>
                  <Input
                    id="fgColor"
                    type="color"
                    value={fgColor}
                    onChange={(e) => setFgColor(e.target.value)}
                    className="w-full h-10 p-1 bg-background/50"
                  />
                </div>
                <div>
                  <Label htmlFor="bgColor" className="text-xs text-muted-foreground">Background Color</Label>
                  <Input
                    id="bgColor"
                    type="color"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="w-full h-10 p-1 bg-background/50"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="logoUpload" className="text-xs text-muted-foreground mb-2 block">
                  <Upload className="inline h-3 w-3 mr-1" />
                  Upload Logo (max 1MB)
                </Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="logoUpload"
                    type="file"
                    accept="image/png, image/jpeg, image/svg+xml"
                    onChange={handleLogoUpload}
                    ref={fileInputRef}
                    className="text-sm bg-background/50"
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
                  className="w-full bg-background/50"
                />
              </div>

              {logoSrc && (
                <div>
                  <Label htmlFor="logoSize" className="text-xs text-muted-foreground">Logo Size ({(logoSize * 100).toFixed(0)}%)</Label>
                  <Input
                    id="logoSizeSlider"
                    type="range"
                    min="0.05"
                    max="0.3"
                    step="0.01"
                    value={logoSize}
                    onChange={(e) => setLogoSize(parseFloat(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* QR Code Preview */}
        {qrValue && (
          <Card className="bg-gradient-to-br from-card via-card/95 to-muted/20 border-border/50">
            <CardContent className="p-8 flex flex-col items-center space-y-6">
              <div 
                className="p-6 inline-block shadow-2xl rounded-2xl relative overflow-hidden border border-border/20" 
                style={{ backgroundColor: bgColor }}
              >
                <div className="relative">
                  <QRCodeCanvas
                    id="qrcode-canvas"
                    value={qrValue}
                    size={qrCodeSize}
                    fgColor={fgColor}
                    bgColor={bgColor}
                    level="H"
                    includeMargin={true}
                    imageSettings={imageSettings}
                  />
                </div>
              </div>
              <Button onClick={handleDownload} className="bg-primary hover:bg-primary/90 px-8 py-3">
                <Download className="mr-2 h-5 w-5" />
                Download High Quality QR Code
              </Button>
            </CardContent>
          </Card>
        )}
      </TabsContent>

      <TabsContent value="scan">
        <QRScanner />
      </TabsContent>
    </Tabs>
  );
};

export default QRCodeGenerator;
