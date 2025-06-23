import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Palette, Settings, Check, Sparkles } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface Theme {
  id: string;
  name: string;
  description: string;
  colors: {
    primary: string;
    background: string;
    accent: string;
  };
  cssVars: Record<string, string>;
  isGradient?: boolean;
}

interface Tool {
  id: string;
  name: string;
  category: string;
  enabled: boolean;
}

const themes: Theme[] = [
  {
    id: 'light',
    name: 'Default Light',
    description: 'Clean and professional light theme',
    colors: {
      primary: '#3B82F6',
      background: '#FFFFFF',
      accent: '#F1F5F9'
    },
    cssVars: {
      '--primary': '217.2 91.2% 59.8%',
      '--background': '0 0% 100%',
      '--foreground': '222.2 84% 4.9%',
      '--card': '0 0% 100%',
      '--card-foreground': '222.2 84% 4.9%',
      '--secondary': '210 40% 96.1%',
      '--secondary-foreground': '222.2 47.4% 11.2%',
      '--muted': '210 40% 96.1%',
      '--muted-foreground': '215.4 16.3% 46.9%',
      '--accent': '210 40% 96.1%',
      '--accent-foreground': '222.2 47.4% 11.2%',
      '--border': '214.3 31.8% 91.4%',
      '--input': '214.3 31.8% 91.4%',
      '--ring': '217.2 91.2% 59.8%'
    }
  },
  {
    id: 'dark',
    name: 'Dark Mode',
    description: 'Sleek dark theme for low-light environments',
    colors: {
      primary: '#3B82F6',
      background: '#0F172A',
      accent: '#1E293B'
    },
    cssVars: {
      '--primary': '217.2 91.2% 59.8%',
      '--background': '222.2 84% 4.9%',
      '--foreground': '210 40% 98%',
      '--card': '222.2 84% 4.9%',
      '--card-foreground': '210 40% 98%',
      '--secondary': '217.2 32.6% 17.5%',
      '--secondary-foreground': '210 40% 98%',
      '--muted': '217.2 32.6% 17.5%',
      '--muted-foreground': '215 20.2% 65.1%',
      '--accent': '217.2 32.6% 17.5%',
      '--accent-foreground': '210 40% 98%',
      '--border': '217.2 32.6% 17.5%',
      '--input': '217.2 32.6% 17.5%',
      '--ring': '217.2 91.2% 59.8%'
    }
  },
  {
    id: 'metallic',
    name: 'Metallic Blue',
    description: 'Professional metallic blue theme',
    colors: {
      primary: '#3D52A0',
      background: '#E6F0FF',
      accent: '#B3D9FF'
    },
    cssVars: {
      '--primary': '210 70% 50%',
      '--background': '210 40% 95%',
      '--foreground': '210 20% 10%',
      '--card': '210 40% 98%',
      '--card-foreground': '210 20% 10%',
      '--secondary': '210 30% 85%',
      '--secondary-foreground': '210 20% 20%',
      '--muted': '210 30% 88%',
      '--muted-foreground': '210 15% 45%',
      '--accent': '210 50% 75%',
      '--accent-foreground': '210 20% 15%',
      '--border': '210 30% 80%',
      '--input': '210 30% 85%',
      '--ring': '210 70% 50%'
    }
  },
  // New Gradient Themes
  {
    id: 'ocean-wave',
    name: 'Ocean Wave',
    description: 'Flowing ocean colors with smooth wave animation',
    colors: {
      primary: '#0EA5E9',
      background: 'linear-gradient',
      accent: '#E0F2FE'
    },
    cssVars: {
      '--primary': '199 89% 48%',
      '--background': '0 0% 100%',
      '--foreground': '222.2 84% 4.9%',
      '--card': '0 0% 100%',
      '--card-foreground': '222.2 84% 4.9%',
      '--secondary': '204 100% 97%',
      '--secondary-foreground': '222.2 47.4% 11.2%',
      '--muted': '204 100% 97%',
      '--muted-foreground': '215.4 16.3% 46.9%',
      '--accent': '204 100% 97%',
      '--accent-foreground': '222.2 47.4% 11.2%',
      '--border': '204 100% 92%',
      '--input': '204 100% 92%',
      '--ring': '199 89% 48%'
    },
    isGradient: true
  },
  {
    id: 'sunset-glow',
    name: 'Sunset Glow',
    description: 'Warm sunset colors with gentle flowing animation',
    colors: {
      primary: '#F59E0B',
      background: 'linear-gradient',
      accent: '#FEF3C7'
    },
    cssVars: {
      '--primary': '45 93% 47%',
      '--background': '0 0% 100%',
      '--foreground': '222.2 84% 4.9%',
      '--card': '0 0% 100%',
      '--card-foreground': '222.2 84% 4.9%',
      '--secondary': '48 100% 96%',
      '--secondary-foreground': '222.2 47.4% 11.2%',
      '--muted': '48 100% 96%',
      '--muted-foreground': '215.4 16.3% 46.9%',
      '--accent': '48 100% 96%',
      '--accent-foreground': '222.2 47.4% 11.2%',
      '--border': '48 100% 88%',
      '--input': '48 100% 88%',
      '--ring': '45 93% 47%'
    },
    isGradient: true
  },
  {
    id: 'aurora-borealis',
    name: 'Aurora Borealis',
    description: 'Mystical northern lights with shifting colors',
    colors: {
      primary: '#8B5CF6',
      background: 'linear-gradient',
      accent: '#F3E8FF'
    },
    cssVars: {
      '--primary': '262 83% 65%',
      '--background': '0 0% 100%',
      '--foreground': '222.2 84% 4.9%',
      '--card': '0 0% 100%',
      '--card-foreground': '222.2 84% 4.9%',
      '--secondary': '270 100% 98%',
      '--secondary-foreground': '222.2 47.4% 11.2%',
      '--muted': '270 100% 98%',
      '--muted-foreground': '215.4 16.3% 46.9%',
      '--accent': '270 100% 98%',
      '--accent-foreground': '222.2 47.4% 11.2%',
      '--border': '270 100% 92%',
      '--input': '270 100% 92%',
      '--ring': '262 83% 65%'
    },
    isGradient: true
  },
  {
    id: 'cherry-blossom',
    name: 'Cherry Blossom',
    description: 'Soft pink spring colors with gentle movement',
    colors: {
      primary: '#EC4899',
      background: 'linear-gradient',
      accent: '#FCE7F3'
    },
    cssVars: {
      '--primary': '330 81% 60%',
      '--background': '0 0% 100%',
      '--foreground': '222.2 84% 4.9%',
      '--card': '0 0% 100%',
      '--card-foreground': '222.2 84% 4.9%',
      '--secondary': '322 100% 96%',
      '--secondary-foreground': '222.2 47.4% 11.2%',
      '--muted': '322 100% 96%',
      '--muted-foreground': '215.4 16.3% 46.9%',
      '--accent': '322 100% 96%',
      '--accent-foreground': '222.2 47.4% 11.2%',
      '--border': '322 100% 90%',
      '--input': '322 100% 90%',
      '--ring': '330 81% 60%'
    },
    isGradient: true
  },
  {
    id: 'forest-mist',
    name: 'Forest Mist',
    description: 'Tranquil forest greens with misty animation',
    colors: {
      primary: '#059669',
      background: 'linear-gradient',
      accent: '#ECFDF5'
    },
    cssVars: {
      '--primary': '160 84% 39%',
      '--background': '0 0% 100%',
      '--foreground': '222.2 84% 4.9%',
      '--card': '0 0% 100%',
      '--card-foreground': '222.2 84% 4.9%',
      '--secondary': '151 81% 96%',
      '--secondary-foreground': '222.2 47.4% 11.2%',
      '--muted': '151 81% 96%',
      '--muted-foreground': '215.4 16.3% 46.9%',
      '--accent': '151 81% 96%',
      '--accent-foreground': '222.2 47.4% 11.2%',
      '--border': '151 81% 90%',
      '--input': '151 81% 90%',
      '--ring': '160 84% 39%'
    },
    isGradient: true
  },
  {
    id: 'cosmic-nebula',
    name: 'Cosmic Nebula',
    description: 'Deep space colors with stellar movement',
    colors: {
      primary: '#6366F1',
      background: 'linear-gradient',
      accent: '#EEF2FF'
    },
    cssVars: {
      '--primary': '239 84% 67%',
      '--background': '0 0% 100%',
      '--foreground': '222.2 84% 4.9%',
      '--card': '0 0% 100%',
      '--card-foreground': '222.2 84% 4.9%',
      '--secondary': '238 100% 97%',
      '--secondary-foreground': '222.2 47.4% 11.2%',
      '--muted': '238 100% 97%',
      '--muted-foreground': '215.4 16.3% 46.9%',
      '--accent': '238 100% 97%',
      '--accent-foreground': '222.2 47.4% 11.2%',
      '--border': '238 100% 93%',
      '--input': '238 100% 93%',
      '--ring': '239 84% 67%'
    },
    isGradient: true
  }
];

