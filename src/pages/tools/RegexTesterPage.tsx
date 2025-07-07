
import React from 'react';
import RegexTester from '@/components/tools/RegexTester';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Code, Zap, Target } from 'lucide-react';

const RegexTesterPage = () => {
  return (
    <PageWrapper
      title="Regex Tester"
      description="Professional regular expression tester and validator. Test, debug, and validate regex patterns with real-time matching and comprehensive explanations."
      keywords="regex tester, regular expression, pattern matching, regex validator, text processing, string matching, regex debugger"
      pageTitle="Regex Tester"
      toolCategory="Developer Tool"
      canonicalUrl="https://fyntools.com/regex-tester"
      heroImage="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=630&fit=crop"
    >
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/20">
                <Search className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text">
              Regex Tester & Validator
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Test and debug regular expressions with real-time pattern matching and detailed explanations.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Real-time Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Instant pattern matching as you type</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Match Highlighting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Visual highlighting of matched patterns</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <Code className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Pattern Validation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Validate regex syntax and test cases</CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Main Regex Tool */}
          <Card className="hover-lift bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm border-primary/20 shadow-2xl mb-12">
            <CardHeader className="text-center border-b border-border/50">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                  Regular Expression Tester
                </CardTitle>
              </div>
              <CardDescription className="text-lg">
                Professional regex testing and validation tool
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <RegexTester />
            </CardContent>
          </Card>

          {/* Info Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">For Developers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Debug and test regular expressions before implementing them in your code. Whether you're 
                  validating email addresses, parsing log files, or extracting data from text, our regex tester 
                  helps you perfect your patterns. Save time by testing edge cases and ensuring your regex 
                  works correctly across different inputs.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Data Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Perfect for data analysts and scientists who need to clean and process text data. Extract 
                  specific patterns from datasets, validate data formats, and transform text using powerful 
                  regex patterns. Test your expressions against sample data to ensure accurate processing 
                  before running on large datasets.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Learning Regex</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  New to regular expressions? Our tester provides a safe environment to learn and experiment. 
                  Try different patterns, see what matches, and understand how regex metacharacters work. 
                  Perfect for students, coding bootcamp participants, and anyone looking to master this 
                  powerful text processing tool.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Advanced Features</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Support for multiple regex flags (global, case-insensitive, multiline), capture groups, 
                  and lookahead/lookbehind assertions. Real-time syntax validation prevents errors, while 
                  match highlighting makes it easy to see exactly what your pattern captures. Export tested 
                  patterns for use in your preferred programming language.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default RegexTesterPage;
