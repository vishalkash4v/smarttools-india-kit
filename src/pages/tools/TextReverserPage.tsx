
import React from 'react';
import TextReverser from '@/components/tools/TextReverser';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Undo, Type, Zap, RefreshCw } from 'lucide-react';

const TextReverserPage = () => {
  return (
    <PageWrapper
      title="Text Reverser"
      description="Reverse text characters, words, or lines instantly. Perfect for creating mirror text, encoding messages, or text manipulation tasks with professional accuracy."
      keywords="text reverser, reverse text, mirror text, backward text, text manipulation, string reversal, character reversal"
      pageTitle="Text Reverser"
      toolCategory="Text Tool"
      canonicalUrl="https://fyntools.com/text-reverser"
      heroImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=630&fit=crop"
    >
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/20">
                <Undo className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text">
              Text Reverser Tool
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Reverse text characters, words, or entire lines with professional precision and instant results.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Instant Reversal</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Reverse text in real-time as you type</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Type className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Multiple Modes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Reverse characters, words, or lines</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <RefreshCw className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Easy Reset</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Clear and reset with one click</CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Main Text Reverser */}
          <Card className="hover-lift bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm border-primary/20 shadow-2xl mb-12">
            <CardHeader className="text-center border-b border-border/50">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Undo className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                  Text Reverser
                </CardTitle>
              </div>
              <CardDescription className="text-lg">
                Professional text reversal tool for all your text manipulation needs
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <TextReverser />
            </CardContent>
          </Card>

          {/* Info Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Creative Writing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Writers and content creators use text reversal for creative effects, generating unique 
                  text patterns, or creating puzzles and word games. Perfect for crafting engaging social 
                  media content, creating text-based puzzles, or adding visual interest to written content. 
                  Great for poetry, creative writing exercises, and artistic text layouts.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Educational Uses</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Teachers and students can use reversed text for language learning exercises, spelling 
                  practice, and reading comprehension activities. Create challenging word puzzles, test 
                  pattern recognition skills, or develop exercises that improve reading fluency. Excellent 
                  for dyslexia therapy and cognitive training exercises.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Data Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Developers and data analysts use text reversal for string manipulation tasks, data 
                  transformation, and testing algorithms. Useful for creating test data, validating 
                  palindrome functions, or preprocessing text for specific applications. Essential for 
                  testing text processing functions and validation routines.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Privacy & Encoding</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Simple text obfuscation technique for basic privacy needs. While not cryptographically 
                  secure, reversed text can be useful for casual encoding of messages, creating simple 
                  ciphers, or protecting text from casual viewing. Often used in combination with other 
                  text manipulation techniques for more complex encoding schemes.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default TextReverserPage;
