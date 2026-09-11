import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for the Subramani Enterprises frontend.
//
// base is set to the GitHub Pages sub-path in production.
// During local development (npm run dev) the base defaults to '/',
// so localhost:5173 continues to work without any changes.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/sme-enterprises/' : '/',
  server: {
    port: 5173,
  },
}));
