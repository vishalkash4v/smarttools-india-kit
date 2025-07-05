import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import ToolSearch from '@/components/tools/ToolSearch';

// Tool data for search functionality
const tools = [
  { name: 'Age Calculator', description: 'Calculate your exact age in years, months, and days', href: '/tools/age-calculator', category: 'Calculator', keywords: 'age birthday years months days calculate', icon: () => null },
  { name: 'BMI Calculator', description: 'Calculate your Body Mass Index and health status', href: '/tools/bmi-calculator', category: 'Health', keywords: 'bmi body mass index weight height health fitness', icon: () => null },
  { name: 'Currency Converter', description: 'Convert between different currencies with live rates', href: '/tools/currency-converter', category: 'Finance', keywords: 'currency exchange rate convert money forex', icon: () => null },
  { name: 'Password Generator', description: 'Generate secure and strong passwords', href: '/tools/password-generator', category: 'Security', keywords: 'password generate secure strong random', icon: () => null },
  { name: 'QR Code Generator', description: 'Generate QR codes for text, URLs, and more', href: '/tools/qr-code-generator', category: 'Generator', keywords: 'qr code generate barcode scanner', icon: () => null },
  { name: 'Text Case Converter', description: 'Convert text between different cases', href: '/tools/text-case-converter', category: 'Text', keywords: 'text case upper lower title toggle convert', icon: () => null },
  { name: 'Word Counter', description: 'Count words, characters, and paragraphs', href: '/tools/word-counter', category: 'Text', keywords: 'word count character paragraph text analysis', icon: () => null },
  { name: 'Color Picker', description: 'Pick and convert colors between formats', href: '/tools/color-picker-tool', category: 'Design', keywords: 'color picker hex rgb hsl palette', icon: () => null },
  { name: 'Unit Converter', description: 'Convert between different units of measurement', href: '/tools/unit-converter', category: 'Converter', keywords: 'unit convert length weight temperature volume', icon: () => null },
  { name: 'JSON Formatter', description: 'Format and validate JSON data', href: '/tools/json-formatter', category: 'Developer', keywords: 'json format validate pretty print', icon: () => null },
  { name: 'Base64 Converter', description: 'Encode and decode Base64 strings', href: '/tools/base64-converter', category: 'Developer', keywords: 'base64 encode decode convert string', icon: () => null },
  { name: 'URL Shortener', description: 'Shorten long URLs for easy sharing', href: '/tools/url-shortener', category: 'Utility', keywords: 'url shorten link short tiny', icon: () => null },
  { name: 'Lorem Ipsum Generator', description: 'Generate placeholder text for designs', href: '/tools/lorem-ipsum-generator', category: 'Generator', keywords: 'lorem ipsum placeholder text dummy content', icon: () => null },
  { name: 'Stopwatch', description: 'Simple stopwatch for timing activities', href: '/tools/stopwatch', category: 'Timer', keywords: 'stopwatch timer chronometer time measure', icon: () => null },
  { name: 'Countdown Timer', description: 'Set countdown timers for events', href: '/tools/countdown-timer', category: 'Timer', keywords: 'countdown timer alarm clock event', icon: () => null },
  { name: 'Date Difference Calculator', description: 'Calculate the difference between two dates', href: '/tools/date-difference-calculator', category: 'Calculator', keywords: 'date difference days months years calculate between', icon: () => null },
  { name: 'Future Date Calculator', description: 'Calculate future dates by adding days', href: '/tools/future-date-calculator', category: 'Calculator', keywords: 'future date add days calculate forward', icon: () => null },
  { name: 'Simple Calculator', description: 'Basic calculator for everyday calculations', href: '/tools/simple-calculator', category: 'Calculator', keywords: 'calculator math arithmetic basic simple', icon: () => null },
  { name: 'Percentage Calculator', description: 'Calculate percentages and percentage changes', href: '/tools/percentage-calculator', category: 'Calculator', keywords: 'percentage calculate percent change increase decrease', icon: () => null },
  { name: 'GST Calculator', description: 'Calculate GST (Goods and Services Tax)', href: '/tools/gst-calculator', category: 'Finance', keywords: 'gst tax calculate goods services india', icon: () => null },
  { name: 'EMI Calculator', description: 'Calculate loan EMI (Equated Monthly Installment)', href: '/tools/emi-calculator', category: 'Finance', keywords: 'emi loan calculate monthly installment interest', icon: () => null },
  { name: 'SIP Calculator', description: 'Calculate Systematic Investment Plan returns', href: '/tools/sip-calculator', category: 'Finance', keywords: 'sip investment mutual fund calculate returns', icon: () => null },
  { name: 'PPF Calculator', description: 'Calculate Public Provident Fund returns', href: '/tools/ppf-calculator', category: 'Finance', keywords: 'ppf provident fund calculate returns investment', icon: () => null },
  { name: 'FD Calculator', description: 'Calculate Fixed Deposit returns and maturity', href: '/tools/fd-calculator', category: 'Finance', keywords: 'fd fixed deposit calculate returns maturity interest', icon: () => null },
  { name: 'Income Tax Calculator', description: 'Calculate income tax for Indian tax payers', href: '/tools/income-tax-calculator', category: 'Finance', keywords: 'income tax calculate indian slab deduction', icon: () => null },
  { name: 'Pixelate Tool', description: 'Apply pixelation effects to specific areas of your images', href: '/tools/pixelate-tool', category: 'Image Tools', keywords: 'pixelate image effect privacy blur', icon: () => null },
  { name: 'Photo Annotation Tool', description: 'Add name, date, signature, fingerprint to photos', href: '/tools/photo-annotation-tool', category: 'Image Tools', keywords: 'photo annotation name date signature fingerprint passport', icon: () => null },
  { name: 'Background Remover', description: 'Remove background from photos automatically', href: '/tools/background-remover', category: 'Image Tools', keywords: 'background remover remove photo background transparent', icon: () => null },
  { name: 'Image Resizer', description: 'Manually resize image dimensions and file size', href: '/tools/image-resizer', category: 'Image Tools', keywords: 'image resizer resize photo dimensions compress', icon: () => null },
  { name: 'Auto Image Resizer', description: 'Automatically resize images to optimal dimensions', href: '/tools/auto-image-resizer', category: 'Image Tools', keywords: 'auto image resizer automatic resize optimize', icon: () => null },
  { name: 'Add Name & Date on Photo', description: 'Add name and date on passport photographs', href: '/tools/add-name-date-photo', category: 'Image Tools', keywords: 'add name date photo passport application form', icon: () => null },
  { name: 'Join Photo & Sign', description: 'Combine photo and signature for applications', href: '/tools/join-photo-sign', category: 'Image Tools', keywords: 'join photo signature combine application form', icon: () => null },
  { name: 'Front & Back Side Joiner', description: 'Join front and back sides of ID cards', href: '/tools/front-back-joiner', category: 'Image Tools', keywords: 'front back joiner aadhaar voter id card license', icon: () => null },
  { name: 'Single Image to PDF', description: 'Convert single JPG file to PDF', href: '/tools/single-image-to-pdf', category: 'Image Tools', keywords: 'image to pdf convert jpg pdf single', icon: () => null },
  { name: 'Multiple Image to PDF', description: 'Convert multiple JPG files to single PDF', href: '/tools/multiple-image-to-pdf', category: 'Image Tools', keywords: 'multiple image pdf convert jpg combine', icon: () => null },
  { name: 'Blur to Clear', description: 'AI-powered image enhancer and upscaler', href: '/tools/blur-to-clear', category: 'Image Tools', keywords: 'blur clear ai enhance upscale image quality', icon: () => null },
  { name: 'QR Scanner', description: 'Scan QR codes using camera or upload image', href: '/tools/qr-scanner', category: 'Utility Tools', keywords: 'qr scanner scan code camera upload', icon: () => null },
];

interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
  backTo?: string;
}

const Header: React.FC<HeaderProps> = ({ 
  title, 
  showBackButton = false, 
  backTo 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleBack = () => {
    if (backTo && backTo !== '-1') {
      navigate(backTo);
    } else {
      navigate(-1);
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    // First navigate to home page if not already there
    if (window.location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Left side - Logo/Back button */}
          <div className="flex items-center gap-4 min-w-0">
            {showBackButton && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleBack}
                className="hover:bg-muted flex-shrink-0"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
            )}
            
            <Link to="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">ST</span>
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="font-bold text-lg leading-none">SmartTools</span>
                <span className="text-xs text-muted-foreground leading-none">India</span>
              </div>
            </Link>

            {title && (
              <>
                <div className="h-6 w-px bg-border mx-2 hidden sm:block" />
                <h1 className="text-lg font-semibold text-foreground truncate hidden sm:block">{title}</h1>
              </>
            )}
          </div>

          {/* Center - Search Bar (hidden on mobile) */}
          <div className="hidden lg:flex flex-1 max-w-md mx-4">
            <ToolSearch tools={tools} className="w-full" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              to="/tools" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
            >
              All Tools
            </Link>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
            >
              FAQ
            </button>
            <Link 
              to="/about" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
            >
              Contact
            </Link>
          </nav>

          {/* Right side - Theme toggle and mobile menu */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar - shown when menu is open */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/40">
            <ToolSearch tools={tools} className="w-full" />
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/40 py-4">
            <nav className="flex flex-col gap-3">
              <Link 
                to="/tools"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                All Tools
              </Link>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2 text-left"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2 text-left"
              >
                FAQ
              </button>
              <Link 
                to="/about"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
