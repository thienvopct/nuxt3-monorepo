import { defineConfig } from 'vite';
import pluginVue from '@vitejs/plugin-vue';

export default defineConfig({
 plugins: [pluginVue()],
 publicDir: '.'
});