
import React from 'react';
import JavaScriptMinifier from '@/components/tools/JavaScriptMinifier';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Zap, FileDown, Minimize } from 'lucide-react';

const JavaScriptMinifierPage = () => {
  return (
    <PageWrapper
      title="JavaScript Minifier"
      description="Professional JavaScript minifier and compressor. Reduce file sizes, optimize code, and improve website performance with our advanced JS minification tool."
      keywords="JavaScript minifier, JS minifier, code compression, file size reduction, website optimization, performance improvement, code minification"
      pageTitle="JavaScript Minifier"
      toolCategory="Developer Tool"
      canonicalUrl="https://fyntools.com/javascript-minifier"
      heroImage="https://images.unsplash.com/photo-1516996087931-5ae405802f9f?w=1200&h=630&fit=crop"
    >
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/20">
                <Code className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text">
              JavaScript Minifier
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Compress and optimize your JavaScript code for better website performance and faster loading.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Minimize className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Compress Code</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Reduce file size by removing whitespace and comments</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Instant Results</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Get minified code immediately with one click</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <FileDown className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Download Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Copy or download minified code for production use</CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Main Minifier Tool */}
          <Card className="hover-lift bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm border-primary/20 shadow-2xl mb-12">
            <CardHeader className="text-center border-b border-border/50">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                  JS Code Minifier
                </CardTitle>
              </div>
              <CardDescription className="text-lg">
                Professional JavaScript compression and optimization tool
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <JavaScriptMinifier />
            </CardContent>
          </Card>

          {/* Info Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Website Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Improve your website's loading speed by reducing JavaScript file sizes. Minified code 
                  downloads faster, reducing bandwidth usage and improving user experience. Essential for 
                  mobile users and slow internet connections. Every kilobyte saved contributes to better 
                  Core Web Vitals scores and SEO rankings.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Production Deployment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Prepare your JavaScript code for production deployment with professional minification. 
                  Remove unnecessary characters, comments, and whitespace while preserving functionality. 
                  Perfect for frameworks like React, Vue, Angular, or vanilla JavaScript projects that 
                  need optimization before going live.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Bandwidth Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Reduce server bandwidth costs and improve CDN efficiency with smaller file sizes. 
                  Minified JavaScript files can be 60-80% smaller than their original versions, leading to 
                  significant cost savings for high-traffic websites. Better cache performance and reduced 
                  server load are additional benefits.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Development Workflow</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Integrate minification into your development workflow for better code management. 
                  Keep readable, commented code for development while generating optimized versions for 
                  production. Our tool preserves code functionality while maximizing compression, 
                  ensuring your applications run smoothly in production environments.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default JavaScriptMinifierPage;
