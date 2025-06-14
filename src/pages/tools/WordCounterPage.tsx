
import React from 'react';
import WordCounter from '@/components/tools/WordCounter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from 'lucide-react';

const WordCounterPage = () => {
  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <FileText className="h-8 w-8 text-primary" />
            <CardTitle className="text-3xl">Word & Character Counter</CardTitle>
          </div>
          <CardDescription>Analyze your text: count words, characters, sentences, and paragraphs.</CardDescription>
        </CardHeader>
        <CardContent>
          <WordCounter />
        </CardContent>
      </Card>
    </div>
  );
};

export default WordCounterPage;
