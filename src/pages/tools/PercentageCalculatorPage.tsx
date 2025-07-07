
import React from 'react';
import PercentageCalculator from '@/components/tools/PercentageCalculator';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Percent, TrendingUp, Target } from 'lucide-react';

const PercentageCalculatorPage = () => {
  return (
    <PageWrapper
      title="Percentage Calculator"
      description="Professional percentage calculator for business, finance, education, and daily use. Calculate percentage increase, decrease, and various percentage problems instantly."
      keywords="percentage calculator, percent calculator, percentage increase, percentage decrease, discount calculator, grade calculator, percentage formula"
      pageTitle="Percentage Calculator"
      toolCategory="Calculator"
      canonicalUrl="https://fyntools.com/percentage-calculator"
      heroImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=630&fit=crop"
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
              Percentage Calculator
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Perform various percentage calculations with ease for business, education, and daily use.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Percent className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Multiple Calculations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Various percentage calculation types</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Instant Results</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Real-time calculation with immediate results</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Accurate Precision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Professional-grade calculation accuracy</CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Main Percentage Calculator */}
          <Card className="hover-lift bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm border-primary/20 shadow-2xl mb-12">
            <CardHeader className="text-center border-b border-border/50">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Calculator className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                  Percentage Calculator
                </CardTitle>
              </div>
              <CardDescription className="text-lg">
                Professional percentage calculation tool for various applications
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <PercentageCalculator />
            </CardContent>
          </Card>

          {/* Info Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Business & Finance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Essential for business calculations including profit margins, sales growth, discount 
                  calculations, and financial analysis. Calculate commission rates, tax amounts, interest 
                  rates, and investment returns. Perfect for entrepreneurs, sales professionals, and 
                  financial analysts who need quick and accurate percentage calculations for decision-making.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Education & Grading</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Teachers and students use percentage calculators for grade calculations, test scores, 
                  and academic progress tracking. Calculate exam percentages, determine grade point 
                  averages, and analyze student performance trends. Essential for educational institutions, 
                  tutors, and students monitoring their academic progress.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Shopping & Discounts</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Calculate discounts, sales tax, tips, and savings during shopping. Determine the final 
                  price after discounts, compare deals, and calculate savings percentages. Perfect for 
                  smart shopping, budget planning, and ensuring you get the best deals on purchases. 
                  Great for both consumers and retail professionals.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Data Analysis & Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Analyze data trends, calculate growth rates, and determine statistical percentages. 
                  Essential for market research, survey analysis, and performance metrics. Use for 
                  calculating completion rates, success percentages, and comparative analysis in 
                  business intelligence, research projects, and data-driven decision making.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default PercentageCalculatorPage;
