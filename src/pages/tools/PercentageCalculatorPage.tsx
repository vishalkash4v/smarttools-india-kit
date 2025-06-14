
import React from 'react';
import PercentageCalculator from '@/components/tools/PercentageCalculator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator } from 'lucide-react';

const PercentageCalculatorPage = () => {
  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <Calculator className="h-8 w-8 text-primary" />
            <CardTitle className="text-3xl">Percentage Calculator</CardTitle>
          </div>
          <CardDescription>Perform various percentage calculations with ease.</CardDescription>
        </CardHeader>
        <CardContent>
          <PercentageCalculator />
        </CardContent>
      </Card>
    </div>
  );
};

export default PercentageCalculatorPage;
