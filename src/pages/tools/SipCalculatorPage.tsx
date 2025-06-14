
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import SipCalculator from '@/components/tools/SipCalculator';

const SipCalculatorPage = () => {
  return (
    <PageWrapper
      title="SIP & Lump Sum Calculator"
      description="Calculate returns on your Systematic Investment Plan (SIP) or Lump Sum investments. Free investment calculator."
      keywords="sip calculator, systematic investment plan, lump sum calculator, investment returns"
      toolCategory="Financial Tools"
    >
      <SipCalculator />
    </PageWrapper>
  );
};

export default SipCalculatorPage;
