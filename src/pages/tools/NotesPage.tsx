
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import Notes from '@/components/tools/Notes';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Star, StickyNote, Search, Palette, Cloud, Shield } from 'lucide-react';

const NotesPage = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Student",
      rating: 5,
      comment: "Perfect for organizing my study notes! The color coding helps me categorize different subjects, and the search function saves me so much time finding specific topics.",
      date: "December 2024"
    },
    {
      name: "David Chen",
      role: "Project Manager",
      rating: 5,
      comment: "Great tool for keeping track of project ideas and meeting notes. The tags feature makes it easy to organize everything, and I love that it saves automatically in my browser.",
      date: "November 2024"
    },
    {
      name: "Maria Rodriguez",
      role: "Writer",
      rating: 4,
      comment: "Simple and effective for jotting down story ideas and character notes. The clean interface doesn't distract from writing, and the color options help me organize by genre.",
      date: "November 2024"
    },
    {
      name: "Alex Thompson",
      role: "Entrepreneur",
      rating: 5,
      comment: "I use this daily for business ideas and to-do lists. The fact that it works offline and stores locally gives me peace of mind about my data privacy.",
      date: "October 2024"
    }
  ];

  const faqs = [
    {
      question: "Are my notes stored securely?",
      answer: "Yes! All notes are stored locally in your browser's storage, which means they never leave your device. This ensures complete privacy and security of your personal notes and ideas."
    },
    {
      question: "Can I access my notes from different devices?",
      answer: "Since notes are stored locally in your browser, they're specific to the device and browser you're using. For multi-device access, you can copy important notes to cloud storage or use the export feature."
    },
    {
      question: "Is there a limit to how many notes I can create?",
      answer: "The only limit is your browser's local storage capacity, which is typically several megabytes. This allows for thousands of notes before reaching any limits."
    },
    {
      question: "How do I organize my notes effectively?",
      answer: "Use descriptive titles, add relevant tags for easy searching, and utilize the color coding system to categorize notes by topic, priority, or project. The search function can find notes by title, content, or tags."
    },
    {
      question: "What happens if I clear my browser data?",
      answer: "Clearing browser data will remove your notes since they're stored locally. We recommend periodically copying important notes to a backup location or document for safekeeping."
    },
    {
      question: "Can I format text within my notes?",
      answer: "Currently, the notes support plain text formatting. You can use line breaks and basic text organization. Rich text formatting may be added in future updates."
    }
  ];

  return (
    <PageWrapper
      title="Notes - Keep Your Ideas Organized"
      description="Create, organize, and manage your notes with our simple and secure note-taking tool. Color coding, tags, and local storage for privacy."
      keywords="notes app, note taking, organize notes, keep notes, secure notes, local storage notes"
    >
      <div className="container py-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-yellow-100 dark:bg-yellow-900/20">
                <StickyNote className="h-12 w-12 text-yellow-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Keep Notes
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Capture your thoughts, organize your ideas, and keep everything in one secure place. Simple, fast, and completely private.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <Search className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Smart Search</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Find any note instantly by searching titles, content, or tags</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Palette className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Color Organization</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Organize notes with 15 beautiful colors and custom tags</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Private & Secure</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>All notes stored locally in your browser for complete privacy</CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Main Tool */}
          <Card className="mb-12">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Your Notes</CardTitle>
              <CardDescription>Create, edit, and organize your notes with ease</CardDescription>
            </CardHeader>
            <CardContent>
              <Notes />
            </CardContent>
          </Card>

          {/* Use Cases */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">Education & Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  <strong>Study Notes:</strong> Organize lecture notes, research findings, and study materials by subject using color coding and tags for easy review during exams.
                  <br /><br />
                  <strong>Research Projects:</strong> Keep track of sources, quotes, and ideas for academic papers. Tag notes by topic and search through large amounts of research quickly.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-purple-600">Business & Work</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  <strong>Meeting Notes:</strong> Capture important points from meetings, action items, and decisions. Use tags to organize by project or department.
                  <br /><br />
                  <strong>Project Planning:</strong> Document ideas, requirements, and progress updates. Color-code notes by priority or project phase for visual organization.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-green-600">Personal Organization</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  <strong>Daily Planning:</strong> Keep track of daily tasks, appointments, and reminders. Use different colors for work, personal, and family activities.
                  <br /><br />
                  <strong>Idea Collection:</strong> Capture random thoughts, creative ideas, and inspiration as they come. Tag by category and search when you need specific ideas.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-orange-600">Creative Work</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  <strong>Writing Projects:</strong> Organize story ideas, character development, and plot outlines. Use tags for different stories or genres.
                  <br /><br />
                  <strong>Content Creation:</strong> Plan blog posts, social media content, and marketing campaigns. Color-code by platform or content type for easy organization.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* User Reviews */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-center">User Reviews</CardTitle>
              <CardDescription className="text-center">
                Trusted by students, professionals, and creatives worldwide
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
                Everything you need to know about using our notes tool
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

export default NotesPage;
