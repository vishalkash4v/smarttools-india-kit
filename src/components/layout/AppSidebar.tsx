
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Home, Percent, Calculator as CalculatorIcon, Gift, CalendarRange, FileText, TextCursorInput, Eraser, ListChecks, Undo, Scale, Palette, ListX, Banknote, Currency, QrCode, KeyRound, Braces, Timer, Clock, Code, Search, Minimize2, Table, Settings, Sparkles, ArrowLeft, Binary, TrendingUp, PiggyBank, Landmark, Receipt, Thermometer, Ruler, Type, PenTool } from 'lucide-react';
import { Button } from '@/components/ui/button';

const toolCategories = [
  {
    name: "Calculation & Conversion Tools",
    items: [
      { title: 'GST Calculator', url: '/gst-calculator', icon: Percent, pageId: 'gst-calculator' },
      { title: 'Percentage Calculator', url: '/percentage-calculator', icon: CalculatorIcon, pageId: 'percentage-calculator' },
      { title: 'Simple Calculator', url: '/simple-calculator', icon: CalculatorIcon, pageId: 'simple-calculator' },
      { title: 'Currency Converter', url: '/currency-converter', icon: Currency, pageId: 'currency-converter' },
      { title: 'Age Calculator', url: '/age-calculator', icon: Gift, pageId: 'age-calculator' },
      { title: 'Date Difference Calculator', url: '/date-difference-calculator', icon: CalendarRange, pageId: 'date-difference-calculator' },
      { title: 'BMI Calculator', url: '/bmi-calculator', icon: Scale, pageId: 'bmi-calculator' },
      { title: 'EMI Calculator', url: '/emi-calculator', icon: Banknote, pageId: 'emi-calculator' },
      { title: 'SIP Calculator', url: '/sip-calculator', icon: TrendingUp, pageId: 'sip-calculator' },
      { title: 'PPF Calculator', url: '/ppf-calculator', icon: PiggyBank, pageId: 'ppf-calculator' },
      { title: 'FD Calculator', url: '/fd-calculator', icon: Landmark, pageId: 'fd-calculator' },
      { title: 'Income Tax Calculator', url: '/income-tax-calculator', icon: Receipt, pageId: 'income-tax-calculator' },
      { title: 'Temperature Converter', url: '/temperature-converter', icon: Thermometer, pageId: 'temperature-converter' },
      { title: 'Unit Converter', url: '/unit-converter', icon: Ruler, pageId: 'unit-converter' },
    ]
  },
  {
    name: "Text & Writing Tools",
    items: [
      { title: 'Word Counter', url: '/word-counter', icon: FileText, pageId: 'word-counter' },
      { title: 'Text Case Converter', url: '/text-case-converter', icon: TextCursorInput, pageId: 'text-case-converter' },
      { title: 'Whitespace Remover', url: '/whitespace-remover', icon: Eraser, pageId: 'whitespace-remover' },
      { title: 'Text Reverser', url: '/text-reverser', icon: Undo, pageId: 'text-reverser' },
      { title: 'Duplicate Line Remover', url: '/duplicate-line-remover', icon: ListX, pageId: 'duplicate-line-remover' },
      { title: 'JSON Formatter', url: '/json-formatter', icon: Braces, pageId: 'json-formatter' },
      { title: 'Base64 Encoder/Decoder', url: '/base64-converter', icon: Binary, pageId: 'base64-converter' },
      { title: 'Lorem Ipsum Generator', url: '/lorem-ipsum-generator', icon: Type, pageId: 'lorem-ipsum-generator' },
      { title: 'AI Text Rewriter', url: '/ai-text-rewriter', icon: PenTool, pageId: 'ai-text-rewriter' },
    ]
  },
  {
    name: "Productivity Tools",
    items: [
      { title: 'To-Do List', url: '/todo-list', icon: ListChecks, pageId: 'todo-list' },
      { title: 'QR Code Generator', url: '/qr-code-generator', icon: QrCode, pageId: 'qr-code-generator' },
      { title: 'Password Generator', url: '/password-generator', icon: KeyRound, pageId: 'password-generator' },
      { title: 'Stopwatch', url: '/stopwatch', icon: Timer, pageId: 'stopwatch' },
      { title: 'Countdown Timer', url: '/countdown-timer', icon: Clock, pageId: 'countdown-timer' },
    ]
  },
  {
    name: "Developer Tools",
    items: [
      { title: 'HTML/CSS/JS Live Preview', url: '/live-preview', icon: Code, pageId: 'live-preview' },
      { title: 'Regex Tester', url: '/regex-tester', icon: Search, pageId: 'regex-tester' },
      { title: 'JavaScript Minifier', url: '/javascript-minifier', icon: Minimize2, pageId: 'javascript-minifier' },
      { title: 'HTML Table to JSON', url: '/table-to-json', icon: Table, pageId: 'table-to-json' },
    ]
  },
  {
    name: "Design & Visual Tools",
    items: [
      { title: 'Color Picker', url: '/color-picker', icon: Palette, pageId: 'color-picker' },
    ]
  },
];

