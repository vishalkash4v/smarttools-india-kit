
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Search, Menu, X, Home, Book, Mail, Sun, Moon } from 'lucide-react';

const allTools = [
  { 
    id: 'word-counter', 
    name: 'Word Counter', 
    description: 'Count words, characters, and paragraphs in your text.',
    keywords: 'word count, character count, text analysis, writing tools',
    path: '/word-counter'
  },
  { 
    id: 'text-case-converter', 
    name: 'Text Case Converter', 
    description: 'Convert text between uppercase, lowercase, and title case.',
    keywords: 'text case, uppercase, lowercase, title case, text format',
    path: '/text-case-converter'
  },
  { 
    id: 'image-compressor', 
    name: 'Image Compressor', 
    description: 'Compress images to reduce file size while maintaining quality. Convert MB images to KB for document uploads.',
    keywords: 'image compress, image size, photo compress, reduce image size',
    path: '/image-compressor'
  },
  { 
    id: 'url-shortener', 
    name: 'URL Shortener', 
    description: 'Shorten long URLs into more manageable links.',
    keywords: 'url shortener, link shortener, shorten url, custom url',
    path: '/url-shortener'
  },
  { 
    id: 'base64-converter', 
    name: 'Base64 Converter', 
    description: 'Encode and decode Base64 strings.',
    keywords: 'base64 encode, base64 decode, string encode, string decode',
    path: '/base64-converter'
  },
  { 
    id: 'lorem-ipsum-generator', 
    name: 'Lorem Ipsum Generator', 
    description: 'Generate placeholder text for your designs.',
    keywords: 'lorem ipsum, placeholder text, dummy text, design text',
    path: '/lorem-ipsum-generator'
  },
  { 
    id: 'qr-code-generator', 
    name: 'QR Code Generator', 
    description: 'Generate QR codes from text or URLs.',
    keywords: 'qr code, generate qr, custom qr code, url qr code',
    path: '/qr-code-generator'
  },
  { 
    id: 'password-generator', 
    name: 'Password Generator', 
    description: 'Generate strong and secure passwords.',
    keywords: 'password generator, strong password, secure password, random password',
    path: '/password-generator'
  },
  { 
    id: 'json-formatter', 
    name: 'JSON Formatter', 
    description: 'Format and validate JSON data.',
    keywords: 'json format, json validate, json beautify, json editor',
    path: '/json-formatter'
  },
  { 
    id: 'color-picker-tool', 
    name: 'Color Picker', 
    description: 'Pick colors from a palette or image.',
    keywords: 'color picker, hex code, rgb code, color palette',
    path: '/color-picker-tool'
  },
  { 
    id: 'whitespace-remover', 
    name: 'Whitespace Remover', 
    description: 'Remove extra spaces and tabs from your text.',
    keywords: 'whitespace remover, remove spaces, remove tabs, clean text',
    path: '/whitespace-remover'
  },
  { 
    id: 'duplicate-line-remover', 
    name: 'Duplicate Line Remover', 
    description: 'Remove duplicate lines from your text.',
    keywords: 'duplicate remover, remove duplicate lines, unique lines, text cleaner',
    path: '/duplicate-line-remover'
  },
  { 
    id: 'text-reverser', 
    name: 'Text Reverser', 
    description: 'Reverse text, words, or lines in your text.',
    keywords: 'text reverser, reverse text, reverse words, flip text',
    path: '/text-reverser'
  },
  { 
    id: 'logo-to-favicon', 
    name: 'Logo to Favicon Converter', 
    description: 'Convert your logo into multiple favicon sizes for websites and apps. Generate 16x16, 32x32, 180x180 and more favicon formats.',
    keywords: 'logo to favicon, favicon generator, icon converter, app icon',
    path: '/logo-to-favicon'
  },
  { 
    id: 'image-upscaler', 
    name: 'Image Upscaler', 
    description: 'Upscale and enhance image quality using advanced interpolation techniques. Increase image resolution and improve clarity.',
    keywords: 'image upscaler, enhance image, increase resolution, ai upscaling',
    path: '/image-upscaler'
  },
  { 
    id: 'image-cropper', 
    name: 'Image Cropper & Resizer', 
    description: 'Crop and resize images for social media platforms. Perfect dimensions for Instagram, Facebook, Twitter, LinkedIn posts and stories.',
    keywords: 'image cropper, image resizer, crop photo, resize photo, social media image',
    path: '/image-cropper'
  },
  { 
    id: 'regex-tester', 
    name: 'Regex Tester', 
    description: 'Test regular expressions against your text.',
    keywords: 'regex tester, regular expression, regex validate, pattern match',
    path: '/regex-tester'
  },
  { 
    id: 'text-font-changer', 
    name: 'Text Font Changer', 
    description: 'Transform plain text into fancy fonts and styles like bold, italic, bubble text, and more.',
    keywords: 'text font, fancy text, change font, stylish text, bubble text',
    path: '/text-font-changer'
  },
  { 
    id: 'ai-text-rewriter', 
    name: 'AI Text Rewriter', 
    description: 'Rewrite your content to make it unique and avoid AI detection.',
    keywords: 'ai rewriter, text rewriter, content spinner, article rewriter',
    path: '/ai-text-rewriter'
  },
  { 
    id: 'image-format-converter', 
    name: 'Image Format Converter', 
    description: 'Convert images between JPG, PNG, WebP formats with quality control. Fast and secure online image converter.',
    keywords: 'image converter, jpg to png, png to webp, image format',
    path: '/image-format-converter'
  },
  { 
    id: 'svg-optimizer', 
    name: 'SVG Optimizer', 
    description: 'Optimize SVG files by removing unused attributes, comments, and metadata. Reduce file size while maintaining quality.',
    keywords: 'svg optimizer, optimize svg, reduce svg size, clean svg',
    path: '/svg-optimizer'
  },
  { 
    id: 'image-metadata-viewer', 
    name: 'Image Metadata Viewer', 
    description: 'View and extract EXIF data and metadata from images. See camera settings, GPS location, and technical details.',
    keywords: 'image metadata, exif data, image details, camera settings',
    path: '/image-metadata-viewer'
  },
  { 
    id: 'pdf-text-extractor', 
    name: 'PDF Text Extractor', 
    description: 'Extract text content from PDF files. Convert PDF documents to plain text format for easy editing and copying.',
    keywords: 'pdf text extractor, extract text from pdf, pdf to text, pdf content',
    path: '/pdf-text-extractor'
  },
  { 
    id: 'placeholder-image-generator', 
    name: 'Placeholder Image Generator', 
    description: 'Generate custom placeholder images with specified dimensions, colors, and text. Perfect for web design mockups.',
    keywords: 'placeholder image, dummy image, generate image, web mockup',
    path: '/placeholder-image-generator'
  },
  { 
    id: 'typing-tutor', 
    name: 'Typing Tutor', 
    description: 'Learn touch typing with guided lessons in English and Hindi.',
    keywords: 'typing tutor, touch typing, typing lessons, typing practice',
    path: '/typing-tutor'
  },
  { 
    id: 'typing-test', 
    name: 'Typing Test', 
    description: 'Test your typing speed and accuracy with various text samples.',
    keywords: 'typing test, typing speed, wpm test, accuracy test',
    path: '/typing-test'
  },
  { 
    id: 'typing-games', 
    name: 'Typing Games', 
    description: 'Fun typing games to improve your skills while playing.',
    keywords: 'typing games, typing practice, fun typing, improve typing',
    path: '/typing-games'
  },
  { 
    id: 'typing-competition', 
    name: 'Typing Competition', 
    description: 'Compete with random players in real-time typing challenges.',
    keywords: 'typing competition, typing challenge, online typing, real-time typing',
    path: '/typing-competition'
  },
  { 
    id: 'simple-calculator', 
    name: 'Simple Calculator', 
    description: 'Perform basic arithmetic calculations.',
    keywords: 'calculator, simple calculator, arithmetic calculator, basic math',
    path: '/simple-calculator'
  },
  { 
    id: 'age-calculator', 
    name: 'Age Calculator', 
    description: 'Calculate age from a birthdate.',
    keywords: 'age calculator, calculate age, birthdate, find age',
    path: '/age-calculator'
  },
  { 
    id: 'date-difference-calculator', 
    name: 'Date Difference Calculator', 
    description: 'Calculate the difference between two dates.',
    keywords: 'date difference, date calculator, days between dates, find days',
    path: '/date-difference-calculator'
  },
  { 
    id: 'bmi-calculator', 
    name: 'BMI Calculator', 
    description: 'Calculate Body Mass Index (BMI).',
    keywords: 'bmi calculator, body mass index, health calculator, weight calculator',
    path: '/bmi-calculator'
  },
  { 
    id: 'percentage-calculator', 
    name: 'Percentage Calculator', 
    description: 'Calculate percentages and ratios.',
    keywords: 'percentage calculator, calculate percentage, find percentage, ratio calculator',
    path: '/percentage-calculator'
  },
  { 
    id: 'currency-converter', 
    name: 'Currency Converter', 
    description: 'Convert between different currencies.',
    keywords: 'currency converter, convert currency, exchange rates, money converter',
    path: '/currency-converter'
  },
  { 
    id: 'gst-calculator', 
    name: 'GST Calculator', 
    description: 'Calculate GST (Goods and Services Tax).',
    keywords: 'gst calculator, calculate gst, goods and services tax, tax calculator',
    path: '/gst-calculator'
  },
  { 
    id: 'emi-calculator', 
    name: 'EMI Calculator', 
    description: 'Calculate Equated Monthly Installment (EMI) for loans.',
    keywords: 'emi calculator, calculate emi, loan calculator, monthly payment',
    path: '/emi-calculator'
  },
  { 
    id: 'sip-calculator', 
    name: 'SIP & Lumpsum Calculator', 
    description: 'Calculate returns on your SIP or Lumpsum investments.',
    keywords: 'sip calculator, lumpsum calculator, investment calculator, return calculator',
    path: '/sip-calculator'
  },
  { 
    id: 'ppf-calculator', 
    name: 'PPF Calculator', 
    description: 'Calculate returns on your Public Provident Fund (PPF) investments.',
    keywords: 'ppf calculator, public provident fund, investment calculator, tax saving',
    path: '/ppf-calculator'
  },
  { 
    id: 'fd-calculator', 
    name: 'FD Calculator', 
    description: 'Calculate returns on your Fixed Deposit (FD) investments.',
    keywords: 'fd calculator, fixed deposit, investment calculator, interest calculator',
    path: '/fd-calculator'
  },
  { 
    id: 'income-tax-calculator', 
    name: 'Income Tax Calculator', 
    description: 'Calculate your income tax liability.',
    keywords: 'income tax calculator, tax calculator, calculate income tax, tax liability',
    path: '/income-tax-calculator'
  },
  { 
    id: 'temperature-converter', 
    name: 'Temperature Converter', 
    description: 'Convert between Celsius and Fahrenheit.',
    keywords: 'temperature converter, celsius to fahrenheit, fahrenheit to celsius, convert temperature',
    path: '/temperature-converter'
  },
  { 
    id: 'unit-converter', 
    name: 'Unit Converter', 
    description: 'Convert between different units of measurement.',
    keywords: 'unit converter, convert units, measurement converter, length converter',
    path: '/unit-converter'
  },
  { 
    id: 'hash-generator', 
    name: 'Hash Generator', 
    description: 'Generate cryptographic hashes using MD5, SHA-1, SHA-256, and SHA-512 algorithms.',
    keywords: 'hash generator, md5 hash, sha1 hash, sha256 hash, sha512 hash',
    path: '/hash-generator'
  },
  { 
    id: 'jwt-decoder', 
    name: 'JWT Token Decoder', 
    description: 'Decode and parse JWT (JSON Web Token) headers, payloads, and signatures.',
    keywords: 'jwt decoder, jwt token, json web token, decode jwt',
    path: '/jwt-decoder'
  },
  { 
    id: 'meta-tag-previewer', 
    name: 'Meta Tag Previewer', 
    description: 'Preview how your website appears in search results and generate SEO meta tags.',
    keywords: 'meta tag preview, seo meta tags, search preview, website preview',
    path: '/meta-tag-previewer'
  },
  { 
    id: 'enhanced-unit-converter', 
    name: 'Enhanced Unit Converter', 
    description: 'Convert between various units including length, weight, temperature, time, data size, and speed.',
    keywords: 'enhanced unit converter, advanced unit converter, all units, convert everything',
    path: '/enhanced-unit-converter'
  },
  { 
    id: 'stopwatch', 
    name: 'Stopwatch', 
    description: 'Track elapsed time with a stopwatch.',
    keywords: 'stopwatch, online stopwatch, time tracker, elapsed time',
    path: '/stopwatch'
  },
  { 
    id: 'countdown-timer', 
    name: 'Countdown Timer', 
    description: 'Set a timer and count down to a specific time.',
    keywords: 'countdown timer, timer, online timer, set timer',
    path: '/countdown-timer'
  },
  { 
    id: 'ip-lookup', 
    name: "What's My IP", 
    description: 'Find your public IP address and location information.',
    keywords: 'ip lookup, find my ip, what is my ip, ip address',
    path: '/ip-lookup'
  },
  { 
    id: 'social-media-db-viewer', 
    name: 'Social Media DB Viewer', 
    description: 'View public profile information from Instagram and Facebook accounts.',
    keywords: 'social media viewer, instagram viewer, facebook viewer, profile viewer',
    path: '/social-media-db-viewer'
  },
  { 
    id: 'social-media-downloader', 
    name: 'Instagram & Facebook Downloader', 
    description: 'Download reels, posts, stories, and highlights from Instagram and Facebook.',
    keywords: 'social media downloader, instagram downloader, facebook downloader, download reels',
    path: '/social-media-downloader'
  },
  { 
    id: 'youtube-downloader', 
    name: 'YouTube Video & MP3 Downloader', 
    description: 'Download YouTube videos in various qualities or extract audio as MP3.',
    keywords: 'youtube downloader, download youtube, youtube to mp3, video downloader',
    path: '/youtube-downloader'
  },
  { 
    id: 'pixelate-tool', 
    name: 'Pixelate Tool', 
    description: 'Apply pixelation effects to specific areas of your images with customizable strength and size.',
    keywords: 'pixelate, blur, privacy, image effect, censorship',
    path: '/tools/pixelate-tool'
  },
  { 
    id: 'photo-annotation-tool', 
    name: 'Photo Annotation Tool', 
    description: 'Add name, date, signature, and fingerprint to photos. Perfect for passport photos and applications.',
    keywords: 'photo annotation, add name, add date, signature, fingerprint, passport photo',
    path: '/tools/photo-annotation-tool'
  },
  { 
    id: 'background-remover', 
    name: 'Background Remover', 
    description: 'Remove background from photos automatically. Create transparent backgrounds instantly.',
    keywords: 'background remover, remove background, transparent background, photo editing',
    path: '/tools/background-remover'
  },
  { 
    id: 'image-resizer', 
    name: 'Image Resizer', 
    description: 'Manually resize image dimensions and file size. Perfect for documents and web images.',
    keywords: 'image resizer, resize image, change dimensions, compress image',
    path: '/tools/image-resizer'
  },
  { 
    id: 'qr-scanner', 
    name: 'QR Scanner', 
    description: 'Scan QR codes using camera or upload image to generate links.',
    keywords: 'QR scanner, scan QR code, QR reader, barcode scanner',
    path: '/tools/qr-scanner'
  }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const urlSearchTerm = params.get('search') || '';
    setSearchTerm(urlSearchTerm);
  }, [location.search]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/tools?search=${searchTerm}`);
    } else {
      navigate('/tools');
    }
  };

  const filteredTools = allTools.filter(tool =>
    tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (tool.keywords && tool.keywords.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <header className="bg-background sticky top-0 z-50 border-b">
      <div className="container flex items-center justify-between space-x-2 py-4">
        <Link to="/" className="font-bold text-2xl">
          SmartTools
        </Link>

        <div className="flex-1 hidden md:block">
          <form onSubmit={handleSearchSubmit}>
            <div className="relative">
              <Input
                type="search"
                placeholder="Search tools..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="pr-10"
              />
              <Button
                type="submit"
                variant="ghost"
                size="sm"
                className="absolute right-1 top-1 rounded-full"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/" className="px-4 py-2 rounded-md hover:bg-secondary">
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/tools" className="px-4 py-2 rounded-md hover:bg-secondary">
                Tools
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/about" className="px-4 py-2 rounded-md hover:bg-secondary">
                About
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/contact" className="px-4 py-2 rounded-md hover:bg-secondary">
                Contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <ThemeToggle />

        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="sm">
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="sm:max-w-sm">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
                Explore our site and discover useful tools.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <Link to="/" className="flex items-center space-x-2 rounded-md p-2 hover:bg-secondary">
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
              <Link to="/tools" className="flex items-center space-x-2 rounded-md p-2 hover:bg-secondary">
                <Book className="h-4 w-4" />
                <span>Tools</span>
              </Link>
              <Link to="/about" className="flex items-center space-x-2 rounded-md p-2 hover:bg-secondary">
                <Avatar className="h-4 w-4">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span>About</span>
              </Link>
              <Link to="/contact" className="flex items-center space-x-2 rounded-md p-2 hover:bg-secondary">
                <Mail className="h-4 w-4" />
                <span>Contact</span>
              </Link>
              <div className="md:hidden">
                <form onSubmit={handleSearchSubmit} className="mb-4">
                  <div className="relative">
                    <Input
                      type="search"
                      placeholder="Search tools..."
                      value={searchTerm}
                      onChange={handleSearchChange}
                      className="pr-10"
                    />
                    <Button
                      type="submit"
                      variant="ghost"
                      size="sm"
                      className="absolute right-1 top-1 rounded-full"
                    >
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
