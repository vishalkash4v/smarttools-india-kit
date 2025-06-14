
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Zap, Shield, Clock, Users, Star, TrendingUp } from 'lucide-react';

const LandingPage = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "All tools work instantly in your browser with no downloads required."
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your data never leaves your device. Everything is processed locally."
    },
    {
      icon: Clock,
      title: "Always Available",
      description: "Access your favorite tools 24/7 from anywhere in the world."
    },
    {
      icon: Users,
      title: "Made for India",
      description: "Specially designed for Indian users with GST, EMI calculators and more."
    }
  ];

  const stats = [
    { icon: Users, value: "10K+", label: "Active Users" },
    { icon: Star, value: "50+", label: "Professional Tools" },
    { icon: TrendingUp, value: "99.9%", label: "Uptime" },
    { icon: Zap, value: "< 1s", label: "Average Load Time" }
  ];

  return (
    <>
      <Helmet>
        <title>SmartTools India - Professional Online Tools & Calculators for Daily Use</title>
        <meta name="description" content="Free professional online tools including GST Calculator, EMI Calculator, Text Tools, Developer Tools and more. Designed specifically for Indian users with instant results." />
        <meta name="keywords" content="GST calculator India, EMI calculator, online tools, text converter, percentage calculator, age calculator, productivity tools, free calculators" />
        <meta property="og:title" content="SmartTools India - Professional Online Tools & Calculators" />
        <meta property="og:description" content="Free professional online tools including GST Calculator, EMI Calculator, Text Tools, Developer Tools and more. Designed specifically for Indian users." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smarttools-india.com" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SmartTools India - Professional Online Tools" />
        <meta name="twitter:description" content="Free professional online tools for GST, EMI, text processing and more" />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop" />
        <link rel="canonical" href="https://smarttools-india.com" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 overflow-hidden">
        {/* Hero Section with Background Image */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
          <div 
            className="absolute inset-0 opacity-5 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop)'
            }}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
            <div className="text-center animate-fade-in-up">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="p-4 rounded-3xl bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/20">
                    <Sparkles className="h-16 w-16 text-primary animate-pulse" />
                  </div>
                  <div className="absolute inset-0 h-24 w-24 text-primary/20 animate-ping rounded-full" />
                </div>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent leading-tight">
                SmartTools
                <span className="block text-4xl md:text-5xl mt-2 text-primary/70">India</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed font-medium">
                Your complete professional toolkit for daily productivity. Built specifically for Indian users with 
                <span className="text-primary font-semibold"> GST Calculator</span>, 
                <span className="text-primary font-semibold"> EMI Calculator</span>, and 50+ more tools.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground px-12 py-8 text-xl rounded-2xl shadow-2xl hover-lift btn-modern transform hover:scale-105 transition-all duration-300"
                >
                  <Link to="/tools" className="flex items-center gap-3">
                    <Zap className="h-6 w-6" />
                    Explore All Tools 
                    <ArrowRight className="h-6 w-6" />
                  </Link>
                </Button>
                
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="px-12 py-8 text-xl rounded-2xl border-2 border-primary/30 hover:border-primary hover:bg-primary/5 hover-lift transform hover:scale-105 transition-all duration-300"
                >
                  <Link to="/gst-calculator" className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5" />
                    Try GST Calculator
                  </Link>
                </Button>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center stagger-item" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-xl bg-primary/10 backdrop-blur-sm">
                        <stat.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-32 bg-gradient-to-r from-muted/20 via-background to-muted/30 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20 animate-fade-in">
              <h2 className="text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                Why Choose SmartTools?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Experience the perfect blend of functionality, speed, and design with our professionally crafted tools.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={feature.title} className="text-center group stagger-item hover-lift bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-500" style={{ animationDelay: `${index * 0.15}s` }}>
                  <CardHeader className="pb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <feature.icon className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors">{feature.title}</CardTitle>
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
        </div>

        {/* CTA Section */}
        <div className="py-32 relative">
          <div 
            className="absolute inset-0 opacity-10 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
          <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-foreground mb-8 bg-gradient-to-r from-foreground to-primary bg-clip-text">
              Ready to boost your productivity?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of professionals who trust SmartTools for their daily calculations, text processing, and productivity needs.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground px-16 py-8 text-xl rounded-2xl shadow-2xl hover-lift btn-modern transform hover:scale-105 transition-all duration-300"
            >
              <Link to="/tools" className="flex items-center gap-3">
                <Sparkles className="h-6 w-6" />
                Start Using Tools Now
                <ArrowRight className="h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
