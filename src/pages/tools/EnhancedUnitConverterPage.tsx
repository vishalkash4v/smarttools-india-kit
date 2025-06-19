
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import EnhancedUnitConverter from '@/components/tools/EnhancedUnitConverter';

const EnhancedUnitConverterPage = () => {
  return (
    <PageWrapper
      title="Unit Converter - Length, Weight, Temperature, Time, Data Size"
      description="Convert between different units of measurement including length, weight, temperature, time, data size, and speed. Comprehensive unit conversion tool with real-time calculations."
      keywords="unit converter, measurement converter, length converter, weight converter, temperature converter, time converter, data size converter, speed converter"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Enhanced Unit Converter</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Convert between various units of measurement including length, weight, temperature, time, 
            data size, and speed. Real-time conversion with comprehensive unit support.
          </p>
        </div>
        <EnhancedUnitConverter />
      </div>
    </PageWrapper>
  );
};

export default EnhancedUnitConverterPage;
