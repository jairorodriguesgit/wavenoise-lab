import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://jairorodriguesgit.github.io',
  base: '/wavenoise-lab',
  vite: {
    plugins: [tailwindcss()],
  },
});