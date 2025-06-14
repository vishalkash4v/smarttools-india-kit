
import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { Copy } from 'lucide-react';

const TextCaseConverter: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [outputText, setOutputText] = useState<string>('');
  const [conversionType, setConversionType] = useState<string>('uppercase');
  const { toast } = useToast();

  const handleConvert = () => {
    if (!inputText) {
      setOutputText('');
      return;
    }
    let result = '';
    switch (conversionType) {
      case 'uppercase':
        result = inputText.toUpperCase();
        break;
      case 'lowercase':
        result = inputText.toLowerCase();
        break;
      case 'sentencecase':
        result = inputText.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
        break;
      case 'capitalizedcase':
        result = inputText.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
        break;
      default:
        result = inputText;
    }
    setOutputText(result);
  };

  const handleCopyToClipboard = (textToCopy: string) => {
    if (!textToCopy) {
      toast({
        title: "Nothing to copy",
        description: "The output is empty.",
        variant: "destructive",
      });
      return;
    }
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        toast({
          title: "Copied to clipboard!",
          description: "The converted text has been copied.",
        });
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
        toast({
          title: "Error",
          description: "Failed to copy text to clipboard.",
          variant: "destructive",
        });
      });
  };

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="conversionType" className="block text-sm font-medium text-gray-700 mb-1">Conversion Type</label>
        <Select value={conversionType} onValueChange={setConversionType}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select conversion type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="uppercase">UPPERCASE</SelectItem>
            <SelectItem value="lowercase">lowercase</SelectItem>
            <SelectItem value="sentencecase">Sentence case</SelectItem>
            <SelectItem value="capitalizedcase">Capitalized Case</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <Textarea
        placeholder="Enter your text here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="min-h-[150px] text-base p-4"
      />
      
      <Button onClick={handleConvert} className="w-full sm:w-auto">Convert Text</Button>
      
      {outputText && (
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Converted Text:</h3>
          <div className="relative">
            <Textarea
              value={outputText}
              readOnly
              className="min-h-[150px] text-base p-4 bg-gray-50"
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleCopyToClipboard(outputText)}
              className="absolute top-2 right-2"
              aria-label="Copy output text"
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TextCaseConverter;
