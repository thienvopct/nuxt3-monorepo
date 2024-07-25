import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
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
  },
)