
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Download, Video, Music, AlertCircle, Play, Clock, Eye, ExternalLink } from 'lucide-react';

const YoutubeDownloader = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const validateYouTubeUrl = (url: string) => {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/|v\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    return youtubeRegex.test(url);
  };

  const extractVideoId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return match ? match[1] : null;
  };

  const handleAnalyze = async () => {
    if (!url.trim()) {
      setError('Please enter a YouTube URL');
      return;
    }
    
    if (!validateYouTubeUrl(url)) {
      setError('Please enter a valid YouTube URL');
      return;
    }

    setError('');
    setLoading(true);
    
    // Since we can't actually download videos due to YouTube's ToS and technical limitations,
    // we'll provide helpful information and alternatives
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const videoId = extractVideoId(url);
  const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Video className="h-6 w-6" />
            YouTube Video & Audio Downloader
          </CardTitle>
          <CardDescription>
            Get information about YouTube videos and learn about download options
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              <strong>Important:</strong> This tool provides information about YouTube videos. Direct downloading may violate YouTube's Terms of Service. Consider using YouTube Premium for offline viewing or other legal alternatives.
            </AlertDescription>
          </Alert>
          
          <div className="space-y-4">
            <div className="flex gap-2">
              <Input
                placeholder="Paste YouTube video URL here (e.g., https://youtube.com/watch?v=...)"
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                  setError('');
                }}
                onKeyPress={(e) => e.key === 'Enter' && handleAnalyze()}
              />
              <Button onClick={handleAnalyze} disabled={loading}>
                {loading ? 'Analyzing...' : 'Analyze'}
              </Button>
            </div>
            
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            {url && validateYouTubeUrl(url) && !loading && (
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4 mb-6">
                    {thumbnailUrl && (
                      <div className="relative">
                        <img 
                          src={thumbnailUrl} 
                          alt="Video thumbnail" 
                          className="w-48 h-36 object-cover rounded-lg"
                          onError={(e) => {
                            e.currentTarget.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=480&h=360&fit=crop';
                          }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Play className="h-12 w-12 text-white opacity-80" />
                        </div>
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">Video Information</h3>
                      <p className="text-muted-foreground mb-2">Video ID: {videoId}</p>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(url, '_blank')}
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Open on YouTube
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <Alert>
                      <AlertDescription>
                        <strong>Legal Download Options:</strong>
                        <ul className="mt-2 space-y-1">
                          <li>• YouTube Premium - Official offline downloads</li>
                          <li>• YouTube Music - For audio content</li>
                          <li>• Creator's official downloads (if provided)</li>
                          <li>• Creative Commons licensed content</li>
                        </ul>
                      </AlertDescription>
                    </Alert>
                    
                    <Alert>
                      <AlertDescription>
                        <strong>Alternative Tools:</strong> For content you own or have permission to download, consider using desktop applications like yt-dlp, 4K Video Downloader, or similar tools that respect copyright and terms of service.
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default YoutubeDownloader;
