import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";
import { componentTagger } from "lovable-tagger";
import Sitemap from "vite-plugin-sitemap";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => ({
  server: { host: "::", port: 8080 },
  plugins: [
    react(),
    Sitemap({
      hostname: "https://fyntools.com",
      // list every client-side path here:
      dynamicRoutes: [
        "/",
        "/about",
        "/contact",
        "/tools",
        // tool routes
        "/word-counter",
        "/text-case-converter",
        "/image-compressor",
        "/url-shortener",
        "/base64-converter",
        "/lorem-ipsum-generator",
        "/qr-code-generator",
        "/password-generator",
        "/json-formatter",
        "/color-picker-tool",
        "/whitespace-remover",
        "/duplicate-line-remover",
        "/text-reverser",
        "/logo-to-favicon",
        "/image-upscaler",
        "/image-cropper",
        "/regex-tester",
        "/text-font-changer",
        "/ai-text-rewriter",
        "/image-format-converter",
        "/svg-optimizer",
        "/image-metadata-viewer",
        "/pdf-text-extractor",
        "/placeholder-image-generator",
        "/typing-tutor",
        "/typing-test",
        "/typing-games",
        "/typing-competition",
        "/simple-calculator",
        "/age-calculator",
        "/date-difference-calculator",
        "/future-date-calculator",
        "/bmi-calculator",
        "/percentage-calculator",
        "/currency-converter",
        "/gst-calculator",
        "/emi-calculator",
        "/sip-calculator",
        "/ppf-calculator",
        "/fd-calculator",
        "/income-tax-calculator",
        "/temperature-converter",
        "/unit-converter",
        "/live-preview",
        "/javascript-minifier",
        "/table-to-json-converter",
        "/stopwatch",
        "/countdown-timer",
        "/list-randomizer",
        "/barcode-generator",
        "/url-slug-generator",
        "/text-to-handwriting",
        "/notes",
        "/url-wrapper",
        "/ip-lookup",
        "/todo-list",
        "/hash-generator",
        "/jwt-decoder",
        "/meta-tag-previewer",
        "/enhanced-unit-converter",
        "/social-media-db-viewer",
        "/social-media-downloader",
        "/youtube-downloader",
        "/pixelate-tool",
        "/photo-annotation-tool",
        "/background-remover",
        "/image-resizer",
        "/auto-image-resizer",
        "/add-name-date-photo",
        "/qr-scanner"
      ],
      exclude: ["/404"]
    }),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  build: {
    rollupOptions: {
      input: { main: path.resolve(__dirname, "index.html") }
    }
  }
}));
