
import React, { useState, useMemo } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { differenceInYears, differenceInMonths, differenceInDays, isValid, parseISO, format } from 'date-fns';
import { User, Calendar, Gift } from 'lucide-react';

const AgeCalculator = () => {
  const [dob, setDob] = useState<string>('');

  const handleDobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDob(e.target.value);
  };

  const ageResult = useMemo(() => {
    if (!dob) return null;

    const birthDate = parseISO(dob);
    if (!isValid(birthDate)) return { error: "Invalid date format. Please use YYYY-MM-DD." };
    
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
    setDob('');
  };

  const todayDateString = format(new Date(), 'yyyy-MM-dd');

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
      <Card className="border-0 shadow-xl bg-white">
        <CardContent className="p-8">
          <div className="space-y-8">
            {/* Date Input */}
            <div className="space-y-4">
              <Label htmlFor="dob" className="text-lg font-semibold text-gray-700">
                Enter Your Date of Birth
              </Label>
              <Input
                id="dob"
                type="date"
                value={dob}
                onChange={handleDobChange}
                className="h-14 text-lg border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-0"
                max={todayDateString}
              />
            </div>

            {/* Error Display */}
            {ageResult && ageResult.error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                <p className="text-red-600 font-medium">{ageResult.error}</p>
              </div>
            )}

            {/* Reset Button */}
            <div className="flex justify-center">
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
      {ageResult && !ageResult.error && (
        <div className="space-y-6 animate-fade-in">
          {/* Main Age Display */}
          <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-pink-50">
            <CardContent className="p-8 text-center">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Your Age</h2>
                
                {/* Age Summary */}
                <div className="text-5xl font-bold text-purple-600">
                  {ageResult.years}
                </div>
                <div className="text-xl text-gray-600">
                  years old
                </div>
                
                {/* Detailed Breakdown */}
                <div className="pt-6 border-t border-purple-200">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900">{ageResult.years}</div>
                      <div className="text-sm text-gray-600 font-medium">Years</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900">{ageResult.months}</div>
                      <div className="text-sm text-gray-600 font-medium">Months</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900">{ageResult.days}</div>
                      <div className="text-sm text-gray-600 font-medium">Days</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Next Birthday Card */}
          <Card className="border-0 shadow-lg bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-center space-x-3">
                <Gift className="w-6 h-6 text-pink-500" />
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900">Next Birthday</h3>
                  <p className="text-gray-600">
                    <span className="font-bold text-pink-600">{ageResult.daysToNextBirthday}</span> days to go
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
