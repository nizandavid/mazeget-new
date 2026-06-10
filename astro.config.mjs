// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mazeget.com',
  output: 'static',
  adapter: vercel({ webAnalytics: false }),
  integrations: [sitemap({
    serialize(item) {
      // Strip the trailing slash so sitemap URLs match the live site
      // (trailingSlash: false) and don't trigger a 308 redirect on every URL.
      // Keep the homepage root ("https://mazeget.com/") as-is.
      let url = item.url;
      if (url.endsWith('/') && url !== 'https://mazeget.com/') {
        url = url.slice(0, -1);
      }
      return { ...item, url, lastmod: new Date().toISOString().split('T')[0] };
    }
  })],
  vite: {
    plugins: [tailwindcss()]
  }
});