'use strict';

module.exports = {
  root: true,
  extends: [
    './rules/possible-errors',
    './rules/best-practices',
    './rules/strict-mode',
    './rules/variables',
    './rules/stylistic-issues',
    './rules/ecmascript6',
    'plugin:prettier/recommended',
  ],
  env: { es6: true, es2017: true },
  parserOptions: { ecmaVersion: 2017 },
};
