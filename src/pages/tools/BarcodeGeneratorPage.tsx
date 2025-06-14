
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import BarcodeGenerator from '@/components/tools/BarcodeGenerator';

const BarcodeGeneratorPage = () => {
  return (
    <PageWrapper
      title="Barcode Generator - Create Barcodes Online"
      description="Generate barcodes from text for free. Supports multiple barcode formats including Code 128, Code 39, EAN-13, and UPC."
      keywords="barcode generator, create barcode, code 128, code 39, ean-13, upc barcode"
    >
      <div className="container py-8">
        <BarcodeGenerator />
      </div>
    </PageWrapper>
  );
};

export default BarcodeGeneratorPage;
