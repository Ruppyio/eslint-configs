'use strict';

module.exports = {
  root: true,
  extends: [
    './rules/import/settings',
    './rules/import/static-analysis',
    './rules/import/helpful-warnings',
    './rules/import/module-systems',
    './rules/import/style-guide',
    './rules/node/settings',
    './rules/node/possible-errors',
    './rules/node/best-practices',
    './rules/node/stylistic-issues',
    'ruppy-base',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['import', 'node', 'prettier'],
  env: {
    node: true,
  },
};
