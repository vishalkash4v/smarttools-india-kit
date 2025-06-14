
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import PpfCalculator from '@/components/tools/PpfCalculator';

const PpfCalculatorPage = () => {
  return (
    <PageWrapper
      title="PPF Calculator (India)"
      description="Calculate your Public Provident Fund (PPF) maturity amount after 15 years. Free PPF calculator for India."
      keywords="ppf calculator, public provident fund, ppf maturity calculator, ppf returns"
      toolCategory="Financial Tools"
    >
      <PpfCalculator />
    </PageWrapper>
  );
};

export default PpfCalculatorPage;
