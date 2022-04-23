module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'eslint:recommended',
    'prettier',
    '@vue/typescript/recommended',
    'plugin:prettier-vue/recommended',
    'plugin:vue/vue3-recommended',
  ],
  ignorePatterns: ['dist', 'components.d.ts'],
  settings: {
    'prettier-vue': {
      SFCBlocks: {
        template: false,
      },
    },
  },
  rules: {
    'prettier-vue/prettier': [
      'error',
      {
        printWidth: 100,
        singleQuote: true,
      },
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: true,
        ignores: [],
      },
    ],
  },
};
