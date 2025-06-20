
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import SocialMediaDbViewer from '@/components/tools/SocialMediaDbViewer';

const SocialMediaDbViewerPage = () => {
  return (
    <PageWrapper
      title="Social Media Database Viewer"
      description="View public profile information from Instagram and Facebook accounts"
    >
      <SocialMediaDbViewer />
    </PageWrapper>
  );
};

export default SocialMediaDbViewerPage;
