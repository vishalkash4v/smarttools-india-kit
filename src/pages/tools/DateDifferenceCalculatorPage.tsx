
import React from 'react';
import DateDifferenceCalculator from '@/components/tools/DateDifferenceCalculator';
import PageWrapper from '@/components/layout/PageWrapper';

const DateDifferenceCalculatorPage = () => {
  return (
    <PageWrapper
      title="Date Difference Calculator"
      description="Calculate the exact difference between two dates in years, months, days, hours, and minutes. Professional date calculator for age, duration, and time span calculations with calendar picker for easy date selection."
      keywords="date difference calculator, calculate days between dates, date duration calculator, age calculator, time difference, date range calculator, calendar date picker, date span calculator, working days calculator"
      pageTitle="Date Difference Calculator - Calculate Days Between Dates"
      toolCategory="Date Calculator"
      canonicalUrl="https://fyntools.com/date-difference-calculator"
      heroImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=630&fit=crop"
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-4 sm:py-8 px-2 sm:px-4">
        <DateDifferenceCalculator />
      </div>
    </PageWrapper>
  );
};

export default DateDifferenceCalculatorPage;
