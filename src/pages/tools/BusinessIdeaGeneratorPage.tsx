
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import BusinessIdeaGenerator from '@/components/tools/BusinessIdeaGenerator';

const BusinessIdeaGeneratorPage = () => {
  return (
    <PageWrapper
      title="Business Idea Generator - Free Online Tool"
      description="Generate innovative business ideas based on your industry preferences and budget with our free business idea generator."
    >
      <BusinessIdeaGenerator />
    </PageWrapper>
  );
};

export default BusinessIdeaGeneratorPage;
