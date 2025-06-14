import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FileText, Calculator, QrCode, TextCursor, Key, Code, Eraser, CopyCheck, ArrowLeftRight, Search, Palette, ListChecks, Clock, Timer, User, CalendarDays, Weight, Percent, DollarSign, Eye, FileCode, Table, PackagePlus, Globe, TrendingUp, List, Barcode, PenTool, StickyNote } from "lucide-react";
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ToolsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTools, setFilteredTools] = useState([]);

  const allTools = [
    // Text & Writing Tools
    { 
      id: 'word-counter', 
      name: 'Word Counter', 
      category: 'Text & Writing Tools', 
      description: 'Count words, characters, and paragraphs in your text.',
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

    // Development Tools
    { 
      id: 'live-preview', 
      name: 'Live Preview', 
      category: 'Development Tools', 
      description: 'Preview HTML, CSS, and JavaScript code live.',
      path: '/live-preview',
      icon: Eye
    },
    { 
      id: 'javascript-minifier', 
      name: 'JavaScript Minifier', 
      category: 'Development Tools', 
      description: 'Minify JavaScript code to reduce file size.',
      path: '/javascript-minifier',
      icon: FileCode
    },
    { 
      id: 'table-to-json-converter', 
      name: 'Table to JSON Converter', 
      category: 'Development Tools', 
      description: 'Convert HTML tables to JSON format.',
      path: '/table-to-json-converter',
      icon: Table
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
  ];

  const getIconColor = (category: string) => {
    switch (category) {
      case 'Text & Writing Tools':
        return 'text-blue-500';
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
      default:
        return 'text-gray-500';
    }
  };

  const getBackgroundColor = (category: string) => {
    switch (category) {
      case 'Text & Writing Tools':
        return 'bg-blue-100 dark:bg-blue-900/20';
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
      default:
        return 'bg-gray-100 dark:bg-gray-900/20';
    }
  };

  useEffect(() => {
    // Set initial filtered tools to all tools
    setFilteredTools(allTools);

    // Apply search term if it exists in the URL
    const params = new URLSearchParams(location.search);
    const urlSearchTerm = params.get('search') || '';
    setSearchTerm(urlSearchTerm);

    // If there's a search term in the URL, filter the tools
    if (urlSearchTerm) {
      const filtered = allTools.filter(tool =>
        tool.name.toLowerCase().includes(urlSearchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(urlSearchTerm.toLowerCase()) ||
        tool.category.toLowerCase().includes(urlSearchTerm.toLowerCase())
      );
      setFilteredTools(filtered);
    }
  }, [location.search, allTools]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    // Update the URL with the new search term
    const params = new URLSearchParams(location.search);
    if (newSearchTerm) {
      params.set('search', newSearchTerm);
    } else {
      params.delete('search');
    }
    navigate(`${location.pathname}?${params.toString()}`, { replace: true });

    // Filter the tools based on the new search term
    const filtered = allTools.filter(tool =>
      tool.name.toLowerCase().includes(newSearchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(newSearchTerm.toLowerCase()) ||
      tool.category.toLowerCase().includes(newSearchTerm.toLowerCase())
    );
    setFilteredTools(filtered);
  };

  return (
    <PageWrapper
      title="All Tools"
      description="Explore a variety of free online tools for various tasks."
      keywords="online tools, free tools, utilities, converters, calculators"
    >
      <div className="container grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6">
        <aside className="hidden md:block">
          <AppSidebar />
        </aside>
        <main>
          <div className="mb-6">
            <Input
              type="search"
              placeholder="Search tools..."
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
        </main>
      </div>
    </PageWrapper>
  );
};

export default ToolsPage;
