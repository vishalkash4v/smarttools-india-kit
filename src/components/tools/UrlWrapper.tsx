import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Copy, ExternalLink, Smartphone, Globe, RefreshCw, Youtube, MessageCircle, Instagram, Facebook, Twitter, Link } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface GeneratedResult {
  smartLink: string;
  platform: string;
}

const UrlWrapper = () => {
  const [inputUrl, setInputUrl] = useState('');
  const [generatedResult, setGeneratedResult] = useState<GeneratedResult | null>(null);
  const { toast } = useToast();

  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const detectPlatform = (url: string) => {
    const domain = new URL(url).hostname.toLowerCase();
    
    if (domain.includes('youtube.com') || domain.includes('youtu.be')) {
      return 'youtube';
    } else if (domain.includes('instagram.com')) {
      return 'instagram';
    } else if (domain.includes('facebook.com') || domain.includes('fb.com')) {
      return 'facebook';
    } else if (domain.includes('twitter.com') || domain.includes('x.com')) {
      return 'twitter';
    } else if (domain.includes('t.me') || domain.includes('telegram.org')) {
      return 'telegram';
    } else if (domain.includes('tiktok.com')) {
      return 'tiktok';
    } else if (domain.includes('linkedin.com')) {
      return 'linkedin';
    }
    return 'generic';
  };

  const extractVideoId = (youtubeUrl: string) => {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = youtubeUrl.match(regex);
    return match ? match[1] : null;
  };

  const extractInstagramId = (instagramUrl: string) => {
    const regex = /instagram\.com\/(?:p|reel)\/([A-Za-z0-9_-]+)/;
    const match = instagramUrl.match(regex);
    return match ? match[1] : null;
  };

  const generateAppUrl = (url: string, platform: string): string | null => {
    switch (platform) {
      case 'youtube': {
        const videoId = extractVideoId(url);
        return videoId ? `youtube://watch?v=${videoId}` : null;
      }
      case 'instagram': {
        const postId = extractInstagramId(url);
        if (postId) return `instagram://media?id=${postId}`;
        const username = url.split('/').filter(u => u && !u.includes('.com')).pop();
        return username ? `instagram://user?username=${username}` : null;
      }
      case 'facebook':
        return `fb://facewebmodal/f?href=${encodeURIComponent(url)}`;
      case 'twitter': {
        const tweetMatch = url.match(/status\/(\d+)/);
        if (tweetMatch) return `twitter://status?id=${tweetMatch[1]}`;
        const userMatch = url.match(/(?:twitter|x)\.com\/([^\/?]+)/);
        if (userMatch) return `twitter://user?screen_name=${userMatch[1]}`;
        return null;
      }
      case 'telegram': {
        const channelMatch = url.match(/t\.me\/([^\/?]+)/);
        return channelMatch ? `tg://resolve?domain=${channelMatch[1]}` : null;
      }
      case 'tiktok':
        // TikTok deep linking is complex, this is a common approach
        return `snssdk1128://webview?url=${encodeURIComponent(url)}`;
      case 'linkedin': {
          const profileMatch = url.match(/linkedin\.com\/in\/([^\/?]+)/);
          if (profileMatch) return `linkedin://in/${profileMatch[1]}`;
          return `linkedin://` // Fallback to just opening the app
      }
      default:
        return null;
    }
  };

  const generateSmartLink = useCallback(() => {
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

    const platform = detectPlatform(inputUrl);
    if (platform === 'generic') {
      toast({
        title: "Unsupported Platform",
        description: "This tool works best with specific apps like YouTube, Instagram, etc. A smart link could not be generated for this generic URL.",
        variant: "destructive",
      });
      setGeneratedResult(null);
      return;
    }

    const appUrl = generateAppUrl(inputUrl, platform);

    if (!appUrl) {
      toast({
        title: "Could Not Generate Link",
        description: `We could not create a specific app link for this ${platform} URL.`,
        variant: "destructive",
      });
      setGeneratedResult(null);
      return;
    }
    
    const webUrl = inputUrl;
    // Using shorter path /r and shorter params w=webUrl, a=appUrl
    const smartLinkPath = `/r?w=${encodeURIComponent(webUrl)}&a=${encodeURIComponent(appUrl)}`;
    const fullSmartLink = `${window.location.origin}${smartLinkPath}`;

    setGeneratedResult({ smartLink: fullSmartLink, platform });

    toast({
      title: "Smart Link Generated!",
      description: `A smart link for ${platform} has been created.`,
    });
  }, [inputUrl, toast]);

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
    setGeneratedResult(null);
    toast({
      title: "Cleared!",
      description: "All fields have been cleared",
    });
  }, [toast]);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Smart URL App Wrapper
            <Smartphone className="h-5 w-5" />
          </CardTitle>
          <CardDescription>
            Paste any link to generate a single Smart Link that opens in the app if installed, or in the browser otherwise. Supports YouTube, Instagram, Facebook, Twitter/X, and more!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="input-url" className="text-sm font-medium">
              Enter URL to convert:
            </label>
            <Input
              id="input-url"
              placeholder="https://youtube.com/watch?v=..."
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              className="w-full"
            />
          </div>

          <div className="flex gap-2">
            <Button onClick={generateSmartLink} className="flex-1">
              <Link className="h-4 w-4 mr-2" />
              Generate Smart Link
            </Button>
            <Button onClick={clearAll} variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              Clear
            </Button>
          </div>

          {inputUrl && !generatedResult && (
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Original URL:</p>
              <p className="font-mono text-sm break-all">{inputUrl}</p>
              <Badge variant="outline" className="mt-2">
                Platform: {detectPlatform(inputUrl)}
              </Badge>
            </div>
          )}
        </CardContent>
      </Card>

      {generatedResult && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Link className="h-5 w-5" />
              Your Smart Link is Ready!
            </CardTitle>
            <CardDescription>
              This link will try to open the content in the <strong>{generatedResult.platform}</strong> app. If the app is not installed, it will open in the browser.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="smart-link-output" className="text-sm font-medium">
                Share this link:
              </label>
              <Textarea
                id="smart-link-output"
                value={generatedResult.smartLink}
                readOnly
                className="font-mono text-sm resize-none"
                rows={3}
              />
            </div>
            <div className="flex gap-2">
              <Button
                onClick={() => copyToClipboard(generatedResult.smartLink, 'Smart Link')}
                className="flex-1"
              >
                <Copy className="h-4 w-4 mr-2" />
                Copy Link
              </Button>
              <Button
                asChild
                variant="outline"
              >
                <a href={generatedResult.smartLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Test Link
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {!generatedResult && (
        <Card>
          <CardContent className="py-8 text-center">
            <p className="text-muted-foreground">
              Enter any supported social media or video URL above to generate a smart link!
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              This link opens content directly in the mobile app, with a fallback to the browser.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default UrlWrapper;
