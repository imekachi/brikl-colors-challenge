module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'unused-imports'],
  extends: [
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
  ],
  ignorePatterns: ['*.js'], // ignore files outside src
  rules: {
    // This rule is not compatible with Next.js's <Link /> components
    'jsx-a11y/anchor-is-valid': 'off',
    '@next/next/no-img-element': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    quotes: ['error', 'single', { avoidEscape: true }],
    // Sort imports
    'import/order': [
      'warn',
      {
        pathGroups: [{ pattern: '@/**', group: 'internal' }],
        alphabetize: { order: 'asc', caseInsensitive: true },
        'newlines-between': 'never',
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      },
    ],
    'sort-imports': ['warn', { ignoreCase: true, ignoreDeclarationSort: true }],
    // Format imports
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'import/no-duplicates': 'warn',
    'import/no-useless-path-segments': 'warn',
    // Others
    'no-param-reassign': 'error',
    '@typescript-eslint/no-shadow': 'error'
  },
  overrides: [
    {
      files: ['use*.ts'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
    {
      files: ['./*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
}
