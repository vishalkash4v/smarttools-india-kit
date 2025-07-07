
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import FAQ from '@/components/sections/FAQ';
import Testimonials from '@/components/sections/Testimonials';
import ToolSearch from '@/components/tools/ToolSearch';
import { 
  Calculator, 
  FileText, 
  Code, 
  Palette, 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Award,
  Sparkles,
  Calendar,
  Plus,
  Hash,
  Image,
  Type,
  Clock,
  Camera,
  Scissors,
  Download,
  Settings,
  Percent,
  DollarSign,
  Thermometer,
  Ruler,
  Timer,
  List,
  BarChart3,
  Link2,
  PenTool,
  StickyNote,
  MapPin,
  CheckSquare,
  Lock,
  FileJson,
  Search,
  Eye,
  Layers
} from 'lucide-react';

const LandingPage = () => {
  const tools = [
    {
      name: 'BMI Calculator',
      description: 'Calculate your Body Mass Index with health insights',
      icon: Calculator,
      category: 'Health',
      href: '/bmi-calculator',
      color: 'from-blue-500 to-cyan-500',
      keywords: 'body mass index health weight height fitness calculator medical'
    },
    {
      name: 'JSON Formatter',
      description: 'Format, validate and beautify JSON data',
      icon: Code,
      category: 'Developer',
      href: '/json-formatter',
      color: 'from-green-500 to-emerald-500',
      keywords: 'json format validate beautify minify developer api data'
    },
    {
      name: 'QR Code Generator',
      description: 'Create custom QR codes instantly',
      icon: Palette,
      category: 'Utility',
      href: '/qr-code-generator',
      color: 'from-purple-500 to-pink-500',
      keywords: 'qr code generator barcode scanner link url text'
    },
    {
      name: 'Word Counter',
      description: 'Count words, characters and analyze text',
      icon: FileText,
      category: 'Text',
      href: '/word-counter',
      color: 'from-orange-500 to-red-500',
      keywords: 'word count character count text analysis writing seo'
    },
    {
      name: 'Password Generator',
      description: 'Generate secure passwords with custom options',
      icon: Shield,
      category: 'Security',
      href: '/password-generator',
      color: 'from-indigo-500 to-blue-500',
      keywords: 'password generator secure strong random encryption security'
    },
    {
      name: 'Currency Converter',
      description: 'Convert between 150+ world currencies',
      icon: Globe,
      category: 'Finance',
      href: '/currency-converter',
      color: 'from-yellow-500 to-orange-500',
      keywords: 'currency converter exchange rate money finance forex'
    },
    {
      name: 'Date Difference Calculator',
      description: 'Calculate the exact difference between two dates',
      icon: Calendar,
      category: 'Date Calculator',
      href: '/date-difference-calculator',
      color: 'from-blue-500 to-indigo-500',
      keywords: 'date difference calculator age duration time span calendar'
    },
    {
      name: 'Future Date Calculator',
      description: 'Calculate future dates by adding days',
      icon: Plus,
      category: 'Date Calculator',
      href: '/future-date-calculator',
      color: 'from-green-500 to-emerald-500',
      keywords: 'future date calculator add days planning deadline project'
    },
    {
      name: 'Age Calculator',
      description: 'Calculate exact age in years, months, and days',
      icon: Calendar,
      category: 'Calculator',
      href: '/age-calculator',
      color: 'from-purple-500 to-pink-500',
      keywords: 'age calculator birthday years months days birth date'
    },
    {
      name: 'Percentage Calculator',
      description: 'Calculate percentages, increases, and decreases',
      icon: Percent,
      category: 'Calculator',
      href: '/percentage-calculator',
      color: 'from-red-500 to-orange-500',
      keywords: 'percentage calculator increase decrease math percentage'
    },
    {
      name: 'Simple Calculator',
      description: 'Basic arithmetic calculator for everyday use',
      icon: Calculator,
      category: 'Calculator',
      href: '/simple-calculator',
      color: 'from-gray-500 to-slate-500',
      keywords: 'calculator arithmetic math basic operations addition subtraction'
    },
    {
      name: 'Text Case Converter',
      description: 'Convert text between different cases',
      icon: Type,
      category: 'Text',
      href: '/text-case-converter',
      color: 'from-teal-500 to-cyan-500',
      keywords: 'text case converter uppercase lowercase title case'
    },
    {
      name: 'Base64 Converter',
      description: 'Encode and decode Base64 strings',
      icon: Code,
      category: 'Developer',
      href: '/base64-converter',
      color: 'from-violet-500 to-purple-500',
      keywords: 'base64 encode decode converter developer data string'
    },
    {
      name: 'Lorem Ipsum Generator',
      description: 'Generate placeholder text for design projects',
      icon: FileText,
      category: 'Text',
      href: '/lorem-ipsum-generator',
      color: 'from-rose-500 to-pink-500',
      keywords: 'lorem ipsum generator placeholder text dummy content design'
    },
    {
      name: 'Image Compressor',
      description: 'Compress images to reduce file size',
      icon: Image,
      category: 'Image Tool',
      href: '/image-compressor',
      color: 'from-emerald-500 to-green-500',
      keywords: 'image compressor resize optimize jpeg png webp size reduce'
    },
    {
      name: 'Stopwatch',
      description: 'Precise stopwatch with lap timing',
      icon: Clock,
      category: 'Utility',
      href: '/stopwatch',
      color: 'from-blue-500 to-cyan-500',
      keywords: 'stopwatch timer lap timing precise time measurement'
    },
    {
      name: 'Countdown Timer',
      description: 'Set custom countdown timers',
      icon: Timer,
      category: 'Utility',
      href: '/countdown-timer',
      color: 'from-red-500 to-rose-500',
      keywords: 'countdown timer alarm reminder time management productivity'
    },
    {
      name: 'Hash Generator',
      description: 'Generate MD5, SHA-1, SHA-256 hashes',
      icon: Hash,
      category: 'Developer',
      href: '/hash-generator',
      color: 'from-indigo-500 to-blue-500',
      keywords: 'hash generator md5 sha1 sha256 encryption security checksum'
    },
    {
      name: 'URL Shortener',
      description: 'Create short links from long URLs',
      icon: Link2,
      category: 'Utility',
      href: '/url-shortener',
      color: 'from-cyan-500 to-blue-500',
      keywords: 'url shortener link shortener tiny url redirect'
    },
    {
      name: 'Temperature Converter',
      description: 'Convert between Celsius, Fahrenheit, and Kelvin',
      icon: Thermometer,
      category: 'Converter',
      href: '/temperature-converter',
      color: 'from-orange-500 to-red-500',
      keywords: 'temperature converter celsius fahrenheit kelvin weather'
    }
  ];

  const featuredTools = tools.slice(0, 6);

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'All tools run instantly in your browser with no waiting time'
    },
    {
      icon: Shield,
      title: '100% Secure',
      description: 'Your data never leaves your browser. Complete privacy guaranteed'
    },
    {
      icon: Globe,
      title: 'Always Available',
      description: 'Access from anywhere, anytime. No downloads or installations required'
    },
    {
      icon: Users,
      title: 'User Friendly',
      description: 'Clean, intuitive interface designed for everyone to use easily'
    }
  ];

  const stats = [
    { number: '25+', label: 'Professional Tools', icon: Award },
    { number: '100K+', label: 'Happy Users', icon: Users },
    { number: '1M+', label: 'Calculations Done', icon: TrendingUp },
    { number: '99.9%', label: 'Uptime', icon: CheckCircle }
  ];

  return (
    <>
      <Helmet>
        <title>FYN Tools India - Free Online Professional Tools</title>
        <meta name="description" content="25+ free online tools for professionals. Secure calculators, text tools, converters, and generators. Instant results, no registration." />
        <meta name="keywords" content="online tools, free calculators, text tools, developers tools, converters, generators, BMI calculator, JSON formatter, QR code generator, India" />
        <meta property="og:title" content="FYN Tools India - Free Online Professional Tools" />
        <meta property="og:description" content="25+ free online tools for professionals. Secure calculators, text tools, converters, and generators. Instant results, no registration." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fyntools.com" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FYN Tools India - Free Online Professional Tools" />
        <meta name="twitter:description" content="25+ free online tools for professionals. Secure calculators, text tools, converters, and generators. Instant results, no registration." />
        <link rel="canonical" href="https://fyntools.com" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "FYN Tools India",
            "description": "Professional online tools for developers, businesses and individuals",
            "url": "https://fyntools.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://fyntools.com/tools?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5"></div>
          <div className="absolute inset-0 opacity-30">
            <div className="h-full w-full bg-gradient-to-br from-transparent via-primary/5 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center max-w-5xl mx-auto">
              <div className="mb-8 animate-bounce-in">
                <Badge variant="secondary" className="mb-4 text-sm px-4 py-2 glass-effect">
                  <Sparkles className="h-4 w-4 mr-2" />
                  25+ Professional Tools Available
                </Badge>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  <span className="heading-gradient">Professional</span>
                  <br />
                  <span className="text-foreground">Online Tools</span>
                  <br />
                  <span className="text-primary">for Everyone</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                  Free, secure, and instant tools for developers, businesses, and individuals. 
                  No registration required, works directly in your browser.
                </p>
              </div>

              {/* Search Bar */}
              <div className="mb-8">
                <ToolSearch tools={tools} className="max-w-lg" />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
                <Button asChild size="lg" className="btn-primary text-lg px-8 py-4">
                  <Link to="/tools">
                    Explore All Tools <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 hover-lift">
                  <Link to="/about">
                    About Us
                  </Link>
                </Button>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                {stats.map((stat, index) => (
                  <Card key={index} className="text-center hover-lift glass-effect border-primary/20">
                    <CardContent className="p-6">
                      <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                      <div className="text-3xl font-bold text-foreground mb-1">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Tools Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Featured Professional Tools
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Handpicked tools that professionals use daily for maximum productivity
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredTools.map((tool, index) => (
                <Link key={index} to={tool.href}>
                  <Card className="h-full hover-lift card-enhanced group cursor-pointer">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${tool.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <tool.icon className="h-6 w-6 text-white" />
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {tool.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {tool.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {tool.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline" className="hover-lift">
                <Link to="/tools">
                  View All 25+ Tools <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose FYN Tools India?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Built with modern technology for the best user experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover-lift card-enhanced">
                  <CardHeader className="pb-4">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 w-fit mx-auto mb-4 animate-float">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* FAQ Section */}
        <FAQ />

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Boost Your Productivity?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of professionals who trust FYN Tools India for their daily tasks
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="btn-primary text-lg px-8 py-4">
                  <Link to="/tools">
                    Start Using Tools Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 hover-lift">
                  <Link to="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage;
