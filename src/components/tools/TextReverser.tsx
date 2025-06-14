
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowRightLeft } from 'lucide-react'; // Using a different icon as Repeat is not available

const TextReverser = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleReverse = () => {
    setOutputText(inputText.split('').reverse().join(''));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="inputText" className="block text-sm font-medium text-gray-700 mb-1">
          Enter Text
        </Label>
        <Textarea
          id="inputText"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type or paste your text here..."
          className="min-h-[100px]"
        />
      </div>
      <Button onClick={handleReverse} className="w-full sm:w-auto">
        <ArrowRightLeft className="mr-2 h-4 w-4" /> Reverse Text
      </Button>
      <div>
        <Label htmlFor="outputText" className="block text-sm font-medium text-gray-700 mb-1">
          Reversed Text
        </Label>
        <Textarea
          id="outputText"
          value={outputText}
          readOnly
          placeholder="Reversed text will appear here..."
          className="min-h-[100px] bg-gray-50"
        />
      </div>
    </div>
  );
};

export default TextReverser;
