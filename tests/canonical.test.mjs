import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFileSync, rmSync } from 'node:fs';
import test from 'node:test';

const outputDir = '/tmp/mazeget-canonical-test';

test('generated canonical URLs do not redirect through a trailing slash', () => {
  rmSync(outputDir, { recursive: true, force: true });
  execFileSync('./node_modules/.bin/astro', ['build', '--outDir', outputDir], {
    cwd: new URL('..', import.meta.url),
    stdio: 'pipe',
  });

  const html = readFileSync(`${outputDir}/\u05de\u05d0\u05de\u05e8\u05d9\u05dd/index.html`, 'utf8');
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/u)?.[1];

  assert.equal(canonical, 'https://mazeget.com/%D7%9E%D7%90%D7%9E%D7%A8%D7%99%D7%9D');
});
