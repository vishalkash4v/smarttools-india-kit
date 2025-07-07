
import React from 'react';
import DuplicateLineRemoverComponent from '@/components/tools/DuplicateLineRemover';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ListX, FileText, Zap, CheckCircle } from 'lucide-react';

const DuplicateLineRemoverPage = () => {
  return (
    <PageWrapper
      title="Duplicate Line Remover"
      description="Remove duplicate lines from text instantly. Clean up data, lists, and documents by eliminating repeated lines with our professional text processing tool."
      keywords="duplicate line remover, remove duplicate lines, text deduplication, unique lines, list cleaner, text processor, data cleaning tool"
      pageTitle="Duplicate Line Remover"
      toolCategory="Text Tool"
      canonicalUrl="https://fyntools.com/duplicate-line-remover"
      heroImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=630&fit=crop"
    >
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/20">
                <ListX className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text">
              Duplicate Line Remover
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Remove duplicate lines from your text quickly and easily to clean up data and documents.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Instant Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Remove duplicates in real-time</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Preserve Order</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Maintains original line order</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Large Text Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Handle large documents efficiently</CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Main Duplicate Remover */}
          <Card className="hover-lift bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm border-primary/20 shadow-2xl mb-12">
            <CardHeader className="text-center border-b border-border/50">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-primary/10">
                  <ListX className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                  Text Deduplicator
                </CardTitle>
              </div>
              <CardDescription className="text-lg">
                Professional duplicate line removal and text cleaning tool
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <DuplicateLineRemoverComponent />
            </CardContent>
          </Card>

          {/* Info Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Data Cleaning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Essential for data analysts and database administrators who need to clean datasets 
                  before processing. Remove duplicate entries from CSV files, database exports, and 
                  data imports to ensure data integrity. Perfect for preparing clean datasets for 
                  analysis, reporting, and database operations without duplicate records.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">List Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Perfect for managing email lists, contact databases, and inventory lists. Remove 
                  duplicate entries from mailing lists, customer databases, and product catalogs. 
                  Essential for email marketing, customer relationship management, and maintaining 
                  clean, organized lists for business operations and communications.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Content Creation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Writers and content creators use duplicate removal to clean up research notes, 
                  bibliography entries, and reference lists. Remove repeated lines from compiled 
                  sources, interview transcripts, and research materials. Great for academic writing, 
                  journalism, and any content creation process involving multiple sources.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Code & Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Developers use duplicate line removal for cleaning up code files, configuration 
                  files, and log files. Remove duplicate import statements, repeated configuration 
                  entries, and redundant log entries. Essential for code maintenance, file optimization, 
                  and preparing clean code for version control and deployment.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default DuplicateLineRemoverPage;
