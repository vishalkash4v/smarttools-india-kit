
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import Base64Converter from '@/components/tools/Base64Converter';

const Base64ConverterPage = () => {
  return (
    <PageWrapper
      title="Base64 Encoder/Decoder"
      description="Encode text to Base64 or decode Base64 strings back to readable text. Free online Base64 converter tool."
      keywords="base64 encoder, base64 decoder, base64 converter, encode decode"
      toolCategory="Text Tools"
    >
      <Base64Converter />
    </PageWrapper>
  );
};

export default Base64ConverterPage;