const AppSidebar = () => {
  const location = useLocation();

  return (
    <Sidebar className="border-r bg-gradient-to-b from-sidebar to-sidebar/95 shadow-professional-lg">
      <SidebarHeader className="p-6 border-b border-sidebar-border/50">
        <div className="flex items-center justify-between mb-4">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Sparkles className="h-8 w-8 text-primary animate-pulse" />
              <div className="absolute inset-0 h-8 w-8 text-primary opacity-30 animate-ping" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-sidebar-foreground group-hover:text-primary transition-colors duration-300">
                SmartTools
              </h1>
              <p className="text-xs text-sidebar-foreground/60 font-medium">
                Professional toolkit
              </p>
            </div>
          </Link>
        </div>
        
        <Button asChild variant="outline" size="sm" className="w-full hover-lift">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </SidebarHeader>
      
      <SidebarContent className="py-6">
        <SidebarMenu>
          <SidebarMenuItem className="stagger-item">
            <SidebarMenuButton
              asChild
              variant="default"
              isActive={location.pathname === '/tools'}
              className="w-full justify-start mx-2 mb-2 rounded-xl hover-lift transition-all duration-300 hover:bg-sidebar-accent/80"
            >
              <Link to="/tools" className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Home className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium">All Tools</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem className="stagger-item">
            <SidebarMenuButton
              asChild
              variant="default"
              isActive={location.pathname === '/themes'}
              className="w-full justify-start mx-2 mb-4 rounded-xl hover-lift transition-all duration-300 hover:bg-sidebar-accent/80"
            >
              <Link to="/themes" className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Settings className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium">Themes & Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        {toolCategories.map((category, categoryIndex) => (
          <SidebarGroup key={category.name} className="pt-2 stagger-item" style={{ animationDelay: `${0.1 + categoryIndex * 0.1}s` }}>
            <SidebarGroupLabel className="px-4 mb-3 text-xs font-bold text-sidebar-foreground/70 uppercase tracking-wider">
              {category.name}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {category.items.map((item, itemIndex) => (
                  <SidebarMenuItem key={item.title} className="stagger-item" style={{ animationDelay: `${0.2 + categoryIndex * 0.1 + itemIndex * 0.05}s` }}>
                    <SidebarMenuButton
                      asChild
                      variant="default"
                      isActive={location.pathname === item.url}
                      className="w-full justify-start mx-2 mb-1 rounded-xl hover-lift transition-all duration-300 hover:bg-sidebar-accent/80 data-[active=true]:bg-primary/10 data-[active=true]:text-primary data-[active=true]:border-primary/20"
                    >
                      <Link to={item.url} className="flex items-center gap-3">
                        <div className={`p-1.5 rounded-lg ${location.pathname === item.url ? 'bg-primary/20' : 'bg-sidebar-accent/50'} transition-colors duration-300`}>
                          <item.icon className={`h-4 w-4 ${location.pathname === item.url ? 'text-primary' : 'text-sidebar-foreground/70'}`} />
                        </div>
                        <span className="font-medium text-sm">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      
      <SidebarFooter className="p-6 border-t border-sidebar-border/50">
        <div className="text-center">
          <div className="text-xs text-sidebar-foreground/50 font-medium">
            &copy; {new Date().getFullYear()} SmartTools India
          </div>
          <div className="text-xs text-sidebar-foreground/30 mt-1">
            Built with ❤️ for productivity
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
