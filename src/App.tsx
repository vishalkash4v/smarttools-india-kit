import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";
import IndexPage from "./pages/Index";
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
import SimpleCalculatorPage from "./pages/tools/SimpleCalculatorPage"; // New Import
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  console.log("App.tsx is rendering / re-evaluating. Current time:", new Date().toISOString());
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<IndexPage />} />
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
              <Route path="/simple-calculator" element={<SimpleCalculatorPage />} /> {/* New Route */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
