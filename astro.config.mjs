// @ts-check
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';


// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), react()],

  vite: {
    // @ts-ignore - tailwindcss plugin type compatibility
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: ["en", "nl"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
