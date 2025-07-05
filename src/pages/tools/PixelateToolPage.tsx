
import React from 'react';
import { Helmet } from 'react-helmet-async';
import PixelateTool from '@/components/tools/PixelateTool';

const PixelateToolPage = () => {
  return (
    <>
      <Helmet>
        <title>Pixelate Tool - SmartTools India</title>
        <meta name="description" content="Apply pixelation effects to specific areas of your images. Control pixelation strength, size, and area with our easy-to-use tool." />
        <meta name="keywords" content="pixelate, image, photo, effect, privacy, blur, pixelation" />
      </Helmet>
      <PixelateTool />
    </>
  );
};

export default PixelateToolPage;
