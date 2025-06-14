import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Hourglass } from 'lucide-react';

const RedirectPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  // Using shorter params a=appUrl, w=webUrl
  const appUrl = searchParams.get('a');
  const webUrl = searchParams.get('w');

  useEffect(() => {
    if (!appUrl || !webUrl) {
      // Invalid link, redirect to home
      navigate('/');
      return;
    }

    // This is the core logic. It attempts to navigate to the app's custom URL scheme.
    // Most browsers on mobile will switch to the app if it's installed.
    window.location.href = appUrl;

    // We set a timeout. If the user is still on this page after a short delay,
    // it's likely the app isn't installed or failed to open. In that case, we fall back to the web URL.
    const fallbackTimeout = setTimeout(() => {
      window.location.href = webUrl;
    }, 2500);

    // To prevent the fallback from firing if the app *did* open (which just hides the browser tab),
    // we listen for the page visibility change.
    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearTimeout(fallbackTimeout);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup listener and timeout when the component unmounts
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearTimeout(fallbackTimeout);
    };
  }, [appUrl, webUrl, navigate]);

  if (!webUrl) {
      return null; // or a loading state
  }

  return (
    <div className="container py-8 flex items-center justify-center min-h-[60vh]">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full mb-4">
            <Hourglass className="h-8 w-8" />
          </div>
          <CardTitle>Redirecting...</CardTitle>
          <CardDescription>
            We're attempting to open the content in its native app.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            If the app doesn't open automatically, you'll be redirected to the web version.
          </p>
          <Button asChild variant="outline">
            <a href={webUrl}>Click here if you are not redirected</a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default RedirectPage;
