
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import FAQ from '@/components/sections/FAQ';
import Testimonials from '@/components/sections/Testimonials';
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
  Sparkles
} from 'lucide-react';

const LandingPage = () => {
  const tools = [
    {
      name: 'BMI Calculator',
      description: 'Calculate your Body Mass Index with health insights',
      icon: Calculator,
      category: 'Health',
      href: '/bmi-calculator',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'JSON Formatter',
      description: 'Format, validate and beautify JSON data',
      icon: Code,
      category: 'Developer',
      href: '/json-formatter',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'QR Code Generator',
      description: 'Create custom QR codes instantly',
      icon: Palette,
      category: 'Utility',
      href: '/qr-code-generator',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Word Counter',
      description: 'Count words, characters and analyze text',
      icon: FileText,
      category: 'Text',
      href: '/word-counter',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Password Generator',
      description: 'Generate secure passwords with custom options',
      icon: Shield,
      category: 'Security',
      href: '/password-generator',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      name: 'Currency Converter',
      description: 'Convert between 150+ world currencies',
      icon: Globe,
      category: 'Finance',
      href: '/currency-converter',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

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
        <title>SmartTools India - Free Online Tools for Professionals | Calculators, Converters & More</title>
        <meta name="description" content="Professional online tools for developers, businesses & individuals. Free calculators, text tools, converters, generators & more. No registration required." />
        <meta name="keywords" content="online tools, free calculators, text tools, developers tools, converters, generators, BMI calculator, JSON formatter, QR code generator, India" />
        <meta property="og:title" content="SmartTools India - Free Professional Online Tools" />
        <meta property="og:description" content="25+ professional online tools including calculators, text processors, and developer utilities. Free, secure, and instant." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smarttools-india.com" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SmartTools India - Free Professional Online Tools" />
        <meta name="twitter:description" content="25+ professional online tools including calculators, text processors, and developer utilities. Free, secure, and instant." />
        <link rel="canonical" href="https://smarttools-india.com" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "SmartTools India",
            "description": "Professional online tools for developers, businesses and individuals",
            "url": "https://smarttools-india.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://smarttools-india.com/tools?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000" fill-opacity="0.02"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
          
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

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
                <Button asChild size="lg" className="btn-primary text-lg px-8 py-4">
                  <Link to="/tools">
                    Explore All Tools <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 hover-lift">
                  <Link to="#features">
                    Learn More
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
              {tools.map((tool, index) => (
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
                Why Choose SmartTools India?
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
                Join thousands of professionals who trust SmartTools India for their daily tasks
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="btn-primary text-lg px-8 py-4">
                  <Link to="/tools">
                    Start Using Tools Now <ArrowRight className="ml-2 h-5 w-5" />
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
