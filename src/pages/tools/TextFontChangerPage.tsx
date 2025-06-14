
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import TextFontChanger from '@/components/tools/TextFontChanger';

const TextFontChangerPage = () => {
  return (
    <PageWrapper
      title="Text Font Changer - Fancy Text Generator"
      description="Transform plain text into fancy fonts and styles. Convert your text to bold, italic, bubble text, upside down, and many more creative formats for social media and messaging."
      keywords="text font changer, fancy text generator, unicode fonts, text transformer, cool text, stylish text, social media text, fancy fonts, text converter"
    >
      <div className="container py-8">
        <TextFontChanger />
      </div>
    </PageWrapper>
  );
};

export default TextFontChangerPage;
