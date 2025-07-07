
import React from 'react';
import JsonFormatter from '@/components/tools/JsonFormatter';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Braces, Code, CheckCircle, FileText } from 'lucide-react';

const JsonFormatterPage = () => {
  return (
    <PageWrapper
      title="JSON Formatter"
      description="Professional JSON formatter, validator, and beautifier. Format, validate, and minify JSON data with syntax highlighting and error detection for developers."
      keywords="JSON formatter, JSON validator, JSON beautifier, JSON minifier, JSON pretty print, JSON syntax checker, JSON parser"
      pageTitle="JSON Formatter"
      toolCategory="Developer Tool"
      canonicalUrl="https://fyntools.com/json-formatter"
      heroImage="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=630&fit=crop"
    >
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/20">
                <Braces className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text">
              JSON Formatter & Validator
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Format, validate, and beautify your JSON data with professional-grade tools for developers.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Code className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Format & Beautify</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Clean, readable JSON formatting</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Validate Syntax</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Detect and highlight JSON errors</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Minify & Compress</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Compress JSON for production use</CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Main JSON Formatter */}
          <Card className="hover-lift bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm border-primary/20 shadow-2xl mb-12">
            <CardHeader className="text-center border-b border-border/50">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Braces className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                  JSON Processor
                </CardTitle>
              </div>
              <CardDescription className="text-lg">
                Professional JSON formatting, validation, and optimization tool
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <JsonFormatter />
            </CardContent>
          </Card>

          {/* Info Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">API Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Essential for API developers working with JSON responses and requests. Format messy JSON 
                  from API calls, validate response structures, and ensure proper JSON syntax before sending 
                  data to servers. Perfect for debugging REST APIs, testing endpoints, and documenting API 
                  responses with clean, readable JSON examples.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Web Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Frontend and backend developers use JSON formatters for configuration files, data 
                  processing, and application development. Validate package.json files, format complex 
                  data structures, and ensure JSON compatibility across different platforms and 
                  programming languages. Critical for modern web application development.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Data Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Data scientists and analysts work with JSON data from various sources including APIs, 
                  databases, and data exports. Format complex nested JSON structures, validate data 
                  integrity, and prepare JSON files for import into analysis tools. Essential for 
                  data preprocessing and ensuring data quality in analytical workflows.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Production Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Optimize JSON files for production by removing unnecessary whitespace and formatting. 
                  Minified JSON reduces file sizes, improves load times, and decreases bandwidth usage 
                  in web applications. Essential for performance optimization in mobile apps, web 
                  services, and any application where data transfer efficiency matters.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default JsonFormatterPage;
