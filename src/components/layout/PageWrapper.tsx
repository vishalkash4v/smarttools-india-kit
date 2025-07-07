
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface PageWrapperProps {
  title: string;
  description: string;
  keywords?: string;
  pageTitle?: string;
  showBackButton?: boolean;
  backTo?: string | number;
  children: React.ReactNode;
  toolCategory?: string;
  canonicalUrl?: string;
  heroImage?: string;
}

const PageWrapper: React.FC<PageWrapperProps> = ({
  title,
  description,
  keywords,
  children,
  toolCategory = "Online Tool",
  canonicalUrl,
  heroImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop"
}) => {
  const isNonToolPage = toolCategory === 'About' || toolCategory === 'Contact';

  const fullTitle = isNonToolPage
    ? `${title} | FYN Tools Worldwide`
    : `${title} - Free Online Tool | FYN Tools Worldwide`;
  
  const fullDescription = isNonToolPage
    ? description
    : `${description} Use our free ${title.toLowerCase()} tool for instant results. No registration needed. FYN Tools Worldwide - Your one-stop destination for professional online tools.`;
  
  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={fullDescription} />
        {keywords && <meta name="keywords" content={`${keywords}, free online tool, calculator, worldwide, instant results, no registration, fyn tools worldwide`} />}
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={fullDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={heroImage} />
        <meta property="og:site_name" content="FYN Tools Worldwide" />
        {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={fullDescription} />
        <meta name="twitter:image" content={heroImage} />
        <meta name="twitter:site" content="@fyntoolsworldwide" />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="FYN Tools Worldwide" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Tool-specific structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": title,
            "description": fullDescription,
            "applicationCategory": "CalculatorApplication",
            "operatingSystem": "Any",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "provider": {
              "@type": "Organization",
              "name": "FYN Tools Worldwide",
              "url": "https://fyntools.com/"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-muted/20 relative overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02] bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
        
        <main className="py-12 relative">
          <div className="animate-fade-in-up">
            {children}
          </div>
        </main>
      </div>
    </>
  );
};

export default PageWrapper;
