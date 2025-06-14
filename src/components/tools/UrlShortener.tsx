
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Copy, Link, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const UrlShortener = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [customAlias, setCustomAlias] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const generateShortUrl = () => {
    if (!originalUrl) {
      toast({
        title: "Error",
        description: "Please enter a URL",
        variant: "destructive"
      });
      return;
    }

    if (!isValidUrl(originalUrl)) {
      toast({
        title: "Error",
        description: "Please enter a valid URL",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    // Simulate API call for demo purposes
    setTimeout(() => {
      const randomId = Math.random().toString(36).substring(7);
      const alias = customAlias || randomId;
      setShortUrl(`https://short.ly/${alias}`);
      setIsLoading(false);
      
      toast({
        title: "Success!",
        description: "Short URL generated successfully"
      });
    }, 1000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    toast({
      title: "Copied!",
      description: "Short URL copied to clipboard"
    });
  };

  const openUrl = () => {
    window.open(shortUrl, '_blank');
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Link className="h-5 w-5" />
            URL Shortener
          </CardTitle>
          <CardDescription>
            Create short, shareable links for social media and messaging
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="original-url">Original URL</Label>
            <Input
              id="original-url"
              placeholder="https://example.com/very-long-url"
              value={originalUrl}
              onChange={(e) => setOriginalUrl(e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="custom-alias">Custom Alias (optional)</Label>
            <Input
              id="custom-alias"
              placeholder="my-custom-link"
              value={customAlias}
              onChange={(e) => setCustomAlias(e.target.value)}
            />
          </div>

          <Button 
            onClick={generateShortUrl} 
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? "Generating..." : "Shorten URL"}
          </Button>

          {shortUrl && (
            <div className="space-y-2">
              <Label>Short URL</Label>
              <div className="flex gap-2">
                <Input value={shortUrl} readOnly />
                <Button variant="outline" size="icon" onClick={copyToClipboard}>
                  <Copy className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={openUrl}>
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Features</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Create short, memorable links</li>
            <li>• Custom aliases for branding</li>
            <li>• Perfect for social media sharing</li>
            <li>• Copy and share instantly</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default UrlShortener;
