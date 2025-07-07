
import React from 'react';
import TypingCompetition from '@/components/tools/TypingCompetition';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Users, Crown, Medal } from 'lucide-react';

const TypingCompetitionPage = () => {
  return (
    <PageWrapper
      title="Typing Competition"
      description="Compete with players worldwide in real-time typing races. Test your speed against others and climb the leaderboards in English and Hindi typing competitions."
      keywords="typing competition, typing race, multiplayer typing, typing leaderboard, competitive typing, typing tournament, real-time typing"
      pageTitle="Typing Competition - Race Against Others"
      toolCategory="Typing Tools"
      canonicalUrl="https://fyntools.com/typing-competition"
      heroImage="https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=1200&h=630&fit=crop"
    >
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/20">
                <Trophy className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text">
              Typing Competition
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Race against players from around the world in real-time typing competitions.
            </p>
          </div>

          {/* Competition Features */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center hover-lift bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 border-yellow-200">
              <CardHeader className="pb-3">
                <Crown className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                <CardTitle className="text-lg">Real-time Racing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Compete live with other players around the world</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200">
              <CardHeader className="pb-3">
                <Users className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <CardTitle className="text-lg">Multiplayer Races</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Join races with up to 6 players simultaneously</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200">
              <CardHeader className="pb-3">
                <Medal className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <CardTitle className="text-lg">Live Rankings</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>See your position update in real-time during races</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200">
              <CardHeader className="pb-3">
                <Trophy className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <CardTitle className="text-lg">Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Earn badges and track your competitive progress</CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Main Typing Competition */}
          <Card className="hover-lift bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm border-primary/20 shadow-2xl mb-12">
            <CardHeader className="text-center border-b border-border/50">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                  Competitive Typing Arena
                </CardTitle>
              </div>
              <CardDescription className="text-lg">
                Challenge yourself against skilled typists from around the globe
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <TypingCompetition />
            </CardContent>
          </Card>

          {/* Info Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Competitive Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Competing against real players provides motivation that solo practice cannot match. The pressure 
                  of competition helps simulate real-world typing scenarios where speed and accuracy matter. You'll 
                  discover your true capabilities when pushed by opponents and learn from observing different typing 
                  styles and strategies. Competition also provides benchmarks to measure your progress against 
                  typists of varying skill levels, helping you set realistic goals.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Fair Match Making</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Our system matches players of similar skill levels to ensure competitive and enjoyable races. 
                  Beginners won't be overwhelmed by expert typists, while advanced players will face meaningful 
                  challenges. The random matchmaking system introduces variety in opponents and text difficulty, 
                  keeping races exciting and unpredictable. This balanced approach helps all players improve 
                  steadily while maintaining the thrill of close competition.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Race Strategies</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Successful competitive typing requires both speed and consistency. Start at a sustainable pace 
                  rather than rushing, as early mistakes can be costly to correct. Keep an eye on other players' 
                  progress to gauge when to increase your pace. Focus on maintaining accuracy above 95%, as errors 
                  significantly impact your race position. Practice reading ahead and develop a steady rhythm 
                  that you can maintain throughout the entire race text.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Community Interaction</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Typing competitions create a sense of community among participants who share the common goal 
                  of improving their skills. Racing against the same players multiple times builds familiarity 
                  and friendly rivalry. The shared experience of challenging texts and close finishes creates 
                  memorable moments. Many players find motivation through the community aspect, returning 
                  regularly to compete and improve alongside others on similar skill journeys.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default TypingCompetitionPage;
