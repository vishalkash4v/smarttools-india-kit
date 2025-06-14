
import React from 'react';
import WhitespaceRemover from '@/components/tools/WhitespaceRemover';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eraser } from 'lucide-react'; // Icon for removing/cleaning

const WhitespaceRemoverPage = () => {
  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <Eraser className="h-8 w-8 text-primary" />
            <CardTitle className="text-3xl">Whitespace Remover</CardTitle>
          </div>
          <CardDescription>Remove unnecessary spaces and empty lines from your text.</CardDescription>
        </CardHeader>
        <CardContent>
          <WhitespaceRemover />
        </CardContent>
      </Card>
    </div>
  );
};

export default WhitespaceRemoverPage;
