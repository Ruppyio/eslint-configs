'use strict';

module.exports = {
  root: true,
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        './rules/typescript-extensions',
        'prettier/@typescript-eslint',
      ],
      parserOptions: {
        warnOnUnsupportedTypeScriptVersion: true,
        project: 'tsconfig.json',
      },
      settings: { 'import/resolver': { typescript: {} } },
      rules: {
        // TypeScript's `noFallthroughCasesInSwitch` option is more robust
        'default-case': 'off',

        // TypeScript specific rules (preferences)
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/README.md#supported-rules
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/consistent-type-assertions': [
          'warn',
          {
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'allow-as-parameter',
          },
        ],
      },
      overrides: [
        {
          files: ['**/*.d.ts'],
          rules: {
            'import/no-extraneous-dependencies': 'off',

            '@typescript-eslint/ban-types': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/triple-slash-reference': 'off',

            '@typescript-eslint/no-use-before-define': 'off',
          },
        },
      ],
    },
  ],
};
