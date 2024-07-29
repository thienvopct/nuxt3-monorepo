import lintCommon from '@repo/eslint-config/common.mjs';

export default [
  ...lintCommon,
  {
    ignores: ['eslint.config.mjs'],
  },
]