
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import ImageMetadataViewer from '@/components/tools/ImageMetadataViewer';

const ImageMetadataViewerPage = () => {
  return (
    <PageWrapper
      title="Image Metadata Viewer"
      description="View and extract EXIF data and metadata from images. See camera settings, GPS location, and technical details."
      keywords="image metadata, exif viewer, image exif data, camera metadata, image properties, photo metadata"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Image Metadata & EXIF Viewer</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Extract and view metadata from your images including EXIF data, camera settings, 
            GPS location, and technical properties. All processing happens locally in your browser.
          </p>
        </div>
        <ImageMetadataViewer />
      </div>
    </PageWrapper>
  );
};

export default ImageMetadataViewerPage;
