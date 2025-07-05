
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

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
    { name: 'Pixelate Tool', path: '/tools/pixelate-tool', description: 'Apply pixelation effects to specific areas of your images', keywords: 'pixelate image privacy blur' },
    { name: 'Photo Annotation Tool', path: '/tools/photo-annotation-tool', description: 'Add name, date, signature, and fingerprint to your photos', keywords: 'photo annotation signature watermark' },
    { name: 'Background Remover', path: '/tools/background-remover', description: 'Remove backgrounds from images automatically', keywords: 'background remover transparent' },
    { name: 'Image Resizer', path: '/tools/image-resizer', description: 'Resize images to specific dimensions', keywords: 'image resize scale dimensions' },
    { name: 'QR Scanner', path: '/tools/qr-scanner', description: 'Scan and decode QR codes from images', keywords: 'qr scanner decode reader' }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/tools?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const filteredTools = allTools.filter(tool =>
    tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.keywords.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">ST</span>
          </div>
          <span className="font-bold text-xl hidden sm:inline-block">SmartTools</span>
        </Link>

        {/* Desktop Navigation */}
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

        {/* Search Bar */}
        <div className="hidden lg:flex items-center space-x-4 flex-1 max-w-sm mx-6">
          <form onSubmit={handleSearch} className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="search"
              placeholder="Search tools..."
              className="pl-10 pr-4 w-full"
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
                      className="block px-4 py-2 hover:bg-muted text-sm"
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

        {/* Right Section */}
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t">
            {/* Mobile Search */}
            <div className="px-3 py-2">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search tools..."
                  className="pl-10 pr-4 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>
            </div>
            
            <Link
              to="/"
              className="block px-3 py-2 text-base font-medium hover:text-primary hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/tools"
              className="block px-3 py-2 text-base font-medium hover:text-primary hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Tools
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-base font-medium hover:text-primary hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-base font-medium hover:text-primary hover:bg-muted rounded-md"
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
