
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import NameGenerator from '@/components/tools/NameGenerator';

const NameGeneratorPage = () => {
  return (
    <PageWrapper
      title="Name Generator - Free Online Tool"
      description="Generate creative names for startups, babies, and brands with our free online name generator tool."
    >
      <NameGenerator />
    </PageWrapper>
  );
};

export default NameGeneratorPage;
