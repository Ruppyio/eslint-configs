'use strict';

module.exports = {
  root: true,
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: ['./ts'],
    },
    {
      files: ['**/*.d.ts'],
      extends: ['./ts'],
      rules: {
        'import/no-extraneous-dependencies': 'off',

        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/triple-slash-reference': 'off',

        '@typescript-eslint/no-use-before-define': 'off',
      },
    },
  ],
};
