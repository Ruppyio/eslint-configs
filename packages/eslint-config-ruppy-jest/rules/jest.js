'use strict';

/**
 * @see https://github.com/jest-community/eslint-plugin-jest#rules
 */
module.exports = {
  rules: {
    // recommended
    'jest/expect-expect': [
      'warn',
      {
        assertFunctionNames: [
          'expect',
          'expect.**',
          'request.**.expect',
          'assert',
          'assert.**',
        ],
      },
    ],
    'jest/no-commented-out-tests': 'warn',
    'jest/no-conditional-expect': 'error',
    'jest/no-deprecated-functions': 'error',
    'jest/no-disabled-tests': 'warn',
    'jest/no-done-callback': 'error',
    'jest/no-export': 'error',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/no-interpolation-in-snapshots': 'error',
    'jest/no-jasmine-globals': 'error',
    'jest/no-jest-import': 'error',
    'jest/no-mocks-import': 'error',
    'jest/no-standalone-expect': 'error',
    'jest/no-test-prefixes': 'error',
    'jest/valid-describe': 'error',
    'jest/valid-expect': 'error',
    'jest/valid-expect-in-promise': 'error',
    'jest/valid-title': 'error',

    // style
    'jest/no-alias-methods': 'warn',
    'jest/prefer-to-be-null': 'error',
    'jest/prefer-to-be-undefined': 'error',
    'jest/prefer-to-contain': 'error',
    'jest/prefer-to-have-length': 'error',

    // preferences
    'jest/consistent-test-it': 'error',
    'jest/no-duplicate-hooks': 'error',
    'jest/no-if': 'error',
    'jest/prefer-todo': 'error',

    // unused
    'jest/lowercase-name': 'off',
    'jest/no-hooks': 'off',
    'jest/no-large-snapshots': 'off',
    'jest/no-restricted-matchers': 'off',
    'jest/no-test-return-statement': 'off',
    'jest/prefer-called-with': 'off',
    'jest/prefer-expect-assertions': 'off',
    'jest/prefer-hooks-on-top': 'off',
    'jest/prefer-spy-on': 'off',
    'jest/prefer-strict-equal': 'off',
    'jest/require-to-throw-message': 'off',
    'jest/require-top-level-describe	': 'off',
  },
};
