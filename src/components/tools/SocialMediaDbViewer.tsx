
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Search, User, Calendar, Eye, Heart, MessageCircle, Share, ExternalLink } from 'lucide-react';

const SocialMediaDbViewer = () => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleSearch = async () => {
    if (!username.trim()) return;
    
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setUserData({
        username: username,
        fullName: 'Sample User',
        followers: '1.2M',
        following: '543',
        posts: '127',
        verified: true,
        bio: 'Digital creator • Photography enthusiast',
        profilePic: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
        recentPosts: [
          { id: 1, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop', likes: '2.1K', comments: '45' },
          { id: 2, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=300&fit=crop', likes: '1.8K', comments: '32' },
          { id: 3, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop', likes: '3.2K', comments: '78' }
        ]
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-6 w-6" />
            Social Media Database Viewer
          </CardTitle>
          <CardDescription>
            View public profile information from Instagram and Facebook accounts
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <AlertDescription>
              This tool only displays publicly available information. Private accounts and content are not accessible.
            </AlertDescription>
          </Alert>
          
          <Tabs defaultValue="instagram" className="w-full">
            <TabsList>
              <TabsTrigger value="instagram">Instagram</TabsTrigger>
              <TabsTrigger value="facebook">Facebook</TabsTrigger>
            </TabsList>
            
            <TabsContent value="instagram" className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Enter Instagram username (without @)"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
                <Button onClick={handleSearch} disabled={loading}>
                  {loading ? 'Searching...' : 'Search'}
                </Button>
              </div>
              
              {userData && (
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-6">
                      <img 
                        src={userData.profilePic} 
                        alt="Profile" 
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold">{userData.fullName}</h3>
                          {userData.verified && <Badge variant="secondary">Verified</Badge>}
                        </div>
                        <p className="text-muted-foreground mb-3">@{userData.username}</p>
                        <p className="text-sm mb-4">{userData.bio}</p>
                        <div className="flex gap-6 text-sm">
                          <span><strong>{userData.posts}</strong> posts</span>
                          <span><strong>{userData.followers}</strong> followers</span>
                          <span><strong>{userData.following}</strong> following</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Recent Posts</h4>
                      <div className="grid grid-cols-3 gap-4">
                        {userData.recentPosts.map((post) => (
                          <div key={post.id} className="relative group">
                            <img 
                              src={post.image} 
                              alt="Post" 
                              className="w-full aspect-square object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                              <div className="flex items-center gap-4 text-white text-sm">
                                <span className="flex items-center gap-1">
                                  <Heart className="h-4 w-4" />
                                  {post.likes}
                                </span>
                                <span className="flex items-center gap-1">
                                  <MessageCircle className="h-4 w-4" />
                                  {post.comments}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
            
            <TabsContent value="facebook" className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Enter Facebook username or profile ID"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
                <Button onClick={handleSearch} disabled={loading}>
                  {loading ? 'Searching...' : 'Search'}
                </Button>
              </div>
              
              <Alert>
                <AlertDescription>
                  Facebook profiles have stricter privacy settings. Only basic public information may be available.
                </AlertDescription>
              </Alert>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default SocialMediaDbViewer;
