
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import UrlSlugGenerator from '@/components/tools/UrlSlugGenerator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Star, Link, Search, Globe, Zap, Shield } from 'lucide-react';

const UrlSlugGeneratorPage = () => {
  const reviews = [
    {
      name: "Amit Sharma",
      role: "SEO Specialist",
      rating: 5,
      comment: "This URL slug generator is a game-changer for my SEO workflow! It creates perfect, clean URLs that Google loves. I use it daily for optimizing client websites and blog posts.",
      date: "December 2024"
    },
    {
      name: "Sneha Gupta",
      role: "Content Manager",
      rating: 5,
      comment: "As a content manager handling 50+ articles weekly, this tool saves me hours. The automatic hyphenation and special character removal make URLs perfect for social sharing.",
      date: "November 2024"
    },
    {
      name: "Rohit Patel",
      role: "Web Developer",
      rating: 5,
      comment: "Perfect for creating SEO-friendly URLs for e-commerce sites. The tool handles Unicode characters beautifully and creates URLs that work across all platforms.",
      date: "November 2024"
    },
    {
      name: "Priya Singh",
      role: "Digital Marketer",
      rating: 4,
      comment: "Great tool for campaign URLs and landing pages. Clean, readable URLs improve click-through rates significantly. Simple interface makes it super easy to use.",
      date: "October 2024"
    }
  ];

  const faqs = [
    {
      question: "What is a URL slug and why is it important?",
      answer: "A URL slug is the part of a URL that comes after the domain name and identifies a specific page. It's important for SEO because search engines use it to understand page content, and clean slugs improve user experience and click-through rates."
    },
    {
      question: "How does this tool make URLs SEO-friendly?",
      answer: "Our tool converts text to lowercase, replaces spaces with hyphens, removes special characters and accents, and ensures the slug follows Google's best practices for URL structure, making it search engine friendly."
    },
    {
      question: "Can I use this for non-English content?",
      answer: "Yes! Our tool handles Unicode characters, accents, and special characters from multiple languages, converting them to their closest ASCII equivalents for maximum compatibility."
    },
    {
      question: "What's the ideal length for a URL slug?",
      answer: "Generally, keep slugs under 60 characters for best results. Our tool doesn't limit length, but shorter, descriptive slugs tend to perform better in search results and are easier to share."
    },
    {
      question: "Does this tool work for e-commerce product URLs?",
      answer: "Absolutely! It's perfect for creating clean product URLs, category pages, and blog posts. Clean URLs improve user trust and search engine rankings for e-commerce sites."
    },
    {
      question: "Can I customize the separator character?",
      answer: "Currently, the tool uses hyphens (-) as separators, which is the recommended practice by Google and other search engines. Hyphens are preferred over underscores for SEO purposes."
    }
  ];

  return (
    <PageWrapper
      title="URL Slug Generator - Create SEO Friendly URLs"
      description="Convert any text into SEO-friendly URL slugs instantly. Perfect for creating clean, readable URLs for websites, blogs, and e-commerce sites."
      keywords="url slug generator, seo friendly urls, url converter, clean urls, seo tools"
    >
      <div className="container py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-blue-100 dark:bg-blue-900/20">
                <Link className="h-12 w-12 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              URL Slug Generator
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform any text into SEO-optimized URL slugs instantly. Create clean, readable URLs that search engines and users love.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <Search className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-lg">SEO Optimized</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Creates URLs that follow Google's best practices</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Zap className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Instant Results</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Convert text to URL slugs in real-time</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Globe className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Universal Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Handles multiple languages and special characters</CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Main Tool */}
          <Card className="mb-12">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Generate URL Slugs</CardTitle>
              <CardDescription>Enter your text and get SEO-friendly URL slugs instantly</CardDescription>
            </CardHeader>
            <CardContent>
              <UrlSlugGenerator />
            </CardContent>
          </Card>

          {/* Use Cases */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">Website & Blog Content</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  <strong>Blog Posts & Articles:</strong> Create SEO-friendly URLs for blog posts that improve search rankings and click-through rates. Clean URLs are more likely to be shared on social media.
                  <br /><br />
                  <strong>Landing Pages:</strong> Generate professional URLs for marketing campaigns, product launches, and special promotions that are easy to remember and type.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-purple-600">E-commerce Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  <strong>Product Pages:</strong> Create clean, descriptive URLs for products that include relevant keywords and improve search visibility for e-commerce stores.
                  <br /><br />
                  <strong>Category Pages:</strong> Generate organized URL structures for product categories that help both users and search engines understand site hierarchy.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-green-600">Content Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  <strong>CMS Integration:</strong> Perfect for content management systems where clean URLs are automatically generated from article titles and page names.
                  <br /><br />
                  <strong>URL Migration:</strong> When restructuring websites, use this tool to create consistent, SEO-friendly URL patterns for better site organization.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-orange-600">Digital Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  <strong>Campaign URLs:</strong> Create memorable URLs for marketing campaigns that are easy to track and analyze in Google Analytics and other tools.
                  <br /><br />
                  <strong>Social Media:</strong> Generate clean URLs that look professional when shared on social platforms and improve user trust and engagement.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* User Reviews */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-center">User Reviews</CardTitle>
              <CardDescription className="text-center">
                Trusted by SEO professionals and content creators worldwide
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                {reviews.map((review, index) => (
                  <div key={index} className="border rounded-lg p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold">{review.name}</h4>
                        <p className="text-sm text-muted-foreground">{review.role}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{review.comment}</p>
                    <p className="text-xs text-muted-foreground mt-3">{review.date}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Frequently Asked Questions</CardTitle>
              <CardDescription className="text-center">
                Everything you need to know about URL slug generation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    {index < faqs.length - 1 && <Separator className="mt-6" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageWrapper>
  );
};

export default UrlSlugGeneratorPage;
