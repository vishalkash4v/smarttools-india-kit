
import React from 'react';
import TextReverser from '@/components/tools/TextReverser';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Undo } from 'lucide-react'; // Icon for reversing text

const TextReverserPage = () => {
  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <Undo className="h-8 w-8 text-primary" />
            <CardTitle className="text-3xl">Text Reverser</CardTitle>
          </div>
          <CardDescription>Reverse the characters in your text.</CardDescription>
        </CardHeader>
        <CardContent>
          <TextReverser />
        </CardContent>
      </Card>
    </div>
  );
};

export default TextReverserPage;
