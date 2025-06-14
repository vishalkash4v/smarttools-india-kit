
import { Suspense, lazy, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from "@/contexts/ThemeContext";
import { CurrencyProvider } from "@/contexts/CurrencyContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./App.css";

const queryClient = new QueryClient();

// Keep main pages lazy loaded for better initial bundle size
const LandingPage = lazy(() => import("@/pages/LandingPage"));
const ToolsPage = lazy(() => import("@/pages/ToolsPage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));

// Import tool pages directly for instant loading
import SimpleCalculatorPage from "@/pages/tools/SimpleCalculatorPage";
import WordCounterPage from "@/pages/tools/WordCounterPage";
import QRCodeGeneratorPage from "@/pages/tools/QRCodeGeneratorPage";
import TextCaseConverterPage from "@/pages/tools/TextCaseConverterPage";
import PasswordGeneratorPage from "@/pages/tools/PasswordGeneratorPage";
import JsonFormatterPage from "@/pages/tools/JsonFormatterPage";
import WhitespaceRemoverPage from "@/pages/tools/WhitespaceRemoverPage";
import DuplicateLineRemoverPage from "@/pages/tools/DuplicateLineRemoverPage";
import TextReverserPage from "@/pages/tools/TextReverserPage";
import RegexTesterPage from "@/pages/tools/RegexTesterPage";
import ColorPickerToolPage from "@/pages/tools/ColorPickerToolPage";
import TodoListPage from "@/pages/tools/TodoListPage";
import StopwatchPage from "@/pages/tools/StopwatchPage";
import CountdownTimerPage from "@/pages/tools/CountdownTimerPage";
import AgeCalculatorPage from "@/pages/tools/AgeCalculatorPage";
import DateDifferenceCalculatorPage from "@/pages/tools/DateDifferenceCalculatorPage";
import BmiCalculatorPage from "@/pages/tools/BmiCalculatorPage";
import PercentageCalculatorPage from "@/pages/tools/PercentageCalculatorPage";
import CurrencyConverterPage from "@/pages/tools/CurrencyConverterPage";
import LivePreviewPage from "@/pages/tools/LivePreviewPage";
import JavaScriptMinifierPage from "@/pages/tools/JavaScriptMinifierPage";
import TableToJsonConverterPage from "@/pages/tools/TableToJsonConverterPage";
import GstCalculatorPage from "@/pages/tools/GstCalculatorPage";
import EmiCalculatorPage from "@/pages/tools/EmiCalculatorPage";
import Base64ConverterPage from "@/pages/tools/Base64ConverterPage";
import SipCalculatorPage from "@/pages/tools/SipCalculatorPage";
import PpfCalculatorPage from "@/pages/tools/PpfCalculatorPage";
import FdCalculatorPage from "@/pages/tools/FdCalculatorPage";
import IncomeTaxCalculatorPage from "@/pages/tools/IncomeTaxCalculatorPage";
import TemperatureConverterPage from "@/pages/tools/TemperatureConverterPage";
import UnitConverterPage from "@/pages/tools/UnitConverterPage";
import LoremIpsumGeneratorPage from "@/pages/tools/LoremIpsumGeneratorPage";
import AiTextRewriterPage from "@/pages/tools/AiTextRewriterPage";
import IpLookupPage from "@/pages/tools/IpLookupPage";
import ListRandomizerPage from "@/pages/tools/ListRandomizerPage";
import UrlSlugGeneratorPage from "@/pages/tools/UrlSlugGeneratorPage";
import BarcodeGeneratorPage from "@/pages/tools/BarcodeGeneratorPage";
import TextToHandwritingPage from "@/pages/tools/TextToHandwritingPage";

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="system" storageKey="smarttools-theme">
        <CurrencyProvider>
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <ScrollToTop />
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
                        
                        {/* Tool routes - now directly imported for instant loading */}
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
                        <Route path="/base64-converter" element={<Base64ConverterPage />} />
                        <Route path="/sip-calculator" element={<SipCalculatorPage />} />
                        <Route path="/ppf-calculator" element={<PpfCalculatorPage />} />
                        <Route path="/fd-calculator" element={<FdCalculatorPage />} />
                        <Route path="/income-tax-calculator" element={<IncomeTaxCalculatorPage />} />
                        <Route path="/temperature-converter" element={<TemperatureConverterPage />} />
                        <Route path="/unit-converter" element={<UnitConverterPage />} />
                        <Route path="/lorem-ipsum-generator" element={<LoremIpsumGeneratorPage />} />
                        <Route path="/ai-text-rewriter" element={<AiTextRewriterPage />} />
                        <Route path="/ip-lookup" element={<IpLookupPage />} />
                        <Route path="/list-randomizer" element={<ListRandomizerPage />} />
                        <Route path="/url-slug-generator" element={<UrlSlugGeneratorPage />} />
                        <Route path="/barcode-generator" element={<BarcodeGeneratorPage />} />
                        <Route path="/text-to-handwriting" element={<TextToHandwritingPage />} />
                      </Routes>
                    </Suspense>
                  </main>
                  <Footer />
                </div>
              </BrowserRouter>
            </TooltipProvider>
          </QueryClientProvider>
        </CurrencyProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
