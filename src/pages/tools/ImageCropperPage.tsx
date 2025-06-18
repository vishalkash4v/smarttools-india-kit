
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import ImageCropper from '@/components/tools/ImageCropper';

const ImageCropperPage = () => {
  return (
    <PageWrapper
      title="Image Cropper & Resizer - Social Media Sizes"
      description="Crop and resize images for Instagram, Facebook, Twitter, LinkedIn, YouTube and other social media platforms. Perfect dimensions for posts, stories, covers and more."
      keywords="image cropper, image resizer, social media sizes, instagram post, facebook cover, twitter header, crop image, resize image"
      toolCategory="Image Tools"
    >
      <ImageCropper />
    </PageWrapper>
  );
};

export default ImageCropperPage;
