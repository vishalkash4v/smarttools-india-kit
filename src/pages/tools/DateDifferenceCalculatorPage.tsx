
import React from 'react';
import DateDifferenceCalculator from '@/components/tools/DateDifferenceCalculator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarRange } from 'lucide-react';

const DateDifferenceCalculatorPage = () => {
  return (
    <div className="max-w-lg mx-auto animate-fade-in">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <CalendarRange className="h-8 w-8 text-primary" />
            <CardTitle className="text-3xl">Date Difference Calculator</CardTitle>
          </div>
          <CardDescription>Calculate the duration between two dates in years, months, and days.</CardDescription>
        </CardHeader>
        <CardContent>
          <DateDifferenceCalculator />
        </CardContent>
      </Card>
    </div>
  );
};

export default DateDifferenceCalculatorPage;
