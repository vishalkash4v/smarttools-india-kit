
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
import DateDifferenceCalculatorPage from "./pages/tools/DateDifferenceCalculatorPage"; // New import
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
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
            <Route path="/date-difference-calculator" element={<DateDifferenceCalculatorPage />} /> {/* New route */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
