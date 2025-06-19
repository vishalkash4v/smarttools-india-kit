
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import PlaceholderImageGenerator from '@/components/tools/PlaceholderImageGenerator';

const PlaceholderImageGeneratorPage = () => {
  return (
    <PageWrapper
      title="Placeholder Image Generator"
      description="Generate custom placeholder images with specified dimensions, colors, and text. Perfect for web design mockups and prototypes."
      keywords="placeholder image generator, dummy image creator, mockup images, design placeholders, custom placeholder images"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Placeholder Image Generator</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Create custom placeholder images for your designs and mockups. Choose dimensions, colors, 
            and custom text to generate perfect dummy images for your projects.
          </p>
        </div>
        <PlaceholderImageGenerator />
      </div>
    </PageWrapper>
  );
};

export default PlaceholderImageGeneratorPage;
