
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Download, Video, Music, AlertCircle, Play, Clock, Eye } from 'lucide-react';

const YoutubeDownloader = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [videoData, setVideoData] = useState(null);

  const handleAnalyze = async () => {
    if (!url.trim()) return;
    
    setLoading(true);
    // Simulate video analysis
    setTimeout(() => {
      setVideoData({
        title: 'Amazing Nature Documentary - 4K Ultra HD',
        thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=480&h=360&fit=crop',
        duration: '15:42',
        views: '2.3M views',
        channel: 'Nature Channel',
        videoFormats: [
          { quality: '4K (2160p)', size: '2.1 GB', format: 'MP4' },
          { quality: 'HD (1080p)', size: '890 MB', format: 'MP4' },
          { quality: '720p', size: '450 MB', format: 'MP4' },
          { quality: '480p', size: '280 MB', format: 'MP4' },
          { quality: '360p', size: '180 MB', format: 'MP4' }
        ],
        audioFormats: [
          { quality: '320 kbps', size: '15 MB', format: 'MP3' },
          { quality: '256 kbps', size: '12 MB', format: 'MP3' },
          { quality: '192 kbps', size: '9 MB', format: 'MP3' },
          { quality: '128 kbps', size: '6 MB', format: 'MP3' }
        ]
      });
      setLoading(false);
    }, 2000);
  };

  const handleDownload = (type, format) => {
    // Simulate download
    console.log(`Downloading ${type} in ${format.quality} quality`);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Video className="h-6 w-6" />
            YouTube Video & Audio Downloader
          </CardTitle>
          <CardDescription>
            Download YouTube videos in various qualities or extract audio as MP3
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Respect YouTube's Terms of Service and copyright laws. Only download content you have permission to use.
            </AlertDescription>
          </Alert>
          
          <div className="space-y-4">
            <div className="flex gap-2">
              <Input
                placeholder="Paste YouTube video URL here (e.g., https://youtube.com/watch?v=...)"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAnalyze()}
              />
              <Button onClick={handleAnalyze} disabled={loading}>
                {loading ? 'Analyzing...' : 'Analyze'}
              </Button>
            </div>
            
            {videoData && (
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4 mb-6">
                    <div className="relative">
                      <img 
                        src={videoData.thumbnail} 
                        alt="Video thumbnail" 
                        className="w-48 h-36 object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="h-12 w-12 text-white opacity-80" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{videoData.title}</h3>
                      <p className="text-muted-foreground mb-2">{videoData.channel}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {videoData.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {videoData.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <Tabs defaultValue="video" className="w-full">
                    <TabsList>
                      <TabsTrigger value="video">Video Download</TabsTrigger>
                      <TabsTrigger value="audio">Audio Download (MP3)</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="video" className="space-y-4">
                      <h4 className="font-semibold">Available Video Formats</h4>
                      <div className="space-y-2">
                        {videoData.videoFormats.map((format, index) => (
                          <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                            <div>
                              <span className="font-medium">{format.quality}</span>
                              <span className="text-muted-foreground ml-2">({format.format})</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-sm text-muted-foreground">{format.size}</span>
                              <Button 
                                size="sm" 
                                onClick={() => handleDownload('video', format)}
                                className="flex items-center gap-2"
                              >
                                <Download className="h-4 w-4" />
                                Download
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="audio" className="space-y-4">
                      <h4 className="font-semibold">Available Audio Formats</h4>
                      <div className="space-y-2">
                        {videoData.audioFormats.map((format, index) => (
                          <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                            <div>
                              <span className="font-medium">{format.quality}</span>
                              <span className="text-muted-foreground ml-2">({format.format})</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-sm text-muted-foreground">{format.size}</span>
                              <Button 
                                size="sm" 
                                onClick={() => handleDownload('audio', format)}
                                className="flex items-center gap-2"
                              >
                                <Music className="h-4 w-4" />
                                Download MP3
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
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
