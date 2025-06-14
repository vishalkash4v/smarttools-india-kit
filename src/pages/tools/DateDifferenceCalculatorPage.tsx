
import React from 'react';
import DateDifferenceCalculator from '@/components/tools/DateDifferenceCalculator';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarRange, Clock, Calculator, Calendar } from 'lucide-react';

const DateDifferenceCalculatorPage = () => {
  return (
    <PageWrapper
      title="Date Difference Calculator"
      description="Calculate the exact difference between two dates in years, months, days, hours, and minutes. Professional date calculator for age, duration, and time span calculations."
      keywords="date difference calculator, calculate days between dates, date duration calculator, age calculator, time difference, date range calculator"
      pageTitle="Date Difference Calculator"
      toolCategory="Date Calculator"
      canonicalUrl="https://smarttools-india.com/date-difference-calculator"
      heroImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=630&fit=crop"
    >
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/20">
                <CalendarRange className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text">
              Date Difference Calculator
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Calculate the exact duration between two dates in years, months, days, and time units.
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
                <CardDescription>Exact years, months, and days calculation</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Multiple Formats</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Results in days, hours, minutes, and seconds</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Calculator className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Easy Input</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Simple date picker interface</CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Main Date Calculator */}
          <Card className="hover-lift bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm border-primary/20 shadow-2xl mb-12">
            <CardHeader className="text-center border-b border-border/50">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-primary/10">
                  <CalendarRange className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                  Duration Calculator
                </CardTitle>
              </div>
              <CardDescription className="text-lg">
                Professional date difference and duration calculation tool
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <DateDifferenceCalculator />
            </CardContent>
          </Card>

          {/* Info Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Project Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Project managers use date calculators to determine project durations, milestone 
                  spacing, and deadline planning. Calculate the exact time between project start and 
                  end dates, measure sprint durations, and plan resource allocation based on precise 
                  timeframes. Essential for creating accurate project schedules and meeting deliverables.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Legal & Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Legal professionals calculate statute of limitations periods, contract terms, and 
                  compliance deadlines. Determine exact durations for legal proceedings, calculate 
                  notice periods, and ensure compliance with time-sensitive legal requirements. 
                  Critical for maintaining legal accuracy and meeting regulatory obligations.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">HR & Employee Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Human resources professionals calculate employment durations, benefit eligibility 
                  periods, and leave entitlements. Determine years of service, calculate vacation 
                  accruals, and manage probationary periods. Essential for payroll processing, 
                  benefit administration, and employee lifecycle management.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Personal Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Calculate anniversaries, plan events, and track personal milestones. Determine time 
                  until retirement, plan vacation durations, and calculate relationship milestones. 
                  Perfect for event planning, personal goal setting, and understanding time spans for 
                  important life events and personal achievements.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default DateDifferenceCalculatorPage;
