
import React from 'react';
import LivePreview from '@/components/tools/LivePreview';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Code, Zap, Monitor } from 'lucide-react';

const LivePreviewPage = () => {
  return (
    <PageWrapper
      title="Live HTML Preview"
      description="Instant HTML, CSS, and JavaScript preview tool. Write code and see results in real-time with our professional live preview editor for web development."
      keywords="HTML preview, live preview, code editor, web development, HTML CSS JavaScript, real-time preview, code playground"
      pageTitle="Live HTML Preview"
      toolCategory="Developer Tool"
      canonicalUrl="https://fyntools.com/live-preview"
      heroImage="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=630&fit=crop"
    >
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/20">
                <Eye className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text">
              Live HTML Preview
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Write HTML, CSS, and JavaScript code and see instant results. Perfect for prototyping and learning.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Real-time Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>See changes instantly as you type</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Code className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Full HTML Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>HTML, CSS, and JavaScript all supported</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Monitor className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">No Setup Required</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Start coding immediately in your browser</CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Main Preview Tool */}
          <Card className="hover-lift bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm border-primary/20 shadow-2xl mb-12">
            <CardHeader className="text-center border-b border-border/50">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                  Live Preview Editor
                </CardTitle>
              </div>
              <CardDescription className="text-lg">
                Professional HTML, CSS, and JavaScript playground
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <LivePreview />
            </CardContent>
          </Card>

          {/* Info Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Perfect for Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Whether you're a beginner learning HTML, CSS, and JavaScript or an experienced developer 
                  testing ideas, our live preview tool provides instant feedback. Experiment with different 
                  styles, try new JavaScript functions, and see the results immediately without setting up 
                  a development environment.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Rapid Prototyping</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Quickly prototype web interfaces, test responsive designs, and validate your ideas before 
                  implementing them in larger projects. Share your code snippets with colleagues or save 
                  them for later reference. Perfect for creating quick demos and proof-of-concepts.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Educational Tool</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Teachers and students can use this tool for interactive web development lessons. 
                  Demonstrate HTML structure, CSS styling effects, and JavaScript functionality in real-time. 
                  Students can experiment safely without worrying about breaking anything or complex setup procedures.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Professional Features</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Our live preview tool includes syntax highlighting, error detection, and responsive preview 
                  capabilities. Test your code across different screen sizes, debug JavaScript errors, and 
                  ensure your HTML and CSS are properly formatted. Works entirely in your browser with no 
                  installation required.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default LivePreviewPage;
