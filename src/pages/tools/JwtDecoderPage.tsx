
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import JwtDecoder from '@/components/tools/JwtDecoder';

const JwtDecoderPage = () => {
  return (
    <PageWrapper
      title="JWT Token Decoder - Parse JSON Web Tokens Online"
      description="Decode and parse JWT (JSON Web Token) headers, payloads, and signatures. Inspect token contents, expiration dates, and claims without verification."
      keywords="jwt decoder, json web token parser, jwt debugger, token decoder, jwt inspector, decode jwt online, jwt payload viewer"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">JWT Token Decoder</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Decode and inspect JWT (JSON Web Token) contents including headers, payloads, and signatures. 
            Analyze token structure and claims without requiring the secret key.
          </p>
        </div>
        <JwtDecoder />
      </div>
    </PageWrapper>
  );
};

export default JwtDecoderPage;
