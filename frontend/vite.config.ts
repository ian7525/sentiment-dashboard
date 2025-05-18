import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  base: "/sentiment-dashboard/",
  plugins: [
    react(),
    compression({
      algorithm: "gzip",
      ext: ".gz",
    }),
    visualizer({
      filename: "stats.html",
      open: false,
    }),
  ],
  build: {
    sourcemap: false,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "i18n-vendor": ["i18next", "react-i18next"],
          "chart-vendor": ["recharts"],
          styled: ["styled-components"],
        },
      },
    },
  },
  server: {
    port: 5173,
  },
});
