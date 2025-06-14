
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import IncomeTaxCalculator from '@/components/tools/IncomeTaxCalculator';

const IncomeTaxCalculatorPage = () => {
  return (
    <PageWrapper
      title="Income Tax Calculator (India)"
      description="Calculate income tax for India under both old and new tax regimes. Free income tax calculator for FY 2023-24."
      keywords="income tax calculator, tax calculator india, old vs new tax regime, income tax calculation"
      toolCategory="Financial Tools"
    >
      <IncomeTaxCalculator />
    </PageWrapper>
  );
};

export default IncomeTaxCalculatorPage;
