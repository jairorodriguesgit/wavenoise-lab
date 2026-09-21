import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  site: 'https://wavenoiselab.com.br',
  base: '/',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
});