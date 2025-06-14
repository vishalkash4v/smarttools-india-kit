
import React from 'react';
import GstCalculator from '@/components/tools/GstCalculator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Percent } from 'lucide-react';

const GstCalculatorPage = () => {
  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <Percent className="h-8 w-8 text-primary" />
            <CardTitle className="text-3xl">GST Calculator</CardTitle>
          </div>
          <CardDescription>Calculate Goods and Services Tax (GST) amounts quickly and easily.</CardDescription>
        </CardHeader>
        <CardContent>
          <GstCalculator />
        </CardContent>
      </Card>
    </div>
  );
};

export default GstCalculatorPage;
