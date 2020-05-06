'use strict';

module.exports = {
  root: true,
  extends: [
    './rules/possible-errors',
    './rules/best-practices',
    './rules/strict-mode',
    './rules/variables',
    './rules/stylistic-issues',
    'plugin:prettier/recommended',
  ],
  rules: {
    /**
     * Best Practices
     */
    'no-restricted-properties': [
      'error',
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated',
      },
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.',
      },
    ],

    /**
     * Stylistic Issues
     */
    'comma-dangle': ['error', 'never'],
    'prefer-object-spread': 'off',
  },
};
