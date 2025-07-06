
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
    { name: 'Word Counter', path: '/word-counter', description: 'Count words, characters, paragraphs and reading time in your text', keywords: 'word count text analysis character paragraph sentence reading time' },
    { name: 'Text Case Converter', path: '/text-case-converter', description: 'Convert text between different cases - uppercase, lowercase, title case, camelCase', keywords: 'uppercase lowercase camelcase title case text transform convert case' },
    { name: 'Text Font Changer', path: '/text-font-changer', description: 'Transform text into different Unicode fonts and styles', keywords: 'font text style unicode transform generator fancy text' },
    { name: 'JSON Formatter', path: '/json-formatter', description: 'Format, validate and beautify JSON data with syntax highlighting', keywords: 'json formatter validator beautify format validate syntax' },
    { name: 'Whitespace Remover', path: '/whitespace-remover', description: 'Remove extra spaces, tabs and line breaks from text', keywords: 'whitespace remover spaces tabs line breaks clean text' },
    { name: 'Duplicate Line Remover', path: '/duplicate-line-remover', description: 'Remove duplicate lines from text while preserving order', keywords: 'duplicate lines remove text unique filter' },
    { name: 'Text Reverser', path: '/text-reverser', description: 'Reverse text character by character or word by word', keywords: 'text reverse backwards flip mirror' },
    { name: 'Lorem Ipsum Generator', path: '/lorem-ipsum-generator', description: 'Generate placeholder text for design and development', keywords: 'lorem ipsum placeholder text generator dummy content' },
    { name: 'AI Text Rewriter', path: '/ai-text-rewriter', description: 'Rewrite and improve text using AI technology', keywords: 'ai text rewriter improve paraphrase artificial intelligence' },
    { name: 'Base64 Converter', path: '/base64-converter', description: 'Encode and decode Base64 strings and files', keywords: 'base64 encode decode converter string file' },
    { name: 'Text to Handwriting', path: '/text-to-handwriting', description: 'Convert typed text to handwritten style images', keywords: 'handwriting text convert image generator script' },
    { name: 'URL Slug Generator', path: '/url-slug-generator', description: 'Generate SEO-friendly URL slugs from text', keywords: 'url slug generator seo friendly web development' },
    { name: 'Notes', path: '/notes', description: 'Take and organize notes with rich text editor', keywords: 'notes notepad text editor rich text organize' },
    { name: 'Regex Tester', path: '/regex-tester', description: 'Test and debug regular expressions with live matching', keywords: 'regex regular expression tester debugger pattern matching' },
    
    { name: 'Typing Tutor', path: '/typing-tutor', description: 'Learn touch typing with interactive lessons and exercises', keywords: 'typing tutor learn touch type practice lessons keyboard' },
    { name: 'Typing Test', path: '/typing-test', description: 'Test your typing speed and accuracy with WPM calculation', keywords: 'typing test speed wpm accuracy words per minute' },
    { name: 'Typing Games', path: '/typing-games', description: 'Fun typing games to improve your keyboard skills', keywords: 'typing games fun keyboard skills improvement practice' },
    { name: 'Typing Competition', path: '/typing-competition', description: 'Competitive typing challenges and leaderboards', keywords: 'typing competition challenge leaderboard compete' },
    
    { name: 'Simple Calculator', path: '/simple-calculator', description: 'Basic arithmetic calculator for everyday calculations', keywords: 'calculator math arithmetic basic operations add subtract multiply divide' },
    { name: 'Age Calculator', path: '/age-calculator', description: 'Calculate exact age from birth date with detailed breakdown', keywords: 'age calculator birthday birth date years months days' },
    { name: 'Date Difference Calculator', path: '/date-difference-calculator', description: 'Calculate difference between two dates', keywords: 'date difference calculator days between dates duration' },
    { name: 'BMI Calculator', path: '/bmi-calculator', description: 'Calculate Body Mass Index and health assessment', keywords: 'bmi calculator body mass index health weight height fitness' },
    { name: 'Percentage Calculator', path: '/percentage-calculator', description: 'Calculate percentages, percentage change and more', keywords: 'percentage calculator percent change increase decrease' },
    { name: 'GST Calculator', path: '/gst-calculator', description: 'Calculate GST tax amounts for Indian tax system', keywords: 'gst calculator tax india goods services tax percentage' },
    { name: 'EMI Calculator', path: '/emi-calculator', description: 'Calculate loan EMI payments with amortization schedule', keywords: 'emi calculator loan payment mortgage home loan interest rate' },
    { name: 'Temperature Converter', path: '/temperature-converter', description: 'Convert between Celsius, Fahrenheit and Kelvin', keywords: 'temperature converter celsius fahrenheit kelvin convert' },
    { name: 'Unit Converter', path: '/unit-converter', description: 'Convert between different units of measurement', keywords: 'unit converter measurement length weight volume area' },
    { name: 'Enhanced Unit Converter', path: '/enhanced-unit-converter', description: 'Advanced unit converter with more categories and precision', keywords: 'enhanced unit converter advanced measurement precision categories' },
    
    { name: 'SIP & Lump Sum Calculator', path: '/sip-calculator', description: 'Calculate SIP returns and lump sum investments', keywords: 'sip calculator investment mutual funds lump sum returns' },
    { name: 'PPF Calculator', path: '/ppf-calculator', description: 'Calculate Public Provident Fund returns and maturity', keywords: 'ppf calculator public provident fund investment tax saving' },
    { name: 'FD Calculator', path: '/fd-calculator', description: 'Calculate Fixed Deposit returns and maturity amount', keywords: 'fd calculator fixed deposit bank interest returns maturity' },
    { name: 'Income Tax Calculator', path: '/income-tax-calculator', description: 'Calculate income tax for Indian tax system', keywords: 'income tax calculator india tax slab deduction investment' },
    { name: 'Currency Converter', path: '/currency-converter', description: 'Convert between different currencies with live rates', keywords: 'currency converter exchange rate money foreign exchange' },
    
    { name: 'Image Compressor', path: '/image-compressor', description: 'Compress images to reduce file size while maintaining quality', keywords: 'image compressor reduce size optimize jpeg png webp quality' },
    { name: 'Logo to Favicon', path: '/logo-to-favicon', description: 'Convert logos to favicon format with multiple sizes', keywords: 'logo favicon converter icon website branding' },
    { name: 'Image Upscaler', path: '/image-upscaler', description: 'Upscale and enhance image quality using advanced algorithms', keywords: 'image upscaler enhance quality resolution increase enlarge' },
    { name: 'Image Cropper', path: '/image-cropper', description: 'Crop images to custom dimensions and aspect ratios', keywords: 'image cropper crop resize aspect ratio dimensions' },
    { name: 'Image Format Converter', path: '/image-format-converter', description: 'Convert images between different formats (JPEG, PNG, WebP)', keywords: 'image format converter jpeg png webp convert format' },
    { name: 'SVG Optimizer', path: '/svg-optimizer', description: 'Optimize SVG files by reducing file size and cleaning code', keywords: 'svg optimizer reduce size clean code vector graphics' },
    { name: 'Image Metadata Viewer', path: '/image-metadata-viewer', description: 'View and extract metadata from image files (EXIF data)', keywords: 'image metadata viewer exif data camera information' },
    { name: 'PDF Text Extractor', path: '/pdf-text-extractor', description: 'Extract text content from PDF files', keywords: 'pdf text extractor extract content document text' },
    { name: 'Placeholder Image Generator', path: '/placeholder-image-generator', description: 'Generate placeholder images for design and development', keywords: 'placeholder image generator dummy design development mockup' },
    { name: 'Pixelate Tool', path: '/tools/pixelate-tool', description: 'Apply pixelation effects to specific areas of images for privacy or artistic effects', keywords: 'pixelate tool privacy blur effect artistic pixel censoring' },
    { name: 'Photo Annotation', path: '/tools/photo-annotation-tool', description: 'Add text annotations, arrows and shapes to photos', keywords: 'photo annotation text arrows shapes markup editor' },
    { name: 'Background Remover', path: '/tools/background-remover', description: 'Remove backgrounds from images automatically', keywords: 'background remover transparent remove background automatic' },
    { name: 'Image Resizer', path: '/tools/image-resizer', description: 'Resize images to custom dimensions with quality preservation', keywords: 'image resizer resize dimensions quality preserve scale' },
    
    { name: 'URL Shortener', path: '/url-shortener', description: 'Create short URLs from long ones for easy sharing', keywords: 'url shortener short link tiny url sharing social media' },
    { name: 'Hashtag Generator', path: '/hashtag-generator', description: 'Generate relevant hashtags for social media posts', keywords: 'hashtag generator social media instagram twitter tags' },
    { name: 'Social Media Link Generator', path: '/social-media-link-generator', description: 'Generate social media sharing links for platforms', keywords: 'social media link generator sharing facebook twitter linkedin' },
    { name: 'Content Planner', path: '/social-media-planner', description: 'Plan and schedule social media content calendar', keywords: 'content planner social media calendar schedule posts' },
    { name: 'Social Media DB Viewer', path: '/social-media-db-viewer', description: 'View and manage social media database entries', keywords: 'social media database viewer manage entries data' },
    { name: 'Instagram & Facebook Downloader', path: '/social-media-downloader', description: 'Download content from Instagram and Facebook', keywords: 'instagram facebook downloader social media content download' },
    { name: 'YouTube Downloader', path: '/youtube-downloader', description: 'Download YouTube videos and audio in various formats', keywords: 'youtube downloader video audio mp4 mp3 download' },
    
    { name: 'QR Code Generator', path: '/qr-code-generator', description: 'Generate QR codes for text, URLs and other data', keywords: 'qr code generator barcode text url data mobile scan' },
    { name: 'Password Generator', path: '/password-generator', description: 'Generate secure passwords with customizable options', keywords: 'password generator secure random strong password safety' },
    { name: 'Color Picker Tool', path: '/color-picker-tool', description: 'Pick and convert colors between different formats (HEX, RGB, HSL)', keywords: 'color picker hex rgb hsl convert palette design' },
    { name: 'Todo List', path: '/todo-list', description: 'Manage tasks and to-do items with priority and status', keywords: 'todo list tasks management priority status productivity' },
    { name: 'Stopwatch', path: '/stopwatch', description: 'Time events with precise stopwatch functionality', keywords: 'stopwatch timer time measure elapsed duration' },
    { name: 'Countdown Timer', path: '/countdown-timer', description: 'Set countdown timers for events and deadlines', keywords: 'countdown timer alarm event deadline notification' },
    { name: 'Live Preview', path: '/live-preview', description: 'Preview HTML, CSS and JavaScript code in real-time', keywords: 'live preview html css javascript code editor real-time' },
    { name: 'JavaScript Minifier', path: '/javascript-minifier', description: 'Minify JavaScript code to reduce file size', keywords: 'javascript minifier js minify compress optimize code' },
    { name: 'Table to JSON Converter', path: '/table-to-json-converter', description: 'Convert CSV/table data to JSON format', keywords: 'table json converter csv data format convert' },
    { name: 'List Randomizer', path: '/list-randomizer', description: 'Randomize and shuffle list items', keywords: 'list randomizer shuffle random order items' },
    { name: 'Barcode Generator', path: '/barcode-generator', description: 'Generate barcodes in various formats', keywords: 'barcode generator code128 ean upc product retail' },
    { name: 'URL App Wrapper', path: '/url-wrapper', description: 'Wrap URLs as mobile-friendly app interfaces', keywords: 'url wrapper mobile app interface web app pwa' },
    
    { name: 'Hash Generator', path: '/hash-generator', description: 'Generate cryptographic hashes (MD5, SHA1, SHA256)', keywords: 'hash generator md5 sha1 sha256 cryptographic checksum' },
    { name: 'JWT Token Decoder', path: '/jwt-decoder', description: 'Decode and verify JSON Web Tokens', keywords: 'jwt decoder json web token verify authenticate' },
    { name: 'Meta Tag Previewer', path: '/meta-tag-previewer', description: 'Preview how meta tags appear on social media platforms', keywords: 'meta tag previewer social media seo og tags twitter cards' },
    
    { name: 'QR Scanner', path: '/tools/qr-scanner', description: 'Scan QR codes from images and camera', keywords: 'qr scanner reader decode barcode mobile camera' },
    
    { name: "What's My IP", path: '/ip-lookup', description: 'Find your IP address and location information', keywords: 'ip address lookup location what is my ip geolocation' }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/tools?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const filteredTools = allTools.filter(tool => {
    const query = searchQuery.toLowerCase();
    return tool.name.toLowerCase().includes(query) ||
           tool.description.toLowerCase().includes(query) ||
           tool.keywords.toLowerCase().includes(query);
  });

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
                    filteredTools.slice(0, 8).map((tool) => (
                      <Link
                        key={tool.path}
                        to={tool.path}
                        className="block px-4 py-3 hover:bg-muted text-sm text-foreground border-b border-border/50 last:border-b-0"
                        onClick={() => setSearchQuery('')}
                      >
                        <div className="font-medium">{tool.name}</div>
                        <div className="text-muted-foreground text-xs mt-1 line-clamp-2">{tool.description}</div>
                      </Link>
                    ))
                  ) : (
                    <div className="px-4 py-3 text-sm text-muted-foreground text-center">
                      No tools found for "{searchQuery}"
                    </div>
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
                  filteredTools.slice(0, 8).map((tool) => (
                    <Link
                      key={tool.path}
                      to={tool.path}
                      className="block px-4 py-3 hover:bg-muted text-sm text-foreground border-b border-border/50 last:border-b-0"
                      onClick={() => {
                        setSearchQuery('');
                        setIsSearchOpen(false);
                      }}
                    >
                      <div className="font-medium">{tool.name}</div>
                      <div className="text-muted-foreground text-xs mt-1 line-clamp-2">{tool.description}</div>
                    </Link>
                  ))
                ) : (
                  <div className="px-4 py-3 text-sm text-muted-foreground text-center">
                    No tools found for "{searchQuery}"
                  </div>
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
