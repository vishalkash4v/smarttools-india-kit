
import React from 'react';
import ColorPickerToolComponent from '@/components/tools/ColorPickerTool';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Droplet, Eye, Code } from 'lucide-react';

const ColorPickerToolPage = () => {
  return (
    <PageWrapper
      title="Color Picker Tool"
      description="Professional color picker and palette generator. Pick colors, get HEX, RGB, HSL codes, and create beautiful color schemes for web design and graphics."
      keywords="color picker, color palette, hex color, RGB color, HSL color, color codes, web design colors, graphic design colors, color wheel"
      pageTitle="Color Picker Tool"
      toolCategory="Design Tool"
      canonicalUrl="https://fyntools.com/color-picker-tool"
      heroImage="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200&h=630&fit=crop"
    >
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/20">
                <Palette className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text">
              Color Picker Tool
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Pick perfect colors and get their HEX, RGB, and HSL codes for your design projects.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Droplet className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Multiple Formats</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>HEX, RGB, HSL, and RGBA color codes</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Eye className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Visual Picker</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Interactive color wheel and sliders</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Code className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Copy Codes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>One-click copy for easy use in projects</CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Main Color Picker */}
          <Card className="hover-lift bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm border-primary/20 shadow-2xl mb-12">
            <CardHeader className="text-center border-b border-border/50">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Palette className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                  Professional Color Picker
                </CardTitle>
              </div>
              <CardDescription className="text-lg">
                Advanced color selection and palette generation tool
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <ColorPickerToolComponent />
            </CardContent>
          </Card>

          {/* Info Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Web Design</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Web designers and developers use color pickers to create cohesive color schemes for 
                  websites and applications. Select brand colors, create hover states, and ensure 
                  accessibility compliance with proper color contrast. Essential for CSS styling, 
                  UI/UX design, and maintaining consistent visual identity across digital products.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Graphic Design</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Graphic designers rely on precise color selection for logos, branding materials, and 
                  marketing collateral. Match brand colors exactly, create harmonious color palettes, 
                  and ensure color consistency across print and digital media. Perfect for creating 
                  style guides, brand identity systems, and professional design work.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Digital Art & Illustration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Digital artists and illustrators use color pickers to select perfect colors for their 
                  artwork. Create custom color palettes, match colors from reference images, and explore 
                  color relationships for paintings, illustrations, and digital art projects. Essential 
                  for maintaining color accuracy and creating visually appealing compositions.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Brand & Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Marketing professionals and brand managers use color tools to maintain brand consistency 
                  across all marketing materials. Ensure logo colors are accurately reproduced, create 
                  seasonal color variations, and develop marketing campaigns with cohesive color schemes. 
                  Critical for brand identity management and professional marketing communications.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ColorPickerToolPage;
