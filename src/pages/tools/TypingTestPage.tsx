
import React from 'react';
import TypingTest from '@/components/tools/TypingTest';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Timer, Zap, Target, Award } from 'lucide-react';

const TypingTestPage = () => {
  return (
    <PageWrapper
      title="Typing Test"
      description="Test your typing speed and accuracy with our comprehensive typing test. Choose from different time durations and languages including English and Hindi."
      keywords="typing test, typing speed test, WPM test, typing accuracy, speed typing, Hindi typing test, English typing test"
      pageTitle="Typing Speed Test - Measure Your WPM"
      toolCategory="Typing Tools"
      canonicalUrl="https://fyntools.com/typing-test"
      heroImage="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=1200&h=630&fit=crop"
    >
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/20">
                <Timer className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text">
              Typing Speed Test
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Measure your typing speed and accuracy with timed tests in English and Hindi.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Timer className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Timed Tests</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>30 seconds to 5 minutes duration options</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">WPM Calculation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Real-time words per minute tracking</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Accuracy Score</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Detailed accuracy percentage and error count</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Instant Results</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Comprehensive test results and performance analysis</CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Main Typing Test */}
          <Card className="hover-lift bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm border-primary/20 shadow-2xl mb-12">
            <CardHeader className="text-center border-b border-border/50">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Timer className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                  Typing Speed Assessment
                </CardTitle>
              </div>
              <CardDescription className="text-lg">
                Challenge yourself with our professional typing speed test
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <TypingTest />
            </CardContent>
          </Card>

          {/* Info Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Understanding WPM</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Words Per Minute (WPM) is the standard measurement for typing speed. It's calculated by dividing 
                  the total number of characters typed by 5 (average word length), then dividing by the time taken 
                  in minutes. A good typing speed for most people is around 40 WPM, while professional typists 
                  often achieve 65-75 WPM. Data entry specialists may reach 80+ WPM with high accuracy.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Accuracy Importance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  While speed is important, accuracy is equally crucial for effective typing. A typing speed of 
                  50 WPM with 95% accuracy is much more valuable than 70 WPM with 80% accuracy. Errors require 
                  time to correct, reducing overall productivity. Focus on maintaining at least 95% accuracy 
                  while gradually building speed. Quality always trumps quantity in professional typing scenarios.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Career Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Fast and accurate typing skills are valuable in almost every modern career. Administrative 
                  professionals, writers, programmers, and customer service representatives all benefit from 
                  efficient typing. Many jobs require minimum typing speeds (typically 30-40 WPM), and higher 
                  speeds can lead to better job opportunities and increased productivity. Regular testing helps 
                  maintain and improve these essential skills.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Test Strategies</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  To achieve your best results, ensure you're in a comfortable, distraction-free environment. 
                  Position your hands correctly on the home row and maintain good posture. Read ahead of what 
                  you're typing to maintain flow. Don't rush; focus on steady, consistent typing rhythm. Take 
                  practice tests regularly to track improvement and identify areas that need more work.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default TypingTestPage;
