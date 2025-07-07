
import React from 'react';
import { Helmet } from 'react-helmet-async';
import QRScanner from '@/components/tools/QRScanner';

const QRScannerPage = () => {
  return (
    <>
      <Helmet>
        <title>QR Code Scanner - Scan QR Codes Online - FYN Tools India</title>
        <meta name="description" content="Scan QR codes using your camera or upload an image. Free online QR code scanner tool." />
        <meta name="keywords" content="QR scanner, QR code scanner, scan QR code, read QR code, QR reader" />
      </Helmet>
      <QRScanner />
    </>
  );
};

export default QRScannerPage;
