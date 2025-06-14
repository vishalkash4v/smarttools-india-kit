import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

import MainLayout from "./components/layout/MainLayout";
import LandingPage from "./pages/LandingPage";
import ToolsPage from "./pages/ToolsPage";
import GstCalculatorPage from "./pages/tools/GstCalculatorPage";
import PercentageCalculatorPage from "./pages/tools/PercentageCalculatorPage";
import AgeCalculatorPage from "./pages/tools/AgeCalculatorPage";
import DateDifferenceCalculatorPage from "./pages/tools/DateDifferenceCalculatorPage";
import WordCounterPage from "./pages/tools/WordCounterPage";
import TextCaseConverterPage from "./pages/tools/TextCaseConverterPage";
import WhitespaceRemoverPage from "./pages/tools/WhitespaceRemoverPage";
import TodoListPage from "./pages/tools/TodoListPage";
import TextReverserPage from "./pages/tools/TextReverserPage";
import BmiCalculatorPage from "./pages/tools/BmiCalculatorPage";
import ColorPickerToolPage from "./pages/tools/ColorPickerToolPage";
import DuplicateLineRemoverPage from "./pages/tools/DuplicateLineRemoverPage";
import EmiCalculatorPage from "./pages/tools/EmiCalculatorPage";
import SimpleCalculatorPage from "./pages/tools/SimpleCalculatorPage";
import CurrencyConverterPage from "./pages/tools/CurrencyConverterPage";
import QRCodeGeneratorPage from "./pages/tools/QRCodeGeneratorPage";
import PasswordGeneratorPage from "./pages/tools/PasswordGeneratorPage";
import JsonFormatterPage from "./pages/tools/JsonFormatterPage";
import StopwatchPage from "./pages/tools/StopwatchPage";
import CountdownTimerPage from "./pages/tools/CountdownTimerPage";
import LivePreviewPage from "./pages/tools/LivePreviewPage";
import RegexTesterPage from "./pages/tools/RegexTesterPage";
import JavaScriptMinifierPage from "./pages/tools/JavaScriptMinifierPage";
import TableToJsonConverterPage from "./pages/tools/TableToJsonConverterPage";
import ThemesPage from "./pages/tools/ThemesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  console.log("App.tsx is rendering / re-evaluating. Current time:", new Date().toISOString());
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route element={<MainLayout />}>
                <Route path="/" element={<LandingPage />} />
                <Route path="/tools" element={<ToolsPage />} />
                <Route path="/gst-calculator" element={<GstCalculatorPage />} />
                <Route path="/percentage-calculator" element={<PercentageCalculatorPage />} />
                <Route path="/age-calculator" element={<AgeCalculatorPage />} />
                <Route path="/date-difference-calculator" element={<DateDifferenceCalculatorPage />} />
                <Route path="/word-counter" element={<WordCounterPage />} />
                <Route path="/text-case-converter" element={<TextCaseConverterPage />} />
                <Route path="/whitespace-remover" element={<WhitespaceRemoverPage />} />
                <Route path="/todo-list" element={<TodoListPage />} />
                <Route path="/text-reverser" element={<TextReverserPage />} />
                <Route path="/bmi-calculator" element={<BmiCalculatorPage />} />
                <Route path="/color-picker" element={<ColorPickerToolPage />} />
                <Route path="/duplicate-line-remover" element={<DuplicateLineRemoverPage />} />
                <Route path="/emi-calculator" element={<EmiCalculatorPage />} />
                <Route path="/simple-calculator" element={<SimpleCalculatorPage />} />
                <Route path="/currency-converter" element={<CurrencyConverterPage />} />
                <Route path="/qr-code-generator" element={<QRCodeGeneratorPage />} />
                <Route path="/password-generator" element={<PasswordGeneratorPage />} />
                <Route path="/json-formatter" element={<JsonFormatterPage />} />
                <Route path="/stopwatch" element={<StopwatchPage />} />
                <Route path="/countdown-timer" element={<CountdownTimerPage />} />
                <Route path="/live-preview" element={<LivePreviewPage />} />
                <Route path="/regex-tester" element={<RegexTesterPage />} />
                <Route path="/javascript-minifier" element={<JavaScriptMinifierPage />} />
                <Route path="/table-to-json" element={<TableToJsonConverterPage />} />
                <Route path="/themes" element={<ThemesPage />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
