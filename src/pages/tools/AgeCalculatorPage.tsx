
import React from 'react';
import AgeCalculator from '@/components/tools/AgeCalculator';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift, Calendar, Clock, Heart } from 'lucide-react';

const AgeCalculatorPage = () => {
  return (
    <PageWrapper
      title="Age Calculator"
      description="Calculate your exact age in years, months, days, hours, and minutes. Professional age calculator with birth date analysis and milestone tracking."
      keywords="age calculator, calculate age, birth date calculator, age in days, age in months, exact age, date of birth calculator"
      pageTitle="Age Calculator"
      toolCategory="Date Calculator"
      canonicalUrl="https://fyntools.com/age-calculator"
      heroImage="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&h=630&fit=crop"
    >
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/20">
                <Gift className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text">
              Age Calculator
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Calculate your exact age in years, months, days, and more with professional precision.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Precise Calculation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Exact age in years, months, and days</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Multiple Formats</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Age in hours, minutes, and seconds</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Milestone Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Track important life milestones</CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Main Age Calculator */}
          <Card className="hover-lift bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm border-primary/20 shadow-2xl mb-12">
            <CardHeader className="text-center border-b border-border/50">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Gift className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                  Age Calculator
                </CardTitle>
              </div>
              <CardDescription className="text-lg">
                Professional age calculation tool with detailed breakdown
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <AgeCalculator />
            </CardContent>
          </Card>

          {/* Info Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Personal Milestones</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Track important life milestones and anniversaries with precision. Whether you're planning 
                  a birthday celebration, calculating retirement eligibility, or determining age requirements 
                  for various activities, our calculator provides exact measurements. Perfect for understanding 
                  your life journey and planning future goals based on your current age.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Official Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Essential for filling out official forms, applications, and legal documents that require 
                  precise age information. Whether you're applying for insurance, government benefits, 
                  educational programs, or employment opportunities, having your exact age readily available 
                  ensures accuracy in all your official documentation and applications.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Health & Fitness</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Age plays a crucial role in health assessments, fitness planning, and medical evaluations. 
                  Healthcare providers often need precise age information for determining appropriate treatments, 
                  medication dosages, and health screening schedules. Fitness professionals use age data to 
                  create personalized workout plans and monitor physical development progress.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Fun Facts & Trivia</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Discover fascinating facts about your age, such as how many days you've been alive, the 
                  total hours you've experienced, or when you'll reach significant milestones like 10,000 
                  days of life. Great for birthday parties, social media posts, or simply satisfying 
                  curiosity about your life's timeline in different measurements.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default AgeCalculatorPage;
