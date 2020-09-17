'use strict';

/**
 * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/README.md#extension-rules
 */
module.exports = {
  rules: {
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': 'error',

    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: false,
        exceptAfterOverload: true,
      },
    ],

    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',

    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': [
      'error',
      {
        allow: ['arrowFunctions', 'functions', 'methods'],
      },
    ],

    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': 'error',

    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
      },
    ],

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: true,
        classes: true,
        variables: true,
        enums: true,
        typedefs: true,
        ignoreTypeReferences: false,
      },
    ],

    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',

    'no-return-await': 'off',
    '@typescript-eslint/return-await': 'error',
  },
};
