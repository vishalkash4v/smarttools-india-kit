
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const RegexTester = () => {
  const [pattern, setPattern] = useState('\\d+');
  const [testString, setTestString] = useState('Hello 123 World 456');
  const [flags, setFlags] = useState({
    global: true,
    ignoreCase: false,
    multiline: false
  });
  const [matches, setMatches] = useState<RegExpMatchArray[]>([]);
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState('');

  const testRegex = () => {
    try {
      const flagString = `${flags.global ? 'g' : ''}${flags.ignoreCase ? 'i' : ''}${flags.multiline ? 'm' : ''}`;
      const regex = new RegExp(pattern, flagString);
      
      if (flags.global) {
        const allMatches = [];
        let match;
        const tempRegex = new RegExp(pattern, flagString);
        while ((match = tempRegex.exec(testString)) !== null) {
          allMatches.push(match);
          if (!flags.global) break;
        }
        setMatches(allMatches);
      } else {
        const match = regex.exec(testString);
        setMatches(match ? [match] : []);
      }
      
      setIsValid(true);
      setError('');
    } catch (err) {
      setIsValid(false);
      setError(err instanceof Error ? err.message : 'Invalid regex pattern');
      setMatches([]);
    }
  };

  useEffect(() => {
    testRegex();
  }, [pattern, testString, flags]);

  const highlightMatches = (text: string) => {
    if (!isValid || matches.length === 0) return text;

    let result = text;
    let offset = 0;

    matches.forEach((match, index) => {
      if (match.index !== undefined) {
        const start = match.index + offset;
        const end = start + match[0].length;
        const before = result.substring(0, start);
        const matched = result.substring(start, end);
        const after = result.substring(end);
        
        result = before + `<mark class="bg-yellow-200 px-1 rounded">${matched}</mark>` + after;
        offset += '<mark class="bg-yellow-200 px-1 rounded"></mark>'.length;
      }
    });

    return result;
  };

  const copyPattern = () => {
    navigator.clipboard.writeText(pattern);
    toast({
      title: 'Pattern Copied',
      description: 'Regex pattern copied to clipboard.',
    });
  };

  const commonPatterns = [
    { name: 'Email', pattern: '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}' },
    { name: 'Phone', pattern: '\\(?\\d{3}\\)?[-.\\ ]?\\d{3}[-.\\ ]?\\d{4}' },
    { name: 'URL', pattern: 'https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)' },
    { name: 'IP Address', pattern: '\\b(?:[0-9]{1,3}\\.){3}[0-9]{1,3}\\b' },
    { name: 'Date (MM/DD/YYYY)', pattern: '\\b\\d{1,2}\\/\\d{1,2}\\/\\d{4}\\b' },
    { name: 'Hexadecimal Color', pattern: '#[a-fA-F0-9]{6}|#[a-fA-F0-9]{3}' }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Regex Tester</CardTitle>
          <CardDescription>
            Test and validate regular expressions with live matching and highlighting.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label htmlFor="pattern">Regular Expression Pattern</Label>
                  <Button onClick={copyPattern} variant="outline" size="sm" className="gap-2">
                    <Copy className="h-4 w-4" />
                    Copy
                  </Button>
                </div>
                <Input
                  id="pattern"
                  value={pattern}
                  onChange={(e) => setPattern(e.target.value)}
                  placeholder="Enter regex pattern..."
                  className={`font-mono ${!isValid ? 'border-red-500' : ''}`}
                />
                {!isValid && (
                  <p className="text-sm text-red-500 mt-1">{error}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label>Flags</Label>
                <div className="flex gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="global"
                      checked={flags.global}
                      onCheckedChange={(checked) => setFlags(prev => ({ ...prev, global: !!checked }))}
                    />
                    <Label htmlFor="global" className="text-sm">Global (g)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="ignoreCase"
                      checked={flags.ignoreCase}
                      onCheckedChange={(checked) => setFlags(prev => ({ ...prev, ignoreCase: !!checked }))}
                    />
                    <Label htmlFor="ignoreCase" className="text-sm">Ignore Case (i)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="multiline"
                      checked={flags.multiline}
                      onCheckedChange={(checked) => setFlags(prev => ({ ...prev, multiline: !!checked }))}
                    />
                    <Label htmlFor="multiline" className="text-sm">Multiline (m)</Label>
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="testString">Test String</Label>
                <Textarea
                  id="testString"
                  value={testString}
                  onChange={(e) => setTestString(e.target.value)}
                  placeholder="Enter text to test against..."
                  className="min-h-[120px]"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label>Preview with Matches Highlighted</Label>
                <div 
                  className="border rounded-md p-3 min-h-[120px] whitespace-pre-wrap bg-gray-50"
                  dangerouslySetInnerHTML={{ __html: highlightMatches(testString) }}
                />
              </div>

              <div>
                <Label>Match Results</Label>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant={matches.length > 0 ? "default" : "secondary"}>
                      {matches.length} match{matches.length !== 1 ? 'es' : ''} found
                    </Badge>
                  </div>
                  {matches.length > 0 && (
                    <div className="space-y-2 max-h-[200px] overflow-y-auto">
                      {matches.map((match, index) => (
                        <div key={index} className="border rounded-md p-2 bg-gray-50">
                          <div className="text-sm">
                            <strong>Match {index + 1}:</strong> "{match[0]}"
                          </div>
                          {match.index !== undefined && (
                            <div className="text-xs text-gray-600">
                              Position: {match.index} - {match.index + match[0].length - 1}
                            </div>
                          )}
                          {match.length > 1 && (
                            <div className="text-xs text-gray-600">
                              Groups: {match.slice(1).map((group, i) => `$${i + 1}: "${group}"`).join(', ')}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div>
            <Label>Common Patterns</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
              {commonPatterns.map((item) => (
                <Button
                  key={item.name}
                  variant="outline"
                  size="sm"
                  onClick={() => setPattern(item.pattern)}
                  className="text-left justify-start"
                >
                  {item.name}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegexTester;
