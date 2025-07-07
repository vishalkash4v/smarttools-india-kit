
import React from 'react';
import { Helmet } from 'react-helmet-async';
import PhotoAnnotationTool from '@/components/tools/PhotoAnnotationTool';

const PhotoAnnotationToolPage = () => {
  return (
    <>
      <Helmet>
        <title>Photo Annotation Tool - Add Name, Date, Signature - FYN Tools India</title>
        <meta name="description" content="Add name, date, signature, and fingerprint to your photos. Perfect for passport photographs and online application forms." />
        <meta name="keywords" content="photo annotation, add name, add date, signature, fingerprint, passport photo, application form" />
      </Helmet>
      <PhotoAnnotationTool />
    </>
  );
};

export default PhotoAnnotationToolPage;
