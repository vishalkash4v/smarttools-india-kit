
import React from 'react';
import AgeCalculator from '@/components/tools/AgeCalculator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift } from 'lucide-react';

const AgeCalculatorPage = () => {
  return (
    <div className="max-w-lg mx-auto animate-fade-in">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <Gift className="h-8 w-8 text-primary" />
            <CardTitle className="text-3xl">Age Calculator</CardTitle>
          </div>
          <CardDescription>Calculate your age in years, months, and days from your date of birth.</CardDescription>
        </CardHeader>
        <CardContent>
          <AgeCalculator />
        </CardContent>
      </Card>
    </div>
  );
};

export default AgeCalculatorPage;
