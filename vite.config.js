import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/AustinHarrisonnn.github.io-valentines-day/', // This is the subfolder on GitHub Pages
  plugins: [react()],
});