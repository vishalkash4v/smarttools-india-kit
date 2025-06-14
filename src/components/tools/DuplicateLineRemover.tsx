
import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { ArrowRightLeft } from 'lucide-react';

const DuplicateLineRemover = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleRemoveDuplicates = () => {
    const lines = inputText.split('\n');
    const uniqueLines = Array.from(new Set(lines));
    setOutputText(uniqueLines.join('\n'));
  };

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="inputText" className="block text-sm font-medium text-gray-700 mb-1">Input Text</Label>
        <Textarea
          id="inputText"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Paste your text here, with each item on a new line."
          rows={10}
          className="w-full"
        />
      </div>
      
      <Button onClick={handleRemoveDuplicates} className="w-full md:w-auto">
        <ArrowRightLeft className="mr-2 h-4 w-4" /> Remove Duplicate Lines
      </Button>
      
      <div>
        <Label htmlFor="outputText" className="block text-sm font-medium text-gray-700 mb-1">Output Text (Unique Lines)</Label>
        <Textarea
          id="outputText"
          value={outputText}
          readOnly
          placeholder="Unique lines will appear here."
          rows={10}
          className="w-full bg-gray-50"
        />
      </div>
    </div>
  );
};

export default DuplicateLineRemover;
