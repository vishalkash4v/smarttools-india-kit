
import React from 'react';
import { Helmet } from 'react-helmet-async';
import BackgroundRemover from '@/components/tools/BackgroundRemover';

const BackgroundRemoverPage = () => {
  return (
    <>
      <Helmet>
        <title>Background Remover - Remove Photo Background - FYN Tools India</title>
        <meta name="description" content="Remove background from your photos automatically. Free online tool to remove photo backgrounds instantly." />
        <meta name="keywords" content="background remover, remove background, photo background, image background, transparent background" />
      </Helmet>
      <BackgroundRemover />
    </>
  );
};

export default BackgroundRemoverPage;
