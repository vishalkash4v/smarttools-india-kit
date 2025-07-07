
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Upload, Camera, Copy, ExternalLink, RotateCcw } from 'lucide-react';
import { toast } from 'sonner';
import jsQR from 'jsqr';

const QRScanner = () => {
  const [scannedResult, setScannedResult] = useState<string>('');
  const [isScanning, setIsScanning] = useState(false);
  const [hasCamera, setHasCamera] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const scanIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Check for camera availability
  useEffect(() => {
    navigator.mediaDevices.enumerateDevices()
      .then(devices => {
        const hasVideoInput = devices.some(device => device.kind === 'videoinput');
        setHasCamera(hasVideoInput);
      })
      .catch(() => setHasCamera(false));
  }, []);

  // QR Code detection function using jsQR
  const detectQRCode = useCallback((imageData: ImageData) => {
    try {
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: "dontInvert",
      });
      
      if (code) {
        return code.data;
      }
      
      return null;
    } catch (error) {
      console.error('QR detection error:', error);
      return null;
    }
  }, []);


  const startCamera = useCallback(async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' } // Use back camera if available
      });
      
      setStream(mediaStream);
      setIsScanning(true);
      
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        videoRef.current.play();
        
        // Start scanning
        scanIntervalRef.current = setInterval(() => {
          scanFrame();
        }, 500);
      }
    } catch (error) {
      toast.error('Failed to access camera');
      console.error('Camera access error:', error);
    }
  }, []);

  const stopCamera = useCallback(() => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    setIsScanning(false);
    
    if (scanIntervalRef.current) {
      clearInterval(scanIntervalRef.current);
      scanIntervalRef.current = null;
    }
  }, [stream]);

  const scanFrame = useCallback(() => {
    if (!videoRef.current || !canvasRef.current) return;
    
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    if (!ctx || video.videoWidth === 0) return;
    
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0);
    
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const result = detectQRCode(imageData);
    
    if (result) {
      setScannedResult(result);
      stopCamera();
      toast.success('QR Code detected!');
    }
  }, [detectQRCode, stopCamera]);

  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        toast.error('Please select a valid image file');
        return;
      }

      const img = new Image();
      img.onload = () => {
        if (!canvasRef.current) return;
        
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const result = detectQRCode(imageData);
        
        if (result) {
          setScannedResult(result);
          toast.success('QR Code detected in image!');
        } else {
          toast.error('No QR Code found in image');
        }
      };
      img.src = URL.createObjectURL(file);
    }
  }, [detectQRCode]);

  const copyToClipboard = () => {
    if (scannedResult) {
      navigator.clipboard.writeText(scannedResult);
      toast.success('Result copied to clipboard!');
    }
  };

  const openLink = () => {
    if (scannedResult && (scannedResult.startsWith('http') || scannedResult.startsWith('https'))) {
      window.open(scannedResult, '_blank');
    }
  };

  const reset = () => {
    setScannedResult('');
    stopCamera();
  };

  const isUrl = scannedResult.startsWith('http') || scannedResult.startsWith('https');

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>QR Code Scanner</CardTitle>
          <CardDescription>
            Scan QR codes using your camera or upload an image
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Camera Section */}
          {hasCamera && (
            <div className="space-y-4">
              <h3 className="font-semibold">Camera Scanner</h3>
              <div className="flex gap-2">
                <Button
                  onClick={isScanning ? stopCamera : startCamera}
                  variant={isScanning ? "destructive" : "default"}
                  className="flex-1"
                >
                  <Camera className="mr-2 h-4 w-4" />
                  {isScanning ? 'Stop Camera' : 'Start Camera'}
                </Button>
              </div>
              
              {isScanning && (
                <div className="flex justify-center">
                  <video
                    ref={videoRef}
                    className="max-w-full max-h-64 border border-border rounded-lg"
                    style={{ maxWidth: '100%', height: 'auto' }}
                    playsInline
                    muted
                  />
                </div>
              )}
            </div>
          )}

          {/* File Upload Section */}
          <div className="space-y-4">
            <h3 className="font-semibold">Upload Image</h3>
            <Button
              onClick={() => fileInputRef.current?.click()}
              variant="outline"
              className="w-full"
            >
              <Upload className="mr-2 h-4 w-4" />
              Upload QR Code Image
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
          </div>

          {/* Hidden Canvas for Processing */}
          <canvas ref={canvasRef} className="hidden" />

          {/* Results Section */}
          {scannedResult && (
            <div className="space-y-4">
              <h3 className="font-semibold">Scanned Result</h3>
              <Alert>
                <AlertDescription>
                  <div className="space-y-3">
                    <div className="font-mono text-sm bg-muted p-2 rounded break-all">
                      {scannedResult}
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={copyToClipboard}
                      >
                        <Copy className="mr-2 h-3 w-3" />
                        Copy
                      </Button>
                      {isUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={openLink}
                        >
                          <ExternalLink className="mr-2 h-3 w-3" />
                          Open Link
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={reset}
                      >
                        <RotateCcw className="mr-2 h-3 w-3" />
                        Reset
                      </Button>
                    </div>
                  </div>
                </AlertDescription>
              </Alert>
            </div>
          )}

          {/* Instructions */}
          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">How to use:</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>1. Use the camera scanner to scan QR codes in real-time</li>
              <li>2. Or upload an image containing a QR code</li>
              <li>3. The scanned content will appear below</li>
              <li>4. Copy the result or open links directly</li>
            </ul>
          </div>

          {!hasCamera && (
            <Alert>
              <AlertDescription>
                Camera not available. You can still upload images containing QR codes.
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default QRScanner;
