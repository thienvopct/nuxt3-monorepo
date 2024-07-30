import eslint from "@eslint/js";
import tseslint from 'typescript-eslint';
import vueEslintParser from 'vue-eslint-parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginVue from 'eslint-plugin-vue';
import pluginVitest from 'eslint-plugin-vitest';
import { fixupConfigRules } from "@eslint/compat";

import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();


export default tseslint.config(
  /* Predefined configurations */
  // ConfigError: Config (unnamed): Key "plugins": Cannot redefine plugin "import".
  ...fixupConfigRules(compat.extends('airbnb-base', 'airbnb-typescript/base')),
  ...fixupConfigRules(tseslint.configs.recommendedTypeChecked),
  ...pluginVue.configs['flat/strongly-recommended'],
  pluginVitest.configs.recommended,
  eslintConfigPrettier,
  eslint.configs.all,
  {
    languageOptions: {
      parser: vueEslintParser,
      parserOptions: {
        project: true,
        parser: tseslint.parser,
        extraFileExtensions: ['.vue'],
      }
    }
  },

  // /* Plugins setting */
  {
    settings: {
      'import/resolver': {
        typescript: true,
        node: true
      },
    },
  },

  // /* Config linting settings */
  {
    linterOptions: {
      noInlineConfig: false,
      reportUnusedDisableDirectives: 'error'
    }
  },

  // /* TypeScript rules to be solved */
  {
    rules: {
      // TODO: We should resolve all `any` type when enable the following rule
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-redundant-type-constituents': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',

      // TODO: We must handle all `Promise` when enable the following rule
      '@typescript-eslint/no-floating-promises': 'warn',

      // TODO: We must format all files with `eslint --fix` in one pull request when enable the following rule
      'arrow-body-style': 'off',
    },
  },

  // /* Vitest setting rules */
  {
    rules: {
      // Enforce the use of `test` instead of `it`
      'vitest/consistent-test-it': [
        'error',
        {
          fn: 'test',
        },
      ],

      // All `test` cases must be wrapped in a `describe` block
      'vitest/require-top-level-describe': 'error',
    },
  },

  // /* Vue setting rules */
  {
    files: ['**/*.vue'],
    rules: {
      // This rule causes false-positive with Vue SFC. Please enable `compilerOptions.noUnusedLocals` of `tsconfig.json` instead of it.
      '@typescript-eslint/no-unused-vars': 'off',

      // Enforce the use of the name casing `camelCase` for props of components in templates
      'vue/attribute-hyphenation': ['error', 'never'],

      // Restrict languages of blocks in Vue SFC
      'vue/block-lang': [
        'error',
        {
          script: {
            lang: 'ts',
          },
          style: {
            lang: 'scss',
          },
          template: {
            lang: 'html',
          },
        },
      ],

      // TODO: Enforce the use of the API style `script setup`
      'vue/component-api-style': ['warn', ['script-setup']],

      // Enforce the use of the name casing `PascalCase` for components in templates
      'vue/component-name-in-template-casing': [
        'error',
        'PascalCase',
        {
          // Unfortunately this rule with enabling this option does not support `script setup`
          registeredComponentsOnly: false,
        },
      ],

      // TODO: Enforce the use of `camelCase` for event names
      'vue/custom-event-name-casing': [
        'warn',
        'camelCase',
        {
          ignores: ['/^[a-z]+:[a-z]+$/'],
        },
      ],

      // TODO: Enforce the use of the type-literal style for `defineEmits`
      'vue/define-emits-declaration': ['warn', 'type-literal'],

      // Enforce the use of the specified names for macro variables
      'vue/require-macro-variable-name': 'error',

      // Enforce macros order
      'vue/define-macros-order': [
        'error',
        {
          defineExposeLast: true,
          order: ['defineOptions', 'defineModel', 'defineProps', 'defineEmits', 'defineSlots'],
        },
      ],

      // TODO: Enforce the use of the type-based style for `defineProps`
      'vue/define-props-declaration': ['warn', 'type-based'],

      // Allow single word component names for layouts, pages, and more
      'vue/multi-word-component-names': 'off',

      // Enforce a single root element in Vue SFC
      'vue/no-multiple-template-root': 'error',

      // TODO: Restrict that non-optional props do not have default values
      'vue/no-required-prop-with-default': 'warn',

      // Restrict definition of unused props
      'vue/no-unused-properties': 'error',

      // Enforce the shorthand form for binding `true` value
      'vue/prefer-true-attribute-shorthand': 'error',

      // Enforce the use of the name casing `camelCase` for definitions of props
      'vue/prop-name-casing': ['error', 'camelCase'],

      // Restrict unknown events which are not declared with `defineEmits`
      'vue/require-explicit-emits': [
        'error',
        {
          allowProps: false,
        },
      ],

      // TODO: Restrict the use of slots not defined within `defineSlots`
      'vue/require-explicit-slots': 'warn',

      // Enforce the use of the name casing `camelCase` for events of components in templates
      'vue/v-on-event-hyphenation': [
        'error',
        'never',
        {
          autofix: true,
        },
      ],

      // Restrict the incorrect use of `defineOptions`
      'vue/valid-define-options': 'error',

      // TODO: Currently this rule causes false-negative
      'vue/valid-v-for': 'off',
    },
  }
)




