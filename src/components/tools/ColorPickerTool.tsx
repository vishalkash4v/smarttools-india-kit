
import React, { useState } from 'react';
import { SketchPicker, ColorResult } from 'react-color';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';


const ColorPickerTool = () => {
  const [color, setColor] = useState<ColorResult['rgb']>({ r: 51, g: 51, b: 51, a: 1 });
  const [hex, setHex] = useState<string>('#333333');
  const { toast } = useToast();

  const handleChangeComplete = (colorResult: ColorResult) => {
    setColor(colorResult.rgb);
    setHex(colorResult.hex);
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to Clipboard!",
      description: `${type} code ${text} copied.`,
    });
  };
  
  const colorString = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;

  return (
    <div className="flex flex-col md:flex-row gap-6 items-start">
      <div className="flex-shrink-0">
        <SketchPicker
          color={color}
          onChangeComplete={handleChangeComplete}
          className="shadow-lg"
        />
      </div>
      <div className="flex-grow space-y-4 w-full md:max-w-sm">
        <Card>
          <CardContent className="p-4 space-y-3">
            <div>
              <Label className="block text-sm font-medium text-gray-700 mb-1">Preview</Label>
              <div
                style={{ backgroundColor: colorString, height: '80px' }}
                className="w-full rounded border border-gray-300"
              />
            </div>
            <div>
              <Label htmlFor="hexColor" className="block text-sm font-medium text-gray-700 mb-1">HEX</Label>
              <div className="flex items-center">
                <Input id="hexColor" value={hex} readOnly className="rounded-r-none"/>
                <Button onClick={() => copyToClipboard(hex, 'HEX')} variant="outline" className="rounded-l-none border-l-0 px-3">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div>
              <Label htmlFor="rgbaColor" className="block text-sm font-medium text-gray-700 mb-1">RGBA</Label>
               <div className="flex items-center">
                <Input id="rgbaColor" value={colorString} readOnly className="rounded-r-none"/>
                <Button onClick={() => copyToClipboard(colorString, 'RGBA')} variant="outline" className="rounded-l-none border-l-0 px-3">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
             <div>
              <Label htmlFor="rgbColor" className="block text-sm font-medium text-gray-700 mb-1">RGB</Label>
               <div className="flex items-center">
                <Input id="rgbColor" value={`rgb(${color.r}, ${color.g}, ${color.b})`} readOnly className="rounded-r-none"/>
                <Button onClick={() => copyToClipboard(`rgb(${color.r}, ${color.g}, ${color.b})`, 'RGB')} variant="outline" className="rounded-l-none border-l-0 px-3">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div>
                <Label htmlFor="hslColor" className="block text-sm font-medium text-gray-700 mb-1">HSL</Label>
                {/* HSL conversion would require an external library or manual calculation. For simplicity, we'll omit it or add later. */}
                {/* For now, let's show a placeholder or skip */}
                 <div className="flex items-center">
                    <Input id="hslColor" value="HSL not implemented" readOnly className="bg-gray-100 rounded-r-none"/>
                     <Button variant="outline" className="rounded-l-none border-l-0 px-3" disabled>
                        <Copy className="h-4 w-4" />
                    </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Note: HSL conversion to be added.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ColorPickerTool;
