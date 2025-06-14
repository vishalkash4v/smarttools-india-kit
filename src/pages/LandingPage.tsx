
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Zap, Shield, Clock, Users } from 'lucide-react';

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

  return (
    <>
      <Helmet>
        <title>SmartTools India - Professional Online Tools for Daily Use</title>
        <meta name="description" content="Your one-stop destination for essential daily-use and productivity tools designed for India. GST Calculator, EMI Calculator, Text Tools, and more." />
        <meta name="keywords" content="GST calculator, EMI calculator, text tools, productivity tools, India, online calculator" />
        <meta property="og:title" content="SmartTools India - Professional Online Tools" />
        <meta property="og:description" content="Professional online tools for daily use designed for India" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SmartTools India" />
        <meta name="twitter:description" content="Professional online tools for daily use" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <div className="text-center animate-fade-in-up">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <Sparkles className="h-16 w-16 text-primary animate-pulse" />
                  <div className="absolute inset-0 h-16 w-16 text-primary/30 animate-ping" />
                </div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                SmartTools India
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                Your professional toolkit for daily productivity. Built specifically for Indian users with tools like GST Calculator, EMI Calculator, and much more.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl shadow-professional-lg hover-lift btn-modern"
                >
                  <Link to="/tools" className="flex items-center gap-2">
                    Get Started <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="px-8 py-6 text-lg rounded-xl border-2 hover-lift"
                >
                  <Link to="/gst-calculator">Try GST Calculator</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20 bg-gradient-to-r from-muted/30 to-muted/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Why Choose SmartTools?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Experience the perfect blend of functionality and design with our professionally crafted tools.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={feature.title} className="text-center group stagger-item hover-lift" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
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
        </div>

        {/* CTA Section */}
        <div className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to boost your productivity?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of users who trust SmartTools for their daily calculations and text processing needs.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg rounded-xl shadow-professional-lg hover-lift btn-modern"
            >
              <Link to="/tools" className="flex items-center gap-2">
                Explore All Tools <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
