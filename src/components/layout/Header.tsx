
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const allTools = [
    { name: 'Word Counter', path: '/word-counter', description: 'Count words, characters, and paragraphs in your text', keywords: 'word count text analysis character' },
    { name: 'Text Case Converter', path: '/text-case-converter', description: 'Convert text between different cases', keywords: 'uppercase lowercase camelcase' },
    { name: 'Image Compressor', path: '/image-compressor', description: 'Compress images to reduce file size', keywords: 'image compression reduce size' },
    { name: 'URL Shortener', path: '/url-shortener', description: 'Create short URLs from long ones', keywords: 'url shortener link tiny' },
    { name: 'Base64 Converter', path: '/base64-converter', description: 'Encode and decode Base64 strings', keywords: 'base64 encode decode' },
    { name: 'Lorem Ipsum Generator', path: '/lorem-ipsum-generator', description: 'Generate placeholder text', keywords: 'lorem ipsum placeholder text' },
    { name: 'QR Code Generator', path: '/qr-code-generator', description: 'Generate QR codes for text and URLs', keywords: 'qr code generator barcode' },
    { name: 'Password Generator', path: '/password-generator', description: 'Generate secure passwords', keywords: 'password generator secure random' },
    { name: 'JSON Formatter', path: '/json-formatter', description: 'Format and validate JSON data', keywords: 'json formatter validator' },
    { name: 'Color Picker Tool', path: '/color-picker-tool', description: 'Pick and convert colors between formats', keywords: 'color picker hex rgb hsl' },
    { name: 'Simple Calculator', path: '/simple-calculator', description: 'Perform basic arithmetic calculations', keywords: 'calculator math arithmetic' },
    { name: 'Age Calculator', path: '/age-calculator', description: 'Calculate age from birthdate', keywords: 'age calculator birthday' },
    { name: 'BMI Calculator', path: '/bmi-calculator', description: 'Calculate Body Mass Index', keywords: 'bmi health weight calculator' },
    { name: 'EMI Calculator', path: '/emi-calculator', description: 'Calculate loan EMI payments', keywords: 'emi loan calculator payment' },
    { name: 'GST Calculator', path: '/gst-calculator', description: 'Calculate GST tax amounts', keywords: 'gst tax calculator india' },
    { name: 'Currency Converter', path: '/currency-converter', description: 'Convert between currencies', keywords: 'currency converter exchange rate' },
    { name: 'Unit Converter', path: '/unit-converter', description: 'Convert between different units', keywords: 'unit converter measurement' },
    { name: 'Temperature Converter', path: '/temperature-converter', description: 'Convert temperature units', keywords: 'temperature celsius fahrenheit' },
    { name: 'Typing Test', path: '/typing-test', description: 'Test your typing speed', keywords: 'typing test speed wpm' },
    { name: 'Typing Tutor', path: '/typing-tutor', description: 'Learn touch typing', keywords: 'typing tutor learn practice' },
    { name: 'Stopwatch', path: '/stopwatch', description: 'Time elapsed events', keywords: 'stopwatch timer time' },
    { name: 'Countdown Timer', path: '/countdown-timer', description: 'Set countdown timers', keywords: 'countdown timer alarm' },
    { name: 'Todo List', path: '/todo-list', description: 'Manage your tasks', keywords: 'todo list tasks management' },
    { name: 'Notes', path: '/notes', description: 'Take and organize notes', keywords: 'notes notepad text' },
    { name: 'QR Scanner', path: '/tools/qr-scanner', description: 'Scan QR codes from images', keywords: 'qr scanner reader decode' },
    { name: 'Photo Annotation', path: '/tools/photo-annotation-tool', description: 'Add text and images to photos', keywords: 'photo annotation watermark' },
    { name: 'Background Remover', path: '/tools/background-remover', description: 'Remove image backgrounds', keywords: 'background remover transparent' },
    { name: 'Image Resizer', path: '/tools/image-resizer', description: 'Resize images to custom dimensions', keywords: 'image resize scale' },
    { name: 'Pixelate Tool', path: '/tools/pixelate-tool', description: 'Apply pixelation effects to images', keywords: 'pixelate blur privacy' }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/tools?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const filteredTools = allTools.filter(tool =>
    tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.keywords.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 sm:h-16 items-center justify-between px-2 sm:px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xs sm:text-sm">ST</span>
          </div>
          <span className="font-bold text-lg sm:text-xl hidden sm:inline-block">SmartTools</span>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/tools" className="text-sm font-medium hover:text-primary transition-colors">
              Tools
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        )}

        {/* Search Bar - Desktop */}
        {!isMobile && !isSearchOpen && (
          <div className="hidden lg:flex items-center space-x-4 flex-1 max-w-sm mx-6">
            <form onSubmit={handleSearch} className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search tools..."
                className="pl-10 pr-4 w-full bg-background text-foreground"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-background border rounded-md shadow-lg max-h-60 overflow-y-auto z-50">
                  {filteredTools.length > 0 ? (
                    filteredTools.slice(0, 5).map((tool) => (
                      <Link
                        key={tool.path}
                        to={tool.path}
                        className="block px-4 py-2 hover:bg-muted text-sm text-foreground"
                        onClick={() => setSearchQuery('')}
                      >
                        <div className="font-medium">{tool.name}</div>
                        <div className="text-muted-foreground text-xs">{tool.description}</div>
                      </Link>
                    ))
                  ) : (
                    <div className="px-4 py-2 text-sm text-muted-foreground">No tools found</div>
                  )}
                </div>
              )}
            </form>
          </div>
        )}

        {/* Right Section */}
        <div className="flex items-center space-x-1 sm:space-x-2">
          <ThemeToggle />
          
          {/* Search Button - Mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 sm:h-10 sm:w-10"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          
          {/* Mobile Menu Button */}
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 sm:h-10 sm:w-10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
            </Button>
          )}
        </div>
      </div>

      {/* Search Bar - Mobile/Tablet */}
      {isSearchOpen && (
        <div className="border-t bg-background p-2 sm:p-4">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="search"
              placeholder="Search tools..."
              className="pl-10 pr-4 w-full bg-background text-foreground"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            {searchQuery && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-background border rounded-md shadow-lg max-h-60 overflow-y-auto z-50">
                {filteredTools.length > 0 ? (
                  filteredTools.slice(0, 5).map((tool) => (
                    <Link
                      key={tool.path}
                      to={tool.path}
                      className="block px-4 py-2 hover:bg-muted text-sm text-foreground"
                      onClick={() => {
                        setSearchQuery('');
                        setIsSearchOpen(false);
                      }}
                    >
                      <div className="font-medium">{tool.name}</div>
                      <div className="text-muted-foreground text-xs">{tool.description}</div>
                    </Link>
                  ))
                ) : (
                  <div className="px-4 py-2 text-sm text-muted-foreground">No tools found</div>
                )}
              </div>
            )}
          </form>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && isMobile && (
        <div className="border-t bg-background">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 text-base font-medium hover:text-primary hover:bg-muted rounded-md text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/tools"
              className="block px-3 py-2 text-base font-medium hover:text-primary hover:bg-muted rounded-md text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Tools
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-base font-medium hover:text-primary hover:bg-muted rounded-md text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-base font-medium hover:text-primary hover:bg-muted rounded-md text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
