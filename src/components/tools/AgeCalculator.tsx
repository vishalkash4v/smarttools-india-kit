
import React, { useState, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { differenceInYears, differenceInMonths, differenceInDays, isValid, format } from 'date-fns';
import { User, Calendar as CalendarIcon, Gift } from 'lucide-react';
import { cn } from "@/lib/utils";

const AgeCalculator = () => {
  const [dob, setDob] = useState<Date>();

  const ageResult = useMemo(() => {
    if (!dob) return null;

    const birthDate = dob;
    if (!isValid(birthDate)) return { error: "Invalid date selected." };
    
    const today = new Date();
    if (birthDate > today) return { error: "Date of birth cannot be in the future." };

    const years = differenceInYears(today, birthDate);
    const monthsDate = new Date(birthDate);
    monthsDate.setFullYear(monthsDate.getFullYear() + years);
    const months = differenceInMonths(today, monthsDate);
    const daysDate = new Date(monthsDate);
    daysDate.setMonth(daysDate.getMonth() + months);
    const days = differenceInDays(today, daysDate);
    
    const nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    if (nextBirthday < today) {
      nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }
    const daysToNextBirthday = differenceInDays(nextBirthday, today);

    return {
      years,
      months,
      days,
      daysToNextBirthday,
      error: null,
      summary: `You are ${years} years, ${months} months, and ${days} days old.`
    };
  }, [dob]);

  const handleReset = () => {
    setDob(undefined);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-100 mb-4">
          <User className="w-8 h-8 text-purple-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900">Age Calculator</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Calculate your exact age and days until your next birthday
        </p>
      </div>

      {/* Main Calculator Card */}
      <Card className="glass-card shadow-xl">
        <CardContent className="p-8">
          <div className="space-y-8">
            {/* Date Input */}
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h3 className="text-lg font-semibold gradient-text">
                  Select Your Date of Birth
                </h3>
                <p className="text-muted-foreground text-sm">Choose your birth date from the calendar below</p>
              </div>
              
              <div className="flex justify-center">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="glass"
                      className={cn(
                        "w-full max-w-md h-14 text-lg justify-start text-left font-normal border-2",
                        !dob && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-3 h-5 w-5" />
                      {dob ? format(dob, "MMMM d, yyyy") : <span>Pick your birth date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 glass-card" align="center">
                    <Calendar
                      mode="single"
                      selected={dob}
                      onSelect={setDob}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            {/* Error Display */}
            {ageResult && ageResult.error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                <p className="text-red-600 font-medium">{ageResult.error}</p>
              </div>
            )}

            {/* Reset Button */}
            {dob && (
              <div className="flex justify-center">
                <Button 
                  onClick={handleReset} 
                  variant="glass" 
                  className="h-12 px-8 text-lg"
                >
                  Reset Date
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      {ageResult && !ageResult.error && (
        <div className="space-y-6 animate-fade-in">
          {/* Main Age Display */}
          <Card className="glass-card shadow-xl bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 text-center">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold gradient-text">Your Age</h2>
                
                {/* Age Summary */}
                <div className="text-6xl font-bold gradient-text animate-glow-pulse">
                  {ageResult.years}
                </div>
                <div className="text-xl text-muted-foreground">
                  years old
                </div>
                
                {/* Detailed Breakdown */}
                <div className="pt-6 border-t border-border/30">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center space-y-2">
                      <div className="text-3xl font-bold text-foreground">{ageResult.years}</div>
                      <div className="text-sm text-muted-foreground font-medium">Years</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-3xl font-bold text-foreground">{ageResult.months}</div>
                      <div className="text-sm text-muted-foreground font-medium">Months</div>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="text-3xl font-bold text-foreground">{ageResult.days}</div>
                      <div className="text-sm text-muted-foreground font-medium">Days</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Next Birthday Card */}
          <Card className="glass-card shadow-lg hover-lift">
            <CardContent className="p-6">
              <div className="flex items-center justify-center space-x-3">
                <div className="p-3 rounded-full bg-gradient-to-br from-primary/20 to-accent/20">
                  <Gift className="w-6 h-6 text-primary" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold gradient-text">Next Birthday</h3>
                  <p className="text-muted-foreground">
                    <span className="font-bold text-primary">{ageResult.daysToNextBirthday}</span> days to go
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;
