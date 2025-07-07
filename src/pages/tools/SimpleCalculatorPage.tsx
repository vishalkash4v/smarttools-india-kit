
import React from 'react';
import SimpleCalculatorComponent from '@/components/tools/SimpleCalculator';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Zap, Plus, Divide } from 'lucide-react';

const SimpleCalculatorPage = () => {
  return (
    <PageWrapper
      title="Simple Calculator"
      description="Professional online calculator for basic arithmetic operations. Perform addition, subtraction, multiplication, and division with keyboard support and memory functions."
      keywords="online calculator, basic calculator, arithmetic calculator, math calculator, simple calculator, addition calculator, division calculator"
      pageTitle="Simple Calculator"
      toolCategory="Calculator"
      canonicalUrl="https://fyntools.com/simple-calculator"
      heroImage="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=630&fit=crop"
    >
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/20">
                <Calculator className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text">
              Simple Calculator
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Perform basic arithmetic operations with our professional online calculator.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Plus className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Basic Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Addition, subtraction, multiplication, division</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Instant Results</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Fast calculations with immediate display</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Divide className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Keyboard Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Use keyboard for faster input and calculations</CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Main Calculator */}
          <Card className="hover-lift bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm border-primary/20 shadow-2xl mb-12">
            <CardHeader className="text-center border-b border-border/50">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Calculator className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                  Basic Calculator
                </CardTitle>
              </div>
              <CardDescription className="text-lg">
                Professional arithmetic calculator for everyday calculations
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <SimpleCalculatorComponent />
            </CardContent>
          </Card>

          {/* Info Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Everyday Calculations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Perfect for daily arithmetic needs including shopping calculations, bill splitting, 
                  budgeting, and general math problems. Whether you're calculating tips at restaurants, 
                  determining discounts while shopping, or solving simple math problems, our calculator 
                  provides quick and accurate results for all your everyday computational needs.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Educational Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Students and teachers can use this calculator for homework verification, classroom 
                  demonstrations, and learning basic arithmetic concepts. Perfect for elementary and 
                  middle school math practice, homework assistance, and quick verification of manual 
                  calculations. Great for building confidence in mathematical problem-solving.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Business & Finance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Essential for basic business calculations including profit margins, expense tracking, 
                  and financial planning. Small business owners, entrepreneurs, and professionals can 
                  use it for quick calculations during meetings, presentations, or while working on 
                  financial documents. Reliable for basic accounting and bookkeeping tasks.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Accessibility & Convenience</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Works on any device with internet access - no app downloads required. Large, 
                  easy-to-click buttons make it accessible for users of all ages and abilities. 
                  Keyboard support allows for faster input, while the clear display ensures results 
                  are easy to read. Perfect alternative when physical calculators aren't available.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default SimpleCalculatorPage;
