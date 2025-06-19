
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import HashGenerator from '@/components/tools/HashGenerator';

const HashGeneratorPage = () => {
  return (
    <PageWrapper
      title="Hash Generator - MD5, SHA-1, SHA-256, SHA-512"
      description="Generate cryptographic hashes using MD5, SHA-1, SHA-256, and SHA-512 algorithms. Secure hash computation for passwords, checksums, and data integrity verification."
      keywords="hash generator, md5 generator, sha256 generator, sha512 generator, cryptographic hash, checksum calculator, password hash, data integrity"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Hash Generator</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Generate cryptographic hashes using various algorithms including MD5, SHA-1, SHA-256, and SHA-512. 
            Perfect for password hashing, data integrity checks, and security applications.
          </p>
        </div>
        <HashGenerator />
      </div>
    </PageWrapper>
  );
};

export default HashGeneratorPage;
