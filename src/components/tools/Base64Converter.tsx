
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Copy, Binary, ArrowUpDown } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Base64Converter = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');
  const { toast } = useToast();

  const handleEncode = () => {
    try {
      const encoded = btoa(inputText);
      setOutputText(encoded);
    } catch (error) {
      toast({
        title: "Encoding Error",
        description: "Failed to encode the text. Please check your input.",
        variant: "destructive",
      });
    }
  };

  const handleDecode = () => {
    try {
      const decoded = atob(inputText);
      setOutputText(decoded);
    } catch (error) {
      toast({
        title: "Decoding Error",
        description: "Invalid Base64 string. Please check your input.",
        variant: "destructive",
      });
    }
  };

  const handleConvert = () => {
    if (mode === 'encode') {
      handleEncode();
    } else {
      handleDecode();
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(outputText);
      toast({
        title: "Copied!",
        description: "Result copied to clipboard.",
      });
    } catch (error) {
      toast({
        title: "Copy Failed",
        description: "Failed to copy to clipboard.",
        variant: "destructive",
      });
    }
  };

  const handleSwapMode = () => {
    setMode(mode === 'encode' ? 'decode' : 'encode');
    setInputText(outputText);
    setOutputText('');
  };

  const handleClear = () => {
    setInputText('');
    setOutputText('');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Binary className="h-6 w-6" />
            Base64 Encoder/Decoder
          </CardTitle>
          <CardDescription>
            Encode text to Base64 or decode Base64 strings back to text.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Mode Toggle */}
          <div className="flex gap-2">
            <Button
              variant={mode === 'encode' ? 'default' : 'outline'}
              onClick={() => setMode('encode')}
              className="flex-1"
            >
              Encode to Base64
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleSwapMode}
              title="Swap input/output"
            >
              <ArrowUpDown className="h-4 w-4" />
            </Button>
            <Button
              variant={mode === 'decode' ? 'default' : 'outline'}
              onClick={() => setMode('decode')}
              className="flex-1"
            >
              Decode from Base64
            </Button>
          </div>

          {/* Input */}
          <div className="space-y-2">
            <Label htmlFor="input">
              {mode === 'encode' ? 'Text to Encode' : 'Base64 to Decode'}
            </Label>
            <Textarea
              id="input"
              placeholder={mode === 'encode' ? 'Enter text to encode...' : 'Enter Base64 string to decode...'}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="min-h-32"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button onClick={handleConvert} disabled={!inputText} className="flex-1">
              {mode === 'encode' ? 'Encode' : 'Decode'}
            </Button>
            <Button variant="outline" onClick={handleClear}>
              Clear
            </Button>
          </div>

          {/* Output */}
          {outputText && (
            <div className="space-y-2">
              <Label htmlFor="output">
                {mode === 'encode' ? 'Base64 Encoded' : 'Decoded Text'}
              </Label>
              <div className="relative">
                <Textarea
                  id="output"
                  value={outputText}
                  readOnly
                  className="min-h-32 pr-12"
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleCopy}
                  className="absolute top-2 right-2"
                  title="Copy to clipboard"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Base64Converter;
