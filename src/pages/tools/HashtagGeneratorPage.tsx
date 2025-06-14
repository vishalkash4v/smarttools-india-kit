
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import HashtagGenerator from '@/components/tools/HashtagGenerator';

const HashtagGeneratorPage = () => {
  return (
    <PageWrapper
      title="Hashtag Generator - Social Media Hashtags"
      description="Generate relevant hashtags for Instagram, Twitter, and other social media platforms. Boost your post visibility with trending hashtags."
      keywords="hashtag generator, instagram hashtags, twitter hashtags, social media tags, trending hashtags"
    >
      <div className="container py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Hashtag Generator</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the perfect hashtags for your social media posts. Increase engagement and reach with relevant tags.
          </p>
        </div>
        
        <HashtagGenerator />
        
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">Hashtag Strategy Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-3">Instagram</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Use 5-10 hashtags for optimal reach</li>
                <li>• Mix popular and niche hashtags</li>
                <li>• Research hashtags in your industry</li>
                <li>• Use location-based tags when relevant</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Twitter</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Use 1-2 hashtags per tweet</li>
                <li>• Join trending conversations</li>
                <li>• Create branded hashtags for campaigns</li>
                <li>• Keep hashtags short and memorable</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default HashtagGeneratorPage;
