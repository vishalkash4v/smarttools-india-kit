
import React from 'react';
import WhitespaceRemover from '@/components/tools/WhitespaceRemover';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eraser, FileText, Zap, Minimize2 } from 'lucide-react';

const WhitespaceRemoverPage = () => {
  return (
    <PageWrapper
      title="Whitespace Remover"
      description="Remove unnecessary whitespace, spaces, and empty lines from text. Clean up messy text formatting with our professional whitespace removal tool."
      keywords="whitespace remover, remove spaces, text cleaner, empty line remover, text formatter, clean text, space remover, text optimization"
      pageTitle="Whitespace Remover"
      toolCategory="Text Tool"
      canonicalUrl="https://fyntools.com/whitespace-remover"
      heroImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=630&fit=crop"
    >
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/20">
                <Eraser className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text">
              Whitespace Remover
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Clean up your text by removing unnecessary spaces, tabs, and empty lines instantly.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Instant Cleaning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Remove whitespace in real-time</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Minimize2 className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Multiple Options</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Remove spaces, tabs, and empty lines</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Text Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Clean and optimize text formatting</CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Main Whitespace Remover */}
          <Card className="hover-lift bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm border-primary/20 shadow-2xl mb-12">
            <CardHeader className="text-center border-b border-border/50">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Eraser className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                  Text Cleaner
                </CardTitle>
              </div>
              <CardDescription className="text-lg">
                Professional whitespace removal and text cleaning tool
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <WhitespaceRemover />
            </CardContent>
          </Card>

          {/* Info Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Code Cleaning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Developers use whitespace removal for code optimization, minification preparation, and 
                  cleaning up copied code snippets. Remove unnecessary formatting from HTML, CSS, JavaScript, 
                  or other code before processing or deployment. Essential for preparing code for production 
                  environments where file size and formatting matter.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Data Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Clean data exported from spreadsheets, databases, or other sources that contain unwanted 
                  whitespace. Perfect for preparing data for import into systems that require clean, 
                  formatted text. Essential for data analysts, database administrators, and anyone working 
                  with text data that needs to be properly formatted.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Content Publishing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Writers, editors, and content creators use whitespace removal to clean up text copied 
                  from various sources. Remove unwanted line breaks, extra spaces, and formatting 
                  inconsistencies from documents before publishing. Perfect for preparing content for 
                  websites, social media, or print publication where clean formatting is essential.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Document Formatting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Standardize document formatting by removing inconsistent spacing and empty lines. 
                  Perfect for cleaning up documents before sharing, archiving, or processing. Great for 
                  administrative assistants, document processors, and anyone who needs to maintain 
                  consistent formatting standards across multiple documents and text sources.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default WhitespaceRemoverPage;
