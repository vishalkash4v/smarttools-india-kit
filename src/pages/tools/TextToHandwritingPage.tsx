
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import TextToHandwriting from '@/components/tools/TextToHandwriting';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Star, PenTool, FileText, Users, Clock, Shield, Zap, Download, Palette } from 'lucide-react';

const TextToHandwritingPage = () => {
  const reviews = [
    {
      name: "Arjun Sharma",
      role: "College Student",
      rating: 5,
      comment: "This tool saved me during exam preparation! I can convert my typed notes to handwriting style for better memorization. The handwriting looks natural and is easy to read.",
      date: "December 2024"
    },
    {
      name: "Kavya Reddy",
      role: "Teacher",
      rating: 5,
      comment: "Perfect for creating handwritten worksheets and assignments. My students love receiving personalized notes that look handwritten. Great for language learning exercises!",
      date: "November 2024"
    },
    {
      name: "Manish Gupta",
      role: "Graphic Designer",
      rating: 5,
      comment: "Excellent for design projects that need a personal touch. I use it for creating handwritten-style quotes, invitations, and social media content. Very authentic looking!",
      date: "November 2024"
    },
    {
      name: "Sneha Joshi",
      role: "Content Creator",
      rating: 4,
      comment: "Great tool for creating unique social media posts. The handwritten style makes content more engaging and personal. Easy to use with good customization options.",
      date: "October 2024"
    }
  ];

  const faqs = [
    {
      question: "How realistic does the handwriting look?",
      answer: "Our enhanced tool generates very realistic handwriting with natural character variations, slight rotations, and spacing irregularities that closely mimic authentic pen-and-paper writing."
    },
    {
      question: "What's the difference between quality settings?",
      answer: "Quality settings (1x to 3x) control the resolution and detail level. Higher quality produces sharper, more detailed handwriting perfect for printing, while lower quality is suitable for web use."
    },
    {
      question: "Can I customize the handwriting style?",
      answer: "Yes! You can choose from multiple font styles, adjust font size, line height, and quality settings to create different handwriting appearances that suit your needs."
    },
    {
      question: "What formats can I download the handwritten text in?",
      answer: "You can download your handwritten text as high-quality PNG images with transparent or white backgrounds, suitable for printing, sharing, or including in documents."
    },
    {
      question: "Is there a limit to how much text I can convert?",
      answer: "You can convert reasonable amounts of text at once. For very long documents, we recommend breaking them into smaller sections for optimal quality and performance."
    },
    {
      question: "Does the tool work on mobile devices?",
      answer: "Yes! The tool is fully responsive and works perfectly on mobile devices, tablets, and desktops. The interface adapts to your screen size for the best experience."
    }
  ];

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "High-Resolution Output",
      description: "Generate handwriting at up to 3x resolution with anti-aliasing for crystal-clear results perfect for printing."
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Multiple Font Styles",
      description: "Choose from various handwriting fonts including Dancing Script, Kalam, Caveat, and more for different personalities."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Realistic Paper Effect",
      description: "Lined paper with margin lines creates an authentic notebook appearance for your handwritten text."
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: "Instant Download",
      description: "Download your handwritten text as high-quality PNG files ready for use in documents, presentations, or printing."
    }
  ];

  return (
    <PageWrapper
      title="Text to Handwriting Converter - Convert Typed Text to Handwritten"
      description="Transform typed text into realistic handwritten text with enhanced quality. Perfect for creating personal notes, assignments, and creative projects with authentic handwriting style."
      keywords="text to handwriting, handwriting converter, handwritten text generator, realistic handwriting, high quality handwriting"
    >
      <div className="container py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-pink-100 dark:bg-pink-900/20">
                <PenTool className="h-12 w-12 text-pink-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Enhanced Text to Handwriting Converter
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your typed text into beautiful, high-quality realistic handwriting. Perfect for creating personal notes, assignments, and creative projects with enhanced resolution and natural variations.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-2 p-2 rounded-lg bg-primary/10 text-primary w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Tool */}
          <TextToHandwriting />

          {/* How It Works */}
          <Card className="mb-12 mt-12">
            <CardHeader>
              <CardTitle className="text-2xl text-center">How to Use</CardTitle>
              <CardDescription className="text-center">
                Follow these simple steps to convert your text to handwriting
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 font-bold text-lg mx-auto mb-3">1</div>
                  <h3 className="font-semibold mb-2">Enter Text</h3>
                  <p className="text-sm text-muted-foreground">Type or paste your text in the input area</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 font-bold text-lg mx-auto mb-3">2</div>
                  <h3 className="font-semibold mb-2">Customize Style</h3>
                  <p className="text-sm text-muted-foreground">Choose font, size, spacing, and quality settings</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 font-bold text-lg mx-auto mb-3">3</div>
                  <h3 className="font-semibold mb-2">Generate</h3>
                  <p className="text-sm text-muted-foreground">Click generate to create handwritten version</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 font-bold text-lg mx-auto mb-3">4</div>
                  <h3 className="font-semibold mb-2">Download</h3>
                  <p className="text-sm text-muted-foreground">Save your high-quality handwritten image</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Use Cases */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-pink-600">Educational Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  <strong>Student Notes:</strong> Convert typed notes to handwriting style for better memorization and study. Research shows handwritten notes improve retention compared to typed notes.
                  <br /><br />
                  <strong>Assignment Creation:</strong> Teachers can create handwritten-style worksheets, practice sheets, and personalized feedback that feels more personal and engaging for students.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-purple-600">Creative & Design Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  <strong>Social Media Content:</strong> Create unique, eye-catching posts with handwritten text that stands out in feeds. Perfect for quotes, announcements, and personal messages.
                  <br /><br />
                  <strong>Invitations & Cards:</strong> Design personalized invitations, greeting cards, and thank you notes with authentic handwritten touches for special occasions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-green-600">Business & Professional Use</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  <strong>Personal Branding:</strong> Add handwritten elements to presentations, portfolios, and marketing materials to create a more personal connection with your audience.
                  <br /><br />
                  <strong>Customer Communication:</strong> Create handwritten-style thank you notes, certificates, and personalized messages that make customers feel valued and appreciated.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-orange-600">Personal & Family Use</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  <strong>Memory Keeping:</strong> Create handwritten-style journal entries, family stories, and memory books that have a more personal and intimate feel.
                  <br /><br />
                  <strong>Gift Personalization:</strong> Add handwritten messages to gifts, create custom labels, and make personalized items that show extra thought and care.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* User Reviews */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-center">User Testimonials</CardTitle>
              <CardDescription className="text-center">
                See what users love about our enhanced text to handwriting converter
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                {reviews.map((review, index) => (
                  <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
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
                Everything you need to know about converting text to handwriting
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

export default TextToHandwritingPage;
