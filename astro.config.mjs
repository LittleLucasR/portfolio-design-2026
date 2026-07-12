// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://portfolio-design-2026.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
  
  server: {
    host: true,
    port: 4321 // opcional, caso queira fixar a porta
  },

  integrations: [react()],
});