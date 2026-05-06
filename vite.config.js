// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Use env var for base: '/' for Render/production, '/Research_HIV_Website/' for GitHub Pages
  base: process.env.VITE_BASE_PATH || "/",
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5001',
        changeOrigin: true,
      },
    },
  },
});

