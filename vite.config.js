// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // Ensures the project root is correctly defined
  publicDir: 'public', // Ensures Vite knows where your public files are
});
