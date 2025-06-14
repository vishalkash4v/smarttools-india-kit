
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PenTool, Copy, RefreshCw, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AiTextRewriter = () => {
  const [inputText, setInputText] = useState('');
  const [rewrittenText, setRewrittenText] = useState('');
  const [rewriteStyle, setRewriteStyle] = useState('professional');
  const [isRewriting, setIsRewriting] = useState(false);
  const { toast } = useToast();

  const rewriteStrategies = {
    professional: {
      name: 'Professional',
      description: 'Formal, business-appropriate tone'
    },
    casual: {
      name: 'Casual',
      description: 'Relaxed, conversational tone'
    },
    creative: {
      name: 'Creative',
      description: 'Engaging, imaginative writing'
    },
    academic: {
      name: 'Academic',
      description: 'Scholarly, research-oriented'
    },
    simple: {
      name: 'Simple',
      description: 'Clear, easy to understand'
    }
  };

  const synonyms = {
    'very': ['extremely', 'incredibly', 'remarkably', 'exceptionally', 'tremendously'],
    'good': ['excellent', 'outstanding', 'superior', 'remarkable', 'exceptional'],
    'bad': ['poor', 'inadequate', 'substandard', 'disappointing', 'unsatisfactory'],
    'big': ['large', 'substantial', 'significant', 'considerable', 'massive'],
    'small': ['tiny', 'compact', 'minimal', 'modest', 'limited'],
    'important': ['crucial', 'vital', 'essential', 'significant', 'critical'],
    'nice': ['pleasant', 'delightful', 'appealing', 'attractive', 'charming'],
    'help': ['assist', 'support', 'aid', 'facilitate', 'enable'],
    'show': ['demonstrate', 'illustrate', 'reveal', 'display', 'exhibit'],
    'make': ['create', 'produce', 'generate', 'construct', 'develop'],
    'use': ['utilize', 'employ', 'apply', 'implement', 'leverage'],
    'get': ['obtain', 'acquire', 'secure', 'achieve', 'attain'],
    'think': ['believe', 'consider', 'contemplate', 'reflect', 'analyze'],
    'say': ['state', 'express', 'declare', 'mention', 'articulate'],
    'many': ['numerous', 'multiple', 'various', 'several', 'countless']
  };

  const replaceWithSynonyms = (text: string) => {
    let result = text;
    Object.entries(synonyms).forEach(([word, replacements]) => {
      const regex = new RegExp(`\\b${word}\\b`, 'gi');
      result = result.replace(regex, (match) => {
        const randomSynonym = replacements[Math.floor(Math.random() * replacements.length)];
        return match === match.toLowerCase() ? randomSynonym : 
               match === match.toUpperCase() ? randomSynonym.toUpperCase() :
               randomSynonym.charAt(0).toUpperCase() + randomSynonym.slice(1);
      });
    });
    return result;
  };

  const restructureSentences = (text: string) => {
    const sentences = text.split(/[.!?]+/).filter(s => s.trim());
    return sentences.map(sentence => {
      const words = sentence.trim().split(/\s+/);
      if (words.length > 6) {
        // Randomly restructure longer sentences
        const restructureType = Math.random();
        if (restructureType < 0.3) {
          // Move a clause to the beginning
          const midPoint = Math.floor(words.length / 2);
          const firstHalf = words.slice(0, midPoint);
          const secondHalf = words.slice(midPoint);
          return `${secondHalf.join(' ')}, ${firstHalf.join(' ')}`;
        } else if (restructureType < 0.6) {
          // Add transition words
          const transitions = ['Additionally', 'Furthermore', 'Moreover', 'However', 'Nevertheless'];
          const transition = transitions[Math.floor(Math.random() * transitions.length)];
          return `${transition}, ${words.join(' ').toLowerCase()}`;
        }
      }
      return words.join(' ');
    }).join('. ') + '.';
  };

  const applyStyleModifications = (text: string, style: string) => {
    switch (style) {
      case 'professional':
        return text.replace(/\b(I think|I believe)\b/gi, 'It is evident that')
                  .replace(/\b(really|super|very)\b/gi, 'considerably')
                  .replace(/\b(stuff|things)\b/gi, 'elements');
      
      case 'casual':
        return text.replace(/\b(therefore|consequently)\b/gi, 'so')
                  .replace(/\b(utilize)\b/gi, 'use')
                  .replace(/\b(commence)\b/gi, 'start');
      
      case 'academic':
        return text.replace(/\b(show)\b/gi, 'demonstrate')
                  .replace(/\b(prove)\b/gi, 'substantiate')
                  .replace(/\b(big)\b/gi, 'significant');
      
      case 'creative':
        return text.replace(/\b(said)\b/gi, 'whispered')
                  .replace(/\b(walked)\b/gi, 'strolled')
                  .replace(/\b(looked)\b/gi, 'gazed');
      
      case 'simple':
        return text.replace(/\b(utilize)\b/gi, 'use')
                  .replace(/\b(demonstrate)\b/gi, 'show')
                  .replace(/\b(facilitate)\b/gi, 'help');
      
      default:
        return text;
    }
  };

  const rewriteText = async () => {
    if (!inputText.trim()) {
      toast({
        title: "No Text Provided",
        description: "Please enter some text to rewrite.",
        variant: "destructive",
      });
      return;
    }

    setIsRewriting(true);

    try {
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 2000));

      let rewritten = inputText;
      
      // Apply multiple rewriting techniques
      rewritten = replaceWithSynonyms(rewritten);
      rewritten = restructureSentences(rewritten);
      rewritten = applyStyleModifications(rewritten, rewriteStyle);
      
      // Add some randomness to paragraph breaks
      const paragraphs = rewritten.split('\n\n');
      const processedParagraphs = paragraphs.map(para => {
        const sentences = para.split(/[.!?]+/).filter(s => s.trim());
        if (sentences.length > 2 && Math.random() < 0.3) {
          // Sometimes split longer paragraphs
          const splitPoint = Math.ceil(sentences.length / 2);
          const firstPart = sentences.slice(0, splitPoint).join('. ') + '.';
          const secondPart = sentences.slice(splitPoint).join('. ') + '.';
          return `${firstPart}\n\n${secondPart}`;
        }
        return sentences.join('. ') + '.';
      });

      setRewrittenText(processedParagraphs.join('\n\n'));
      
      toast({
        title: "Text Rewritten Successfully",
        description: "Your text has been rewritten to avoid AI detection.",
      });
    } catch (error) {
      toast({
        title: "Rewrite Failed",
        description: "There was an error rewriting your text. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsRewriting(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(rewrittenText);
    toast({
      title: "Copied!",
      description: "Rewritten text copied to clipboard.",
    });
  };

  const clearText = () => {
    setInputText('');
    setRewrittenText('');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PenTool className="h-6 w-6" />
            AI Text Rewriter
          </CardTitle>
          <CardDescription>
            Rewrite your content to make it unique and avoid AI detection. Perfect for blogs, articles, and any text content.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>Writing Style</Label>
            <Select value={rewriteStyle} onValueChange={setRewriteStyle}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(rewriteStrategies).map(([key, strategy]) => (
                  <SelectItem key={key} value={key}>
                    {strategy.name} - {strategy.description}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="inputText">Original Text</Label>
            <Textarea
              id="inputText"
              placeholder="Paste your AI-generated or original text here..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="min-h-[200px]"
            />
            <div className="text-sm text-muted-foreground">
              Characters: {inputText.length} | Words: {inputText.split(' ').filter(w => w.length > 0).length}
            </div>
          </div>

          <div className="flex gap-2">
            <Button 
              onClick={rewriteText} 
              disabled={!inputText.trim() || isRewriting}
              className="flex-1"
            >
              {isRewriting ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  Rewriting...
                </>
              ) : (
                <>
                  <Wand2 className="h-4 w-4 mr-2" />
                  Rewrite Text
                </>
              )}
            </Button>
            <Button variant="outline" onClick={clearText}>
              Clear All
            </Button>
          </div>

          {rewrittenText && (
            <Card className="bg-muted/50">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Rewritten Text</CardTitle>
                  <Button variant="outline" size="sm" onClick={copyToClipboard}>
                    <Copy className="h-4 w-4 mr-2" />
                    Copy
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={rewrittenText}
                  readOnly
                  className="min-h-[200px] resize-none"
                />
                <div className="mt-4 text-sm text-muted-foreground">
                  Characters: {rewrittenText.length} | Words: {rewrittenText.split(' ').filter(w => w.length > 0).length}
                </div>
              </CardContent>
            </Card>
          )}

          <Card className="bg-blue-50 dark:bg-blue-950/20">
            <CardContent className="pt-6">
              <div className="text-sm text-blue-700 dark:text-blue-300">
                <strong>How it works:</strong> This tool uses advanced rewriting techniques including synonym replacement, 
                sentence restructuring, and style adaptation to create unique content that maintains the original meaning 
                while appearing more natural and human-written.
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default AiTextRewriter;
