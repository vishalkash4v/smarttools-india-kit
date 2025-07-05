import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FileText, Calculator, QrCode, TextCursor, Key, Code, Eraser, CopyCheck, ArrowLeftRight, Search, Palette, ListChecks, Clock, Timer, User, CalendarDays, Weight, Percent, DollarSign, Eye, FileCode, Table, PackagePlus, Globe, TrendingUp, List, Barcode, PenTool, StickyNote, Share2, Link2, Hash, Calendar as CalendarSchedule, Type, Smartphone, Keyboard, Trophy, Gamepad2, Users, Image as ImageIcon, Zap, Star, Crop, RotateCcw, Camera, FileImage, FileArchive, Download, Video, Copy } from "lucide-react";
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';

const allTools = [
  // Text & Writing Tools
  { 
    id: 'word-counter', 
    name: 'Word Counter', 
    category: 'Text & Writing Tools', 
    description: 'Count words, characters, and paragraphs in your text.',
    keywords: 'word count, character count, text analysis, writing tools',
    path: '/word-counter',
    icon: FileText 
  },
  { 
    id: 'text-case-converter', 
    name: 'Text Case Converter', 
    category: 'Text & Writing Tools', 
    description: 'Convert text between uppercase, lowercase, and title case.',
    path: '/text-case-converter',
    icon: TextCursor
  },
  { 
    id: 'text-font-changer', 
    name: 'Text Font Changer', 
    category: 'Text & Writing Tools', 
    description: 'Transform plain text into fancy fonts and styles like bold, italic, bubble text, and more.',
    path: '/text-font-changer',
    icon: Type
  },
  { 
    id: 'ai-text-rewriter', 
    name: 'AI Text Rewriter', 
    category: 'Text & Writing Tools', 
    description: 'Rewrite your content to make it unique and avoid AI detection.',
    path: '/ai-text-rewriter',
    icon: CopyCheck
  },
  { 
    id: 'lorem-ipsum-generator', 
    name: 'Lorem Ipsum Generator', 
    category: 'Text & Writing Tools', 
    description: 'Generate placeholder text for your designs.',
    path: '/lorem-ipsum-generator',
    icon: FileText
  },
  { 
    id: 'whitespace-remover', 
    name: 'Whitespace Remover', 
    category: 'Text & Writing Tools', 
    description: 'Remove extra spaces and tabs from your text.',
    path: '/whitespace-remover',
    icon: Eraser
  },
  { 
    id: 'duplicate-line-remover', 
    name: 'Duplicate Line Remover', 
    category: 'Text & Writing Tools', 
    description: 'Remove duplicate lines from your text.',
    path: '/duplicate-line-remover',
    icon: CopyCheck
  },
  { 
    id: 'text-reverser', 
    name: 'Text Reverser', 
    category: 'Text & Writing Tools', 
    description: 'Reverse text, words, or lines in your text.',
    path: '/text-reverser',
    icon: ArrowLeftRight
  },
  { 
    id: 'regex-tester', 
    name: 'Regex Tester', 
    category: 'Text & Writing Tools', 
    description: 'Test regular expressions against your text.',
    path: '/regex-tester',
    icon: Search
  },
  { 
    id: 'base64-converter', 
    name: 'Base64 Converter', 
    category: 'Text & Writing Tools', 
    description: 'Encode and decode Base64 strings.',
    path: '/base64-converter',
    icon: Code
  },
  { 
    id: 'text-to-handwriting', 
    name: 'Text to Handwriting', 
    category: 'Text & Writing Tools', 
    description: 'Convert typed text into handwritten-style text on lined paper.',
    path: '/text-to-handwriting',
    icon: PenTool
  },
  { 
    id: 'url-slug-generator', 
    name: 'URL Slug Generator', 
    category: 'Text & Writing Tools', 
    description: 'Convert text into SEO-friendly URL slugs.',
    path: '/url-slug-generator',
    icon: TextCursor
  },
  { 
    id: 'notes', 
    name: 'Notes', 
    category: 'Text & Writing Tools', 
    description: 'Create, organize, and manage your personal notes with tags and colors.',
    path: '/notes',
    icon: StickyNote
  },

  // Image Tools
  { 
    id: 'image-compressor', 
    name: 'Image Compressor', 
    category: 'Image Tools', 
    description: 'Compress images to reduce file size while maintaining quality. Convert MB images to KB for document uploads.',
    path: '/image-compressor',
    icon: ImageIcon
  },
  { 
    id: 'logo-to-favicon', 
    name: 'Logo to Favicon Converter', 
    category: 'Image Tools', 
    description: 'Convert your logo into multiple favicon sizes for websites and apps. Generate 16x16, 32x32, 180x180 and more favicon formats.',
    path: '/logo-to-favicon',
    icon: Star
  },
  { 
    id: 'image-upscaler', 
    name: 'Image Upscaler', 
    category: 'Image Tools', 
    description: 'Upscale and enhance image quality using advanced interpolation techniques. Increase image resolution and improve clarity.',
    path: '/image-upscaler',
    icon: Zap
  },
  { 
    id: 'image-cropper', 
    name: 'Image Cropper & Resizer', 
    category: 'Image Tools', 
    description: 'Crop and resize images for social media platforms. Perfect dimensions for Instagram, Facebook, Twitter, LinkedIn posts and stories.',
    path: '/image-cropper',
    icon: Crop
  },
  { 
    id: 'image-format-converter', 
    name: 'Image Format Converter', 
    category: 'Image Tools', 
    description: 'Convert images between JPG, PNG, WebP formats with quality control. Fast and secure online image converter.',
    path: '/image-format-converter',
    icon: RotateCcw
  },
  { 
    id: 'svg-optimizer', 
    name: 'SVG Optimizer', 
    category: 'Image Tools', 
    description: 'Optimize SVG files by removing unused attributes, comments, and metadata. Reduce file size while maintaining quality.',
    path: '/svg-optimizer',
    icon: FileCode
  },
  { 
    id: 'image-metadata-viewer', 
    name: 'Image Metadata Viewer', 
    category: 'Image Tools', 
    description: 'View and extract EXIF data and metadata from images. See camera settings, GPS location, and technical details.',
    path: '/image-metadata-viewer',
    icon: Camera
  },
  { 
    id: 'pdf-text-extractor', 
    name: 'PDF Text Extractor', 
    category: 'Image Tools', 
    description: 'Extract text content from PDF files. Convert PDF documents to plain text format for easy editing and copying.',
    path: '/pdf-text-extractor',
    icon: FileArchive
  },
  { 
    id: 'placeholder-image-generator', 
    name: 'Placeholder Image Generator', 
    category: 'Image Tools', 
    description: 'Generate custom placeholder images with specified dimensions, colors, and text. Perfect for web design mockups.',
    path: '/placeholder-image-generator',
    icon: FileImage
  },
  { 
    id: 'pixelate-tool', 
    name: 'Pixelate Tool', 
    category: 'Image Tools', 
    description: 'Apply pixelation effects to specific areas of your images with customizable strength and size.',
    path: '/tools/pixelate-tool',
    icon: ImageIcon
  },
  { 
    id: 'photo-annotation-tool', 
    name: 'Photo Annotation Tool', 
    category: 'Image Tools', 
    description: 'Add name, date, signature, and fingerprint to photos. Perfect for passport photos and applications.',
    path: '/tools/photo-annotation-tool',
    icon: PenTool
  },
  { 
    id: 'background-remover', 
    name: 'Background Remover', 
    category: 'Image Tools', 
    description: 'Remove background from photos automatically. Create transparent backgrounds instantly.',
    path: '/tools/background-remover',
    icon: Eraser
  },
  { 
    id: 'image-resizer', 
    name: 'Image Resizer', 
    category: 'Image Tools', 
    description: 'Manually resize image dimensions and file size. Perfect for documents and web images.',
    path: '/tools/image-resizer',
    icon: ImageIcon
  },
  { 
    id: 'auto-image-resizer', 
    name: 'Auto Image Resizer', 
    category: 'Image Tools', 
    description: 'Automatically resize images to optimal dimensions and file sizes for various use cases.',
    path: '/tools/auto-image-resizer',
    icon: Zap
  },
  { 
    id: 'add-name-date-photo', 
    name: 'Add Name & Date on Photo', 
    category: 'Image Tools', 
    description: 'Add name and date on passport photographs for online application forms.',
    path: '/tools/add-name-date-photo',
    icon: CalendarDays
  },
  { 
    id: 'join-photo-sign', 
    name: 'Join Photo & Sign', 
    category: 'Image Tools', 
    description: 'Combine photo and signature for online application forms.',
    path: '/tools/join-photo-sign',
    icon: Share2
  },
  { 
    id: 'front-back-joiner', 
    name: 'Front & Back Side Joiner', 
    category: 'Image Tools', 
    description: 'Join front and back sides of Aadhaar Card, Voter Card, Driving License, etc.',
    keywords: 'join images, combine sides, document joiner, aadhaar card, voter card',
    path: '/tools/front-back-joiner',
    icon: Copy
  },
  { 
    id: 'single-image-to-pdf', 
    name: 'Single Image to PDF', 
    category: 'Image Tools', 
    description: 'Convert any single JPG file to PDF format.',
    path: '/tools/single-image-to-pdf',
    icon: FileArchive
  },
  { 
    id: 'multiple-image-to-pdf', 
    name: 'Multiple Image to PDF', 
    category: 'Image Tools', 
    description: 'Convert multiple JPG files to a single PDF document.',
    path: '/tools/multiple-image-to-pdf',
    icon: FileArchive
  },
  { 
    id: 'blur-to-clear', 
    name: 'Blur to Clear', 
    category: 'Image Tools', 
    description: 'AI-powered image enhancer and upscaler to clean blur images and photos.',
    path: '/tools/blur-to-clear',
    icon: Zap
  },

  // Typing Tools
  { 
    id: 'typing-tutor', 
    name: 'Typing Tutor', 
    category: 'Typing Tools', 
    description: 'Learn touch typing with guided lessons in English and Hindi.',
    path: '/typing-tutor',
    icon: Keyboard
  },
  { 
    id: 'typing-test', 
    name: 'Typing Test', 
    category: 'Typing Tools', 
    description: 'Test your typing speed and accuracy with various text samples.',
    path: '/typing-test',
    icon: Timer
  },
  { 
    id: 'typing-games', 
    name: 'Typing Games', 
    category: 'Typing Tools', 
    description: 'Fun typing games to improve your skills while playing.',
    path: '/typing-games',
    icon: Gamepad2
  },
  { 
    id: 'typing-competition', 
    name: 'Typing Competition', 
    category: 'Typing Tools', 
    description: 'Compete with random players in real-time typing challenges.',
    path: '/typing-competition',
    icon: Trophy
  },

  // Utility Tools
  { 
    id: 'qr-code-generator', 
    name: 'QR Code Generator', 
    category: 'Utility Tools', 
    description: 'Generate QR codes from text or URLs.',
    path: '/qr-code-generator',
    icon: QrCode
  },
  { 
    id: 'password-generator', 
    name: 'Password Generator', 
    category: 'Utility Tools', 
    description: 'Generate strong and secure passwords.',
    path: '/password-generator',
    icon: Key
  },
  { 
    id: 'json-formatter', 
    name: 'JSON Formatter', 
    category: 'Utility Tools', 
    description: 'Format and validate JSON data.',
    path: '/json-formatter',
    icon: Code
  },
  { 
    id: 'color-picker-tool', 
    name: 'Color Picker', 
    category: 'Utility Tools', 
    description: 'Pick colors from a palette or image.',
    path: '/color-picker-tool',
    icon: Palette
  },
  { 
    id: 'todo-list', 
    name: 'To-Do List', 
    category: 'Utility Tools', 
    description: 'Create and manage your to-do list.',
    path: '/todo-list',
    icon: ListChecks
  },
  { 
    id: 'list-randomizer', 
    name: 'List Randomizer', 
    category: 'Utility Tools', 
    description: 'Randomize the order of items in any list.',
    path: '/list-randomizer',
    icon: List
  },
  { 
    id: 'barcode-generator', 
    name: 'Barcode Generator', 
    category: 'Utility Tools', 
    description: 'Generate barcodes from text for various applications.',
    path: '/barcode-generator',
    icon: Barcode
  },
  { 
    id: 'url-wrapper', 
    name: 'URL App Wrapper', 
    category: 'Utility Tools', 
    description: 'Convert regular URLs into app-opening links for mobile apps and web services.',
    path: '/url-wrapper',
    icon: Smartphone
  },
  { 
    id: 'qr-scanner', 
    name: 'QR Scanner', 
    category: 'Utility Tools', 
    description: 'Scan QR codes using camera or upload image to generate links.',
    path: '/tools/qr-scanner',
    icon: QrCode
  },

  // Number Tools
  { 
    id: 'simple-calculator', 
    name: 'Simple Calculator', 
    category: 'Number Tools', 
    description: 'Perform basic arithmetic calculations.',
    path: '/simple-calculator',
    icon: Calculator
  },
  { 
    id: 'age-calculator', 
    name: 'Age Calculator', 
    category: 'Number Tools', 
    description: 'Calculate age from a birthdate.',
    path: '/age-calculator',
    icon: User
  },
  { 
    id: 'date-difference-calculator', 
    name: 'Date Difference Calculator', 
    category: 'Number Tools', 
    description: 'Calculate the difference between two dates.',
    path: '/date-difference-calculator',
    icon: CalendarDays
  },
  { 
    id: 'bmi-calculator', 
    name: 'BMI Calculator', 
    category: 'Number Tools', 
    description: 'Calculate Body Mass Index (BMI).',
    path: '/bmi-calculator',
    icon: Weight
  },
  { 
    id: 'percentage-calculator', 
    name: 'Percentage Calculator', 
    category: 'Number Tools', 
    description: 'Calculate percentages and ratios.',
    path: '/percentage-calculator',
    icon: Percent
  },
  { 
    id: 'currency-converter', 
    name: 'Currency Converter', 
    category: 'Number Tools', 
    description: 'Convert between different currencies.',
    path: '/currency-converter',
    icon: DollarSign
  },
  { 
    id: 'gst-calculator', 
    name: 'GST Calculator', 
    category: 'Number Tools', 
    description: 'Calculate GST (Goods and Services Tax).',
    path: '/gst-calculator',
    icon: PackagePlus
  },
  { 
    id: 'emi-calculator', 
    name: 'EMI Calculator', 
    category: 'Number Tools', 
    description: 'Calculate Equated Monthly Installment (EMI) for loans.',
    path: '/emi-calculator',
    icon: DollarSign
  },
  { 
    id: 'sip-calculator', 
    name: 'SIP & Lumpsum Calculator', 
    category: 'Number Tools', 
    description: 'Calculate returns on your SIP or Lumpsum investments.',
    path: '/sip-calculator',
    icon: TrendingUp
  },
  { 
    id: 'ppf-calculator', 
    name: 'PPF Calculator', 
    category: 'Number Tools', 
    description: 'Calculate returns on your Public Provident Fund (PPF) investments.',
    path: '/ppf-calculator',
    icon: TrendingUp
  },
  { 
    id: 'fd-calculator', 
    name: 'FD Calculator', 
    category: 'Number Tools', 
    description: 'Calculate returns on your Fixed Deposit (FD) investments.',
    path: '/fd-calculator',
    icon: TrendingUp
  },
  { 
    id: 'income-tax-calculator', 
    name: 'Income Tax Calculator', 
    category: 'Number Tools', 
    description: 'Calculate your income tax liability.',
    path: '/income-tax-calculator',
    icon: DollarSign
  },

  // Converter Tools
  { 
    id: 'temperature-converter', 
    name: 'Temperature Converter', 
    category: 'Converter Tools', 
    description: 'Convert between Celsius and Fahrenheit.',
    path: '/temperature-converter',
    icon: Palette
  },
  { 
    id: 'unit-converter', 
    name: 'Unit Converter', 
    category: 'Converter Tools', 
    description: 'Convert between different units of measurement.',
    path: '/unit-converter',
    icon: Palette
  },

  // Developer Tools
  { 
    id: 'hash-generator', 
    name: 'Hash Generator', 
    category: 'Development Tools', 
    description: 'Generate cryptographic hashes using MD5, SHA-1, SHA-256, and SHA-512 algorithms.',
    path: '/hash-generator',
    icon: Hash
  },
  { 
    id: 'jwt-decoder', 
    name: 'JWT Token Decoder', 
    category: 'Development Tools', 
    description: 'Decode and parse JWT (JSON Web Token) headers, payloads, and signatures.',
    path: '/jwt-decoder',
    icon: Key
  },
  { 
    id: 'meta-tag-previewer', 
    name: 'Meta Tag Previewer', 
    category: 'Development Tools', 
    description: 'Preview how your website appears in search results and generate SEO meta tags.',
    path: '/meta-tag-previewer',
    icon: Eye
  },
  { 
    id: 'enhanced-unit-converter', 
    name: 'Enhanced Unit Converter', 
    category: 'Converter Tools', 
    description: 'Convert between various units including length, weight, temperature, time, data size, and speed.',
    path: '/enhanced-unit-converter',
    icon: ArrowLeftRight
  },

  // Timer Tools
  { 
    id: 'stopwatch', 
    name: 'Stopwatch', 
    category: 'Timer Tools', 
    description: 'Track elapsed time with a stopwatch.',
    path: '/stopwatch',
    icon: Clock
  },
  { 
    id: 'countdown-timer', 
    name: 'Countdown Timer', 
    category: 'Timer Tools', 
    description: 'Set a timer and count down to a specific time.',
    path: '/countdown-timer',
    icon: Timer
  },
  
  // Network Tools
  { 
    id: 'ip-lookup', 
    name: "What's My IP", 
    category: 'Network Tools', 
    description: 'Find your public IP address and location information.',
    path: '/ip-lookup',
    icon: Globe 
  },
  // Video & Social Media Tools
  { 
    id: 'social-media-db-viewer', 
    name: 'Social Media DB Viewer', 
    category: 'Video & Social Media Tools', 
    description: 'View public profile information from Instagram and Facebook accounts.',
    path: '/social-media-db-viewer',
    icon: Globe
  },
  { 
    id: 'social-media-downloader', 
    name: 'Instagram & Facebook Downloader', 
    category: 'Video & Social Media Tools', 
    description: 'Download reels, posts, stories, and highlights from Instagram and Facebook.',
    path: '/social-media-downloader',
    icon: Download
  },
  { 
    id: 'youtube-downloader', 
    name: 'YouTube Video & MP3 Downloader', 
    category: 'Video & Social Media Tools', 
    description: 'Download YouTube videos in various qualities or extract audio as MP3.',
    path: '/youtube-downloader',
    icon: Video
  },
];

const ToolsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTools = useMemo(() => {
    if (!searchTerm) return allTools;
    
    const lowerSearchTerm = searchTerm.toLowerCase();
    return allTools.filter(tool =>
      tool.name.toLowerCase().includes(lowerSearchTerm) ||
      tool.description.toLowerCase().includes(lowerSearchTerm) ||
      tool.category.toLowerCase().includes(lowerSearchTerm) ||
      (tool.keywords && tool.keywords.toLowerCase().includes(lowerSearchTerm))
    );
  }, [searchTerm]);

  const getIconColor = (category: string) => {
    switch (category) {
      case 'Text & Writing Tools':
        return 'text-blue-500';
      case 'Image Tools':
        return 'text-pink-500';
      case 'Typing Tools':
        return 'text-indigo-500';
      case 'Utility Tools':
        return 'text-green-500';
      case 'Number Tools':
        return 'text-purple-500';
      case 'Converter Tools':
        return 'text-orange-500';
      case 'Development Tools':
        return 'text-red-500';
      case 'Timer Tools':
        return 'text-yellow-500';
      case 'Network Tools':
        return 'text-cyan-500';
      case 'Video & Social Media Tools':
        return 'text-rose-500';
      default:
        return 'text-gray-500';
    }
  };

  const getBackgroundColor = (category: string) => {
    switch (category) {
      case 'Text & Writing Tools':
        return 'bg-blue-100 dark:bg-blue-900/20';
      case 'Image Tools':
        return 'bg-pink-100 dark:bg-pink-900/20';
      case 'Typing Tools':
        return 'bg-indigo-100 dark:bg-indigo-900/20';
      case 'Utility Tools':
        return 'bg-green-100 dark:bg-green-900/20';
      case 'Number Tools':
        return 'bg-purple-100 dark:bg-purple-900/20';
      case 'Converter Tools':
        return 'bg-orange-100 dark:bg-orange-900/20';
      case 'Development Tools':
        return 'bg-red-100 dark:bg-red-900/20';
      case 'Timer Tools':
        return 'bg-yellow-100 dark:bg-yellow-900/20';
      case 'Network Tools':
        return 'bg-cyan-100 dark:bg-cyan-900/20';
      case 'Video & Social Media Tools':
        return 'bg-rose-100 dark:bg-rose-900/20';
      default:
        return 'bg-gray-100 dark:bg-gray-900/20';
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const urlSearchTerm = params.get('search') || '';
    setSearchTerm(urlSearchTerm);
  }, [location.search]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    const params = new URLSearchParams(location.search);
    if (newSearchTerm) {
      params.set('search', newSearchTerm);
    } else {
      params.delete('search');
    }
    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">All Tools</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore a variety of free online tools for various tasks.
        </p>
      </div>
      
      <div className="mb-6">
        <Input
          type="search"
          placeholder="Search tools by name, description, or keywords..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTools.map((tool) => (
          <Card key={tool.id} className="h-full flex flex-col hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-xl ${getBackgroundColor(tool.category)}`}>
                  {React.createElement(tool.icon, { 
                    className: `h-8 w-8 ${getIconColor(tool.category)}` 
                  })}
                </div>
                <div>
                  <CardTitle className="text-lg leading-tight">{tool.name}</CardTitle>
                  <p className="text-xs text-muted-foreground mt-1">{tool.category}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow pt-0">
              <CardDescription className="text-sm leading-relaxed">{tool.description}</CardDescription>
              <Button 
                onClick={() => navigate(tool.path)} 
                className="w-full mt-4"
                variant="outline"
              >
                Use Tool
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ToolsPage;
