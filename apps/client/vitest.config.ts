import { mergeConfig } from 'vite';
import baseVitestConfig from '@repo/vitest-config/vitest.config.js';


export default mergeConfig(baseVitestConfig, {
  test: {
    coverage: {
      include: ['src/**/*.[jt]s']
    },
    include: ['src/**/*.test.[jt]s']
  }
});
