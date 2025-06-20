
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import SocialMediaDownloader from '@/components/tools/SocialMediaDownloader';

const SocialMediaDownloaderPage = () => {
  return (
    <PageWrapper
      title="Social Media Content Downloader"
      description="Download videos, reels, posts, and stories from Instagram and Facebook"
    >
      <SocialMediaDownloader />
    </PageWrapper>
  );
};

export default SocialMediaDownloaderPage;
