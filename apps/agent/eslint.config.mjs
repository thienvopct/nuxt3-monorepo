import withNuxt from './.nuxt/eslint.config.mjs';
import lintNuxt from '@repo/eslint-config/nuxt.mjs';

export default withNuxt(
  lintNuxt
)