const defaultTools: Tool[] = [
  { id: 'gst-calculator', name: 'GST Calculator', category: 'Calculation & Conversion Tools', enabled: true },
  { id: 'percentage-calculator', name: 'Percentage Calculator', category: 'Calculation & Conversion Tools', enabled: true },
  { id: 'simple-calculator', name: 'Simple Calculator', category: 'Calculation & Conversion Tools', enabled: true },
  { id: 'currency-converter', name: 'Currency Converter', category: 'Calculation & Conversion Tools', enabled: true },
  { id: 'age-calculator', name: 'Age Calculator', category: 'Calculation & Conversion Tools', enabled: true },
  { id: 'date-difference-calculator', name: 'Date Difference Calculator', category: 'Calculation & Conversion Tools', enabled: true },
  { id: 'bmi-calculator', name: 'BMI Calculator', category: 'Calculation & Conversion Tools', enabled: true },
  { id: 'emi-calculator', name: 'EMI Calculator', category: 'Calculation & Conversion Tools', enabled: true },
  { id: 'word-counter', name: 'Word Counter', category: 'Text & Writing Tools', enabled: true },
  { id: 'text-case-converter', name: 'Text Case Converter', category: 'Text & Writing Tools', enabled: true },
  { id: 'whitespace-remover', name: 'Whitespace Remover', category: 'Text & Writing Tools', enabled: true },
  { id: 'text-reverser', name: 'Text Reverser', category: 'Text & Writing Tools', enabled: true },
  { id: 'duplicate-line-remover', name: 'Duplicate Line Remover', category: 'Text & Writing Tools', enabled: true },
  { id: 'json-formatter', name: 'JSON Formatter', category: 'Text & Writing Tools', enabled: true },
  { id: 'todo-list', name: 'To-Do List', category: 'Productivity Tools', enabled: true },
  { id: 'qr-code-generator', name: 'QR Code Generator', category: 'Productivity Tools', enabled: true },
  { id: 'password-generator', name: 'Password Generator', category: 'Productivity Tools', enabled: true },
  { id: 'stopwatch', name: 'Stopwatch', category: 'Productivity Tools', enabled: true },
  { id: 'countdown-timer', name: 'Countdown Timer', category: 'Productivity Tools', enabled: true },
  { id: 'live-preview', name: 'HTML/CSS/JS Live Preview', category: 'Developer Tools', enabled: true },
  { id: 'regex-tester', name: 'Regex Tester', category: 'Developer Tools', enabled: true },
  { id: 'javascript-minifier', name: 'JavaScript Minifier', category: 'Developer Tools', enabled: true },
  { id: 'table-to-json', name: 'HTML Table to JSON', category: 'Developer Tools', enabled: true },
  { id: 'color-picker', name: 'Color Picker', category: 'Design & Visual Tools', enabled: true },
];

