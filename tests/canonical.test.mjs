import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readdirSync, readFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import test, { before } from 'node:test';

const outputDir = '/tmp/mazeget-canonical-test';

before(() => {
  rmSync(outputDir, { recursive: true, force: true });
  execFileSync('./node_modules/.bin/astro', ['build', '--outDir', outputDir], {
    cwd: new URL('..', import.meta.url),
    stdio: 'pipe',
  });
});

test('generated canonical URLs do not redirect through a trailing slash', () => {
  const html = readFileSync(`${outputDir}/\u05de\u05d0\u05de\u05e8\u05d9\u05dd/index.html`, 'utf8');
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/u)?.[1];

  assert.equal(canonical, 'https://mazeget.com/%D7%9E%D7%90%D7%9E%D7%A8%D7%99%D7%9D');
});

test('generated articles do not link to the 19 missing article URLs reported by Ahrefs', () => {
  const brokenPaths = [
    '/מאמרים/מצגות-שלא-מהעולם-הזה-בזכות-בינה-מלאכותית',
    '/מאמרים/איך לבנות מצגת חתונה מרגשת לזוג הטרי',
    '/מאמרים/סרטון תמונות לחתונה',
    '/מאמרים/מה מומלץ להראות במצגות לחתונה',
    '/מאמרים/הצגת-מצגת-בבת-מצווה-רעיונות-ותכנים-מרגש',
    '/מאמרים/רעיונות-למוסיקה-שתלווה-את-מצגת-בת-המצווה',
    '/מאמרים/וידאו לחתונה מתמונות מדריך מהיר לעריכה נכונה ומרשימה',
    '/מאמרים/סיפור האהבה שלכם בסרטון לחתונה',
    '/מאמרים/וידאו-למצגת-חתונה-מקצועית-מה-חשוב-שיהיה',
    '/מאמרים/רעיונות למצגות',
    '/מאמרים/מדריך-למצגת-ליום-הולדת-מצגת-עם-מבנה-מנצח',
    '/מאמרים/מצגות עם מוזיקה לחתונה',
    '/מאמרים/איך להכין מצגת מושלמת ליום הולדת',
    '/מאמרים/מצגת תמונות ייחודיות',
    '/מאמרים/איך-להכין-מצגת-יום-הולדת-שמספרת-את-סיפור-החיים',
    '/מאמרים/הצגת-מצגת-בבת-מצווה-רעיונות-ותכנים-מרגשים',
    '/מאמרים/מצגת לאירועיים',
    '/מאמרים/מה חשוב לכלול במצגת ליום הולדת',
    '/מאמרים/5 רעיונות מקוריים לסרטון חתונה',
  ];

  function htmlFiles(directory) {
    return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
      const path = join(directory, entry.name);
      return entry.isDirectory() ? htmlFiles(path) : entry.name.endsWith('.html') ? [path] : [];
    });
  }

  const linkedPaths = htmlFiles(join(outputDir, 'מאמרים')).flatMap(file => {
    const html = readFileSync(file, 'utf8');
    return [...html.matchAll(/href="([^"]+)"/gu)].map(match => {
      try {
        return decodeURIComponent(new URL(match[1], 'https://mazeget.com').pathname);
      } catch {
        return '';
      }
    });
  });

  const stillBroken = brokenPaths.filter(path => linkedPaths.includes(path));
  assert.deepEqual(stillBroken, []);
});
