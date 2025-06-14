
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import TextToHandwriting from '@/components/tools/TextToHandwriting';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Star, PenTool, FileText, Users, Clock, Shield } from 'lucide-react';

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
      answer: "Our tool generates very realistic handwriting that closely mimics natural pen-and-paper writing. The text includes subtle variations and imperfections that make it look authentically handwritten."
    },
    {
      question: "Can I customize the handwriting style?",
      answer: "Yes! You can adjust various parameters like pen thickness, spacing, and writing style to create different handwriting appearances that suit your needs."
    },
    {
      question: "What formats can I download the handwritten text in?",
      answer: "You can download your handwritten text as high-quality images (PNG/JPG) suitable for printing, sharing, or including in documents and presentations."
    },
    {
      question: "Is there a limit to how much text I can convert?",
      answer: "You can convert reasonable amounts of text at once. For very long documents, we recommend breaking them into smaller sections for optimal results."
    },
    {
      question: "Can I use this for official documents?",
      answer: "While the tool creates realistic handwriting, it's intended for creative, educational, and personal use. Always check requirements for official documents that may need actual handwritten signatures."
    },
    {
      question: "Does the tool support different languages?",
      answer: "The tool primarily works with English text and Latin characters. Support for other languages may vary depending on the character sets used."
    }
  ];

  return (
    <PageWrapper
      title="Text to Handwriting Converter - Convert Typed Text to Handwritten"
      description="Transform typed text into realistic handwritten text. Perfect for creating personal notes, assignments, and creative projects with authentic handwriting style."
      keywords="text to handwriting, handwriting converter, handwritten text generator, realistic handwriting"
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
              Text to Handwriting Converter
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your typed text into beautiful, realistic handwriting. Perfect for creating personal notes, assignments, and creative projects.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <PenTool className="h-8 w-8 text-pink-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Realistic Handwriting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Natural-looking handwriting with authentic variations</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Instant Conversion</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Convert text to handwriting in seconds</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <FileText className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-lg">High Quality Output</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Download high-resolution images for printing or sharing</CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Main Tool */}
          <Card className="mb-12">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Convert Text to Handwriting</CardTitle>
              <CardDescription>Type your text and see it transformed into realistic handwriting</CardDescription>
            </CardHeader>
            <CardContent>
              <TextToHandwriting />
            </CardContent>
          </Card>

          {/* Use Cases */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
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
            
            <Card>
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

            <Card>
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

            <Card>
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
                See what users love about our text to handwriting converter
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
