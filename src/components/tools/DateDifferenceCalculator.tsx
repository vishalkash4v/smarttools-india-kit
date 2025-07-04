
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { differenceInDays, differenceInMonths, differenceInYears, isValid, parseISO, format } from 'date-fns';
import { toast } from "sonner";
import { Calendar as CalendarIcon, Clock, ArrowRight } from 'lucide-react';
import { cn } from "@/lib/utils";

const DateDifferenceCalculator = () => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [difference, setDifference] = useState<{ years: number; months: number; days: number; totalDays: number } | null>(null);

  const handleCalculateDifference = () => {
    if (!startDate || !endDate) {
      toast.error("Please select both start and end dates.");
      setDifference(null);
      return;
    }

    if (startDate > endDate) {
      toast.error("Start date cannot be after end date.");
      setDifference(null);
      return;
    }

    const years = differenceInYears(endDate, startDate);
    const months = differenceInMonths(endDate, startDate) % 12;
    let tempDate = new Date(startDate);
    tempDate.setFullYear(tempDate.getFullYear() + years);
    tempDate.setMonth(tempDate.getMonth() + months);
    const days = differenceInDays(endDate, tempDate);
    
    const totalDays = differenceInDays(endDate, startDate);

    setDifference({ years, months, days, totalDays });
  };

  const handleReset = () => {
    setStartDate(undefined);
    setEndDate(undefined);
    setDifference(null);
  };

  const setToday = (isStart: boolean) => {
    const today = new Date();
    if (isStart) {
      setStartDate(today);
    } else {
      setEndDate(today);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 p-4 sm:p-6">
      {/* Hero Section */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 mb-3">
          <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Date Calculator</h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
          Calculate the exact difference between two dates
        </p>
      </div>

      {/* Main Calculator Card */}
      <Card className="border-0 shadow-xl bg-white relative z-10">
        <CardContent className="p-4 sm:p-6 lg:p-8">
          <div className="space-y-6 sm:space-y-8">
            {/* Date Inputs */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 items-end">
              <div className="space-y-3">
                <Label className="text-sm sm:text-base font-semibold text-gray-700">From Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full h-12 sm:h-14 text-sm sm:text-base justify-start text-left font-normal border-2 border-gray-200 rounded-xl",
                        !startDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {startDate ? format(startDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 z-50" align="start">
                    <Calendar
                      mode="single"
                      selected={startDate}
                      onSelect={setStartDate}
                      initialFocus
                      className="pointer-events-auto"
                    />
                    <div className="p-3 border-t">
                      <Button
                        onClick={() => setToday(true)}
                        variant="outline"
                        size="sm"
                        className="w-full"
                      >
                        Today
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
              
              <div className="hidden lg:flex justify-center items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                </div>
              </div>
              
              <div className="space-y-3">
                <Label className="text-sm sm:text-base font-semibold text-gray-700">To Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full h-12 sm:h-14 text-sm sm:text-base justify-start text-left font-normal border-2 border-gray-200 rounded-xl",
                        !endDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {endDate ? format(endDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 z-50" align="start">
                    <Calendar
                      mode="single"
                      selected={endDate}
                      onSelect={setEndDate}
                      initialFocus
                      className="pointer-events-auto"
                    />
                    <div className="p-3 border-t">
                      <Button
                        onClick={() => setToday(false)}
                        variant="outline"
                        size="sm"
                        className="w-full"
                      >
                        Today
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button 
                onClick={handleCalculateDifference} 
                className="h-10 sm:h-12 px-6 sm:px-8 text-sm sm:text-lg bg-blue-600 hover:bg-blue-700 rounded-xl"
                disabled={!startDate || !endDate}
              >
                Calculate Difference
              </Button>
              <Button 
                onClick={handleReset} 
                variant="outline" 
                className="h-10 sm:h-12 px-6 sm:px-8 text-sm sm:text-lg border-2 rounded-xl"
              >
                Reset
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      {difference && (
        <div className="space-y-4 sm:space-y-6 animate-fade-in">
          {/* Main Result */}
          <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Duration</h2>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600">
                  {difference.totalDays}
                </div>
                <div className="text-base sm:text-lg lg:text-xl text-gray-600">
                  {difference.totalDays === 1 ? 'day' : 'days'}
                </div>
                
                {/* Detailed Breakdown */}
                <div className="pt-4 sm:pt-6 border-t border-blue-200">
                  <div className="grid grid-cols-3 gap-3 sm:gap-6">
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">{difference.years}</div>
                      <div className="text-xs sm:text-sm text-gray-600 font-medium">Years</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">{difference.months}</div>
                      <div className="text-xs sm:text-sm text-gray-600 font-medium">Months</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">{difference.days}</div>
                      <div className="text-xs sm:text-sm text-gray-600 font-medium">Days</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Date Range Info */}
          <Card className="border-0 shadow-lg bg-white">
            <CardContent className="p-4 sm:p-6">
              <div className="text-center space-y-2">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Date Range</h3>
                <p className="text-sm sm:text-base text-gray-600 break-words">
                  From <span className="font-semibold">{format(startDate!, 'MMM dd, yyyy')}</span> to{' '}
                  <span className="font-semibold">{format(endDate!, 'MMM dd, yyyy')}</span>
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
