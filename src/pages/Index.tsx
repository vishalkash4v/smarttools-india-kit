
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { Percent, Calculator, Gift, GanttChartSquare } from 'lucide-react';

const tools = [
  { title: 'GST Calculator', description: 'Calculate Goods and Services Tax.', url: '/gst-calculator', icon: Percent, comingSoon: false },
  { title: 'Percentage Calculator', description: 'Calculate percentages effortlessly.', url: '/percentage-calculator', icon: Calculator, comingSoon: false },
  { title: 'Age Calculator', description: 'Find out your exact age.', url: '/age-calculator', icon: Gift, comingSoon: false },
  { title: 'Invoice Generator', description: 'Create professional invoices.', url: '#', icon: GanttChartSquare, comingSoon: true },
  { title: 'Resume Builder', description: 'Build your perfect resume.', url: '#', icon: GanttChartSquare, comingSoon: true },
  // Add more tools here
];

const IndexPage = () => {
  return (
    <div className="container mx-auto py-8 px-4 animate-fade-in">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-primary mb-4">Welcome to SmartTools India!</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Your one-stop destination for essential daily-use and productivity tools, designed for India.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool) => (
          <Card key={tool.title} className="hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <CardHeader>
              <div className="flex items-center gap-4 mb-2">
                <tool.icon className="h-10 w-10 text-primary" />
                <CardTitle className="text-2xl">{tool.title}</CardTitle>
              </div>
              <CardDescription>{tool.description}</CardDescription>
            </CardHeader>
            <CardContent>
              {tool.comingSoon ? (
                <Button disabled className="w-full">Coming Soon</Button>
              ) : (
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link to={tool.url}>Open Tool</Link>
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <footer className="text-center mt-16 py-8 border-t">
        <p className="text-muted-foreground">&copy; {new Date().getFullYear()} SmartTools India. More tools coming soon!</p>
      </footer>
    </div>
  );
};

export default IndexPage;
