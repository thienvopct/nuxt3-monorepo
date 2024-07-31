import { defineConfig } from 'vitest/config';

import viteConfig from './vite.config.js';

export default defineConfig({
  resolve: viteConfig.resolve,

  test: {
    coverage: {
      include: ['packages/ui/**/*.[jt]s'],
      provider: 'v8',
      reporter: ['text-summary', 'json-summary', 'json'],
    },

    include: [
      'packages/ui/**/*.test.[jt]s',
    ],

    reporters: ['verbose', 'github-actions'],

    sequence: {
      concurrent: true,
    },
  },
});
