// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import { readFileSync, existsSync } from 'node:fs';

// האם הדף שנבנה נושא תגית noindex? נקרא מתוך dist בזמן יצירת מפת האתר.
function isNoindexed(pageUrl) {
  try {
    const path = decodeURIComponent(new URL(pageUrl).pathname).replace(/^\/+|\/+$/g, '');
    const file = `dist/${path ? path + '/' : ''}index.html`;
    return existsSync(file) && readFileSync(file, 'utf-8').includes('name="robots" content="noindex');
  } catch {
    return false; // בספק — משאירים במפה
  }
}

// https://astro.build/config
export default defineConfig({
  site: 'https://mazeget.com',
  output: 'static',
  adapter: vercel({ webAnalytics: false }),
  integrations: [sitemap({
    // עמוד מצגת שהוסתר מהגלריה מסומן noindex ב-matzget/[slug].astro.
    // אסור שיופיע גם במפת האתר — זה אות סותר לגוגל ("אל תאנדקס" מול
    // "הנה רשימה לאנדקס"). במקום לשכפל כאן את הלוגיקה של הגיליון,
    // קוראים את ה-HTML שזה עתה נבנה, כך שהמפה תמיד מסונכרנת.
    filter: (page) => !isNoindexed(page),
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