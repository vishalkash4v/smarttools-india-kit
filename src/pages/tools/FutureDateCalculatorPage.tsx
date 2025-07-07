
import React from 'react';
import FutureDateCalculator from '@/components/tools/FutureDateCalculator';
import PageWrapper from '@/components/layout/PageWrapper';

const FutureDateCalculatorPage = () => {
  return (
    <PageWrapper
      title="Future Date Calculator"
      description="Calculate future dates by adding days to any starting date. Perfect for planning deadlines, events, and project timelines with precise date calculations."
      keywords="future date calculator, add days to date, date planning calculator, deadline calculator, project timeline calculator, date addition tool, planning calculator"
      pageTitle="Future Date Calculator"
      toolCategory="Date Calculator"
      canonicalUrl="https://fyntools.com/future-date-calculator"
      heroImage="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=630&fit=crop"
    >
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 py-8 px-4">
        <FutureDateCalculator />
      </div>
    </PageWrapper>
  );
};

export default FutureDateCalculatorPage;
