// הרץ: node scripts/fetch-posts.mjs
// מוריד את כל המאמרים מ-WordPress ושומר ב-src/data/posts.json

import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const WP_API = 'https://wp.mazeget.com/wp-json/wp/v2';
const OUTPUT = join(dirname(fileURLToPath(import.meta.url)), '../src/data/posts.json');

let allPosts = [];
let page = 1;

console.log('מוריד מאמרים מ-WordPress...');

while (true) {
  const res = await fetch(`${WP_API}/posts?per_page=100&page=${page}&_embed=true`);
  if (!res.ok) { console.error('שגיאה:', res.status); break; }
  const posts = await res.json();
  if (!posts.length) break;
  allPosts = allPosts.concat(posts);
  const total = res.headers.get('X-WP-TotalPages');
  console.log(`עמוד ${page}/${total} — ${allPosts.length} מאמרים`);
  if (page >= Number(total)) break;
  page++;
}

writeFileSync(OUTPUT, JSON.stringify(allPosts, null, 2), 'utf-8');
console.log(`✅ נשמרו ${allPosts.length} מאמרים ב-src/data/posts.json`);
