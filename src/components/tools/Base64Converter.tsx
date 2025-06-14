
import React, { useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Copy, Binary, ArrowUpDown, Upload, FileText, Image, Music } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Base64Converter = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');
  const [fileType, setFileType] = useState<'text' | 'image' | 'audio'>('text');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB limit

  const handleTextEncode = () => {
    try {
      const encoded = btoa(inputText);
      setOutputText(encoded);
    } catch (error) {
      toast({
        title: "Encoding Error",
        description: "Failed to encode the text. Please check your input.",
        variant: "destructive",
      });
    }
  };

  const handleTextDecode = () => {
    try {
      const decoded = atob(inputText);
      setOutputText(decoded);
    } catch (error) {
      toast({
        title: "Decoding Error",
        description: "Invalid Base64 string. Please check your input.",
        variant: "destructive",
      });
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.size > MAX_FILE_SIZE) {
      toast({
        title: "File Too Large",
        description: "Please select a file smaller than 2MB.",
        variant: "destructive",
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      const base64 = result.split(',')[1]; // Remove data URL prefix
      setOutputText(result); // Keep full data URL for images
      setInputText(base64); // Just base64 for text area
    };
    reader.readAsDataURL(file);
  };

  const handleConvert = () => {
    if (fileType === 'text') {
      if (mode === 'encode') {
        handleTextEncode();
      } else {
        handleTextDecode();
      }
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(mode === 'encode' && fileType !== 'text' ? outputText : inputText);
      toast({
        title: "Copied!",
        description: "Result copied to clipboard.",
      });
    } catch (error) {
      toast({
        title: "Copy Failed",
        description: "Failed to copy to clipboard.",
        variant: "destructive",
      });
    }
  };

  const handleSwapMode = () => {
    setMode(mode === 'encode' ? 'decode' : 'encode');
    setInputText(fileType === 'text' ? outputText : '');
    setOutputText('');
  };

  const handleClear = () => {
    setInputText('');
    setOutputText('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const getAcceptedFileTypes = () => {
    switch (fileType) {
      case 'image':
        return 'image/*';
      case 'audio':
        return 'audio/*';
      default:
        return '*/*';
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Binary className="h-6 w-6" />
            Base64 Encoder/Decoder
          </CardTitle>
          <CardDescription>
            Encode text to Base64, decode Base64 strings, or convert files to Base64.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Tabs defaultValue="text" onValueChange={(value) => setFileType(value as 'text' | 'image' | 'audio')}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="text" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Text
              </TabsTrigger>
              <TabsTrigger value="image" className="flex items-center gap-2">
                <Image className="h-4 w-4" />
                Image
              </TabsTrigger>
              <TabsTrigger value="audio" className="flex items-center gap-2">
                <Music className="h-4 w-4" />
                Audio
              </TabsTrigger>
            </TabsList>

            <TabsContent value="text" className="space-y-6">
              {/* Mode Toggle for Text */}
              <div className="flex gap-2">
                <Button
                  variant={mode === 'encode' ? 'default' : 'outline'}
                  onClick={() => setMode('encode')}
                  className="flex-1"
                >
                  Encode to Base64
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleSwapMode}
                  title="Swap input/output"
                >
                  <ArrowUpDown className="h-4 w-4" />
                </Button>
                <Button
                  variant={mode === 'decode' ? 'default' : 'outline'}
                  onClick={() => setMode('decode')}
                  className="flex-1"
                >
                  Decode from Base64
                </Button>
              </div>

              {/* Text Input */}
              <div className="space-y-2">
                <Label htmlFor="textInput">
                  {mode === 'encode' ? 'Text to Encode' : 'Base64 to Decode'}
                </Label>
                <Textarea
                  id="textInput"
                  placeholder={mode === 'encode' ? 'Enter text to encode...' : 'Enter Base64 string to decode...'}
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="min-h-32"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <Button onClick={handleConvert} disabled={!inputText} className="flex-1">
                  {mode === 'encode' ? 'Encode' : 'Decode'}
                </Button>
                <Button variant="outline" onClick={handleClear}>
                  Clear
                </Button>
              </div>

              {/* Text Output */}
              {outputText && (
                <div className="space-y-2">
                  <Label htmlFor="textOutput">
                    {mode === 'encode' ? 'Base64 Encoded' : 'Decoded Text'}
                  </Label>
                  <div className="relative">
                    <Textarea
                      id="textOutput"
                      value={outputText}
                      readOnly
                      className="min-h-32 pr-12"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handleCopy}
                      className="absolute top-2 right-2"
                      title="Copy to clipboard"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="image" className="space-y-6">
              {/* File Upload for Images */}
              <div className="space-y-2">
                <Label htmlFor="imageInput">Upload Image (Max 2MB)</Label>
                <div className="flex gap-2">
                  <input
                    ref={fileInputRef}
                    id="imageInput"
                    type="file"
                    accept={getAcceptedFileTypes()}
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <Button
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-2"
                  >
                    <Upload className="h-4 w-4" />
                    Choose Image
                  </Button>
                  <Button variant="outline" onClick={handleClear}>
                    Clear
                  </Button>
                </div>
              </div>

              {/* Image Preview and Base64 Output */}
              {outputText && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Image Preview</Label>
                    <div className="border rounded-lg p-4 bg-muted/50">
                      <img
                        src={outputText}
                        alt="Uploaded"
                        className="max-w-full max-h-64 object-contain mx-auto"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="imageBase64">Base64 Output</Label>
                    <div className="relative">
                      <Textarea
                        id="imageBase64"
                        value={inputText}
                        readOnly
                        className="min-h-32 pr-12 font-mono text-xs"
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={handleCopy}
                        className="absolute top-2 right-2"
                        title="Copy to clipboard"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="audio" className="space-y-6">
              {/* File Upload for Audio */}
              <div className="space-y-2">
                <Label htmlFor="audioInput">Upload Audio File (Max 2MB)</Label>
                <div className="flex gap-2">
                  <input
                    ref={fileInputRef}
                    id="audioInput"
                    type="file"
                    accept={getAcceptedFileTypes()}
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <Button
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-2"
                  >
                    <Upload className="h-4 w-4" />
                    Choose Audio
                  </Button>
                  <Button variant="outline" onClick={handleClear}>
                    Clear
                  </Button>
                </div>
              </div>

              {/* Audio Preview and Base64 Output */}
              {outputText && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Audio Preview</Label>
                    <div className="border rounded-lg p-4 bg-muted/50">
                      <audio
                        src={outputText}
                        controls
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="audioBase64">Base64 Output</Label>
                    <div className="relative">
                      <Textarea
                        id="audioBase64"
                        value={inputText}
                        readOnly
                        className="min-h-32 pr-12 font-mono text-xs"
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={handleCopy}
                        className="absolute top-2 right-2"
                        title="Copy to clipboard"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Base64Converter;
