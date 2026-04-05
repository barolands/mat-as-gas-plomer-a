import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// GitHub Pages (proyecto): https://<user>.github.io/<repo>/
// El workflow usa --base=/${{ github.event.repository.name }}/ para que coincida siempre con el repo.
// Este valor es solo para build/preview local; alinearlo con el nombre real del repositorio.
const repoBase = "/mat-as-gas-plomer-a/";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: repoBase,
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
