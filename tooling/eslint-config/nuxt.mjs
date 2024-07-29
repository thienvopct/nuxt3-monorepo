import lintCommon from '@repo/eslint-config/common.mjs';

export default [
  ...lintCommon,
  {
    ignores: ['.nuxt', '.output', 'eslint.config.mjs'],
  },
  {
    rules: {
      'no-console': 'warn',
      'nuxt/prefer-import-meta': 'error',
    }
  }
]