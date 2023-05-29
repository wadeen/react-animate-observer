module.exports = {
  env: {
    es2021: true,
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
    'eslint-plugin-prettier',
  ],
  rules: {
    'prettier/prettier': ['error'],
    'require-jsdoc': ['off'],
    'import/order': ['warn', { alphabetize: { order: 'asc' } }],
    'react/jsx-equals-spacing': ['warn', 'never'],
    'no-duplicate-imports': 'warn',
    'react/jsx-fragments': 'warn',
    'react/self-closing-comp': ['warn', { component: true, html: true }],
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-newline': ['warn', { prevent: true, allowMultilines: false }],
  },
  overrides: [
    {
      files: ['**/*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
