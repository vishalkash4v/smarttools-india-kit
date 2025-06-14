
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import SipCalculator from '@/components/tools/SipCalculator';

const SipCalculatorPage = () => {
  return (
    <PageWrapper
      title="SIP Calculator (India)"
      description="Calculate returns on your Systematic Investment Plan (SIP) investments. Free SIP calculator for mutual fund investments in India."
      keywords="sip calculator, systematic investment plan, mutual fund calculator, sip returns"
      toolCategory="Financial Tools"
    >
      <SipCalculator />
    </PageWrapper>
  );
};

export default SipCalculatorPage;
