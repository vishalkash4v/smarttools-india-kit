
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import SocialMediaPlanner from '@/components/tools/SocialMediaPlanner';

const SocialMediaPlannerPage = () => {
  return (
    <PageWrapper
      title="Social Media Content Planner - Schedule Posts"
      description="Plan and organize your social media content across all platforms. Create a content calendar for Instagram, Twitter, Facebook, and more."
      keywords="social media planner, content calendar, post scheduler, social media strategy, content planning"
    >
      <div className="container py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Social Media Content Planner</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Organize your social media strategy with our content planning tool. Schedule posts and maintain consistency across platforms.
          </p>
        </div>
        
        <SocialMediaPlanner />
        
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">Content Planning Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="text-lg font-medium mb-2">Consistency</h3>
              <p className="text-muted-foreground">Maintain regular posting schedule across all your social media platforms.</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium mb-2">Time Management</h3>
              <p className="text-muted-foreground">Plan content in advance and save time on daily social media management.</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium mb-2">Strategy</h3>
              <p className="text-muted-foreground">Develop cohesive content strategy aligned with your business goals.</p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default SocialMediaPlannerPage;
