
import React from 'react';
import GstCalculator from '@/components/tools/GstCalculator';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Percent, Calculator, TrendingUp } from 'lucide-react';

const GstCalculatorPage = () => {
  return (
    <PageWrapper
      title="GST Calculator - Calculate GST Tax Online"
      description="Free GST Calculator for India. Calculate Goods and Services Tax (GST) amounts with detailed breakdown of CGST, SGST, and IGST. Professional tax calculation tool for businesses and individuals."
      keywords="GST calculator India, goods and services tax calculator, CGST SGST IGST calculator, tax calculation tool, Indian tax calculator, business GST tool, free GST calculator, online tax calculator"
      pageTitle="GST Calculator"
      toolCategory="Tax Calculator"
      canonicalUrl="https://fyntools.com//gst-calculator"
      heroImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=630&fit=crop"
    >
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/20">
                <Percent className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text">
              Professional GST Calculator
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Calculate Goods and Services Tax with precision. Get instant breakdown of CGST, SGST, and IGST 
              for your business needs in India.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Calculator className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Instant Results</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Get immediate GST calculations with detailed breakdown</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">All GST Rates</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Supports 5%, 12%, 18%, and 28% GST rates</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Percent className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">CGST/SGST Split</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Automatic calculation of central and state GST components</CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Main Calculator */}
          <Card className="hover-lift bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm border-primary/20 shadow-2xl">
            <CardHeader className="text-center border-b border-border/50">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Percent className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                  GST Calculator
                </CardTitle>
              </div>
              <CardDescription className="text-lg">
                Professional GST calculation tool for Indian businesses and individuals
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <GstCalculator />
            </CardContent>
          </Card>

          {/* Info Section */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">About GST in India</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Goods and Services Tax (GST) is a comprehensive indirect tax on the supply of goods and services in India. 
                  It has replaced multiple taxes like VAT, service tax, and excise duty.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">GST Rate Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  GST rates in India are: 5% (essential items), 12% (standard items), 18% (most goods), 
                  and 28% (luxury items). Some items are exempt or have special rates.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default GstCalculatorPage;
