
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import ImageUpscaler from '@/components/tools/ImageUpscaler';

const ImageUpscalerPage = () => {
  return (
    <PageWrapper
      title="Image Upscaler & Quality Enhancer"
      description="Upscale and enhance image quality using advanced interpolation techniques. Increase image resolution and improve clarity."
      keywords="image upscaler, enhance image quality, increase resolution, image enhancement, upscale photos"
      toolCategory="Image Tools"
    >
      <ImageUpscaler />
    </PageWrapper>
  );
};

export default ImageUpscalerPage;
