import { copyFile } from 'node:fs/promises';

// Keep the repository-root favicon in sync before Vite resolves its HTML link.
await copyFile(new URL('../public/favicon.svg', import.meta.url), new URL('../favicon.svg', import.meta.url));
