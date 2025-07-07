import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook, Linkedin, Youtube } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <PageWrapper
      title="Contact Us"
      description="Get in touch with FYN Tools India. We'd love to hear from you and help with any questions about our free online tools."
      keywords="contact, support, help, FYN Tools India, online tools"
      toolCategory="Contact"
    >
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "FYN Tools India",
            "url": "https://fyntools.com",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-8350937959",
              "contactType": "Customer Service",
              "email": "contact@fyntools-india.com",
              "areaServed": "IN"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Mumbai",
              "addressRegion": "Maharashtra",
              "addressCountry": "IN"
            }
          })}
        </script>
      </Helmet>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 heading-gradient">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions, suggestions, or need help? We're here to assist you with all your tool needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="card-enhanced">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+91 8350937959</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">contact@fyntools-india.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">Mumbai, Maharashtra, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="card-enhanced">
                <CardHeader>
                  <CardTitle>Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="outline" size="sm" asChild className="flex items-center gap-2">
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Instagram className="h-4 w-4" />
                        Instagram
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="flex items-center gap-2">
                       <a href="#" target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-4 w-4" />
                        Twitter/X
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="flex items-center gap-2">
                       <a href="#" target="_blank" rel="noopener noreferrer">
                        <Facebook className="h-4 w-4" />
                        Facebook
                      </a>
                    </Button>
                     <Button variant="outline" size="sm" asChild className="flex items-center gap-2">
                       <a href="#" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </a>
                    </Button>
                     <Button variant="outline" size="sm" asChild className="flex items-center gap-2">
                       <a href="#" target="_blank" rel="noopener noreferrer">
                        <Youtube className="h-4 w-4" />
                        YouTube
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="card-enhanced">
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="your@email.com" required />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input id="subject" placeholder="What's this about?" required />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry..." 
                      rows={6}
                      required 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full btn-primary">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ContactPage;
