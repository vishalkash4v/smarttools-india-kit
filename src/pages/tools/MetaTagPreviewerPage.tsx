
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import MetaTagPreviewer from '@/components/tools/MetaTagPreviewer';

const MetaTagPreviewerPage = () => {
  return (
    <PageWrapper
      title="Meta Tag Previewer - SEO Title & Description Generator"
      description="Preview how your website will appear in Google search results and social media. Generate and optimize meta tags, Open Graph tags, and Twitter cards for better SEO."
      keywords="meta tag generator, seo preview, open graph generator, twitter card generator, meta description generator, seo title generator, search preview"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Meta Tag Previewer</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Preview how your website appears in search results and social media. 
            Generate optimized meta tags, Open Graph tags, and Twitter cards for better SEO performance.
          </p>
        </div>
        <MetaTagPreviewer />
      </div>
    </PageWrapper>
  );
};

export default MetaTagPreviewerPage;
