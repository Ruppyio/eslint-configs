module.exports = {
  extends: ['../..'],
  plugins: ['import'],
  parserOptions: {
    project: 'packages/eslint-config-ruppy-ts/tests/mocks/tsconfig.json',
  },
  settings: {
    'import/resolver': {
      typescript: { project: 'packages/eslint-config-ruppy-ts/tests/mocks/tsconfig.json' },
    },
  },
  rules: {
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
  }
}
