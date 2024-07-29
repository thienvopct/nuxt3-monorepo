import path from 'node:path';

import pluginVue from '@vitejs/plugin-vue';

import { defineConfig } from 'vite';
import pluginSvgLoader from 'vite-svg-loader';

export default defineConfig({
  plugins: [
    (() => {
      const instance = pluginSvgLoader({
        defaultImport: 'url',
      });

      // HACK: Intercepts to ignore virtual files provided by Vite@5.2.x
      // @see https://github.com/jpkleemans/vite-svg-loader/issues/142
      const instanceLoad = instance.load as (...args: unknown[]) => any;
      instance.load = function load(...args) {
        return args[0].startsWith('virtual:public') ? undefined : instanceLoad.call(this, ...args);
      };
      return instance;
    })(),

    pluginVue(),
  ],

  resolve: {
    alias: {
      '@@': path.resolve(__dirname, '.'),
      '~~': path.resolve(__dirname, '.'),
      '@hr4c-target/types': path.resolve(__dirname, 'packages/types'),
      '@hr4c-target/ui': path.resolve(__dirname, 'packages/ui'),
      '@hr4c-target/utils': path.resolve(__dirname, 'packages/utils'),
    },
  },
});