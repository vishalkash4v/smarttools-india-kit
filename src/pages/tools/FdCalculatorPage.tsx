
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import FdCalculator from '@/components/tools/FdCalculator';

const FdCalculatorPage = () => {
  return (
    <PageWrapper
      title="FD Calculator (India)"
      description="Calculate Fixed Deposit (FD) returns and maturity amount with compound interest. Free FD calculator for India."
      keywords="fd calculator, fixed deposit calculator, fd returns, fd maturity calculator"
      toolCategory="Financial Tools"
    >
      <FdCalculator />
    </PageWrapper>
  );
};

export default FdCalculatorPage;
