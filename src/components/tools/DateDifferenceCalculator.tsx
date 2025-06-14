
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { differenceInDays, differenceInMonths, differenceInYears, isValid, parseISO, format } from 'date-fns';
import { toast } from "@/hooks/use-toast";

const DateDifferenceCalculator = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [difference, setDifference] = useState<{ years: number; months: number; days: number; totalDays: number } | null>(null);

  const handleCalculateDifference = () => {
    const parsedStartDate = parseISO(startDate);
    const parsedEndDate = parseISO(endDate);

    if (!isValid(parsedStartDate) || !isValid(parsedEndDate)) {
      toast({
        title: "Invalid Date",
        description: "Please enter valid start and end dates.",
        variant: "destructive",
      });
      setDifference(null);
      return;
    }

    if (parsedStartDate > parsedEndDate) {
      toast({
        title: "Invalid Date Range",
        description: "Start date cannot be after end date.",
        variant: "destructive",
      });
      setDifference(null);
      return;
    }

    const years = differenceInYears(parsedEndDate, parsedStartDate);
    const months = differenceInMonths(parsedEndDate, parsedStartDate) % 12;
    // For days, we need to be careful. A simple differenceInDays might not be what users expect in context of X years, Y months, Z days.
    // Let's calculate remaining days after accounting for full years and months.
    let tempDate = new Date(parsedStartDate);
    tempDate.setFullYear(tempDate.getFullYear() + years);
    tempDate.setMonth(tempDate.getMonth() + months);
    const days = differenceInDays(parsedEndDate, tempDate);
    
    const totalDays = differenceInDays(parsedEndDate, parsedStartDate);

    setDifference({ years, months, days, totalDays });
  };

  const handleReset = () => {
    setStartDate('');
    setEndDate('');
    setDifference(null);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="startDate">Start Date</Label>
          <Input
            id="startDate"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="endDate">End Date</Label>
          <Input
            id="endDate"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="mt-1"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        <Button onClick={handleCalculateDifference} className="w-full sm:w-auto">Calculate Difference</Button>
        <Button onClick={handleReset} variant="outline" className="w-full sm:w-auto">Reset</Button>
      </div>

      {difference && (
        <Card className="mt-6 animate-fade-in">
          <CardHeader>
            <CardTitle>Result</CardTitle>
            <CardDescription>
              Difference between {format(parseISO(startDate), 'PPP')} and {format(parseISO(endDate), 'PPP')}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-lg">
              <span className="font-semibold">{difference.years}</span> years,{' '}
              <span className="font-semibold">{difference.months}</span> months,{' '}
              <span className="font-semibold">{difference.days}</span> days
            </p>
            <p className="text-muted-foreground">
              (Total of <span className="font-semibold">{difference.totalDays}</span> days)
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default DateDifferenceCalculator;
