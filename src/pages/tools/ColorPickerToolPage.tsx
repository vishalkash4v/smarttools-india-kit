
import React from 'react';
import ColorPickerToolComponent from '@/components/tools/ColorPickerTool';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette as ColorPickerIcon } from 'lucide-react'; // Changed ColorPicker to Palette

const ColorPickerToolPage = () => {
  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <ColorPickerIcon className="h-8 w-8 text-primary" />
            <CardTitle className="text-3xl">Color Picker Tool</CardTitle>
          </div>
          <CardDescription>Pick colors and get their HEX, RGB, and RGBA codes.</CardDescription>
        </CardHeader>
        <CardContent>
          <ColorPickerToolComponent />
        </CardContent>
      </Card>
    </div>
  );
};

export default ColorPickerToolPage;
