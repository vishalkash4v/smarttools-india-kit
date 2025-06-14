
import React, { useState, useMemo } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { differenceInYears, differenceInMonths, differenceInDays, isValid, parseISO, format } from 'date-fns';

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

  // Get today's date in YYYY-MM-DD format for the max attribute of the date input
  const todayDateString = format(new Date(), 'yyyy-MM-dd');

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="dob" className="text-sm font-medium">Enter Your Date of Birth</Label>
        <Input
          id="dob"
          type="date"
          value={dob}
          onChange={handleDobChange}
          className="mt-1"
          max={todayDateString} // Prevent future dates
        />
      </div>

      {ageResult && ageResult.error && (
        <p className="text-sm text-destructive">{ageResult.error}</p>
      )}

      {ageResult && !ageResult.error && (
        <Card className="bg-secondary/50">
          <CardHeader>
            <CardTitle className="text-xl">Your Age</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
             <p className="text-center text-lg font-semibold text-primary mb-3">{ageResult.summary}</p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold">{ageResult.years}</p>
                <p className="text-xs text-muted-foreground">Years</p>
              </div>
              <div>
                <p className="text-3xl font-bold">{ageResult.months}</p>
                <p className="text-xs text-muted-foreground">Months</p>
              </div>
              <div>
                <p className="text-3xl font-bold">{ageResult.days}</p>
                <p className="text-xs text-muted-foreground">Days</p>
              </div>
            </div>
            <hr className="my-3 border-border" />
            <div className="text-center text-sm">
                <p>Days until next birthday: <span className="font-semibold">{ageResult.daysToNextBirthday}</span></p>
            </div>
          </CardContent>
        </Card>
      )}
      <Button onClick={handleReset} variant="outline" className="w-full mt-4">Reset</Button>
    </div>
  );
};

export default AgeCalculator;
