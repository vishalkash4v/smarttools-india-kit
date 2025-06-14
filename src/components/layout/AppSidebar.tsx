import {
  LayoutDashboard,
  Settings,
  HelpCircle,
  FileText,
  Globe,
  Calculator,
  ListChecks,
  Timer,
  Clock,
  User,
  Calendar,
  Activity,
  Percent,
  Coins,
  FileCode2,
  Table,
  PiggyBank,
  IndianRupee,
  Thermometer,
  Layout,
  TextIcon,
  Network,
  StickyNote,
  Share2,
  Link2,
  Hash,
  CalendarDays as CalendarSchedule,
} from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { MainNavItem, SidebarNavItem } from "@/types";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

interface Props {
  items?: SidebarNavItem[];
  mainNav?: MainNavItem[];
}

export function AppSidebar() {
  const sidebarItems = [
    {
      title: "Getting Started",
      items: [
        { title: "Dashboard", url: "/", icon: LayoutDashboard },
        { title: "Tools", url: "/tools", icon: Layout },
        { title: "About", url: "/about", icon: HelpCircle },
        { title: "Contact", url: "/contact", icon: HelpCircle },
      ]
    },
    {
      title: "Text & Writing Tools",
      items: [
        { title: "Word Counter", url: "/word-counter", icon: FileText },
        { title: "Text Case Converter", url: "/text-case-converter", icon: TextIcon },
        { title: "JSON Formatter", url: "/json-formatter", icon: FileCode2 },
        { title: "Whitespace Remover", url: "/whitespace-remover", icon: TextIcon },
        { title: "Duplicate Line Remover", url: "/duplicate-line-remover", icon: FileText },
        { title: "Text Reverser", url: "/text-reverser", icon: TextIcon },
        { title: "Lorem Ipsum Generator", url: "/lorem-ipsum-generator", icon: FileText },
        { title: "AI Text Rewriter", url: "/ai-text-rewriter", icon: TextIcon },
        { title: "Base64 Converter", url: "/base64-converter", icon: FileText },
        { title: "Text to Handwriting", url: "/text-to-handwriting", icon: TextIcon },
        { title: "URL Slug Generator", url: "/url-slug-generator", icon: TextIcon },
        { title: "Notes", url: "/notes", icon: StickyNote },
      ]
    },
    {
      title: "Calculator Tools",
      items: [
        { title: "Simple Calculator", url: "/simple-calculator", icon: Calculator },
        { title: "Age Calculator", url: "/age-calculator", icon: User },
        { title: "Date Difference Calculator", url: "/date-difference-calculator", icon: Calendar },
        { title: "BMI Calculator", url: "/bmi-calculator", icon: Activity },
        { title: "Percentage Calculator", url: "/percentage-calculator", icon: Percent },
        { title: "GST Calculator", url: "/gst-calculator", icon: IndianRupee },
        { title: "EMI Calculator", url: "/emi-calculator", icon: PiggyBank },
        { title: "Temperature Converter", url: "/temperature-converter", icon: Thermometer },
        { title: "Unit Converter", url: "/unit-converter", icon: Layout },
      ]
    },
    {
      title: "Financial Tools",
      items: [
        { title: "SIP & Lump Sum Calculator", url: "/sip-calculator", icon: Coins },
        { title: "PPF Calculator", url: "/ppf-calculator", icon: Coins },
        { title: "FD Calculator", url: "/fd-calculator", icon: Coins },
        { title: "Income Tax Calculator", url: "/income-tax-calculator", icon: IndianRupee },
        { title: "Currency Converter", url: "/currency-converter", icon: Coins },
      ]
    },
    {
      title: "Utility Tools",
      items: [
        { title: "QR Code Generator", url: "/qr-code-generator", icon: FileCode2 },
        { title: "Regex Tester", url: "/regex-tester", icon: FileCode2 },
        { title: "Color Picker Tool", url: "/color-picker-tool", icon: Layout },
        { title: "Todo List", url: "/todo-list", icon: ListChecks },
        { title: "Stopwatch", url: "/stopwatch", icon: Timer },
        { title: "Countdown Timer", url: "/countdown-timer", icon: Clock },
        { title: "Live Preview", url: "/live-preview", icon: Layout },
        { title: "JavaScript Minifier", url: "/javascript-minifier", icon: FileCode2 },
        { title: "Table to JSON Converter", url: "/table-to-json-converter", icon: Table },
        { title: "List Randomizer", url: "/list-randomizer", icon: Layout },
        { title: "Barcode Generator", url: "/barcode-generator", icon: Layout },
      ]
    },
    {
      title: "Social Media Tools",
      items: [
        { title: "Social Media Link Generator", url: "/social-media-link-generator", icon: Share2 },
        { title: "URL Shortener", url: "/url-shortener", icon: Link2 },
        { title: "Hashtag Generator", url: "/hashtag-generator", icon: Hash },
        { title: "Content Planner", url: "/social-media-planner", icon: CalendarSchedule },
      ]
    },
    {
      title: "Network Tools",
      items: [
        { title: "What's My IP", url: "/ip-lookup", icon: Globe },
      ]
    },
  ];

  return (
    <div className="w-60 flex-shrink-0 border-r border-border py-4">
      <div className="flex flex-col space-y-1">
        {sidebarItems.map((category, index) => (
          <Accordion type="single" collapsible className="w-full" key={index}>
            <AccordionItem value={category.title}>
              <AccordionTrigger className="px-4 font-medium text-sm">{category.title}</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2 py-2">
                  {category.items.map((item) => (
                    <Link to={item.url} key={item.title} className="group flex items-center space-x-2 rounded-md px-4 py-2 text-sm font-medium hover:underline">
                      <item.icon className="h-4 w-4 opacity-70 group-hover:opacity-100" />
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
