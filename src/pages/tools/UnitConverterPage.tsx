
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import UnitConverter from '@/components/tools/UnitConverter';

const UnitConverterPage = () => {
  return (
    <PageWrapper
      title="Unit Converter"
      description="Convert between different units of length, weight, area, and volume. Free online unit conversion tool."
      keywords="unit converter, length converter, weight converter, area converter, volume converter"
      toolCategory="Conversion Tools"
    >
      <UnitConverter />
    </PageWrapper>
  );
};

export default UnitConverterPage;
