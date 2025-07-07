
import React from 'react';
import BmiCalculatorComponent from '@/components/tools/BmiCalculator';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, Heart, Target, TrendingUp } from 'lucide-react';

const BmiCalculatorPage = () => {
  return (
    <PageWrapper
      title="BMI Calculator"
      description="Calculate your Body Mass Index (BMI) and understand your health status. Professional BMI calculator with health recommendations and weight categories."
      keywords="BMI calculator, body mass index, weight calculator, health calculator, fitness calculator, obesity calculator, underweight calculator"
      pageTitle="BMI Calculator"
      toolCategory="Health Calculator"
      canonicalUrl="https://fyntools.com/bmi-calculator"
      heroImage="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=630&fit=crop"
    >
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/20">
                <Scale className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text">
              BMI Calculator
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Calculate your Body Mass Index and understand your health status with professional guidance.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Health Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Understand your health status based on BMI</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Weight Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Clear classification of weight ranges</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Health Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Professional health recommendations</CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Main BMI Calculator */}
          <Card className="hover-lift bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm border-primary/20 shadow-2xl mb-12">
            <CardHeader className="text-center border-b border-border/50">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Scale className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                  Body Mass Index Calculator
                </CardTitle>
              </div>
              <CardDescription className="text-lg">
                Professional BMI calculation and health assessment tool
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <BmiCalculatorComponent />
            </CardContent>
          </Card>

          {/* Info Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Health Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Regular BMI monitoring is essential for maintaining optimal health and preventing weight-related 
                  health issues. Track your progress over time, set realistic health goals, and understand how 
                  your weight relates to your overall health status. Perfect for individuals starting their 
                  fitness journey or maintaining long-term health objectives.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Fitness Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Use BMI calculations to develop effective fitness and nutrition plans. Personal trainers, 
                  nutritionists, and fitness enthusiasts rely on BMI data to create personalized workout 
                  routines and dietary recommendations. Essential for setting realistic weight loss or gain 
                  targets and monitoring fitness progress over time.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Medical Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Healthcare professionals use BMI as a screening tool for weight-related health risks. 
                  Understanding your BMI helps in discussions with doctors about potential health concerns, 
                  medication dosages, and treatment plans. Important for health insurance applications, 
                  medical examinations, and preventive healthcare planning.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Lifestyle Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  BMI provides valuable insights for making informed lifestyle choices about diet, exercise, 
                  and overall wellness. While BMI has limitations and doesn't account for muscle mass or 
                  body composition, it serves as a useful starting point for health awareness and lifestyle 
                  modifications. Always consult healthcare professionals for comprehensive health assessments.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default BmiCalculatorPage;
