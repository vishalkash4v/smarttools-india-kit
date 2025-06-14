import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Copy, CheckCircle, XCircle } from 'lucide-react';
import { Label } from '@/components/ui/label';

const JsonFormatter: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [outputText, setOutputText] = useState<string>('');
  const [isValidJson, setIsValidJson] = useState<boolean | null>(null);
  const { toast } = useToast();

  const handleFormat = () => {
    if (!inputText.trim()) {
      setOutputText('');
      setIsValidJson(null);
      toast({ title: "Input is empty", description: "Please enter JSON to format.", variant: "default" });
      return;
    }
    try {
      const parsedJson = JSON.parse(inputText);
      setOutputText(JSON.stringify(parsedJson, null, 2));
      setIsValidJson(true);
      toast({ title: "JSON Formatted", description: "Successfully formatted the JSON input." });
    } catch (error) {
      setOutputText(inputText); // Show original text on error
      setIsValidJson(false);
      toast({ title: "Invalid JSON", description: (error as Error).message, variant: "destructive" });
    }
  };

  const handleClear = () => {
    setInputText('');
    setOutputText('');
    setIsValidJson(null);
  };

  const copyToClipboard = (textToCopy: string, type: string) => {
    if (!textToCopy) {
      toast({
        title: `Nothing to Copy`,
        description: `The ${type} text is empty.`,
        variant: 'destructive',
      });
      return;
    }
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        toast({
          title: `Copied!`,
          description: `The ${type} text has been copied to your clipboard.`,
        });
      })
      .catch(err => {
        console.error(`Failed to copy ${type} text: `, err);
        toast({
          title: "Error",
          description: `Failed to copy ${type} text to clipboard.`,
          variant: "destructive",
        });
      });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="inputText">Input JSON</Label>
            {isValidJson !== null && (
              isValidJson ? 
              <span className="text-xs text-green-600 flex items-center"><CheckCircle className="h-4 w-4 mr-1"/>Valid JSON</span> : 
              <span className="text-xs text-red-600 flex items-center"><XCircle className="h-4 w-4 mr-1"/>Invalid JSON</span>
            )}
          </div>
          <div className="relative">
            <Textarea
              id="inputText"
              placeholder="Paste your JSON here..."
              value={inputText}
              onChange={(e) => {
                setInputText(e.target.value);
                setIsValidJson(null); // Reset validation status on input change
              }}
              className="min-h-[250px] text-sm font-mono"
            />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => copyToClipboard(inputText, 'input')}
              className="absolute top-2 right-2"
              aria-label="Copy input JSON"
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="outputText">Formatted JSON</Label>
          <div className="relative">
            <Textarea
              id="outputText"
              value={outputText}
              readOnly
              placeholder="Formatted JSON will appear here..."
              className="min-h-[250px] text-sm font-mono bg-gray-50"
            />
            {outputText && (
               <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => copyToClipboard(outputText, 'formatted')}
                className="absolute top-2 right-2"
                aria-label="Copy formatted JSON"
              >
                <Copy className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="flex space-x-2">
        <Button onClick={handleFormat} className="flex-1">Format JSON</Button>
        <Button onClick={handleClear} variant="outline" className="flex-1">Clear</Button>
      </div>
    </div>
  );
};

export default JsonFormatter;
