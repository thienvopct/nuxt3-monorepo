import { mergeConfig } from 'vite';
import baseVitestConfig from '@repo/vitest-config/vitest.config.js';


export default mergeConfig(baseVitestConfig, {
  test: {
    coverage: {
      include: ['**/*.[jt]s'],
      provider: 'v8',
      reporter: ['text-summary', 'json-summary', 'json'],
    },
    include: ['**/*.test.[jt]s']
  }
});
