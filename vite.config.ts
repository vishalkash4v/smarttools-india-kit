import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";
import { componentTagger } from "lovable-tagger";

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
    // Temporarily removing prerender plugin due to ES module compatibility issues
    // mode === 'production' && prerender({
    //   staticDir: path.join(__dirname, 'dist'),
    //   routes: [
    //     '/',
    //     '/tools',
    //     '/about',
    //     '/contact',
    //     // ... other routes
    //   ]
    // })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
