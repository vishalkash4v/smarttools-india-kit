
import React from 'react';
import Stopwatch from '@/components/tools/Stopwatch';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Timer, Zap, Target, Clock } from 'lucide-react';

const StopwatchPage = () => {
  return (
    <PageWrapper
      title="Stopwatch Timer"
      description="Professional online stopwatch for precise time tracking. Perfect for workouts, cooking, productivity sessions, and any activity requiring accurate timing."
      keywords="stopwatch online, timer tool, time tracker, precision timing, workout timer, cooking timer, productivity timer"
      pageTitle="Stopwatch Timer"
      toolCategory="Time Tracker"
      canonicalUrl="https://fyntools.com/stopwatch"
      heroImage="https://images.unsplash.com/photo-1501139083538-0139583c060f?w=1200&h=630&fit=crop"
    >
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/20">
                <Timer className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text">
              Professional Stopwatch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Precise time tracking for all your activities. Start, stop, and reset with professional accuracy.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Instant Start</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>One-click timing with millisecond precision</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Lap Times</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Track multiple intervals and lap times</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Always Accurate</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Browser-based timing with high precision</CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Main Stopwatch */}
          <Card className="hover-lift bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm border-primary/20 shadow-2xl mb-12">
            <CardHeader className="text-center border-b border-border/50">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Timer className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                  Stopwatch Timer
                </CardTitle>
              </div>
              <CardDescription className="text-lg">
                Professional timing tool for all your precision needs
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <Stopwatch />
            </CardContent>
          </Card>

          {/* Info Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Perfect for Athletes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Whether you're training for a marathon, timing your gym sessions, or tracking your swimming laps, 
                  our stopwatch provides the precision you need. Use lap timing to monitor your performance 
                  improvements and maintain consistent training intervals.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Productivity & Work</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Boost your productivity with time-boxing techniques like the Pomodoro method. Track how long 
                  tasks take to complete, monitor meeting durations, or time your presentations. Perfect for 
                  freelancers, students, and professionals who need accurate time tracking.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Cooking & Kitchen</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Time your cooking processes with precision. Whether you're boiling eggs, timing bread rising, 
                  or monitoring cooking stages, our stopwatch helps you achieve consistent culinary results. 
                  The large display makes it easy to check times while your hands are busy in the kitchen.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Features & Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Our stopwatch features millisecond accuracy, lap time tracking, and a clean, easy-to-read 
                  interface. It works entirely in your browser with no downloads required, maintains timing 
                  even if you switch tabs, and provides reliable performance across all devices and platforms.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default StopwatchPage;
