// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Se puede reemplazar por el dominio definitivo al publicar.
  site: 'https://ignacioangelone.dev',
  vite: {
    plugins: [tailwindcss()]
  }
});
