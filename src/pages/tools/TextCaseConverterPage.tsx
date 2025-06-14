
import React from 'react';
import TextCaseConverter from '@/components/tools/TextCaseConverter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TextCursorInput } from 'lucide-react'; // Using TextCursorInput as a generic text tool icon

const TextCaseConverterPage = () => {
  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <TextCursorInput className="h-8 w-8 text-primary" />
            <CardTitle className="text-3xl">Text Case Converter</CardTitle>
          </div>
          <CardDescription>Convert text to UPPERCASE, lowercase, Sentence case, or Capitalized Case.</CardDescription>
        </CardHeader>
        <CardContent>
          <TextCaseConverter />
        </CardContent>
      </Card>
    </div>
  );
};

export default TextCaseConverterPage;
