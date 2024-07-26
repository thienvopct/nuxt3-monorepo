import { defineConfig } from 'vitest/config';

import viteConfig from './vite.config';

export default defineConfig({
  resolve: viteConfig.resolve,

  test: {
    coverage: {
      include: [
        'rule/**/*.[jt]s',
      ],
      provider: 'v8',
      reporter: ['text-summary', 'json-summary', 'json'],
    },

    include: [
      'rule/**/*.test.[jt]s',
    ],

    reporters: ['verbose', 'github-actions'],

    sequence: {
      concurrent: true,
    },
  },
});
