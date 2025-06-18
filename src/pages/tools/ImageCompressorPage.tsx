
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import ImageCompressor from '@/components/tools/ImageCompressor';

const ImageCompressorPage = () => {
  return (
    <PageWrapper
      title="Image Compressor - Reduce File Size"
      description="Compress images to reduce file size while maintaining quality. Convert MB images to KB for document uploads and faster web loading."
      keywords="image compressor, reduce image size, compress photos, mb to kb, image optimization, file size reducer"
      toolCategory="Image Tools"
    >
      <ImageCompressor />
    </PageWrapper>
  );
};

export default ImageCompressorPage;
