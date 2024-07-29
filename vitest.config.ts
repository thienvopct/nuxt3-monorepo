import { defineConfig } from 'vitest/config';

import viteConfig from '@repo/viteconfig/vite.config';

export default defineConfig({
  resolve: viteConfig.resolve,

  test: {
    coverage: {
      include: ['packages/ui/**/*.[jt]s', 'packages/utils/**/*.[jt]s'],
      exclude: ['packages/types/openapi/**'],
      provider: 'v8',
      reporter: ['text-summary', 'json-summary', 'json'],
    },

    include: [
      'packages/ui/**/*.test.[jt]s',
      'packages/utils/**/*.test.[jt]s',
    ],

    reporters: ['verbose', 'github-actions'],

    sequence: {
      concurrent: true,
    },
  },
});
