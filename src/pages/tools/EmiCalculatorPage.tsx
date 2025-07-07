
import React from 'react';
import EmiCalculatorComponent from '@/components/tools/EmiCalculator';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Banknote, Calculator, TrendingUp, PieChart } from 'lucide-react';

const EmiCalculatorPage = () => {
  return (
    <PageWrapper
      title="EMI Calculator"
      description="Calculate EMI (Equated Monthly Installment) for home loans, car loans, and personal loans in India. Get detailed loan analysis with principal, interest breakdown."
      keywords="EMI calculator India, loan EMI calculator, home loan EMI, car loan calculator, personal loan EMI, monthly installment calculator, loan calculator"
      pageTitle="EMI Calculator"
      toolCategory="Financial Calculator"
      canonicalUrl="https://fyntools.com/emi-calculator"
      heroImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=630&fit=crop"
    >
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/20">
                <Banknote className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text">
              EMI Calculator
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Calculate your Equated Monthly Installments for loans with detailed interest breakdown.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Calculator className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Accurate Calculation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Precise EMI calculation with detailed breakdown</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Interest Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Principal vs interest breakdown over time</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <PieChart className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Loan Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Total interest and loan cost analysis</CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Main EMI Calculator */}
          <Card className="hover-lift bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm border-primary/20 shadow-2xl mb-12">
            <CardHeader className="text-center border-b border-border/50">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Banknote className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                  Loan EMI Calculator
                </CardTitle>
              </div>
              <CardDescription className="text-lg">
                Professional EMI calculation tool for all types of loans
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <EmiCalculatorComponent />
            </CardContent>
          </Card>

          {/* Info Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Home Loan Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Planning to buy your dream home? Calculate your home loan EMI to determine how much you 
                  can afford to borrow. Compare different loan amounts, interest rates, and tenures to find 
                  the perfect balance between monthly payments and total interest cost. Essential for making 
                  informed decisions about property purchases and budget planning.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Car Loan Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Calculate your car loan EMI to determine the monthly budget needed for your vehicle purchase. 
                  Compare different loan offers from banks and financial institutions to find the best deal. 
                  Understand the total cost of borrowing and make informed decisions about down payment amounts 
                  and loan tenure to minimize your financial burden.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Personal Finance Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Use EMI calculations for personal loans, education loans, and other financial planning needs. 
                  Understand how different interest rates and loan tenures affect your monthly budget. Plan 
                  your finances better by knowing exactly how much you'll pay each month and over the entire 
                  loan period, helping you maintain a healthy financial lifestyle.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Investment Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Compare the cost of borrowing against potential investment returns. Use EMI calculations 
                  to decide between paying cash or taking a loan for major purchases. Understand the 
                  opportunity cost of debt and make strategic financial decisions that align with your 
                  long-term wealth building goals and investment strategies.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default EmiCalculatorPage;
