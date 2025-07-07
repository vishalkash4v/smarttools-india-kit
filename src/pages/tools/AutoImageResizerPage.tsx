
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AutoImageResizerPage = () => {
  return (
    <>
      <Helmet>
        <title>Auto Image Resizer - FYN Tools India</title>
        <meta name="description" content="Automatically resize images to optimal dimensions and file sizes for various use cases." />
        <meta name="keywords" content="auto image resizer, automatic resize, optimize images, smart resize" />
      </Helmet>
      <div className="w-full max-w-4xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Auto Image Resizer</CardTitle>
            <CardDescription>
              Coming Soon - Automatically resize images to optimal dimensions and file sizes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>This tool is under development and will be available soon.</p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AutoImageResizerPage;