const ThemeManager = () => {
  const { theme: currentTheme, setTheme } = useTheme();
  const [tools, setTools] = useState<Tool[]>(defaultTools);

  useEffect(() => {
    // Load saved tools from localStorage
    const savedTools = localStorage.getItem('enabled-tools');
    
    if (savedTools) {
      try {
        const parsedTools = JSON.parse(savedTools);
        setTools(parsedTools);
      } catch (error) {
        console.error('Error parsing saved tools:', error);
      }
    }
  }, []);

  const handleThemeChange = (themeId: string) => {
    setTheme(themeId as any);
    console.log(`Applied theme: ${themeId}`);
  };

  const handleToolToggle = (toolId: string) => {
    const updatedTools = tools.map(tool =>
      tool.id === toolId ? { ...tool, enabled: !tool.enabled } : tool
    );
    setTools(updatedTools);
    localStorage.setItem('enabled-tools', JSON.stringify(updatedTools));
    console.log(`Toggled tool: ${toolId}`);
  };

  const getToolsByCategory = () => {
    const categories: Record<string, Tool[]> = {};
    tools.forEach(tool => {
      if (!categories[tool.category]) {
        categories[tool.category] = [];
      }
      categories[tool.category].push(tool);
    });
    return categories;
  };

  const enabledToolsCount = tools.filter(tool => tool.enabled).length;

  const regularThemes = themes.filter(theme => !theme.isGradient);
  const gradientThemes = themes.filter(theme => theme.isGradient);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-6 w-6" />
            Theme & Tool Management
          </CardTitle>
          <CardDescription>
            Customize your SmartTools experience with different themes and manage which tools are available.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="themes" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="themes" className="flex items-center gap-2">
                <Palette className="h-4 w-4" />
                Themes
              </TabsTrigger>
              <TabsTrigger value="tools" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Tools ({enabledToolsCount}/{tools.length})
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="themes" className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Regular Themes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {regularThemes.map((theme) => (
                    <Card 
                      key={theme.id} 
                      className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                        currentTheme === theme.id ? 'ring-2 ring-primary' : ''
                      }`}
                      onClick={() => handleThemeChange(theme.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-lg">{theme.name}</h4>
                          {currentTheme === theme.id && (
                            <Check className="h-5 w-5 text-primary" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">{theme.description}</p>
                        <div className="flex gap-2">
                          <div 
                            className="w-8 h-8 rounded-full border-2 border-gray-200"
                            style={{ backgroundColor: theme.colors.primary }}
                            title="Primary Color"
                          />
                          <div 
                            className="w-8 h-8 rounded-full border-2 border-gray-200"
                            style={{ backgroundColor: theme.colors.background }}
                            title="Background Color"
                          />
                          <div 
                            className="w-8 h-8 rounded-full border-2 border-gray-200"
                            style={{ backgroundColor: theme.colors.accent }}
                            title="Accent Color"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="h-5 w-5 text-yellow-500" />
                  <h3 className="text-lg font-semibold">Auto Gradient Themes</h3>
                  <Badge variant="secondary" className="text-xs">NEW</Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {gradientThemes.map((theme) => (
                    <Card 
                      key={theme.id} 
                      className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                        currentTheme === theme.id ? 'ring-2 ring-primary' : ''
                      }`}
                      onClick={() => handleThemeChange(theme.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold text-lg">{theme.name}</h4>
                            <Sparkles className="h-4 w-4 text-yellow-500" />
                          </div>
                          {currentTheme === theme.id && (
                            <Check className="h-5 w-5 text-primary" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">{theme.description}</p>
                        <div className="flex gap-2">
                          <div 
                            className="w-8 h-8 rounded-full border-2 border-gray-200"
                            style={{ backgroundColor: theme.colors.primary }}
                            title="Primary Color"
                          />
                          <div className="w-24 h-8 rounded-lg border-2 border-gray-200 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x" title="Animated Gradient" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="tools" className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Manage Tools</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Toggle tools on/off to customize your sidebar and home page. Disabled tools will be hidden from navigation.
                </p>
                
                {Object.entries(getToolsByCategory()).map(([category, categoryTools]) => (
                  <Card key={category} className="mb-4">
                    <CardHeader>
                      <CardTitle className="text-base">{category}</CardTitle>
                      <CardDescription>
                        {categoryTools.filter(tool => tool.enabled).length} of {categoryTools.length} tools enabled
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {categoryTools.map((tool) => (
                          <div key={tool.id} className="flex items-center justify-between p-3 border rounded-lg">
                            <div className="flex items-center gap-3">
                              <Label htmlFor={`tool-${tool.id}`} className="font-medium cursor-pointer">
                                {tool.name}
                              </Label>
                              {tool.enabled && (
                                <Badge variant="secondary" className="text-xs">
                                  Active
                                </Badge>
                              )}
                            </div>
                            <Switch
                              id={`tool-${tool.id}`}
                              checked={tool.enabled}
                              onCheckedChange={() => handleToolToggle(tool.id)}
                            />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default ThemeManager;
