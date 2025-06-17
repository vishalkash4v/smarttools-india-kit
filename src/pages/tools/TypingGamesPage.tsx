
import React from 'react';
import TypingGames from '@/components/tools/TypingGames';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad2, Star, Zap, Trophy } from 'lucide-react';

const TypingGamesPage = () => {
  return (
    <PageWrapper
      title="Typing Games"
      description="Improve your typing skills with fun and engaging games. Challenge yourself with word games, time attacks, and survival modes in English and Hindi."
      keywords="typing games, typing practice games, fun typing, typing challenges, word games, typing skills, Hindi typing games"
      pageTitle="Typing Games - Fun Way to Learn Typing"
      toolCategory="Typing Tools"
      canonicalUrl="https://tools.best-smm.in/typing-games"
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
              Typing Games
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Make learning fun with engaging typing games that improve your speed and accuracy.
            </p>
          </div>

          {/* Game Modes */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover-lift bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200">
              <CardHeader className="pb-3">
                <Star className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <CardTitle className="text-lg">Word Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Type words correctly to score points with no time pressure</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200">
              <CardHeader className="pb-3">
                <Zap className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <CardTitle className="text-lg">Time Attack</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Type as many words as possible within the time limit</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border-red-200">
              <CardHeader className="pb-3">
                <Trophy className="h-8 w-8 text-red-500 mx-auto mb-2" />
                <CardTitle className="text-lg">Survival Mode</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Type words before time runs out or lose a life</CardDescription>
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
                  Interactive Typing Games
                </CardTitle>
              </div>
              <CardDescription className="text-lg">
                Learn while having fun with our variety of typing games
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <TypingGames />
            </CardContent>
          </Card>

          {/* Info Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Gamified Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Learning through games makes the process enjoyable and less stressful. Our typing games use 
                  point systems, levels, and challenges to keep you motivated while building muscle memory. 
                  The competitive element encourages regular practice, leading to faster skill development. 
                  Games reduce the monotony of traditional typing practice and make learning feel like entertainment 
                  rather than work, resulting in longer and more frequent practice sessions.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Skill Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Each game mode targets different aspects of typing skills. Word Challenge builds accuracy 
                  and proper finger placement without pressure. Time Attack improves speed and helps you work 
                  under pressure, simulating real-world typing scenarios. Survival Mode enhances reflexes 
                  and quick decision-making while maintaining accuracy. The progressive difficulty ensures 
                  continuous improvement as your skills advance through the levels.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Stress-Free Practice</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Unlike formal typing tests, games create a relaxed environment where mistakes feel less 
                  consequential. This reduces typing anxiety and allows you to focus on technique rather than 
                  performance pressure. The immediate feedback and rewards system help build confidence 
                  gradually. Games also provide natural break points, preventing fatigue that can occur 
                  with intensive practice sessions, making them ideal for learners of all ages.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Progress Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Our games track your performance metrics including score, accuracy, speed, and level progression. 
                  This data helps identify your strengths and areas for improvement. The scoring system provides 
                  immediate feedback on your performance, while level progression gives you clear goals to work 
                  towards. Regular gaming sessions will show measurable improvements in both speed and accuracy, 
                  making your typing skill development visible and rewarding.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default TypingGamesPage;
