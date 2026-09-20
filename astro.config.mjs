import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  site: 'https://jairorodriguesgit.github.io',
  base: '/wavenoise-lab',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
});