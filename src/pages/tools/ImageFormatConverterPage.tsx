
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import ImageFormatConverter from '@/components/tools/ImageFormatConverter';

const ImageFormatConverterPage = () => {
  return (
    <PageWrapper
      title="Image Format Converter"
      description="Convert images between JPG, PNG, WebP formats with quality control. Fast, secure, and free online image converter."
      keywords="image converter, jpg to png, png to webp, webp converter, image format conversion, online image converter"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Image Format Converter</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Convert your images between different formats (JPG, PNG, WebP) with customizable quality settings. 
            All processing happens in your browser for maximum privacy.
          </p>
        </div>
        <ImageFormatConverter />
      </div>
    </PageWrapper>
  );
};

export default ImageFormatConverterPage;
