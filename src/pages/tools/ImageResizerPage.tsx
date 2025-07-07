
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ImageResizer from '@/components/tools/ImageResizer';

const ImageResizerPage = () => {
  return (
    <>
      <Helmet>
        <title>Image Resizer - Resize Images Online - FYN Tools India</title>
        <meta name="description" content="Resize images manually with dimension and file size control. Perfect for documents, photos, and web images." />
        <meta name="keywords" content="image resizer, resize image, image dimensions, photo resizer, compress image" />
      </Helmet>
      <ImageResizer />
    </>
  );
};

export default ImageResizerPage;
