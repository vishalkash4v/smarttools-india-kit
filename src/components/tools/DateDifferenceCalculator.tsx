
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { differenceInDays, differenceInMonths, differenceInYears, isValid, parseISO, format } from 'date-fns';
import { toast } from "@/hooks/use-toast";
import { Calendar, Clock, ArrowRight } from 'lucide-react';

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
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 mb-4">
          <Calendar className="w-8 h-8 text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900">Date Calculator</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Calculate the exact difference between two dates
        </p>
      </div>

      {/* Main Calculator Card */}
      <Card className="border-0 shadow-xl bg-white">
        <CardContent className="p-8">
          <div className="space-y-8">
            {/* Date Inputs */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-end">
              <div className="space-y-3">
                <Label htmlFor="startDate" className="text-base font-semibold text-gray-700">From</Label>
                <Input
                  id="startDate"
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="h-14 text-lg border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0"
                />
              </div>
              
              <div className="flex justify-center items-center">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-gray-600" />
                </div>
              </div>
              
              <div className="space-y-3">
                <Label htmlFor="endDate" className="text-base font-semibold text-gray-700">To</Label>
                <Input
                  id="endDate"
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="h-14 text-lg border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleCalculateDifference} 
                className="h-12 px-8 text-lg bg-blue-600 hover:bg-blue-700 rounded-xl"
                disabled={!startDate || !endDate}
              >
                Calculate Difference
              </Button>
              <Button 
                onClick={handleReset} 
                variant="outline" 
                className="h-12 px-8 text-lg border-2 rounded-xl"
              >
                Reset
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      {difference && (
        <div className="space-y-6 animate-fade-in">
          {/* Main Result */}
          <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardContent className="p-8 text-center">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">Duration</h2>
                <div className="text-5xl font-bold text-blue-600">
                  {difference.totalDays}
                </div>
                <div className="text-xl text-gray-600">
                  {difference.totalDays === 1 ? 'day' : 'days'}
                </div>
                
                {/* Detailed Breakdown */}
                <div className="pt-6 border-t border-blue-200">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900">{difference.years}</div>
                      <div className="text-sm text-gray-600 font-medium">Years</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900">{difference.months}</div>
                      <div className="text-sm text-gray-600 font-medium">Months</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900">{difference.days}</div>
                      <div className="text-sm text-gray-600 font-medium">Days</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Date Range Info */}
          <Card className="border-0 shadow-lg bg-white">
            <CardContent className="p-6">
              <div className="text-center space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">Date Range</h3>
                <p className="text-gray-600">
                  From <span className="font-semibold">{format(parseISO(startDate), 'MMM dd, yyyy')}</span> to{' '}
                  <span className="font-semibold">{format(parseISO(endDate), 'MMM dd, yyyy')}</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default DateDifferenceCalculator;
