
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wrench, Target, Users, Zap, Heart, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "All tools work instantly in your browser without any delays or loading times."
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your data stays in your browser. We don't store or track any of your information."
    },
    {
      icon: Heart,
      title: "Completely Free",
      description: "No hidden fees, no subscriptions, no registration required. Just free tools for everyone."
    },
    {
      icon: Users,
      title: "User-Friendly",
      description: "Simple, intuitive interfaces designed for everyone, from beginners to professionals."
    }
  ];

  return (
    <PageWrapper
      title="About Us"
      description="Learn about FYN Tools India's mission to provide free, secure, and user-friendly online tools for developers, students, and professionals."
      keywords="about FYN Tools India, online tools, free tools, mission, story"
      toolCategory="About"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 heading-gradient">About FYN Tools India</h1>
            <p className="text-xl text-muted-foreground">
              Making powerful tools accessible to everyone, everywhere.
            </p>
          </div>

          {/* Our Story */}
          <Card className="card-enhanced mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Our Story
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-4">
                As a regular user of the internet, I faced countless frustrations trying to find reliable, 
                free online tools. Most websites were cluttered with ads, required registration, or charged 
                fees for basic functionality. The tools that were free often didn't work properly or were 
                buried under layers of spam.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                That's when I decided to create FYN Tools India - a platform where anyone can access 
                professional-grade tools without any barriers. No registration, no fees, no ads cluttering 
                the interface. Just clean, fast, and reliable tools that actually work.
              </p>
              <p className="text-lg leading-relaxed">
                Every tool on this platform has been carefully crafted with the user experience in mind. 
                We believe that powerful tools should be accessible to everyone, whether you're a student, 
                professional, or just someone who needs to get things done quickly.
              </p>
            </CardContent>
          </Card>

          {/* Mission */}
          <Card className="card-enhanced mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wrench className="h-5 w-5 text-primary" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">
                To democratize access to powerful online tools by providing a completely free, 
                user-friendly platform that works for everyone. We're committed to maintaining 
                a clean, fast, and reliable service that respects your privacy and time.
              </p>
            </CardContent>
          </Card>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card key={index} className="card-enhanced hover-lift">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <feature.icon className="h-5 w-5 text-primary" />
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <Card className="card-enhanced text-center">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6">
                Explore our collection of free online tools and see how they can help you work smarter, not harder.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="btn-primary">
                  <Link to="/tools">Browse All Tools</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageWrapper>
  );
};

export default AboutPage;
