
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";
import { componentTagger } from "lovable-tagger";
import { prerender } from "vite-plugin-prerender";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    mode === 'production' && prerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: [
        '/',
        '/tools',
        '/about',
        '/contact',
        '/simple-calculator',
        '/word-counter',
        '/qr-code-generator',
        '/text-case-converter',
        '/password-generator',
        '/json-formatter',
        '/whitespace-remover',
        '/duplicate-line-remover',
        '/text-reverser',
        '/regex-tester',
        '/color-picker-tool',
        '/todo-list',
        '/stopwatch',
        '/countdown-timer',
        '/age-calculator',
        '/date-difference-calculator',
        '/bmi-calculator',
        '/percentage-calculator',
        '/currency-converter',
        '/live-preview',
        '/javascript-minifier',
        '/table-to-json-converter',
        '/gst-calculator',
        '/emi-calculator',
        '/base64-converter',
        '/sip-calculator',
        '/ppf-calculator',
        '/fd-calculator',
        '/income-tax-calculator',
        '/temperature-converter',
        '/unit-converter',
        '/lorem-ipsum-generator',
        '/ai-text-rewriter',
        '/ip-lookup',
        '/list-randomizer',
        '/url-slug-generator',
        '/barcode-generator',
        '/text-to-handwriting',
        '/notes',
        '/social-media-link-generator',
        '/url-shortener',
        '/hashtag-generator',
        '/social-media-planner'
      ]
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
