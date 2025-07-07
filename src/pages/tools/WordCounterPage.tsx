
import React from 'react';
import WordCounter from '@/components/tools/WordCounter';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, BarChart, Eye, Clock } from 'lucide-react';

const WordCounterPage = () => {
  return (
    <PageWrapper
      title="Word Counter"
      description="Count words, characters, sentences, and paragraphs in your text. Analyze text stats and estimate reading time with this free online tool."
      keywords="word counter, character counter, text analyzer, word count tool, writing tools, text statistics, sentence counter, paragraph counter"
      pageTitle="Word & Character Counter"
      toolCategory="Text Analysis"
      canonicalUrl="https://fyntools.com/word-counter"
      heroImage="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&h=630&fit=crop"
    >
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/20">
                <FileText className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text">
              Word & Character Counter
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Analyze your text with comprehensive statistics and detailed character analysis.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <BarChart className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Detailed Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Words, characters, sentences, and paragraphs</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Eye className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Real-time Count</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Live updates as you type or paste text</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Reading Time</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Estimated reading time calculation</CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Main Word Counter */}
          <Card className="hover-lift bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm border-primary/20 shadow-2xl mb-12">
            <CardHeader className="text-center border-b border-border/50">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-primary/10">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                  Text Analyzer
                </CardTitle>
              </div>
              <CardDescription className="text-lg">
                Professional text analysis and word counting tool
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <WordCounter />
            </CardContent>
          </Card>

          {/* Info Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Academic Writing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Perfect for students and researchers who need to meet specific word count requirements 
                  for essays, research papers, and dissertations. Track your progress in real-time, ensure 
                  you meet minimum requirements, and avoid exceeding maximum limits. Essential for academic 
                  success where precise word counts are crucial for grades and publication standards.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Content Creation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Content creators, bloggers, and copywriters use word counters to optimize their content 
                  for SEO and readability. Track article length, ensure consistent posting schedules, and 
                  meet client requirements for word counts. Perfect for creating social media posts, 
                  marketing copy, and web content that meets specific length guidelines.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Professional Communication</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Business professionals need precise word counts for reports, proposals, and presentations. 
                  Ensure your executive summaries are concise, your proposals meet RFP requirements, and 
                  your presentations fit within time constraints. Essential for maintaining professional 
                  standards and meeting client expectations in business communications.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Publishing & Editing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Authors, editors, and publishers rely on accurate word counts for manuscript preparation, 
                  pricing, and scheduling. Determine publication costs, estimate reading times, and plan 
                  editing schedules based on precise text statistics. Critical for book publishing, 
                  magazine articles, and any content that requires professional editing and formatting.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default WordCounterPage;
