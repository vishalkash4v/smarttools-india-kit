
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './Header';

interface PageWrapperProps {
  title: string;
  description: string;
  keywords?: string;
  pageTitle?: string;
  showBackButton?: boolean;
  backTo?: string | number;
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({
  title,
  description,
  keywords,
  pageTitle,
  showBackButton = true,
  backTo = -1,
  children
}) => {
  return (
    <>
      <Helmet>
        <title>{title} - SmartTools India</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <Header 
          title={pageTitle} 
          showBackButton={showBackButton} 
          backTo={typeof backTo === 'string' ? backTo : backTo.toString()} 
        />
        <main className="py-8">
          <div className="animate-fade-in-up">
            {children}
          </div>
        </main>
      </div>
    </>
  );
};

export default PageWrapper;
