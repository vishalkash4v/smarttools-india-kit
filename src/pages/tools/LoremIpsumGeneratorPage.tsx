
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import LoremIpsumGenerator from '@/components/tools/LoremIpsumGenerator';

const LoremIpsumGeneratorPage = () => {
  return (
    <PageWrapper
      title="Lorem Ipsum Generator"
      description="Generate Lorem Ipsum placeholder text for your designs and layouts. Customize paragraphs, word count, and formatting."
      keywords="lorem ipsum generator, placeholder text, dummy text, design text"
      toolCategory="Text & Writing Tools"
    >
      <LoremIpsumGenerator />
    </PageWrapper>
  );
};

export default LoremIpsumGeneratorPage;
