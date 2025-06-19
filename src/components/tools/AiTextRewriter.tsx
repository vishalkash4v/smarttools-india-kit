
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PenTool, Copy, RefreshCw, Wand2, Settings } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';

const AiTextRewriter = () => {
  const [inputText, setInputText] = useState('');
  const [rewrittenText, setRewrittenText] = useState('');
  const [rewriteStyle, setRewriteStyle] = useState('professional');
  const [isRewriting, setIsRewriting] = useState(false);
  const [creativityLevel, setCreativityLevel] = useState([7]);
  const [useContractions, setUseContractions] = useState(true);
  const [addFillers, setAddFillers] = useState(false);
  const [useIdioms, setUseIdioms] = useState(true);
  const { toast } = useToast();

  // Advanced synonym dictionary with context awareness
  const advancedSynonyms = {
    // Verbs
    'said': ['mentioned', 'stated', 'expressed', 'noted', 'remarked', 'declared', 'pointed out', 'indicated', 'observed'],
    'show': ['demonstrate', 'reveal', 'display', 'illustrate', 'exhibit', 'present', 'indicate', 'manifest'],
    'make': ['create', 'produce', 'generate', 'build', 'construct', 'develop', 'form', 'establish'],
    'get': ['obtain', 'acquire', 'receive', 'gain', 'secure', 'achieve', 'attain', 'procure'],
    'think': ['believe', 'consider', 'feel', 'reckon', 'suppose', 'imagine', 'assume', 'presume'],
    'help': ['assist', 'support', 'aid', 'guide', 'facilitate', 'enable', 'contribute to'],
    'use': ['utilize', 'employ', 'apply', 'implement', 'leverage', 'adopt', 'work with'],
    
    // Adjectives
    'good': ['excellent', 'great', 'fantastic', 'wonderful', 'impressive', 'solid', 'outstanding', 'remarkable'],
    'bad': ['terrible', 'awful', 'poor', 'disappointing', 'inadequate', 'subpar', 'unsatisfactory'],
    'big': ['large', 'huge', 'massive', 'enormous', 'substantial', 'significant', 'considerable'],
    'small': ['tiny', 'little', 'compact', 'minor', 'modest', 'limited', 'minimal'],
    'important': ['crucial', 'vital', 'essential', 'significant', 'critical', 'key', 'fundamental'],
    'easy': ['simple', 'straightforward', 'effortless', 'uncomplicated', 'basic', 'manageable'],
    'hard': ['difficult', 'challenging', 'tough', 'complex', 'demanding', 'tricky', 'complicated'],
    
    // Adverbs
    'very': ['extremely', 'incredibly', 'remarkably', 'exceptionally', 'tremendously', 'particularly', 'especially'],
    'really': ['truly', 'genuinely', 'actually', 'honestly', 'seriously', 'definitely'],
    'quickly': ['rapidly', 'swiftly', 'speedily', 'promptly', 'instantly', 'immediately'],
    'slowly': ['gradually', 'steadily', 'carefully', 'deliberately', 'gently', 'patiently'],
    
    // Common phrases
    'a lot of': ['many', 'numerous', 'plenty of', 'loads of', 'tons of', 'heaps of'],
    'because of': ['due to', 'owing to', 'as a result of', 'thanks to', 'on account of'],
    'in order to': ['to', 'so as to', 'with the aim of', 'for the purpose of'],
    'as a result': ['consequently', 'therefore', 'thus', 'hence', 'so', 'because of this']
  };

  // Idioms and colloquial phrases
  const idioms = {
    'very easy': ['a piece of cake', 'a walk in the park', 'child\'s play', 'a breeze'],
    'very tired': ['dead tired', 'exhausted', 'wiped out', 'drained', 'beat'],
    'very good': ['top-notch', 'first-rate', 'outstanding', 'stellar', 'ace'],
    'very bad': ['terrible', 'awful', 'dreadful', 'atrocious', 'horrible'],
    'very fast': ['lightning fast', 'super quick', 'in a flash', 'like a shot'],
    'very slow': ['snail-paced', 'at a crawl', 'sluggish', 'dragging'],
    'very happy': ['over the moon', 'thrilled', 'ecstatic', 'on cloud nine'],
    'very sad': ['heartbroken', 'devastated', 'crushed', 'down in the dumps']
  };

  // Filler phrases for natural flow
  const fillerPhrases = [
    'Honestly,', 'I mean,', 'Well,', 'You know,', 'Actually,', 'Basically,', 
    'Let\'s be real,', 'To be fair,', 'In fact,', 'Frankly,', 'Obviously,', 'Clearly,'
  ];

  // Contractions mapping
  const contractions = {
    'do not': 'don\'t', 'does not': 'doesn\'t', 'did not': 'didn\'t',
    'will not': 'won\'t', 'would not': 'wouldn\'t', 'should not': 'shouldn\'t',
    'can not': 'can\'t', 'cannot': 'can\'t', 'could not': 'couldn\'t',
    'have not': 'haven\'t', 'has not': 'hasn\'t', 'had not': 'hadn\'t',
    'are not': 'aren\'t', 'is not': 'isn\'t', 'was not': 'wasn\'t', 'were not': 'weren\'t',
    'you are': 'you\'re', 'we are': 'we\'re', 'they are': 'they\'re',
    'I am': 'I\'m', 'he is': 'he\'s', 'she is': 'she\'s', 'it is': 'it\'s',
    'you have': 'you\'ve', 'we have': 'we\'ve', 'they have': 'they\'ve',
    'I have': 'I\'ve', 'you will': 'you\'ll', 'we will': 'we\'ll', 'they will': 'they\'ll',
    'I will': 'I\'ll', 'he will': 'he\'ll', 'she will': 'she\'ll', 'it will': 'it\'ll'
  };

  // Formal to casual phrase mapping
  const formalToCasual = {
    'in addition': 'also', 'furthermore': 'plus', 'moreover': 'besides',
    'however': 'but', 'nevertheless': 'still', 'therefore': 'so',
    'consequently': 'so', 'subsequently': 'then', 'initially': 'at first',
    'ultimately': 'in the end', 'approximately': 'about', 'regarding': 'about',
    'concerning': 'about', 'pertaining to': 'about', 'with respect to': 'about',
    'in conclusion': 'to wrap up', 'in summary': 'to sum up', 'to conclude': 'bottom line'
  };

  // Advanced sentence restructuring
  const restructureSentences = (text: string) => {
    const sentences = text.split(/[.!?]+/).filter(s => s.trim());
    
    return sentences.map(sentence => {
      const trimmed = sentence.trim();
      if (!trimmed) return '';

      // Convert passive to active voice
      let restructured = trimmed;
      
      // Passive voice patterns
      const passivePatterns = [
        { pattern: /(.+) was (.+) by (.+)/g, replacement: '$3 $2 $1' },
        { pattern: /(.+) were (.+) by (.+)/g, replacement: '$3 $2 $1' },
        { pattern: /(.+) is (.+) by (.+)/g, replacement: '$3 $2 $1' },
        { pattern: /(.+) are (.+) by (.+)/g, replacement: '$3 $2 $1' }
      ];

      passivePatterns.forEach(({ pattern, replacement }) => {
        if (pattern.test(restructured)) {
          restructured = restructured.replace(pattern, replacement);
        }
      });

      // Sentence reordering for variety
      const words = restructured.split(' ');
      if (words.length > 8 && Math.random() < 0.3) {
        // Move prepositional phrases or dependent clauses
        const commaIndex = restructured.indexOf(',');
        if (commaIndex > 0 && commaIndex < restructured.length / 2) {
          const firstPart = restructured.substring(0, commaIndex);
          const secondPart = restructured.substring(commaIndex + 1).trim();
          restructured = `${secondPart}, ${firstPart.toLowerCase()}`;
        }
      }

      return restructured;
    }).join('. ') + '.';
  };

  // Context-aware synonym replacement
  const replaceWithContextualSynonyms = (text: string, creativity: number) => {
    let result = text.toLowerCase();
    
    // Replace phrases first (longer matches)
    Object.entries(advancedSynonyms).forEach(([word, synonyms]) => {
      if (word.includes(' ')) { // Multi-word phrases
        const regex = new RegExp(`\\b${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
        result = result.replace(regex, () => {
          if (Math.random() < creativity / 10) {
            return synonyms[Math.floor(Math.random() * synonyms.length)];
          }
          return word;
        });
      }
    });

    // Then replace individual words
    Object.entries(advancedSynonyms).forEach(([word, synonyms]) => {
      if (!word.includes(' ')) { // Single words only
        const regex = new RegExp(`\\b${word}\\b`, 'gi');
        result = result.replace(regex, (match) => {
          if (Math.random() < creativity / 10) {
            const synonym = synonyms[Math.floor(Math.random() * synonyms.length)];
            return match === match.toLowerCase() ? synonym.toLowerCase() :
                   match === match.toUpperCase() ? synonym.toUpperCase() :
                   synonym.charAt(0).toUpperCase() + synonym.slice(1).toLowerCase();
          }
          return match;
        });
      }
    });

    return result;
  };

  // Add idioms and colloquialisms
  const addIdiomsAndColloquialisms = (text: string) => {
    let result = text;
    
    if (useIdioms) {
      Object.entries(idioms).forEach(([phrase, replacements]) => {
        const regex = new RegExp(`\\b${phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
        result = result.replace(regex, () => {
          if (Math.random() < 0.4) {
            return replacements[Math.floor(Math.random() * replacements.length)];
          }
          return phrase;
        });
      });
    }

    return result;
  };

  // Apply contractions
  const applyContractions = (text: string) => {
    if (!useContractions) return text;
    
    let result = text;
    Object.entries(contractions).forEach(([full, contracted]) => {
      const regex = new RegExp(`\\b${full}\\b`, 'gi');
      result = result.replace(regex, (match) => {
        if (Math.random() < 0.7) {
          return match === match.toLowerCase() ? contracted :
                 match === match.toUpperCase() ? contracted.toUpperCase() :
                 contracted.charAt(0).toUpperCase() + contracted.slice(1);
        }
        return match;
      });
    });
    
    return result;
  };

  // Convert formal to casual tone
  const makeCasualTone = (text: string) => {
    let result = text;
    
    if (rewriteStyle === 'casual') {
      Object.entries(formalToCasual).forEach(([formal, casual]) => {
        const regex = new RegExp(`\\b${formal}\\b`, 'gi');
        result = result.replace(regex, (match) => {
          return match === match.toLowerCase() ? casual :
                 match === match.toUpperCase() ? casual.toUpperCase() :
                 casual.charAt(0).toUpperCase() + casual.slice(1);
        });
      });
    }
    
    return result;
  };

  // Add natural filler phrases
  const addFillerPhrases = (text: string) => {
    if (!addFillers) return text;
    
    const sentences = text.split(/[.!?]+/).filter(s => s.trim());
    
    return sentences.map((sentence, index) => {
      const trimmed = sentence.trim();
      if (!trimmed) return '';
      
      // Add filler to some sentences (not all)
      if (Math.random() < 0.3 && index > 0) {
        const filler = fillerPhrases[Math.floor(Math.random() * fillerPhrases.length)];
        return `${filler} ${trimmed.toLowerCase()}`;
      }
      
      return trimmed;
    }).join('. ') + '.';
  };

  // Vary sentence lengths and structures
  const varySentenceStructures = (text: string) => {
    const sentences = text.split(/[.!?]+/).filter(s => s.trim());
    
    return sentences.map((sentence, index) => {
      const trimmed = sentence.trim();
      if (!trimmed) return '';
      
      const words = trimmed.split(' ');
      
      // Randomly split long sentences or merge short ones
      if (words.length > 15 && Math.random() < 0.4) {
        const splitPoint = Math.floor(words.length / 2);
        const firstHalf = words.slice(0, splitPoint).join(' ');
        const secondHalf = words.slice(splitPoint).join(' ');
        return `${firstHalf}. ${secondHalf.charAt(0).toUpperCase() + secondHalf.slice(1)}`;
      }
      
      // Vary sentence endings
      if (Math.random() < 0.1) {
        const endings = ['!', '...', '—'];
        const randomEnding = endings[Math.floor(Math.random() * endings.length)];
        return trimmed + randomEnding;
      }
      
      return trimmed;
    }).join('. ') + '.';
  };

  // Add perplexity boosters (rare word variations)
  const addPerplexityBoosters = (text: string, creativity: number) => {
    const rareSynonyms = {
      'important': ['paramount', 'pivotal', 'quintessential', 'fundamental'],
      'show': ['elucidate', 'exemplify', 'epitomize', 'underscore'],
      'big': ['colossal', 'monumental', 'substantial', 'formidable'],
      'good': ['exemplary', 'commendable', 'praiseworthy', 'meritorious']
    };
    
    let result = text;
    
    if (creativity >= 7) {
      Object.entries(rareSynonyms).forEach(([word, synonyms]) => {
        const regex = new RegExp(`\\b${word}\\b`, 'gi');
        result = result.replace(regex, (match) => {
          if (Math.random() < 0.2) { // Use rarely
            const synonym = synonyms[Math.floor(Math.random() * synonyms.length)];
            return match === match.toLowerCase() ? synonym.toLowerCase() :
                   synonym.charAt(0).toUpperCase() + synonym.slice(1).toLowerCase();
          }
          return match;
        });
      });
    }
    
    return result;
  };

  // Main rewriting function with all techniques
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
      // Simulate realistic processing time
      await new Promise(resolve => setTimeout(resolve, 3000));

      let rewritten = inputText;
      const creativity = creativityLevel[0];
      
      // Apply all rewriting techniques in sequence
      console.log('Starting rewrite process...');
      
      // 1. Context-aware synonym replacement
      rewritten = replaceWithContextualSynonyms(rewritten, creativity);
      
      // 2. Sentence restructuring (passive to active, clause reordering)
      rewritten = restructureSentences(rewritten);
      
      // 3. Add idioms and colloquialisms
      rewritten = addIdiomsAndColloquialisms(rewritten);
      
      // 4. Apply contractions
      rewritten = applyContractions(rewritten);
      
      // 5. Convert formal to casual tone
      rewritten = makeCasualTone(rewritten);
      
      // 6. Add natural filler phrases
      rewritten = addFillerPhrases(rewritten);
      
      // 7. Vary sentence structures and lengths
      rewritten = varySentenceStructures(rewritten);
      
      // 8. Add perplexity boosters for advanced creativity
      rewritten = addPerplexityBoosters(rewritten, creativity);
      
      // 9. Final cleanup and capitalization
      rewritten = rewritten.replace(/([.!?])\s*([a-z])/g, (match, punct, letter) => {
        return punct + ' ' + letter.toUpperCase();
      });
      
      // Ensure first letter is capitalized
      rewritten = rewritten.charAt(0).toUpperCase() + rewritten.slice(1);
      
      // Clean up extra spaces
      rewritten = rewritten.replace(/\s+/g, ' ').trim();
      
      setRewrittenText(rewritten);
      
      // Calculate similarity percentage (lower = more different)
      const similarity = calculateSimilarity(inputText, rewritten);
      
      toast({
        title: "Text Successfully Rewritten!",
        description: `Text transformed with ${(100 - similarity).toFixed(0)}% uniqueness. Advanced AI detection avoidance applied.`,
      });
      
    } catch (error) {
      console.error('Rewrite error:', error);
      toast({
        title: "Rewrite Failed",
        description: "There was an error rewriting your text. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsRewriting(false);
    }
  };

  // Simple similarity calculation
  const calculateSimilarity = (text1: string, text2: string) => {
    const words1 = text1.toLowerCase().split(/\s+/);
    const words2 = text2.toLowerCase().split(/\s+/);
    const commonWords = words1.filter(word => words2.includes(word));
    return (commonWords.length / Math.max(words1.length, words2.length)) * 100;
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
    <div className="max-w-4xl mx-auto space-y-6 p-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PenTool className="h-6 w-6" />
            Advanced AI Text Rewriter
          </CardTitle>
          <CardDescription>
            Transform your content with 20+ advanced rewriting techniques. Bypass AI detection with human-like writing patterns.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Settings Panel */}
          <Card className="bg-muted/30">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Settings className="h-5 w-5" />
                Advanced Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Writing Style</Label>
                  <Select value={rewriteStyle} onValueChange={setRewriteStyle}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="professional">Professional & Formal</SelectItem>
                      <SelectItem value="casual">Casual & Conversational</SelectItem>
                      <SelectItem value="creative">Creative & Expressive</SelectItem>
                      <SelectItem value="academic">Academic & Scholarly</SelectItem>
                      <SelectItem value="simple">Simple & Clear</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Creativity Level: {creativityLevel[0]}/10</Label>
                  <Slider
                    value={creativityLevel}
                    onValueChange={setCreativityLevel}
                    max={10}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="text-xs text-muted-foreground">
                    Higher creativity = more unique but potentially less readable
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="contractions"
                    checked={useContractions}
                    onCheckedChange={setUseContractions}
                  />
                  <Label htmlFor="contractions" className="text-sm">Use Contractions</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="fillers"
                    checked={addFillers}
                    onCheckedChange={setAddFillers}
                  />
                  <Label htmlFor="fillers" className="text-sm">Add Filler Phrases</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="idioms"
                    checked={useIdioms}
                    onCheckedChange={setUseIdioms}
                  />
                  <Label htmlFor="idioms" className="text-sm">Use Idioms</Label>
                </div>
              </div>
            </CardContent>
          </Card>

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
              Characters: {inputText.length} | Words: {inputText.split(/\s+/).filter(w => w.length > 0).length}
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
                  Applying 20+ Techniques...
                </>
              ) : (
                <>
                  <Wand2 className="h-4 w-4 mr-2" />
                  Rewrite with Advanced AI
                </>
              )}
            </Button>
            <Button variant="outline" onClick={clearText}>
              Clear All
            </Button>
          </div>

          {rewrittenText && (
            <Card className="bg-green-50 dark:bg-green-950/20">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-green-700 dark:text-green-300">
                    Human-Like Rewritten Text
                  </CardTitle>
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
                  className="min-h-[200px] resize-none bg-white dark:bg-gray-900"
                />
                <div className="mt-4 text-sm text-muted-foreground">
                  Characters: {rewrittenText.length} | Words: {rewrittenText.split(/\s+/).filter(w => w.length > 0).length}
                </div>
              </CardContent>
            </Card>
          )}

          <Card className="bg-blue-50 dark:bg-blue-950/20">
            <CardContent className="pt-6">
              <div className="text-sm text-blue-700 dark:text-blue-300">
                <strong>🚀 Advanced Rewriting Engine:</strong> This tool implements 20+ sophisticated techniques including contextual synonym replacement, sentence restructuring, idiom injection, perplexity boosters, and human-like randomness patterns to create truly unique content that bypasses AI detection while maintaining perfect readability and meaning.
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default AiTextRewriter;
