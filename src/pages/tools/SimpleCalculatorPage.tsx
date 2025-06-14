
import React from 'react';
import SimpleCalculatorComponent from '@/components/tools/SimpleCalculator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator } from 'lucide-react';

const SimpleCalculatorPage = () => {
  return (
    <div className="max-w-md mx-auto animate-fade-in">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <Calculator className="h-8 w-8 text-primary" />
            <CardTitle className="text-3xl">Simple Calculator</CardTitle>
          </div>
          <CardDescription>Perform basic arithmetic operations.</CardDescription>
        </CardHeader>
        <CardContent>
          <SimpleCalculatorComponent />
        </CardContent>
      </Card>
    </div>
  );
};

export default SimpleCalculatorPage;

