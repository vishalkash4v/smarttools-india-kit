
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { addDays, format } from 'date-fns';
import { toast } from "sonner";
import { Calendar as CalendarIcon, Plus, RotateCcw } from 'lucide-react';
import { cn } from "@/lib/utils";

const FutureDateCalculator = () => {
  const [startDate, setStartDate] = useState<Date>();
  const [daysToAdd, setDaysToAdd] = useState<string>('');
  const [futureDate, setFutureDate] = useState<Date | null>(null);

  const handleCalculateFutureDate = () => {
    if (!startDate) {
      toast.error("Please select a start date.");
      return;
    }

    const days = parseInt(daysToAdd);
    if (isNaN(days) || days < 0) {
      toast.error("Please enter a valid number of days.");
      return;
    }

    const result = addDays(startDate, days);
    setFutureDate(result);
  };

  const handleReset = () => {
    setStartDate(undefined);
    setDaysToAdd('');
    setFutureDate(null);
  };

  const setToday = () => {
    setStartDate(new Date());
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 p-4 sm:p-6">
      {/* Hero Section */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-100 mb-3">
          <Plus className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Future Date Calculator</h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
          Calculate future dates by adding days to any starting date
        </p>
      </div>

      {/* Main Calculator Card */}
      <Card className="border-0 shadow-xl bg-white">
        <CardContent className="p-4 sm:p-6 lg:p-8">
          <div className="space-y-6 sm:space-y-8">
            {/* Input Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-3">
                <Label className="text-sm sm:text-base font-semibold text-gray-700">Start Date</Label> 
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
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={startDate}
                      onSelect={setStartDate}
                      initialFocus
                      className="pointer-events-auto"
                    />
                    <div className="p-3 border-t">
                      <Button
                        onClick={setToday}
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
              
              <div className="space-y-3">
                <Label htmlFor="daysToAdd" className="text-sm sm:text-base font-semibold text-gray-700">
                  Days to Add
                </Label>
                <Input
                  id="daysToAdd"
                  type="number"
                  value={daysToAdd}
                  onChange={(e) => setDaysToAdd(e.target.value)}
                  placeholder="Enter number of days"
                  className="h-12 sm:h-14 text-sm sm:text-base border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-0"
                  min="0"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button 
                onClick={handleCalculateFutureDate} 
                className="h-10 sm:h-12 px-6 sm:px-8 text-sm sm:text-lg bg-green-600 hover:bg-green-700 rounded-xl"
                disabled={!startDate || !daysToAdd}
              >
                <Plus className="w-4 h-4 mr-2" />
                Calculate Future Date
              </Button>
              <Button 
                onClick={handleReset} 
                variant="outline" 
                className="h-10 sm:h-12 px-6 sm:px-8 text-sm sm:text-lg border-2 rounded-xl"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      {futureDate && (
        <div className="space-y-4 sm:space-y-6 animate-fade-in">
          {/* Main Result */}
          <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-emerald-50">
            <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Future Date</h2>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600">
                  {format(futureDate, 'EEEE')}
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  {format(futureDate, 'MMMM dd, yyyy')}
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Calculation Summary */}
          <Card className="border-0 shadow-lg bg-white">
            <CardContent className="p-4 sm:p-6">
              <div className="text-center space-y-2">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Calculation Summary</h3>
                <p className="text-sm sm:text-base text-gray-600 break-words">
                  <span className="font-semibold">{format(startDate!, 'MMM dd, yyyy')}</span> + {daysToAdd} days = {' '}
                  <span className="font-semibold text-green-600">{format(futureDate, 'MMM dd, yyyy')}</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default FutureDateCalculator;
