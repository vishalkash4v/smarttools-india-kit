
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import AiTextRewriter from '@/components/tools/AiTextRewriter';

const AiTextRewriterPage = () => {
  return (
    <PageWrapper
      title="AI Text Rewriter"
      description="Rewrite your content to make it unique and avoid AI detection. Perfect for blogs, articles, and any text content."
      keywords="ai text rewriter, content rewriter, avoid ai detection, text paraphraser"
      toolCategory="Text & Writing Tools"
    >
      <AiTextRewriter />
    </PageWrapper>
  );
};

export default AiTextRewriterPage;
