
import React from 'react';
import CountdownTimer from '@/components/tools/CountdownTimer';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Bell, Target, Zap } from 'lucide-react';

const CountdownTimerPage = () => {
  return (
    <PageWrapper
      title="Countdown Timer"
      description="Professional countdown timer for productivity, events, cooking, and presentations. Set custom timers with visual and audio alerts for better time management."
      keywords="countdown timer, productivity timer, event timer, cooking timer, presentation timer, time management, pomodoro timer"
      pageTitle="Countdown Timer"
      toolCategory="Time Management"
      canonicalUrl="https://fyntools.com/countdown-timer"
      heroImage="https://images.unsplash.com/photo-1495364141860-b0d03eccd065?w=1200&h=630&fit=crop"
    >
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/20">
                <Clock className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text">
              Professional Countdown Timer
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Set custom countdown timers for productivity, cooking, events, and presentations with alerts.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Bell className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Audio Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Get notified when your timer reaches zero</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Custom Duration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Set any duration from seconds to hours</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Quick Presets</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Common timer presets for instant use</CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Main Timer */}
          <Card className="hover-lift bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm border-primary/20 shadow-2xl mb-12">
            <CardHeader className="text-center border-b border-border/50">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                  Countdown Timer
                </CardTitle>
              </div>
              <CardDescription className="text-lg">
                Professional timer for all your time management needs
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <CountdownTimer />
            </CardContent>
          </Card>

          {/* Info Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Productivity & Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Implement the Pomodoro Technique or other time management methods with precise timing. 
                  Set 25-minute focus sessions followed by 5-minute breaks to maximize productivity. 
                  The audio alert ensures you don't miss transitions, helping maintain your workflow rhythm 
                  throughout the day.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Cooking & Kitchen</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Perfect for timing cooking processes, from boiling eggs to baking bread. Set multiple 
                  timers for complex recipes with different cooking stages. Never overcook or undercook 
                  again - the clear audio alert ensures you're notified even when you're away from 
                  the kitchen preparing other ingredients.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Presentations & Meetings</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Keep your presentations on track with precise timing. Set countdown timers for each 
                  section of your presentation or meeting agenda. Great for conference speakers, trainers, 
                  and meeting facilitators who need to manage time effectively and ensure all topics 
                  are covered within the allocated timeframe.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Exercise & Workouts</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Time your workout intervals, rest periods, and exercise sets with precision. Perfect for 
                  HIIT workouts, circuit training, or any timed exercise routine. The large, clear display 
                  is easy to see during workouts, and the audio alert ensures you know when to switch 
                  exercises or take breaks, maintaining optimal training intensity.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default CountdownTimerPage;
