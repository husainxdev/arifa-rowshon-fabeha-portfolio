import { copyFile, cp, rename, rm } from 'node:fs/promises';

const dist = new URL('../dist/', import.meta.url);
const root = new URL('../', import.meta.url);

// GitHub Pages serves the repository root; Replit and Sites use dist/.
await rename(new URL('index.dev.html', dist), new URL('index.html', dist));
await copyFile(new URL('index.html', dist), new URL('index.html', root));
await rm(new URL('assets/', root), { recursive: true, force: true });
await cp(new URL('assets/', dist), new URL('assets/', root), { recursive: true });
await copyFile(new URL('favicon.svg', dist), new URL('favicon.svg', root));
await rm(new URL('logos/', root), { recursive: true, force: true });
await cp(new URL('logos/', dist), new URL('logos/', root), { recursive: true });
for (const name of ['social-preview.png', 'robots.txt', 'sitemap.xml', 'cv.pdf', 'progsity-weekly-1-certificate.jpg']) {
  await copyFile(new URL(name, dist), new URL(name, root));
}
