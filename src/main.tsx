
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <App />
    </ThemeProvider>
  </StrictMode>
);

// Dispatch render event for prerendering
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.dispatchEvent(new Event('render-event'));
    }, 100);
  });
}
