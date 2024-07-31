import path from 'node:path';

import baseConfig from '@repo/vitest-config/vite.config';

import { mergeConfig } from 'vite';

export default mergeConfig(baseConfig, {
  publicDir: path.resolve(__dirname, 'rule', 'static'),

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'rule'),
      '~': path.resolve(__dirname, 'rule'),
    },
  },
});
