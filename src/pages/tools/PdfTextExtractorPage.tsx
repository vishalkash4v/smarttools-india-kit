
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import PdfTextExtractor from '@/components/tools/PdfTextExtractor';

const PdfTextExtractorPage = () => {
  return (
    <PageWrapper
      title="PDF Text Extractor"
      description="Extract text content from PDF files. Convert PDF documents to plain text format for easy editing and copying."
      keywords="pdf text extractor, pdf to text, extract text from pdf, pdf converter, pdf text extraction"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">PDF Text Extractor</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Extract text content from PDF documents. Perfect for copying text, creating transcripts, 
            or converting PDF content to editable text format.
          </p>
        </div>
        <PdfTextExtractor />
      </div>
    </PageWrapper>
  );
};

export default PdfTextExtractorPage;
