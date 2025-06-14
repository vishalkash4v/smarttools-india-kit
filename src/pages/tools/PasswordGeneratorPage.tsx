
import React from 'react';
import PasswordGenerator from '@/components/tools/PasswordGenerator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { KeyRound } from 'lucide-react'; // Using KeyRound as "Password" icon might be too generic

const PasswordGeneratorPage = () => {
  return (
    <div className="max-w-lg mx-auto animate-fade-in">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <KeyRound className="h-8 w-8 text-primary" /> {/* Changed icon from Password to KeyRound for better visual */}
            <CardTitle className="text-3xl">Password Generator</CardTitle>
          </div>
          <CardDescription>Create strong, random passwords based on your criteria.</CardDescription>
        </CardHeader>
        <CardContent>
          <PasswordGenerator />
        </CardContent>
      </Card>
    </div>
  );
};

export default PasswordGeneratorPage;
