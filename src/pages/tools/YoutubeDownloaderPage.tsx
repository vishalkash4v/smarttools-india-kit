
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import YoutubeDownloader from '@/components/tools/YoutubeDownloader';

const YoutubeDownloaderPage = () => {
  return (
    <PageWrapper
      title="YouTube Video & Audio Downloader"
      description="Download YouTube videos in various qualities or extract audio as MP3"
    >
      <YoutubeDownloader />
    </PageWrapper>
  );
};

export default YoutubeDownloaderPage;
