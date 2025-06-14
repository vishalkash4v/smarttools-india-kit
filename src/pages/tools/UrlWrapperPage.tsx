
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import UrlWrapper from '@/components/tools/UrlWrapper';

const UrlWrapperPage = () => {
  return (
    <PageWrapper
      title="URL App Wrapper - Convert Links to App-Opening URLs"
      description="Convert regular web URLs into app-opening links. Create deep links, universal links, and custom wrapper URLs that open content within your mobile app instead of the browser."
      keywords="url wrapper, deep links, universal links, app links, mobile app, react native, custom scheme, app opening links"
    >
      <div className="container py-8">
        <UrlWrapper />
      </div>
    </PageWrapper>
  );
};

export default UrlWrapperPage;
