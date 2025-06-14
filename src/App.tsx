
import { Suspense, lazy } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from "@/contexts/ThemeContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./App.css";

const queryClient = new QueryClient();

// Lazy load pages for better performance
const LandingPage = lazy(() => import("@/pages/LandingPage"));
const ToolsPage = lazy(() => import("@/pages/ToolsPage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));

// Tool pages
const SimpleCalculatorPage = lazy(() => import("@/pages/tools/SimpleCalculatorPage"));
const WordCounterPage = lazy(() => import("@/pages/tools/WordCounterPage"));
const QRCodeGeneratorPage = lazy(() => import("@/pages/tools/QRCodeGeneratorPage"));
const TextCaseConverterPage = lazy(() => import("@/pages/tools/TextCaseConverterPage"));
const PasswordGeneratorPage = lazy(() => import("@/pages/tools/PasswordGeneratorPage"));
const JsonFormatterPage = lazy(() => import("@/pages/tools/JsonFormatterPage"));
const WhitespaceRemoverPage = lazy(() => import("@/pages/tools/WhitespaceRemoverPage"));
const DuplicateLineRemoverPage = lazy(() => import("@/pages/tools/DuplicateLineRemoverPage"));
const TextReverserPage = lazy(() => import("@/pages/tools/TextReverserPage"));
const RegexTesterPage = lazy(() => import("@/pages/tools/RegexTesterPage"));
const ColorPickerToolPage = lazy(() => import("@/pages/tools/ColorPickerToolPage"));
const TodoListPage = lazy(() => import("@/pages/tools/TodoListPage"));
const StopwatchPage = lazy(() => import("@/pages/tools/StopwatchPage"));
const CountdownTimerPage = lazy(() => import("@/pages/tools/CountdownTimerPage"));
const AgeCalculatorPage = lazy(() => import("@/pages/tools/AgeCalculatorPage"));
const DateDifferenceCalculatorPage = lazy(() => import("@/pages/tools/DateDifferenceCalculatorPage"));
const BmiCalculatorPage = lazy(() => import("@/pages/tools/BmiCalculatorPage"));
const PercentageCalculatorPage = lazy(() => import("@/pages/tools/PercentageCalculatorPage"));
const CurrencyConverterPage = lazy(() => import("@/pages/tools/CurrencyConverterPage"));
const LivePreviewPage = lazy(() => import("@/pages/tools/LivePreviewPage"));
const JavaScriptMinifierPage = lazy(() => import("@/pages/tools/JavaScriptMinifierPage"));
const TableToJsonConverterPage = lazy(() => import("@/pages/tools/TableToJsonConverterPage"));
const GstCalculatorPage = lazy(() => import("@/pages/tools/GstCalculatorPage"));
const EmiCalculatorPage = lazy(() => import("@/pages/tools/EmiCalculatorPage"));

// New tool pages
const Base64ConverterPage = lazy(() => import("@/pages/tools/Base64ConverterPage"));
const SipCalculatorPage = lazy(() => import("@/pages/tools/SipCalculatorPage"));
const PpfCalculatorPage = lazy(() => import("@/pages/tools/PpfCalculatorPage"));
const FdCalculatorPage = lazy(() => import("@/pages/tools/FdCalculatorPage"));
const IncomeTaxCalculatorPage = lazy(() => import("@/pages/tools/IncomeTaxCalculatorPage"));
const TemperatureConverterPage = lazy(() => import("@/pages/tools/TemperatureConverterPage"));
const UnitConverterPage = lazy(() => import("@/pages/tools/UnitConverterPage"));
const LoremIpsumGeneratorPage = lazy(() => import("@/pages/tools/LoremIpsumGeneratorPage"));
const AiTextRewriterPage = lazy(() => import("@/pages/tools/AiTextRewriterPage"));

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="system" storageKey="smarttools-theme">
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <div className="min-h-screen flex flex-col bg-background">
                <Header />
                <main className="flex-1">
                  <Suspense fallback={
                    <div className="flex items-center justify-center min-h-[60vh]">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                    </div>
                  }>
                    <Routes>
                      <Route path="/" element={<LandingPage />} />
                      <Route path="/tools" element={<ToolsPage />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/contact" element={<ContactPage />} />
                      
                      {/* Tool routes */}
                      <Route path="/simple-calculator" element={<SimpleCalculatorPage />} />
                      <Route path="/word-counter" element={<WordCounterPage />} />
                      <Route path="/qr-code-generator" element={<QRCodeGeneratorPage />} />
                      <Route path="/text-case-converter" element={<TextCaseConverterPage />} />
                      <Route path="/password-generator" element={<PasswordGeneratorPage />} />
                      <Route path="/json-formatter" element={<JsonFormatterPage />} />
                      <Route path="/whitespace-remover" element={<WhitespaceRemoverPage />} />
                      <Route path="/duplicate-line-remover" element={<DuplicateLineRemoverPage />} />
                      <Route path="/text-reverser" element={<TextReverserPage />} />
                      <Route path="/regex-tester" element={<RegexTesterPage />} />
                      <Route path="/color-picker-tool" element={<ColorPickerToolPage />} />
                      <Route path="/todo-list" element={<TodoListPage />} />
                      <Route path="/stopwatch" element={<StopwatchPage />} />
                      <Route path="/countdown-timer" element={<CountdownTimerPage />} />
                      <Route path="/age-calculator" element={<AgeCalculatorPage />} />
                      <Route path="/date-difference-calculator" element={<DateDifferenceCalculatorPage />} />
                      <Route path="/bmi-calculator" element={<BmiCalculatorPage />} />
                      <Route path="/percentage-calculator" element={<PercentageCalculatorPage />} />
                      <Route path="/currency-converter" element={<CurrencyConverterPage />} />
                      <Route path="/live-preview" element={<LivePreviewPage />} />
                      <Route path="/javascript-minifier" element={<JavaScriptMinifierPage />} />
                      <Route path="/table-to-json-converter" element={<TableToJsonConverterPage />} />
                      <Route path="/gst-calculator" element={<GstCalculatorPage />} />
                      <Route path="/emi-calculator" element={<EmiCalculatorPage />} />
                      
                      {/* New tool routes */}
                      <Route path="/base64-converter" element={<Base64ConverterPage />} />
                      <Route path="/sip-calculator" element={<SipCalculatorPage />} />
                      <Route path="/ppf-calculator" element={<PpfCalculatorPage />} />
                      <Route path="/fd-calculator" element={<FdCalculatorPage />} />
                      <Route path="/income-tax-calculator" element={<IncomeTaxCalculatorPage />} />
                      <Route path="/temperature-converter" element={<TemperatureConverterPage />} />
                      <Route path="/unit-converter" element={<UnitConverterPage />} />
                      <Route path="/lorem-ipsum-generator" element={<LoremIpsumGeneratorPage />} />
                      <Route path="/ai-text-rewriter" element={<AiTextRewriterPage />} />
                    </Routes>
                  </Suspense>
                </main>
                <Footer />
              </div>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
