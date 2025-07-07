
import React from 'react';
import TextCaseConverter from '@/components/tools/TextCaseConverter';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TextCursorInput, Type, Zap, RefreshCw } from 'lucide-react';

const TextCaseConverterPage = () => {
  return (
    <PageWrapper
      title="Text Case Converter"
      description="Convert text to UPPERCASE, lowercase, Title Case, Sentence case, and more. Professional text transformation tool for writers, developers, and content creators."
      keywords="text case converter, uppercase converter, lowercase converter, title case, sentence case, text transformer, text formatting tool"
      pageTitle="Text Case Converter"
      toolCategory="Text Tool"
      canonicalUrl="https://fyntools.com/text-case-converter"
      heroImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=630&fit=crop"
    >
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/20">
                <TextCursorInput className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text">
              Text Case Converter
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Convert text to UPPERCASE, lowercase, Title Case, Sentence case, and Capitalized Case.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Type className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Multiple Formats</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Upper, lower, title, sentence, and more</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Instant Conversion</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Real-time text transformation</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <RefreshCw className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Easy Reset</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Quick clear and reset functionality</CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Main Text Case Converter */}
          <Card className="hover-lift bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm border-primary/20 shadow-2xl mb-12">
            <CardHeader className="text-center border-b border-border/50">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-primary/10">
                  <TextCursorInput className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                  Text Transformer
                </CardTitle>
              </div>
              <CardDescription className="text-lg">
                Professional text case conversion and formatting tool
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <TextCaseConverter />
            </CardContent>
          </Card>

          {/* Info Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Content Creation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Writers, bloggers, and content creators use case conversion for consistent formatting 
                  across articles, social media posts, and marketing materials. Convert headlines to 
                  title case, standardize product descriptions, and ensure proper capitalization in 
                  professional content. Essential for maintaining brand consistency and readability.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Data Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Data analysts and database administrators use case conversion to standardize data 
                  entries, clean customer databases, and prepare data for import/export operations. 
                  Convert names to proper case, standardize addresses, and ensure consistent formatting 
                  in spreadsheets and databases for better data quality and analysis.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Programming & Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Developers use case conversion for code formatting, variable naming conventions, and 
                  documentation preparation. Convert code comments, API documentation, and user interface 
                  text to appropriate cases. Essential for maintaining coding standards, preparing 
                  documentation, and ensuring consistent naming conventions across projects.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Academic & Professional</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Students, researchers, and professionals use case conversion for academic papers, 
                  presentations, and formal documents. Ensure proper capitalization in titles, references, 
                  and citations. Perfect for thesis preparation, research papers, business reports, and 
                  any formal documentation requiring consistent text formatting standards.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default TextCaseConverterPage;
