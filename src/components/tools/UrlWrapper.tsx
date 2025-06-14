
import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Copy, ExternalLink, Smartphone, Globe, RefreshCw, Youtube, MessageCircle, Instagram, Facebook, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PlatformLink {
  platform: string;
  deepLink: string;
  description: string;
  icon: React.ReactNode;
}

const UrlWrapper = () => {
  const [inputUrl, setInputUrl] = useState('');
  const [platformLinks, setPlatformLinks] = useState<PlatformLink[]>([]);
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
    } else if (domain.includes('whatsapp.com')) {
      return 'whatsapp';
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

  const generatePlatformLinks = (url: string, platform: string): PlatformLink[] => {
    const links: PlatformLink[] = [];

    switch (platform) {
      case 'youtube':
        const videoId = extractVideoId(url);
        if (videoId) {
          links.push({
            platform: 'YouTube App',
            deepLink: `youtube://watch?v=${videoId}`,
            description: 'Opens directly in YouTube mobile app',
            icon: <Youtube className="h-4 w-4" />
          });
          links.push({
            platform: 'YouTube Vanced',
            deepLink: `vanced://watch?v=${videoId}`,
            description: 'Opens in YouTube Vanced app',
            icon: <Youtube className="h-4 w-4" />
          });
        }
        break;

      case 'instagram':
        const postId = extractInstagramId(url);
        if (postId) {
          links.push({
            platform: 'Instagram App',
            deepLink: `instagram://media?id=${postId}`,
            description: 'Opens directly in Instagram mobile app',
            icon: <Instagram className="h-4 w-4" />
          });
        }
        links.push({
          platform: 'Instagram Profile',
          deepLink: `instagram://user?username=${url.split('/').pop()}`,
          description: 'Opens Instagram profile in app',
          icon: <Instagram className="h-4 w-4" />
        });
        break;

      case 'facebook':
        links.push({
          platform: 'Facebook App',
          deepLink: `fb://facewebmodal/f?href=${encodeURIComponent(url)}`,
          description: 'Opens directly in Facebook mobile app',
          icon: <Facebook className="h-4 w-4" />
        });
        break;

      case 'twitter':
        const tweetMatch = url.match(/status\/(\d+)/);
        if (tweetMatch) {
          links.push({
            platform: 'Twitter App',
            deepLink: `twitter://status?id=${tweetMatch[1]}`,
            description: 'Opens tweet in Twitter/X mobile app',
            icon: <Twitter className="h-4 w-4" />
          });
        }
        const userMatch = url.match(/twitter\.com\/([^\/\?]+)|x\.com\/([^\/\?]+)/);
        if (userMatch) {
          const username = userMatch[1] || userMatch[2];
          links.push({
            platform: 'Twitter Profile',
            deepLink: `twitter://user?screen_name=${username}`,
            description: 'Opens Twitter/X profile in app',
            icon: <Twitter className="h-4 w-4" />
          });
        }
        break;

      case 'telegram':
        if (url.includes('t.me/')) {
          const channelMatch = url.match(/t\.me\/([^\/\?]+)/);
          if (channelMatch) {
            links.push({
              platform: 'Telegram App',
              deepLink: `tg://resolve?domain=${channelMatch[1]}`,
              description: 'Opens Telegram channel/chat in app',
              icon: <MessageCircle className="h-4 w-4" />
            });
          }
        }
        break;

      case 'tiktok':
        links.push({
          platform: 'TikTok App',
          deepLink: `snssdk1128://webview?url=${encodeURIComponent(url)}`,
          description: 'Opens directly in TikTok mobile app',
          icon: <Globe className="h-4 w-4" />
        });
        break;

      case 'linkedin':
        links.push({
          platform: 'LinkedIn App',
          deepLink: `linkedin://profile/${url.split('/in/')[1]?.split('/')[0] || ''}`,
          description: 'Opens LinkedIn profile in app',
          icon: <Globe className="h-4 w-4" />
        });
        break;

      case 'whatsapp':
        links.push({
          platform: 'WhatsApp',
          deepLink: `whatsapp://send?text=${encodeURIComponent(url)}`,
          description: 'Share link via WhatsApp',
          icon: <MessageCircle className="h-4 w-4" />
        });
        break;

      default:
        links.push({
          platform: 'Generic App',
          deepLink: `intent://${url.replace(/https?:\/\//, '')}#Intent;scheme=https;end`,
          description: 'Android Intent for opening in preferred app',
          icon: <Smartphone className="h-4 w-4" />
        });
        links.push({
          platform: 'Custom Scheme',
          deepLink: `app://open?url=${encodeURIComponent(url)}`,
          description: 'Generic custom scheme for your app',
          icon: <Globe className="h-4 w-4" />
        });
        break;
    }

    return links;
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

    const platform = detectPlatform(inputUrl);
    const links = generatePlatformLinks(inputUrl, platform);
    setPlatformLinks(links);

    toast({
      title: "Deep Links Generated!",
      description: `Found ${links.length} app-opening link${links.length > 1 ? 's' : ''} for ${platform}`,
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
    setPlatformLinks([]);
    toast({
      title: "Cleared!",
      description: "All fields have been cleared",
    });
  }, [toast]);

  const testLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Smart URL App Wrapper
            <Smartphone className="h-5 w-5" />
          </CardTitle>
          <CardDescription>
            Automatically detects platforms and creates proper deep links. Supports YouTube, Instagram, Facebook, Twitter/X, Telegram, TikTok, LinkedIn, WhatsApp and more!
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
            <Button onClick={generateWrappedUrls} className="flex-1">
              <ExternalLink className="h-4 w-4 mr-2" />
              Generate Deep Links
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
              {inputUrl && (
                <Badge variant="outline" className="mt-2">
                  Platform: {detectPlatform(inputUrl)}
                </Badge>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {platformLinks.length > 0 && (
        <div className="space-y-4">
          {platformLinks.map((link, index) => (
            <Card key={index}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {link.icon}
                    <div>
                      <CardTitle className="text-lg">{link.platform}</CardTitle>
                      <CardDescription>{link.description}</CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline">Deep Link</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <Textarea
                  value={link.deepLink}
                  readOnly
                  className="font-mono text-sm resize-none"
                  rows={2}
                />
                <div className="flex gap-2">
                  <Button
                    onClick={() => copyToClipboard(link.deepLink, link.platform)}
                    variant="outline"
                    size="sm"
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    Copy
                  </Button>
                  <Button
                    onClick={() => testLink(link.deepLink)}
                    variant="outline"
                    size="sm"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Test
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How to Use These Links</CardTitle>
              <CardDescription>Implementation guide for deep links</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">For Mobile Apps:</h4>
                <div className="p-3 bg-muted rounded-lg font-mono text-sm">
                  <p>• iOS: Add URL schemes to Info.plist</p>
                  <p>• Android: Add intent filters to AndroidManifest.xml</p>
                  <p>• Test links on actual devices for best results</p>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">For Web Integration:</h4>
                <div className="p-3 bg-muted rounded-lg font-mono text-sm">
                  <p>• Use these links in buttons or QR codes</p>
                  <p>• Fallback to web version if app not installed</p>
                  <p>• Perfect for social media sharing</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {!platformLinks.length && (
        <Card>
          <CardContent className="py-8 text-center">
            <p className="text-muted-foreground">
              Enter any URL above to automatically generate smart deep links that open content directly in mobile apps!
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Supports: YouTube, Instagram, Facebook, Twitter/X, Telegram, TikTok, LinkedIn, WhatsApp & more
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default UrlWrapper;
