
import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Copy, ExternalLink, Smartphone, Globe, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const UrlWrapper = () => {
  const [inputUrl, setInputUrl] = useState('');
  const [appName, setAppName] = useState('MyApp');
  const [customScheme, setCustomScheme] = useState('myapp');
  const [wrappedUrls, setWrappedUrls] = useState<{
    deepLink: string;
    universalLink: string;
    customLink: string;
  } | null>(null);
  const { toast } = useToast();

  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const generateWrappedUrls = useCallback(() => {
    if (!inputUrl.trim()) {
      toast({
        title: "Error",
        description: "Please enter a valid URL",
        variant: "destructive",
      });
      return;
    }

    if (!isValidUrl(inputUrl)) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid URL (include http:// or https://)",
        variant: "destructive",
      });
      return;
    }

    const encodedUrl = encodeURIComponent(inputUrl);
    
    // Deep Link (custom scheme)
    const deepLink = `${customScheme}://open?url=${encodedUrl}`;
    
    // Universal Link (for iOS/Android apps with associated domains)
    const universalLink = `https://${customScheme}.app/open?url=${encodedUrl}`;
    
    // Custom wrapper link that can be used with a web service
    const customLink = `https://link-wrapper.vercel.app/open?scheme=${customScheme}&url=${encodedUrl}`;

    setWrappedUrls({
      deepLink,
      universalLink,
      customLink
    });

    toast({
      title: "Links Generated!",
      description: "App-opening links have been created successfully",
    });
  }, [inputUrl, customScheme, toast]);

  const copyToClipboard = useCallback(async (text: string, linkType: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied!",
        description: `${linkType} copied to clipboard`,
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Could not copy link to clipboard",
        variant: "destructive",
      });
    }
  }, [toast]);

  const clearAll = useCallback(() => {
    setInputUrl('');
    setWrappedUrls(null);
    toast({
      title: "Cleared!",
      description: "All fields have been cleared",
    });
  }, [toast]);

  const openLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            URL App Wrapper
            <Smartphone className="h-5 w-5" />
          </CardTitle>
          <CardDescription>
            Convert regular URLs into app-opening links. Perfect for mobile apps that want to open links within the app instead of the browser.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="input-url" className="text-sm font-medium">
                Enter URL to wrap:
              </label>
              <Input
                id="input-url"
                placeholder="https://example.com"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="custom-scheme" className="text-sm font-medium">
                Custom App Scheme:
              </label>
              <Input
                id="custom-scheme"
                placeholder="myapp"
                value={customScheme}
                onChange={(e) => setCustomScheme(e.target.value.toLowerCase().replace(/[^a-z0-9]/g, ''))}
                className="w-full"
              />
            </div>
          </div>

          <div className="flex gap-2">
            <Button onClick={generateWrappedUrls} className="flex-1">
              <ExternalLink className="h-4 w-4 mr-2" />
              Generate App Links
            </Button>
            <Button onClick={clearAll} variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              Clear
            </Button>
          </div>

          {inputUrl && (
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Original URL:</p>
              <p className="font-mono text-sm break-all">{inputUrl}</p>
            </div>
          )}
        </CardContent>
      </Card>

      {wrappedUrls && (
        <div className="space-y-4">
          {/* Deep Link */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Deep Link (Custom Scheme)</CardTitle>
                  <CardDescription>Direct app opening link using custom URL scheme</CardDescription>
                </div>
                <Badge variant="outline">iOS/Android</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <Textarea
                value={wrappedUrls.deepLink}
                readOnly
                className="font-mono text-sm resize-none"
                rows={2}
              />
              <div className="flex gap-2">
                <Button
                  onClick={() => copyToClipboard(wrappedUrls.deepLink, 'Deep Link')}
                  variant="outline"
                  size="sm"
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </Button>
                <Button
                  onClick={() => openLink(wrappedUrls.deepLink)}
                  variant="outline"
                  size="sm"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Test Link
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Universal Link */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Universal Link</CardTitle>
                  <CardDescription>Smart link that opens app if installed, otherwise opens web</CardDescription>
                </div>
                <Badge variant="outline">Universal</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <Textarea
                value={wrappedUrls.universalLink}
                readOnly
                className="font-mono text-sm resize-none"
                rows={2}
              />
              <div className="flex gap-2">
                <Button
                  onClick={() => copyToClipboard(wrappedUrls.universalLink, 'Universal Link')}
                  variant="outline"
                  size="sm"
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </Button>
                <Button
                  onClick={() => openLink(wrappedUrls.universalLink)}
                  variant="outline"
                  size="sm"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  Open
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Custom Wrapper Link */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Custom Wrapper Link</CardTitle>
                  <CardDescription>Web service wrapper that handles app opening logic</CardDescription>
                </div>
                <Badge variant="outline">Web Service</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <Textarea
                value={wrappedUrls.customLink}
                readOnly
                className="font-mono text-sm resize-none"
                rows={2}
              />
              <div className="flex gap-2">
                <Button
                  onClick={() => copyToClipboard(wrappedUrls.customLink, 'Custom Wrapper Link')}
                  variant="outline"
                  size="sm"
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </Button>
                <Button
                  onClick={() => openLink(wrappedUrls.customLink)}
                  variant="outline"
                  size="sm"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  Open
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Implementation Guide */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Implementation Guide</CardTitle>
              <CardDescription>How to implement these links in your app</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">For React Native Apps:</h4>
                <div className="p-3 bg-muted rounded-lg font-mono text-sm">
                  <p>// Add to your app's deep link handler</p>
                  <p>if (url.includes('open?url=')) {'{'})</p>
                  <p>  const targetUrl = getUrlParam(url, 'url');</p>
                  <p>  openInWebView(targetUrl);</p>
                  <p>{'}'}</p>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">For Web Apps:</h4>
                <div className="p-3 bg-muted rounded-lg font-mono text-sm">
                  <p>// Parse URL parameters and open in iframe/webview</p>
                  <p>const urlParams = new URLSearchParams(window.location.search);</p>
                  <p>const targetUrl = urlParams.get('url');</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {!wrappedUrls && (
        <Card>
          <CardContent className="py-8 text-center">
            <p className="text-muted-foreground">
              Enter a URL above to generate app-opening links that will redirect users to your app instead of opening in the browser!
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default UrlWrapper;
