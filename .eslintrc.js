module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'prettier',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'require-jsdoc': ['off'],
    'import/order': ['warn', { alphabetize: { order: 'asc' } }],
    '@next/next/no-img-element': ['off'],
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
};
