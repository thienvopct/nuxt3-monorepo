import { mergeConfig } from 'vitest/config';

import viteConfig from './vite.config';

import baseVitestConfig from '@repo/vitest-config/vitest.config.js'

export default mergeConfig(baseVitestConfig ,{
  resolve: viteConfig,

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
