
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import SvgOptimizer from '@/components/tools/SvgOptimizer';

const SvgOptimizerPage = () => {
  return (
    <PageWrapper
      title="SVG Optimizer"
      description="Optimize SVG files by removing unused attributes, comments, and metadata. Reduce file size while maintaining quality. Professional SVG compression tool for web developers and designers."
      keywords="svg optimizer, svg minifier, svg compression, optimize svg files, reduce svg size, svg cleaner, vector graphics optimizer, web performance optimization, svg file size reducer"
      pageTitle="SVG Optimizer - Compress & Optimize SVG Files Online"
      toolCategory="Image Tool"
      canonicalUrl="https://fyntools.com/svg-optimizer"
      heroImage="https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=630&fit=crop"
    >
      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
        <div className="mb-6 sm:mb-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">SVG Optimizer</h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            Optimize your SVG files by removing unnecessary elements and attributes. 
            Reduce file size while maintaining visual quality and functionality.
          </p>
        </div>
        <SvgOptimizer />
      </div>
    </PageWrapper>
  );
};

export default SvgOptimizerPage;
