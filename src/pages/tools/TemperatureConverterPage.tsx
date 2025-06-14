
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import TemperatureConverter from '@/components/tools/TemperatureConverter';

const TemperatureConverterPage = () => {
  return (
    <PageWrapper
      title="Temperature Converter"
      description="Convert temperatures between Celsius, Fahrenheit, and Kelvin. Free online temperature conversion tool."
      keywords="temperature converter, celsius to fahrenheit, temperature conversion, kelvin converter"
      toolCategory="Conversion Tools"
    >
      <TemperatureConverter />
    </PageWrapper>
  );
};

export default TemperatureConverterPage;
