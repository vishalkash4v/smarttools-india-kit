
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Download, Link, Video, Image, Music, AlertCircle } from 'lucide-react';

const SocialMediaDownloader = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [downloadData, setDownloadData] = useState(null);

  const handleDownload = async (type) => {
    if (!url.trim()) return;
    
    setLoading(true);
    // Simulate processing
    setTimeout(() => {
      setDownloadData({
        title: 'Sample Content',
        thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop',
        duration: '0:30',
        quality: ['HD 1080p', '720p', '480p'],
        type: type
      });
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="h-6 w-6" />
            Social Media Content Downloader
          </CardTitle>
          <CardDescription>
            Download videos, reels, posts, and stories from Instagram and Facebook
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              This tool is for educational purposes. Respect copyright and privacy laws. Only download content you have permission to use.
            </AlertDescription>
          </Alert>
          
          <Tabs defaultValue="reels" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="reels">Reels</TabsTrigger>
              <TabsTrigger value="posts">Posts</TabsTrigger>
              <TabsTrigger value="stories">Stories</TabsTrigger>
              <TabsTrigger value="highlights">Highlights</TabsTrigger>
            </TabsList>
            
            <TabsContent value="reels" className="space-y-4">
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Paste Instagram/Facebook Reel URL here..."
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                  />
                  <Button onClick={() => handleDownload('reel')} disabled={loading}>
                    <Video className="h-4 w-4 mr-2" />
                    {loading ? 'Processing...' : 'Download'}
                  </Button>
                </div>
                
                {downloadData && downloadData.type === 'reel' && (
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <img 
                          src={downloadData.thumbnail} 
                          alt="Thumbnail" 
                          className="w-32 h-24 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold mb-2">{downloadData.title}</h4>
                          <p className="text-sm text-muted-foreground mb-3">Duration: {downloadData.duration}</p>
                          <div className="space-y-2">
                            {downloadData.quality.map((q, i) => (
                              <Button key={i} variant="outline" size="sm" className="mr-2">
                                <Download className="h-4 w-4 mr-2" />
                                {q}
                              </Button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="posts" className="space-y-4">
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Paste Instagram/Facebook Post URL here..."
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                  />
                  <Button onClick={() => handleDownload('post')} disabled={loading}>
                    <Image className="h-4 w-4 mr-2" />
                    {loading ? 'Processing...' : 'Download'}
                  </Button>
                </div>
                
                <Alert>
                  <AlertDescription>
                    Supports single images, carousels, and video posts from public accounts.
                  </AlertDescription>
                </Alert>
              </div>
            </TabsContent>
            
            <TabsContent value="stories" className="space-y-4">
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Paste Instagram/Facebook Story URL here..."
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                  />
                  <Button onClick={() => handleDownload('story')} disabled={loading}>
                    <Video className="h-4 w-4 mr-2" />
                    {loading ? 'Processing...' : 'Download'}
                  </Button>
                </div>
                
                <Alert>
                  <AlertDescription>
                    Stories are only available for 24 hours and must be from public accounts.
                  </AlertDescription>
                </Alert>
              </div>
            </TabsContent>
            
            <TabsContent value="highlights" className="space-y-4">
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Paste Instagram Highlights URL here..."
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                  />
                  <Button onClick={() => handleDownload('highlight')} disabled={loading}>
                    <Download className="h-4 w-4 mr-2" />
                    {loading ? 'Processing...' : 'Download'}
                  </Button>
                </div>
                
                <Alert>
                  <AlertDescription>
                    Download entire highlight collections or individual stories from highlights.
                  </AlertDescription>
                </Alert>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default SocialMediaDownloader;
