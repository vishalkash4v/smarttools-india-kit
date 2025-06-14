
import React from 'react';
import JsonFormatter from '@/components/tools/JsonFormatter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Json } from 'lucide-react';

const JsonFormatterPage = () => {
  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <Json className="h-8 w-8 text-primary" />
            <CardTitle className="text-3xl">JSON Formatter</CardTitle>
          </div>
          <CardDescription>Format and validate your JSON data with ease.</CardDescription>
        </CardHeader>
        <CardContent>
          <JsonFormatter />
        </CardContent>
      </Card>
    </div>
  );
};

export default JsonFormatterPage;
