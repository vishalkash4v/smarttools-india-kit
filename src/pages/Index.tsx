import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { Percent, Calculator, Gift, GanttChartSquare, CalendarRange, FileText, TextCursorInput, Eraser, ListChecks, Undo, Bmi, ColorPicker } from 'lucide-react';

interface Tool {
  title: string;
  description: string;
  url: string;
  icon: React.ElementType;
  comingSoon: boolean;
  category: string;
}

const toolsByCategory: Record<string, Tool[]> = {
  "Calculation & Conversion Tools": [
    { title: 'GST Calculator', description: 'Calculate Goods and Services Tax.', url: '/gst-calculator', icon: Percent, comingSoon: false, category: "Calculation & Conversion Tools" },
    { title: 'Percentage Calculator', description: 'Calculate percentages effortlessly.', url: '/percentage-calculator', icon: Calculator, comingSoon: false, category: "Calculation & Conversion Tools" },
    { title: 'Age Calculator', description: 'Find out your exact age.', url: '/age-calculator', icon: Gift, comingSoon: false, category: "Calculation & Conversion Tools" },
    { title: 'Date Difference Calculator', description: 'Calculate duration between two dates.', url: '/date-difference-calculator', icon: CalendarRange, comingSoon: false, category: "Calculation & Conversion Tools" },
    { title: 'BMI Calculator', description: 'Calculate your Body Mass Index.', url: '/bmi-calculator', icon: Bmi, comingSoon: false, category: "Calculation & Conversion Tools" },
  ],
  "Text & Writing Tools": [
    { title: 'Word Counter', description: 'Count words and characters in text.', url: '/word-counter', icon: FileText, comingSoon: false, category: "Text & Writing Tools" },
    { title: 'Text Case Converter', description: 'Convert text to various cases.', url: '/text-case-converter', icon: TextCursorInput, comingSoon: false, category: "Text & Writing Tools" },
    { title: 'Whitespace Remover', description: 'Remove extra spaces from text.', url: '/whitespace-remover', icon: Eraser, comingSoon: false, category: "Text & Writing Tools" },
    { title: 'Text Reverser', description: 'Reverse your input text.', url: '/text-reverser', icon: Undo, comingSoon: false, category: "Text & Writing Tools" },
  ],
  "Productivity Tools": [
    { title: 'To-Do List', description: 'Manage your tasks with localStorage.', url: '/todo-list', icon: ListChecks, comingSoon: false, category: "Productivity Tools" },
    { title: 'Invoice Generator', description: 'Create professional invoices.', url: '#', icon: GanttChartSquare, comingSoon: true, category: "Productivity Tools" },
    { title: 'Resume Builder', description: 'Build your perfect resume.', url: '#', icon: GanttChartSquare, comingSoon: true, category: "Productivity Tools" },
  ],
  "Design & Visual Tools": [
    { title: 'Color Picker', description: 'Pick colors and get codes.', url: '/color-picker', icon: ColorPicker, comingSoon: false, category: "Design & Visual Tools" },
  ]
  // Add more tools to appropriate categories or create new categories
};

const IndexPage = () => {
  const categories = Object.keys(toolsByCategory);

  return (
    <div className="container mx-auto py-8 px-4 animate-fade-in">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-primary mb-4">Welcome to SmartTools India!</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Your one-stop destination for essential daily-use and productivity tools, designed for India.
        </p>
      </header>

      {categories.map(categoryName => (
        <section key={categoryName} className="mb-12">
          <h2 className="text-3xl font-semibold text-foreground mb-6 border-b pb-2">{categoryName}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toolsByCategory[categoryName].map((tool) => (
              <Card key={tool.title} className="hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-col">
                <CardHeader className="flex-grow">
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
        </section>
      ))}

      <footer className="text-center mt-16 py-8 border-t">
        <p className="text-muted-foreground">&copy; {new Date().getFullYear()} SmartTools India. More tools coming soon!</p>
      </footer>
    </div>
  );
};

export default IndexPage;
