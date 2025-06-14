
import React from 'react';
import QRCodeGenerator from '@/components/tools/QRCodeGenerator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCode } from 'lucide-react';

const QRCodeGeneratorPage = () => {
  return (
    <div className="max-w-lg mx-auto animate-fade-in">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <QrCode className="h-8 w-8 text-primary" />
            <CardTitle className="text-3xl">QR Code Generator</CardTitle>
          </div>
          <CardDescription>Generate QR codes for text, URLs, and more.</CardDescription>
        </CardHeader>
        <CardContent>
          <QRCodeGenerator />
        </CardContent>
      </Card>
    </div>
  );
};

export default QRCodeGeneratorPage;
