import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { ArrowLeft, Percent, Calculator as CalculatorIcon, Gift, CalendarRange, FileText, TextCursorInput, Eraser, ListChecks, Undo, Scale, Palette, ListX, Banknote, Currency, QrCode, KeyRound, Braces, Timer, Clock, Code, Search, Minimize2, Table, Binary, TrendingUp, PiggyBank, Landmark, Receipt, Thermometer, Ruler } from 'lucide-react';

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
    { title: 'GST Calculator', description: 'Calculate Goods and Services Tax with detailed breakdown.', url: '/gst-calculator', icon: Percent, comingSoon: false, category: "Calculation & Conversion Tools" },
    { title: 'Percentage Calculator', description: 'Calculate percentages, increases, and decreases.', url: '/percentage-calculator', icon: CalculatorIcon, comingSoon: false, category: "Calculation & Conversion Tools" },
    { title: 'Simple Calculator', description: 'Perform basic arithmetic operations quickly.', url: '/simple-calculator', icon: CalculatorIcon, comingSoon: false, category: "Calculation & Conversion Tools" },
    { title: 'Currency Converter', description: 'Convert currencies with real-time exchange rates.', url: '/currency-converter', icon: Currency, comingSoon: false, category: "Calculation & Conversion Tools" },
    { title: 'Age Calculator', description: 'Calculate your exact age in years, months, and days.', url: '/age-calculator', icon: Gift, comingSoon: false, category: "Calculation & Conversion Tools" },
    { title: 'Date Difference Calculator', description: 'Calculate duration between two dates precisely.', url: '/date-difference-calculator', icon: CalendarRange, comingSoon: false, category: "Calculation & Conversion Tools" },
    { title: 'BMI Calculator', description: 'Calculate your Body Mass Index and health status.', url: '/bmi-calculator', icon: Scale, comingSoon: false, category: "Calculation & Conversion Tools" },
    { title: 'EMI Calculator', description: 'Calculate loan EMI with detailed payment schedule.', url: '/emi-calculator', icon: Banknote, comingSoon: false, category: "Calculation & Conversion Tools" },
    { title: 'SIP Calculator', description: 'Calculate returns on your Systematic Investment Plan.', url: '/sip-calculator', icon: TrendingUp, comingSoon: false, category: "Calculation & Conversion Tools" },
    { title: 'PPF Calculator', description: 'Calculate Public Provident Fund maturity amount.', url: '/ppf-calculator', icon: PiggyBank, comingSoon: false, category: "Calculation & Conversion Tools" },
    { title: 'FD Calculator', description: 'Calculate Fixed Deposit returns and maturity amount.', url: '/fd-calculator', icon: Landmark, comingSoon: false, category: "Calculation & Conversion Tools" },
    { title: 'Income Tax Calculator', description: 'Calculate income tax for India (old vs new regime).', url: '/income-tax-calculator', icon: Receipt, comingSoon: false, category: "Calculation & Conversion Tools" },
    { title: 'Temperature Converter', description: 'Convert between Celsius, Fahrenheit, and Kelvin.', url: '/temperature-converter', icon: Thermometer, comingSoon: false, category: "Calculation & Conversion Tools" },
    { title: 'Unit Converter', description: 'Convert length, weight, area and other units.', url: '/unit-converter', icon: Ruler, comingSoon: false, category: "Calculation & Conversion Tools" },
  ],
  "Text & Writing Tools": [
    { title: 'Word Counter', description: 'Count words, characters, and analyze text statistics.', url: '/word-counter', icon: FileText, comingSoon: false, category: "Text & Writing Tools" },
    { title: 'Text Case Converter', description: 'Convert text between different cases instantly.', url: '/text-case-converter', icon: TextCursorInput, comingSoon: false, category: "Text & Writing Tools" },
    { title: 'Whitespace Remover', description: 'Remove extra spaces and clean up text format.', url: '/whitespace-remover', icon: Eraser, comingSoon: false, category: "Text & Writing Tools" },
    { title: 'Text Reverser', description: 'Reverse your text characters or words.', url: '/text-reverser', icon: Undo, comingSoon: false, category: "Text & Writing Tools" },
    { title: 'Duplicate Line Remover', description: 'Remove duplicate lines from large text blocks.', url: '/duplicate-line-remover', icon: ListX, comingSoon: false, category: "Text & Writing Tools" },
    { title: 'JSON Formatter', description: 'Format, validate, and beautify JSON data.', url: '/json-formatter', icon: Braces, comingSoon: false, category: "Text & Writing Tools" },
    { title: 'Base64 Encoder/Decoder', description: 'Encode and decode Base64 strings easily.', url: '/base64-converter', icon: Binary, comingSoon: false, category: "Text & Writing Tools" },
  ],
  "Productivity Tools": [
    { title: 'To-Do List', description: 'Manage your tasks with persistent local storage.', url: '/todo-list', icon: ListChecks, comingSoon: false, category: "Productivity Tools" },
    { title: 'QR Code Generator', description: 'Generate QR codes for text, URLs, and more.', url: '/qr-code-generator', icon: QrCode, comingSoon: false, category: "Productivity Tools" },
    { title: 'Password Generator', description: 'Create strong, secure passwords instantly.', url: '/password-generator', icon: KeyRound, comingSoon: false, category: "Productivity Tools" },
    { title: 'Stopwatch', description: 'Precise timing with millisecond accuracy.', url: '/stopwatch', icon: Timer, comingSoon: false, category: "Productivity Tools" },
    { title: 'Countdown Timer', description: 'Set countdown timers for any duration.', url: '/countdown-timer', icon: Clock, comingSoon: false, category: "Productivity Tools" },
  ],
  "Developer Tools": [
    { title: 'HTML/CSS/JS Live Preview', description: 'Live preview for front-end development.', url: '/live-preview', icon: Code, comingSoon: false, category: "Developer Tools" },
    { title: 'Regex Tester', description: 'Test and validate regular expressions.', url: '/regex-tester', icon: Search, comingSoon: false, category: "Developer Tools" },
    { title: 'JavaScript Minifier', description: 'Minify JavaScript code to reduce file size.', url: '/javascript-minifier', icon: Minimize2, comingSoon: false, category: "Developer Tools" },
    { title: 'HTML Table to JSON', description: 'Convert HTML tables to JSON format easily.', url: '/table-to-json', icon: Table, comingSoon: false, category: "Developer Tools" },
  ],
  "Design & Visual Tools": [
    { title: 'Color Picker', description: 'Pick colors and get HEX, RGB, and RGBA codes.', url: '/color-picker', icon: Palette, comingSoon: false, category: "Design & Visual Tools" },
  ]
};

