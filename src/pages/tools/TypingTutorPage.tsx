
import React from 'react';
import TypingTutor from '@/components/tools/TypingTutor';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Keyboard, Target, BookOpen, Trophy } from 'lucide-react';

const TypingTutorPage = () => {
  return (
    <PageWrapper
      title="Typing Tutor"
      description="Learn touch typing with guided lessons in English and Hindi. Master the keyboard with our interactive typing tutor and improve your speed and accuracy."
      keywords="typing tutor, learn typing, touch typing, keyboard lessons, typing practice, Hindi typing, English typing, typing skills"
      pageTitle="Typing Tutor - Learn Touch Typing"
      toolCategory="Typing Tools"
      canonicalUrl="https://fyntools.com/typing-tutor"
      heroImage="https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=1200&h=630&fit=crop"
    >
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/20">
                <Keyboard className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text">
              Typing Tutor
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Master touch typing with guided lessons in English and Hindi. Build muscle memory and improve your speed.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Structured Lessons</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Progressive lessons from beginner to advanced level</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Real-time Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Instant WPM, accuracy, and error tracking</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Trophy className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Dual Language</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Learn typing in both English and Hindi</CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Main Typing Tutor */}
          <Card className="hover-lift bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm border-primary/20 shadow-2xl mb-12">
            <CardHeader className="text-center border-b border-border/50">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Keyboard className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                  Interactive Typing Lessons
                </CardTitle>
              </div>
              <CardDescription className="text-lg">
                Learn proper finger placement and build typing speed naturally
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <TypingTutor />
            </CardContent>
          </Card>

          {/* Info Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Learning Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Touch typing is an essential skill in today's digital world. Our typing tutor helps you develop proper 
                  finger placement and muscle memory, leading to faster and more accurate typing. Studies show that 
                  proficient typists can increase their productivity by up to 40% and reduce the risk of repetitive 
                  strain injuries. Start with basic lessons and gradually progress to complex texts.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Proper Technique</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Maintain good posture with feet flat on the floor and wrists straight. Position your fingers on 
                  the home row keys (ASDF for left hand, JKL; for right hand). Use the correct finger for each key 
                  and always return to the home position. Keep your eyes on the screen, not the keyboard. Practice 
                  regularly for 15-30 minutes daily to see significant improvement in your typing speed and accuracy.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Hindi Typing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Learning Hindi typing opens up opportunities in government jobs, content creation, and communication 
                  with Hindi-speaking audiences. Our Hindi lessons cover common words and phrases used in daily 
                  communication. The Devanagari script requires practice to master the character combinations and 
                  special symbols. Start with simple words and gradually move to complex sentences and paragraphs.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Progress Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Monitor your improvement with detailed statistics including words per minute (WPM), accuracy 
                  percentage, and error count. Set daily goals and track your progress over time. Most beginners 
                  start at 10-20 WPM and can reach 40+ WPM with consistent practice. Professional typists often 
                  achieve 60-80 WPM or higher. Focus on accuracy first, as speed will naturally improve with practice.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default TypingTutorPage;
