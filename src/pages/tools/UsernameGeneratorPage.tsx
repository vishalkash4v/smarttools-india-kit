
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import UsernameGenerator from '@/components/tools/UsernameGenerator';

const UsernameGeneratorPage = () => {
  return (
    <PageWrapper
      title="Username Generator - Free Online Tool"
      description="Generate unique usernames for social media, gaming, and online accounts with our free username generator."
    >
      <UsernameGenerator />
    </PageWrapper>
  );
};

export default UsernameGeneratorPage;
