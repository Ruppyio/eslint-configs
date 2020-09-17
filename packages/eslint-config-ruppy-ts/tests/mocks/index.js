module.exports = {
  extends: ['../..'],
  parserOptions: {
    project: './packages/eslint-config-ruppy-ts/tests/mocks/tsconfig.json'
  },
  plugins: ['import'],
  settings: { 
    'import/resolver': {
      typescript: {
        project: './packages/eslint-config-ruppy-ts/tests/mocks/tsconfig.json'
      } 
    } 
  },
  rules: {
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
  }
}