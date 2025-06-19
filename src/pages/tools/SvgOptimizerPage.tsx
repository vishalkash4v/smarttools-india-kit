
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import SvgOptimizer from '@/components/tools/SvgOptimizer';

const SvgOptimizerPage = () => {
  return (
    <PageWrapper
      title="SVG Optimizer"
      description="Optimize SVG files by removing unused attributes, comments, and metadata. Reduce file size while maintaining quality."
      keywords="svg optimizer, svg minifier, svg compression, optimize svg files, reduce svg size, svg cleaner"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">SVG Optimizer</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
