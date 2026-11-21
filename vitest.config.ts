import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  test: {
    include: ['lib/**/*.test.ts', 'app/**/*.test.ts', 'tests/**/*.test.ts'],
    environment: 'node',
    // Catalog-wide checks walk every listing and task; at ~1,200 listings one takes 5-7s locally
    // and over 15s on shared CI runners, and they grow with every weekly drop.
    testTimeout: 45_000,
  },
});
