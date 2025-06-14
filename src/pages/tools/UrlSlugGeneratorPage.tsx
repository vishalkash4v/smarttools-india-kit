
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import UrlSlugGenerator from '@/components/tools/UrlSlugGenerator';

const UrlSlugGeneratorPage = () => {
  return (
    <PageWrapper
      title="URL Slug Generator - SEO Friendly URLs"
      description="Convert any text into SEO-friendly URL slugs. Perfect for creating clean, readable URLs for your website or blog."
      keywords="url slug generator, seo url, url friendly, slug converter, seo friendly urls"
    >
      <div className="container py-8">
        <UrlSlugGenerator />
      </div>
    </PageWrapper>
  );
};

export default UrlSlugGeneratorPage;