const ToolsPage = () => {
  const categories = Object.keys(toolsByCategory);

  return (
    <>
      <Helmet>
        <title>All Tools - SmartTools India</title>
        <meta name="description" content="Browse all professional tools including GST Calculator, EMI Calculator, Text Tools, Developer Tools and more." />
        <meta name="keywords" content="online tools, calculators, text tools, developer tools, productivity tools" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-12 animate-fade-in-up">
            <Button asChild variant="outline" className="mb-6 hover-lift">
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            
            <h1 className="text-5xl font-bold text-primary mb-4">All Tools</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Discover our complete collection of professional tools designed to boost your productivity.
            </p>
          </div>

          {/* Tools by Category */}
          {categories.map((categoryName, categoryIndex) => (
            <section key={categoryName} className="mb-16 stagger-item" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
              <h2 className="text-3xl font-bold text-foreground mb-8 border-b border-border/50 pb-4">
                {categoryName}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {toolsByCategory[categoryName].map((tool, toolIndex) => (
                  <Card key={tool.title} className="group hover-lift stagger-item" style={{ animationDelay: `${categoryIndex * 0.1 + toolIndex * 0.05}s` }}>
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-3">
                        <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <tool.icon className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {tool.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        {tool.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {tool.comingSoon ? (
                        <Button disabled className="w-full">Coming Soon</Button>
                      ) : (
                        <Button asChild className="w-full bg-primary hover:bg-primary/90 hover-lift">
                          <Link to={tool.url}>Open Tool</Link>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
};

export default ToolsPage;
