module.exports = {
  extends: ['../..'],
  plugins: ['import'],
  rules: {
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
  }
}