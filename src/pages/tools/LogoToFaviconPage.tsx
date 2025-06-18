
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import LogoToFavicon from '@/components/tools/LogoToFavicon';

const LogoToFaviconPage = () => {
  return (
    <PageWrapper
      title="Logo to Favicon Converter"
      description="Convert your logo into multiple favicon sizes for websites and apps. Generate 16x16, 32x32, 180x180 and more favicon formats instantly."
      keywords="logo to favicon, favicon generator, website icon, favicon converter, logo converter"
      toolCategory="Image Tools"
    >
      <LogoToFavicon />
    </PageWrapper>
  );
};

export default LogoToFaviconPage;
