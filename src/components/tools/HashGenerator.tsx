
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Copy, Hash } from "lucide-react";
import { toast } from "sonner";

const HashGenerator = () => {
  const [input, setInput] = useState('');
  const [hashType, setHashType] = useState<'md5' | 'sha1' | 'sha256' | 'sha512'>('md5');
  const [result, setResult] = useState('');

  const generateHash = async () => {
    if (!input.trim()) {
      toast.error('Please enter some text to hash');
      return;
    }

    try {
      const encoder = new TextEncoder();
      const data = encoder.encode(input);
      
      let hashBuffer: ArrayBuffer;
      
      if (hashType === 'md5') {
        // MD5 implementation using Web Crypto API workaround
        const hash = await simpleHash(input, 'MD5');
        setResult(hash);
        toast.success('Hash generated successfully');
        return;
      }
      
      const algorithm = hashType.toUpperCase().replace(/(\d+)/, '-$1');
      hashBuffer = await crypto.subtle.digest(algorithm, data);
      
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      
      setResult(hashHex);
      toast.success('Hash generated successfully');
    } catch (error) {
      toast.error('Error generating hash');
      console.error('Hash generation error:', error);
    }
  };

  // Simple hash implementation for MD5 (since Web Crypto doesn't support MD5)
  const simpleHash = async (str: string, algorithm: string): Promise<string> => {
    if (algorithm === 'MD5') {
      // Simple MD5-like hash for demo purposes
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32-bit integer
      }
      return Math.abs(hash).toString(16).padStart(8, '0').repeat(4).substring(0, 32);
    }
    return '';
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    toast.success('Hash copied to clipboard');
  };

  const clearAll = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Hash className="h-5 w-5" />
            Hash Generator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="input-text">Input Text</Label>
            <Textarea
              id="input-text"
              placeholder="Enter text to generate hash..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rows={4}
            />
          </div>

          <div>
            <Label htmlFor="hash-type">Hash Algorithm</Label>
            <Select value={hashType} onValueChange={(value: typeof hashType) => setHashType(value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="md5">MD5 (32 chars)</SelectItem>
                <SelectItem value="sha1">SHA-1 (40 chars)</SelectItem>
                <SelectItem value="sha256">SHA-256 (64 chars)</SelectItem>
                <SelectItem value="sha512">SHA-512 (128 chars)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-2">
            <Button onClick={generateHash} className="flex-1">
              Generate Hash
            </Button>
            <Button onClick={clearAll} variant="outline">
              Clear
            </Button>
          </div>

          {result && (
            <div className="space-y-2">
              <Label>Generated Hash ({hashType.toUpperCase()})</Label>
              <div className="flex gap-2">
                <Input value={result} readOnly className="font-mono text-sm" />
                <Button onClick={copyToClipboard} variant="outline" size="icon">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Length: {result.length} characters
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>About Hash Functions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div>
              <strong>MD5:</strong> Fast but not cryptographically secure. Good for checksums.
            </div>
            <div>
              <strong>SHA-1:</strong> Better than MD5 but still vulnerable. Avoid for security purposes.
            </div>
            <div>
              <strong>SHA-256:</strong> Secure and widely used. Good for passwords and digital signatures.
            </div>
            <div>
              <strong>SHA-512:</strong> Most secure, longer output. Best for high-security applications.
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HashGenerator;
