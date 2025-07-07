
import React from 'react';
import QRCodeGenerator from '@/components/tools/QRCodeGenerator';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCode, Smartphone, Share, Download } from 'lucide-react';

const QRCodeGeneratorPage = () => {
  return (
    <PageWrapper
      title="QR Code Generator Free - Create QR Codes Online"
      description="Free QR code generator to create QR codes instantly. Generate QR codes for URLs, text, contact info, WiFi, social media and more. Professional QR code maker with scanner included."
      keywords="qr code generator, qr code scanner, qr generator, qr code generator free, qr code, create qr code, qr code maker, generate qr codes, free qr generator, qr scanner, barcode generator"
      pageTitle="QR Code Generator & Scanner"
      toolCategory="QR Tools"
      canonicalUrl="https://fyntools.com/qr-code-generator"
      heroImage="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=1200&h=630&fit=crop"
    >
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/20">
                <QrCode className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text">
              QR Code Generator
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Create professional QR codes instantly for websites, contact information, WiFi, and more.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Smartphone className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Mobile Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Scannable by any smartphone camera</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Share className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Easy Sharing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Share links, contacts, and info instantly</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Download className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Download Options</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Save as PNG, SVG, or print-ready formats</CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Main QR Generator */}
          <Card className="hover-lift bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm border-primary/20 shadow-2xl mb-12">
            <CardHeader className="text-center border-b border-border/50">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-primary/10">
                  <QrCode className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                  QR Code Creator
                </CardTitle>
              </div>
              <CardDescription className="text-lg">
                Professional QR code generator for all your sharing needs
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <QRCodeGenerator />
            </CardContent>
          </Card>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Why QR Codes are Essential</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  QR codes bridge the gap between physical and digital worlds. They provide instant access to information 
                  without typing long URLs or contact details. Perfect for contactless sharing, QR codes have become 
                  essential for businesses, events, and personal use. They're cost-effective, versatile, and can be 
                  scanned by any smartphone camera, making them universally accessible.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">How QR Codes Ease Your Work</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Save time and reduce errors by eliminating manual data entry. Share complex information instantly 
                  with a simple scan. Update linked content without reprinting codes. Track engagement and gather 
                  analytics. Reduce paper waste with digital menus and catalogs. Enable contactless payments and 
                  interactions. Perfect for restaurants, retail, healthcare, education, and events.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Use Cases Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">Where You Can Use QR Codes</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                    <Smartphone className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Restaurant & Food</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Digital menus, table ordering, payment links, customer feedback forms, loyalty programs, 
                    and promotional offers.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                    <Share className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Business & Networking</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Business cards, contact sharing, website links, social media profiles, product catalogs, 
                    and company presentations.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                    <Download className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Events & Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Event tickets, check-in systems, educational resources, assignment links, conference materials, 
                    and attendee networking.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Professional QR Code Generator</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Create high-quality QR codes with custom colors, logos, and branding. Support for multiple 
                  content types including URLs, text, contact information, WiFi credentials, social media profiles, 
                  and more. Download in PNG format for print and digital use. Perfect for businesses wanting 
                  professional-looking QR codes that match their brand identity.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Free QR Code Scanner</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Built-in QR code scanner allows you to test your generated codes and scan existing QR codes. 
                  Works with your device camera or uploaded images. Instantly decode QR codes to view their 
                  content before sharing. Essential for quality control and testing your QR code campaigns 
                  before deployment.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default QRCodeGeneratorPage;
