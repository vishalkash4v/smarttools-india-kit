
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import UrlShortener from '@/components/tools/UrlShortener';

const UrlShortenerPage = () => {
  return (
    <PageWrapper
      title="URL Shortener - Create Short Links"
      description="Shorten long URLs for social media sharing. Create custom short links with your own alias for better branding."
      keywords="url shortener, short links, link shortener, custom urls, social media links, branded links"
    >
      <div className="container py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">URL Shortener</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform long URLs into short, shareable links perfect for social media, emails, and messaging.
          </p>
        </div>
        
        <UrlShortener />
        
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">Why Use Short URLs?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="text-lg font-medium mb-2">Better Sharing</h3>
              <p className="text-muted-foreground">Short links are easier to share on social media platforms with character limits.</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium mb-2">Cleaner Look</h3>
              <p className="text-muted-foreground">Clean, professional-looking links that don't clutter your content.</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium mb-2">Custom Branding</h3>
              <p className="text-muted-foreground">Use custom aliases to maintain brand consistency across all your links.</p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default UrlShortenerPage;
