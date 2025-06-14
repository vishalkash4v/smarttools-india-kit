
import React from 'react';
import BmiCalculatorComponent from '@/components/tools/BmiCalculator'; // Renamed to avoid conflict
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bmi as BmiIcon } from 'lucide-react';

const BmiCalculatorPage = () => {
  return (
    <div className="max-w-lg mx-auto animate-fade-in">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <BmiIcon className="h-8 w-8 text-primary" />
            <CardTitle className="text-3xl">BMI Calculator</CardTitle>
          </div>
          <CardDescription>Calculate your Body Mass Index.</CardDescription>
        </CardHeader>
        <CardContent>
          <BmiCalculatorComponent />
        </CardContent>
      </Card>
    </div>
  );
};

export default BmiCalculatorPage;
