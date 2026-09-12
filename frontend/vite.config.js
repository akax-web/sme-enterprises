import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for the Subramani Enterprises frontend.
//
// base is '/' for Netlify deployment (site deployed at root of domain).
// For local development (npm run dev) this also resolves correctly at /
// so localhost:5173 continues to work without any changes.
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 5173,
  },
});
