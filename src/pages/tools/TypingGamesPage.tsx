
import React from 'react';
import TypingGames from '@/components/tools/TypingGames';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad2, Star, Zap, Trophy, Target, Brain, Keyboard, Users, Clock, Heart } from 'lucide-react';

const TypingGamesPage = () => {
  return (
    <PageWrapper
      title="15+ Free Typing Games - Speed Test & Practice Online"
      description="Play 15+ fun typing games online. Improve typing speed with WPM tests, accuracy challenges, and multiplayer races. Free typing practice for beginners and experts in English & Hindi."
      keywords="typing games, typing speed test, online typing practice, WPM test, typing test 1 minute, typing games for adults, keyboard test online, touch typing course, typing practice online, free typing games, typing race, typing challenges, typing tutor, learn typing, typing skills"
      pageTitle="Free Online Typing Games - Test Your Speed & Accuracy"
      toolCategory="Typing Tools"
      canonicalUrl="https://fyntools.com/typing-games"
      heroImage="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=1200&h=630&fit=crop"
    >
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/20">
                <Gamepad2 className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text">
              15+ Free Typing Games Online
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Improve your typing speed and accuracy with fun games. Take WPM tests, practice touch typing, and compete with others. Perfect for beginners and experts.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-4 text-sm">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full">Free Typing Speed Test</span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded-full">WPM Calculator</span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 rounded-full">Accuracy Tracker</span>
              <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 rounded-full">Touch Typing Practice</span>
            </div>
          </div>

          {/* Featured Game Types */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center hover-lift bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200">
              <CardHeader className="pb-3">
                <Zap className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <CardTitle className="text-lg">Speed Tests</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>1-minute, 3-minute, and 5-minute typing speed tests with WPM tracking</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200">
              <CardHeader className="pb-3">
                <Target className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <CardTitle className="text-lg">Accuracy Master</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Perfect your typing accuracy with correction tracking and error analysis</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200">
              <CardHeader className="pb-3">
                <Users className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <CardTitle className="text-lg">Multiplayer Race</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Compete with other players in real-time typing races and challenges</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border-red-200">
              <CardHeader className="pb-3">
                <Brain className="h-8 w-8 text-red-500 mx-auto mb-2" />
                <CardTitle className="text-lg">Skill Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Code typing, number practice, and advanced typing challenges</CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Main Typing Games */}
          <Card className="hover-lift bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm border-primary/20 shadow-2xl mb-12">
            <CardHeader className="text-center border-b border-border/50">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Gamepad2 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                  Interactive Typing Games & Speed Tests
                </CardTitle>
              </div>
              <CardDescription className="text-lg">
                Choose from 15+ different game modes to improve your typing skills
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <TypingGames />
            </CardContent>
          </Card>

          {/* Game Modes Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="hover-lift">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Clock className="h-6 w-6 text-blue-500" />
                  <CardTitle className="text-lg">Speed Burst (30s)</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>Quick 30-second typing challenges to test your instant speed and reflexes</CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Heart className="h-6 w-6 text-red-500" />
                  <CardTitle className="text-lg">Survival Mode</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>Type before time runs out or lose a life. How long can you survive?</CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Keyboard className="h-6 w-6 text-green-500" />
                  <CardTitle className="text-lg">Number Ninja</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>Practice typing numbers and symbols to improve overall keyboard skills</CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Star className="h-6 w-6 text-yellow-500" />
                  <CardTitle className="text-lg">Story Mode</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>Type complete stories and passages for comprehensive practice</CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Brain className="h-6 w-6 text-purple-500" />
                  <CardTitle className="text-lg">Code Typer</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>Practice typing programming code snippets and improve coding speed</CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Trophy className="h-6 w-6 text-orange-500" />
                  <CardTitle className="text-lg">Typing Olympics</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>Complete multiple mini-challenges to become a typing champion</CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Info Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">🎯 For Beginners - Learn Touch Typing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Start your typing journey with our beginner-friendly games. Learn proper finger placement, 
                  practice alphabets and words, and gradually build up your speed. Our typing tutor guides 
                  you through home row, top row, and bottom row practice with visual finger placement guides. 
                  Perfect for those who want to learn typing from scratch.
                </CardDescription>
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Custom lessons for alphabets, words, and numbers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Interactive finger placement guides</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Gradual progression from easy to hard</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">🏆 For Experts - Advanced Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Take your typing skills to the next level with advanced challenges. Test your WPM with 
                  difficult paragraphs, code snippets, and timed races. Track your performance with detailed 
                  analytics including accuracy heatmaps, mistake tracking, and progress history. Compete 
                  with others in multiplayer typing races and climbing leaderboards.
                </CardDescription>
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>1-minute, 3-minute, and 5-minute speed tests</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Advanced accuracy tracking with error analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Multiplayer races and competitive challenges</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">📊 Accuracy Tracking & Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Monitor your improvement with comprehensive statistics. Track both net accuracy (without 
                  corrections) and gross accuracy (including backspaces). See detailed metrics including 
                  WPM, error count, correction count, and keystroke analysis. Our dual accuracy system 
                  helps you understand both your raw typing ability and your practical typing efficiency.
                </CardDescription>
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span>Net accuracy: Raw typing without corrections</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span>Gross accuracy: Including correction time</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span>Real-time WPM and keystroke tracking</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">🌍 Multilingual Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Practice typing in both English and Hindi languages. Our games support different scripts 
                  and character sets, making it perfect for bilingual users. Whether you're learning English 
                  typing for professional use or Hindi typing for regional work, our platform provides 
                  comprehensive practice materials in both languages with appropriate difficulty levels.
                </CardDescription>
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    <span>English typing practice with common words</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    <span>Hindi typing support with Devanagari script</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    <span>Language-specific difficulty levels</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default TypingGamesPage;
