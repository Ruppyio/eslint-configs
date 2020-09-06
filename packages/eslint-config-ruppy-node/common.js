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
  env: { node: true },
  parserOptions: { ecmaVersion: 2019 },
  plugins: ['import', 'node'],
};
