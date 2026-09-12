import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for the Subramani Enterprises frontend.
//
// DEPLOYMENT TARGETS:
//   GitHub Pages: https://akax-web.github.io/sme-enterprises/
//     → base must be '/sme-enterprises/' so assets resolve under that sub-path
//
//   Local development (npm run dev):
//     → base defaults to '/' so localhost:5173 works without changes
//
// The VITE_BASE_PATH environment variable lets CI override the base.
// The GitHub Actions workflow does NOT set VITE_BASE_PATH, so it defaults
// to '/sme-enterprises/' in build mode.
export default defineConfig({
  plugins: [react()],
  // Use '/' for Netlify deployment (root domain).
  base: '/',
  server: {
    port: 5173,
  },
});
