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
import { Home, Percent, Calculator as CalculatorIcon, Gift, GanttChartSquare, CalendarRange, FileText, TextCursorInput, Eraser, ListChecks, Undo, Scale, Palette, ListX, Banknote, Currency, QrCode, KeyRound, Braces } from 'lucide-react'; // Changed Json to Braces

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
      { title: 'JSON Formatter', url: '/json-formatter', icon: Braces, pageId: 'json-formatter' }, // Changed Json to Braces
    ]
  },
  {
    name: "Productivity Tools",
    items: [
      { title: 'To-Do List', url: '/todo-list', icon: ListChecks, pageId: 'todo-list' },
      { title: 'QR Code Generator', url: '/qr-code-generator', icon: QrCode, pageId: 'qr-code-generator' },
      { title: 'Password Generator', url: '/password-generator', icon: KeyRound, pageId: 'password-generator' },
    ]
  },
  {
    name: "Design & Visual Tools",
    items: [
      { title: 'Color Picker', url: '/color-picker', icon: Palette, pageId: 'color-picker' },
    ]
  },
  // Add more categories here
];

const AppSidebar = () => {
  const location = useLocation();

  return (
    <Sidebar className="border-r">
      <SidebarHeader className="p-4 border-b">
        <Link to="/" className="flex items-center gap-2">
          <GanttChartSquare className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-semibold text-foreground">SmartTools</h1>
        </Link>
      </SidebarHeader>
      <SidebarContent className="py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              variant="default"
              isActive={location.pathname === '/'}
              className="w-full justify-start"
            >
              <Link to="/">
                <Home className="h-5 w-5 mr-3" />
                <span>Home</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        {toolCategories.map((category) => (
          <SidebarGroup key={category.name} className="pt-4">
            <SidebarGroupLabel className="px-2 mb-1 text-sm font-semibold text-muted-foreground">
              {category.name}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {category.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      variant="default"
                      isActive={location.pathname === item.url}
                      className="w-full justify-start"
                    >
                      <Link to={item.url}>
                        <item.icon className="h-5 w-5 mr-3" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter className="p-4 border-t">
        <div className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} SmartTools India
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
