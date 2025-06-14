
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Play, RefreshCw } from 'lucide-react';

const LivePreview = () => {
  const [html, setHtml] = useState('<h1>Hello World!</h1>\n<p>Start editing to see live preview.</p>');
  const [css, setCss] = useState('body {\n  font-family: Arial, sans-serif;\n  padding: 20px;\n  margin: 0;\n}\n\nh1 {\n  color: #333;\n}');
  const [js, setJs] = useState('// Write your JavaScript code here\nconsole.log("Hello from JavaScript!");');
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const updatePreview = () => {
    console.log('Updating preview...');
    if (!iframeRef.current) {
      console.log('No iframe ref available');
      return;
    }

    const combinedCode = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Live Preview</title>
          <style>
            ${css}
          </style>
        </head>
        <body>
          ${html}
          <script>
            try {
              ${js}
            } catch (error) {
              console.error('JavaScript Error:', error);
              document.body.innerHTML += '<div style="color: red; background: #ffe6e6; padding: 10px; margin: 10px 0; border: 1px solid red;">JavaScript Error: ' + error.message + '</div>';
            }
          </script>
        </body>
      </html>
    `;

    console.log('Generated code:', combinedCode);

    const iframe = iframeRef.current;
    
    // Method 1: Using srcdoc (preferred for modern browsers)
    if ('srcdoc' in iframe) {
      iframe.srcdoc = combinedCode;
    } else {
      // Method 2: Fallback for older browsers - properly type the iframe
      const iframeElement = iframe as HTMLIFrameElement;
      const doc = iframeElement.contentDocument || (iframeElement.contentWindow && iframeElement.contentWindow.document);
      if (doc) {
        doc.open();
        doc.write(combinedCode);
        doc.close();
      }
    }
  };

  useEffect(() => {
    // Add a small delay to ensure iframe is ready
    const timer = setTimeout(() => {
      updatePreview();
    }, 100);

    return () => clearTimeout(timer);
  }, [html, css, js]);

  const handleRefresh = () => {
    console.log('Manual refresh triggered');
    updatePreview();
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>HTML/CSS/JS Live Preview</CardTitle>
          <CardDescription>
            Write HTML, CSS, and JavaScript code and see the live preview instantly.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Code Editor</h3>
                <Button onClick={handleRefresh} variant="outline" size="sm" className="gap-2">
                  <RefreshCw className="h-4 w-4" />
                  Refresh
                </Button>
              </div>
              
              <Tabs defaultValue="html" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="html">HTML</TabsTrigger>
                  <TabsTrigger value="css">CSS</TabsTrigger>
                  <TabsTrigger value="js">JavaScript</TabsTrigger>
                </TabsList>
                
                <TabsContent value="html" className="space-y-2">
                  <Label htmlFor="html-code">HTML Code</Label>
                  <Textarea
                    id="html-code"
                    placeholder="Enter your HTML code here..."
                    value={html}
                    onChange={(e) => {
                      console.log('HTML changed');
                      setHtml(e.target.value);
                    }}
                    className="min-h-[400px] font-mono text-sm"
                  />
                </TabsContent>
                
                <TabsContent value="css" className="space-y-2">
                  <Label htmlFor="css-code">CSS Code</Label>
                  <Textarea
                    id="css-code"
                    placeholder="Enter your CSS code here..."
                    value={css}
                    onChange={(e) => {
                      console.log('CSS changed');
                      setCss(e.target.value);
                    }}
                    className="min-h-[400px] font-mono text-sm"
                  />
                </TabsContent>
                
                <TabsContent value="js" className="space-y-2">
                  <Label htmlFor="js-code">JavaScript Code</Label>
                  <Textarea
                    id="js-code"
                    placeholder="Enter your JavaScript code here..."
                    value={js}
                    onChange={(e) => {
                      console.log('JS changed');
                      setJs(e.target.value);
                    }}
                    className="min-h-[400px] font-mono text-sm"
                  />
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Live Preview</h3>
              <div className="border rounded-lg overflow-hidden bg-white">
                <iframe
                  ref={iframeRef}
                  className="w-full h-[500px]"
                  title="Live Preview"
                  sandbox="allow-scripts allow-same-origin"
                  style={{ border: 'none' }}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LivePreview;
