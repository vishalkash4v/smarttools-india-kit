import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Copy } from 'lucide-react';

const WhitespaceRemover: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [outputText, setOutputText] = useState<string>('');
  const { toast } = useToast();

  const handleRemoveWhitespace = () => {
    if (!inputText) {
      setOutputText('');
      return;
    }
    // Remove leading/trailing whitespace from each line and replace multiple spaces with a single space.
    const lines = inputText.split('\n');
    const processedLines = lines.map(line => line.trim().replace(/\s+/g, ' '));
    // Remove empty lines except if the original text was just newlines
    const result = processedLines.filter((line, index, arr) => {
      if (line.length > 0) return true;
      // Keep a single empty line if it's between non-empty lines or was intentional
      if (index > 0 && index < arr.length -1 && arr[index-1].length > 0 && arr[index+1].length > 0) return true;
      return false;
    }).join('\n');
    
    // A simpler version if we want to remove all redundant spaces globally:
    // const result = inputText.trim().replace(/\s+/g, ' ');
    setOutputText(result);
  };
  
  const handleCopyToClipboard = (textToCopy: string) => {
    if (!textToCopy && inputText.trim().length > 0) { // Allow copying if output is intentionally empty string
       // Allow copying empty string if it's the result of processing
    } else if (!textToCopy) {
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
          description: "The processed text has been copied.",
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
      <Textarea
        placeholder="Enter text with extra spaces..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="min-h-[150px] text-base p-4"
      />
      
      <Button onClick={handleRemoveWhitespace} className="w-full sm:w-auto">Remove Extra Spaces</Button>
      
      {outputText !== null && inputText.length > 0 && ( // Show output even if it's an empty string after processing
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Processed Text:</h3>
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

export default WhitespaceRemover;
