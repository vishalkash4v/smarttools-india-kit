
import React from 'react';
import { Helmet } from 'react-helmet-async';
import PixelateTool from '@/components/tools/PixelateTool';
import ToolWrapper from '@/components/layout/ToolWrapper';

const PixelateToolPage = () => {
  return (
    <>
      <Helmet>
        <title>Pixelate Tool - Apply Pixelation Effects to Images | FYN Tools India</title>
        <meta name="description" content="Apply pixelation effects to specific areas of your images. Control pixelation strength, size, and area with our easy-to-use tool. Perfect for privacy protection and creative effects." />
        <meta name="keywords" content="pixelate, image, photo, effect, privacy, blur, pixelation, pixel art, image editor, photo privacy, blur tool, pixelate image online, selective pixelation" />
        <meta property="og:title" content="Pixelate Tool - Apply Pixelation Effects to Images" />
        <meta property="og:description" content="Apply pixelation effects to specific areas of your images with precise control and live preview." />
        <meta name="twitter:title" content="Pixelate Tool - Apply Pixelation Effects to Images" />
        <meta name="twitter:description" content="Apply pixelation effects to specific areas of your images with precise control and live preview." />
      </Helmet>
      <ToolWrapper
        title="Pixelate Tool"
        description="Apply pixelation effects to specific areas of your images with precise control and live preview. Perfect for privacy protection, creative effects, or artistic pixel art creation."
      >
        <div className="space-y-6">
          {/* Tool Content */}
          <PixelateTool />
          
          {/* Additional Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">How to Use</h3>
              <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
                <li>• Upload your image using the upload button</li>
                <li>• Drag the red selection box to choose the area to pixelate</li>
                <li>• Resize the selection box by dragging corners or edges</li>
                <li>• Adjust the pixel size for stronger or weaker effects</li>
                <li>• Preview the effect in real-time</li>
                <li>• Download your pixelated image</li>
              </ul>
            </div>
            
            <div className="bg-green-50 dark:bg-green-950 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 dark:text-green-200 mb-3">Use Cases</h3>
              <ul className="text-sm text-green-700 dark:text-green-300 space-y-2">
                <li>• Privacy protection (faces, license plates)</li>
                <li>• Creative artistic effects</li>
                <li>• Retro pixel art style</li>
                <li>• Social media content creation</li>
                <li>• Image censoring and blurring</li>
                <li>• Game development assets</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-yellow-50 dark:bg-yellow-950 p-6 rounded-lg">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-3">Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-yellow-700 dark:text-yellow-300">
              <div>
                <h4 className="font-medium mb-2">Selection Controls</h4>
                <ul className="space-y-1">
                  <li>• Resizable selection box</li>
                  <li>• Drag to move position</li>
                  <li>• Corner and edge handles</li>
                  <li>• Precise coordinate input</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Export Options</h4>
                <ul className="space-y-1">
                  <li>• Multiple format support</li>
                  <li>• High quality output</li>
                  <li>• Original resolution maintained</li>
                  <li>• Live preview</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ToolWrapper>
    </>
  );
};

export default PixelateToolPage;
