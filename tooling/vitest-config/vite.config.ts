import path from 'node:path';

import pluginVue from '@vitejs/plugin-vue';

import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    pluginVue(),
  ],

  resolve: {},
});
