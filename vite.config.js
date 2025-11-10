import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Guardian-AI-site/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
});
