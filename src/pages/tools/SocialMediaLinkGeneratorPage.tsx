
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import SocialMediaLinkGenerator from '@/components/tools/SocialMediaLinkGenerator';

const SocialMediaLinkGeneratorPage = () => {
  return (
    <PageWrapper
      title="Social Media Link Generator - Create Share Links"
      description="Generate social media sharing links for Twitter, Facebook, LinkedIn, WhatsApp, and more. Create shareable URLs for your content."
      keywords="social media, share links, twitter share, facebook share, linkedin share, whatsapp share, social sharing"
    >
      <div className="container py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Social Media Link Generator</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create instant sharing links for all major social media platforms. Share your content with just one click.
          </p>
        </div>
        
        <SocialMediaLinkGenerator />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Supported Platforms</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Twitter - Share tweets with custom text</li>
              <li>• Facebook - Share posts and links</li>
              <li>• LinkedIn - Professional sharing</li>
              <li>• WhatsApp - Instant messaging</li>
              <li>• Telegram - Secure messaging</li>
              <li>• Reddit - Community sharing</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Instant link generation</li>
              <li>• Copy to clipboard</li>
              <li>• Open directly in new tab</li>
              <li>• URL encoding for special characters</li>
              <li>• Mobile-friendly sharing</li>
              <li>• No registration required</li>
            </ul>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default SocialMediaLinkGeneratorPage;
