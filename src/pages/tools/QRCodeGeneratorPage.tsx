
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
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="p-6 rounded-3xl glass-card border border-white/20 dark:border-white/10 animate-float">
                  <QrCode className="h-16 w-16 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full animate-glow-pulse"></div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
              <span className="gradient-text">QR Code Generator</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8 animate-fade-in">
              Create professional QR codes instantly for websites, contact information, WiFi, social media and more. 
              Free, secure, and no registration required.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="px-4 py-2 glass-card rounded-full text-sm font-medium">✨ High Quality</span>
              <span className="px-4 py-2 glass-card rounded-full text-sm font-medium">🚀 Instant Generation</span>
              <span className="px-4 py-2 glass-card rounded-full text-sm font-medium">📱 Mobile Ready</span>
              <span className="px-4 py-2 glass-card rounded-full text-sm font-medium">🎨 Customizable</span>
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <Card className="text-center hover-lift glow-hover group">
              <CardHeader className="pb-3">
                <div className="mx-auto mb-4 p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 w-fit group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Mobile Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Scannable by any smartphone camera or QR reader app</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift glow-hover group">
              <CardHeader className="pb-3">
                <div className="mx-auto mb-4 p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 w-fit group-hover:scale-110 transition-transform duration-300">
                  <Share className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Easy Sharing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Share links, contacts, and information instantly</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift glow-hover group">
              <CardHeader className="pb-3">
                <div className="mx-auto mb-4 p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 w-fit group-hover:scale-110 transition-transform duration-300">
                  <Download className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Download Options</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Save as PNG, SVG, or print-ready formats</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift glow-hover group">
              <CardHeader className="pb-3">
                <div className="mx-auto mb-4 p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 w-fit group-hover:scale-110 transition-transform duration-300">
                  <QrCode className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Multiple Types</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>URLs, text, WiFi, contacts, social media profiles</CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Main QR Generator */}
          <Card className="hover-lift glow-hover mb-16 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
            <CardHeader className="text-center border-b border-border/30 relative z-10">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="p-4 rounded-2xl glass">
                  <QrCode className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-4xl font-bold">
                  QR Code Creator
                </CardTitle>
              </div>
              <CardDescription className="text-lg max-w-2xl mx-auto">
                Professional QR code generator with advanced customization options and built-in scanner
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 relative z-10">
              <QRCodeGenerator />
            </CardContent>
          </Card>

          {/* SEO Content Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <Card className="hover-lift glow-hover">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <QrCode className="h-6 w-6 text-primary" />
                  Why QR Codes are Essential in 2024
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    QR codes have become indispensable in our digital world, bridging the gap between physical and digital experiences. 
                    With over 11 million QR codes scanned daily, they provide instant access to information without manual data entry.
                  </p>
                  <p>
                    Perfect for contactless interactions, QR codes gained massive adoption during the pandemic and continue to thrive 
                    in marketing, restaurants, events, and business cards. They're cost-effective, versatile, and universally accessible 
                    through any smartphone camera.
                  </p>
                  <div className="bg-primary/10 p-4 rounded-xl border border-primary/20">
                    <h4 className="font-semibold text-foreground mb-2">Quick Facts:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• 45% of shoppers used QR codes for payment in 2023</li>
                      <li>• QR code usage increased by 750% during 2020-2022</li>
                      <li>• 89% of smartphone users can scan QR codes natively</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover-lift glow-hover">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Smartphone className="h-6 w-6 text-primary" />
                  How QR Codes Simplify Your Workflow
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Transform your business operations with QR codes that eliminate manual data entry, reduce errors, and speed up 
                    customer interactions. From digital menus to contactless payments, QR codes streamline processes across industries.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-success/10 p-3 rounded-lg border border-success/20">
                      <h5 className="font-medium text-success mb-1">Time Savings</h5>
                      <p className="text-xs">Instant information sharing without typing</p>
                    </div>
                    <div className="bg-accent/20 p-3 rounded-lg border border-accent/30">
                      <h5 className="font-medium text-accent-foreground mb-1">Error Reduction</h5>
                      <p className="text-xs">Eliminate transcription mistakes</p>
                    </div>
                    <div className="bg-warning/10 p-3 rounded-lg border border-warning/20">
                      <h5 className="font-medium text-warning-foreground mb-1">Analytics</h5>
                      <p className="text-xs">Track scans and engagement</p>
                    </div>
                    <div className="bg-primary/10 p-3 rounded-lg border border-primary/20">
                      <h5 className="font-medium text-primary mb-1">Eco-Friendly</h5>
                      <p className="text-xs">Reduce paper waste with digital alternatives</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Advanced Use Cases */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                Endless Possibilities with QR Codes
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover innovative ways to use QR codes across different industries and scenarios
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Smartphone,
                  title: "Restaurant & Hospitality",
                  items: ["Digital menus & ordering", "Table reservations", "Customer feedback", "Loyalty programs", "Contactless payments", "WiFi access"],
                  gradient: "from-orange-500/10 to-red-500/10"
                },
                {
                  icon: Share,
                  title: "Business & Marketing",
                  items: ["Business cards", "Product catalogs", "Event promotion", "Social media linking", "Customer reviews", "Lead generation"],
                  gradient: "from-blue-500/10 to-purple-500/10"
                },
                {
                  icon: Download,
                  title: "Events & Education",
                  items: ["Event check-in", "Conference materials", "Educational resources", "Course enrollment", "Attendance tracking", "Resource sharing"],
                  gradient: "from-green-500/10 to-teal-500/10"
                },
                {
                  icon: QrCode,
                  title: "Retail & E-commerce",
                  items: ["Product information", "Inventory tracking", "Price comparisons", "Customer support", "Warranty registration", "App downloads"],
                  gradient: "from-purple-500/10 to-pink-500/10"
                },
                {
                  icon: Smartphone,
                  title: "Healthcare & Services",
                  items: ["Patient check-in", "Medical records", "Appointment booking", "Prescription tracking", "Health information", "Emergency contacts"],
                  gradient: "from-cyan-500/10 to-blue-500/10"
                },
                {
                  icon: Share,
                  title: "Real Estate & Property",
                  items: ["Property tours", "Listing details", "Contact information", "Virtual showings", "Documentation", "Neighborhood info"],
                  gradient: "from-yellow-500/10 to-orange-500/10"
                }
              ].map((category, index) => (
                <Card key={index} className={`hover-lift glow-hover bg-gradient-to-br ${category.gradient} border-white/20 dark:border-white/10`}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 rounded-xl glass">
                        <category.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Technical Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="hover-lift glow-hover">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <QrCode className="h-6 w-6 text-primary" />
                  Professional QR Code Generator Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Customization Options:</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Custom colors and branding
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Logo integration with excavation
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Adjustable size and resolution
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Error correction levels
                      </li>
                    </ul>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-xl border border-primary/20">
                    <h5 className="font-medium text-foreground mb-2">Supported Content Types:</h5>
                    <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                      <span>• URLs & Websites</span>
                      <span>• Social Media Profiles</span>
                      <span>• WhatsApp Messages</span>
                      <span>• Email & SMS</span>
                      <span>• Phone Numbers</span>
                      <span>• Plain Text</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover-lift glow-hover">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Smartphone className="h-6 w-6 text-primary" />
                  Built-in QR Code Scanner
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Our integrated QR code scanner allows you to test your generated codes and decode existing QR codes 
                    instantly. Perfect for quality control and verification before sharing your codes.
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Scanner Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-success rounded-full"></span>
                        Real-time camera scanning
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-success rounded-full"></span>
                        Image upload support
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-success rounded-full"></span>
                        Instant content preview
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-success rounded-full"></span>
                        Direct link opening
                      </li>
                    </ul>
                  </div>
                  <div className="bg-success/10 p-4 rounded-xl border border-success/20">
                    <p className="text-sm text-success-foreground">
                      <strong>Pro Tip:</strong> Always test your QR codes with our scanner before printing or sharing 
                      to ensure they work correctly across different devices and scanning apps.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <Card className="hover-lift glow-hover">
            <CardHeader>
              <CardTitle className="text-3xl text-center gradient-text">
                Frequently Asked Questions
              </CardTitle>
              <CardDescription className="text-center text-lg">
                Everything you need to know about QR codes and our generator
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    q: "Are the QR codes generated free to use?",
                    a: "Yes, all QR codes generated with our tool are completely free to use for personal and commercial purposes. No hidden fees or subscription required."
                  },
                  {
                    q: "Do QR codes expire?",
                    a: "Static QR codes (like the ones we generate) never expire. Once created, they will work indefinitely as long as the linked content exists."
                  },
                  {
                    q: "What's the maximum size for QR codes?",
                    a: "Our generator supports QR codes up to 1024x1024 pixels, perfect for both digital use and high-quality printing on posters and banners."
                  },
                  {
                    q: "Can I track QR code scans?",
                    a: "Static QR codes don't provide tracking. For analytics, you'd need to use URL shorteners with tracking or dynamic QR code services."
                  },
                  {
                    q: "What file formats are supported?",
                    a: "We generate QR codes in PNG format, which provides excellent quality and is supported by all devices and printing services."
                  },
                  {
                    q: "How do I ensure my QR code is scannable?",
                    a: "Use high contrast colors, maintain adequate size (minimum 2cm for print), test with our built-in scanner, and ensure sufficient quiet zone around the code."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-muted/20 p-4 rounded-xl border border-border/50">
                    <h4 className="font-semibold text-foreground mb-2">{faq.q}</h4>
                    <p className="text-sm text-muted-foreground">{faq.a}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageWrapper>
  );
};

export default QRCodeGeneratorPage;
