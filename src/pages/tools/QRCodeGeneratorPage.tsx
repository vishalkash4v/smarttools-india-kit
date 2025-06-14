
import React from 'react';
import QRCodeGenerator from '@/components/tools/QRCodeGenerator';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCode, Smartphone, Share, Download } from 'lucide-react';

const QRCodeGeneratorPage = () => {
  return (
    <PageWrapper
      title="QR Code Generator"
      description="Generate QR codes instantly for URLs, text, contact info, WiFi passwords, and more. Free professional QR code creator with download options."
      keywords="QR code generator, create QR code, QR code maker, generate QR codes, free QR generator, URL to QR code, contact QR code"
      pageTitle="QR Code Generator"
      toolCategory="QR Generator"
      canonicalUrl="https://smarttools-india.com/qr-code-generator"
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

          {/* Info Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Business Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Perfect for businesses wanting to bridge offline and online experiences. Add QR codes to 
                  business cards, flyers, posters, and product packaging. Link to your website, social media 
                  profiles, contact information, or promotional offers. Great for restaurants sharing menus, 
                  events promoting tickets, or retail stores connecting to online catalogs.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Event Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Streamline event check-ins, share event details, and connect attendees instantly. Generate 
                  QR codes for event tickets, registration links, feedback forms, or social media pages. 
                  Perfect for conferences, weddings, parties, and corporate events. Attendees can quickly 
                  access event information, connect to WiFi, or join event-specific apps.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Marketing & Promotion</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Enhance your marketing campaigns with trackable QR codes. Link to special offers, product 
                  pages, video content, or app downloads. Use in print advertisements, digital displays, 
                  packaging, or direct mail campaigns. Track engagement, measure campaign effectiveness, 
                  and create seamless customer journeys from physical to digital touchpoints.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Personal & Educational</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Share personal contact information, WiFi passwords, or educational resources quickly. 
                  Teachers can create QR codes linking to assignments, resources, or online classrooms. 
                  Students can share projects or portfolios easily. Perfect for sharing social media profiles, 
                  personal websites, or contact details without typing long URLs or information.
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
