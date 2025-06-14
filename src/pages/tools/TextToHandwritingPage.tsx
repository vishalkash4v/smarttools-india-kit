
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import TextToHandwriting from '@/components/tools/TextToHandwriting';

const TextToHandwritingPage = () => {
  return (
    <PageWrapper
      title="Text to Handwriting Converter - Convert Text to Handwritten Style"
      description="Convert typed text into handwritten-style text on lined paper. Perfect for creating handwritten notes, assignments, or personal letters."
      keywords="text to handwriting, handwriting converter, handwritten text, convert text handwriting"
    >
      <div className="container py-8">
        <TextToHandwriting />
      </div>
    </PageWrapper>
  );
};

export default TextToHandwritingPage;
