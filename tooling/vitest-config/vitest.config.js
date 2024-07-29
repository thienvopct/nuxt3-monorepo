import { defineConfig } from 'vitest/config';
import viteConfig from './vite.config.js';

export default defineConfig({
  resolve: viteConfig.resolve,
  test: {}
})