
import React from 'react';
import EmiCalculatorComponent from '@/components/tools/EmiCalculator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Banknote } from 'lucide-react';

const EmiCalculatorPage = () => {
  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <Banknote className="h-8 w-8 text-primary" />
            <CardTitle className="text-3xl">EMI Calculator</CardTitle>
          </div>
          <CardDescription>Calculate your Equated Monthly Installment (EMI) for loans.</CardDescription>
        </CardHeader>
        <CardContent>
          <EmiCalculatorComponent />
        </CardContent>
      </Card>
    </div>
  );
};

export default EmiCalculatorPage;

