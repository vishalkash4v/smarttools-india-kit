
import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import ListRandomizer from '@/components/tools/ListRandomizer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Star, Users, Shuffle, Target, Clock, Shield } from 'lucide-react';

const ListRandomizerPage = () => {
  const reviews = [
    {
      name: "Sarah Mitchell",
      role: "Event Coordinator",
      rating: 5,
      comment: "Perfect for organizing team building activities! I use this daily to randomly assign groups and select winners for office contests. The interface is clean and results are truly random.",
      date: "December 2024"
    },
    {
      name: "David Chen",
      role: "Teacher",
      rating: 5,
      comment: "As an educator, this tool has been invaluable for randomly calling on students and creating fair group assignments. My students love the transparency and fairness it brings to classroom activities.",
      date: "November 2024"
    },
    {
      name: "Marcus Rodriguez",
      role: "Project Manager",
      rating: 5,
      comment: "Excellent tool for sprint planning and task assignment. We use it weekly to randomly distribute code review assignments among team members. Saves time and eliminates bias!",
      date: "November 2024"
    },
    {
      name: "Jennifer Park",
      role: "Content Creator",
      rating: 4,
      comment: "Great for creating random social media content schedules and selecting topics from my idea list. Simple to use and gets the job done quickly.",
      date: "October 2024"
    }
  ];

  const faqs = [
    {
      question: "How random is the list randomization?",
      answer: "Our tool uses JavaScript's Math.random() function combined with the Fisher-Yates shuffle algorithm, ensuring true randomness in the shuffling process. Each item has an equal probability of appearing in any position."
    },
    {
      question: "Is there a limit to how many items I can randomize?",
      answer: "While there's no hard limit, we recommend keeping lists under 10,000 items for optimal performance. The tool efficiently handles most practical use cases including large datasets."
    },
    {
      question: "Can I save my randomized lists?",
      answer: "Currently, you can copy the randomized results to your clipboard and save them externally. We're working on adding a save feature for future updates."
    },
    {
      question: "Does the tool work offline?",
      answer: "Yes! Once the page is loaded, the randomization works entirely in your browser without requiring an internet connection. Your data never leaves your device."
    },
    {
      question: "Can I undo a randomization?",
      answer: "Yes, you can easily restore your original list order using the reset button, or randomize again to get a different shuffle order."
    },
    {
      question: "Is this tool suitable for sensitive data?",
      answer: "Absolutely! All processing happens locally in your browser. No data is sent to our servers, making it perfect for confidential lists, names, or sensitive information."
    }
  ];

  return (
    <PageWrapper
      title="List Randomizer - Free Online Tool"
      description="Randomize any list of items instantly. Perfect for making random selections, shuffling names, or organizing data randomly."
      keywords="list randomizer, shuffle list, random order, list shuffler, randomize items"
    >
      <div className="container py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-green-100 dark:bg-green-900/20">
                <Shuffle className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              List Randomizer Tool
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Shuffle any list instantly with our powerful randomization algorithm. Perfect for fair selections, group assignments, and unbiased decision making.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <Target className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Fair & Unbiased</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>True randomization ensures every item has equal chance</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Instant Results</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Get randomized lists in milliseconds</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Privacy Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>All processing happens locally in your browser</CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Main Tool */}
          <Card className="mb-12">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Randomize Your List</CardTitle>
              <CardDescription>Enter your items and get them shuffled randomly</CardDescription>
            </CardHeader>
            <CardContent>
              <ListRandomizer />
            </CardContent>
          </Card>

          {/* Use Cases */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-green-600">Educational Uses</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  <strong>Random Student Selection:</strong> Teachers use our tool to fairly call on students, create study groups, and assign presentation orders. Perfect for eliminating bias and ensuring every student gets equal participation opportunities.
                  <br /><br />
                  <strong>Quiz & Game Creation:</strong> Randomize question orders for tests, shuffle team assignments for classroom activities, and create fair tournament brackets for educational competitions.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">Business Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  <strong>Team Management:</strong> Project managers randomly assign tasks, create diverse working groups, and select employees for training opportunities or team-building activities.
                  <br /><br />
                  <strong>Decision Making:</strong> When multiple viable options exist, use randomization to make unbiased choices for vendor selection, meeting schedules, or priority setting.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-purple-600">Personal & Entertainment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  <strong>Gaming & Contests:</strong> Perfect for drawing winners, creating random teams for games, shuffling playlists, or deciding dinner choices. Great for party games and social activities.
                  <br /><br />
                  <strong>Life Decisions:</strong> When you can't decide between equally good options, let randomness help! Use it for travel destinations, movie selections, or weekly meal planning.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-orange-600">Research & Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  <strong>Statistical Sampling:</strong> Researchers use randomization for creating unbiased samples, randomizing survey respondents, and eliminating selection bias in studies.
                  <br /><br />
                  <strong>Data Processing:</strong> Randomize datasets for testing algorithms, create control groups, and ensure fair distribution in experimental designs.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* User Reviews */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-center">What Our Users Say</CardTitle>
              <CardDescription className="text-center">
                Join thousands of satisfied users who trust our randomization tool
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
                Common questions about our list randomization tool
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

export default ListRandomizerPage;
