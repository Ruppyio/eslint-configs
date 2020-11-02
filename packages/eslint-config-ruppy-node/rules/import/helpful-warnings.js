'use strict';

/**
 * @see https://github.com/benmosher/eslint-plugin-import#helpful-warnings
 */
module.exports = {
  rules: {
    // Report any invalid exports, i.e. re-export of the same name
    'import/export': 'error',

    // Report use of exported name as identifier of default export
    'import/no-named-as-default': 'error',

    // Report use of exported name as property of default export
    'import/no-named-as-default-member': 'error',

    // Report imported names marked with `@deprecated` documentation tag
    'import/no-deprecated': 'off',

    // Forbid the use of extraneous packages
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'test/**',
          'tests/**',
          'spec/**',
          'configs/**',
          '**/__tests__/**',
          '**/__mocks__/**',
          'test.{js,jsx,ts,tsx}',
          'test-*.{js,jsx,ts,tsx}',
          '**/*{.,_}{test,spec}.{js,jsx,ts,tsx}',
          '**/jest.setup.js',
          '**/webpack.*.{js,jsx,ts,tsx,yaml,yml,json,coffee}',
          '**/rollup.config.*.js',
          '**/gulpfile.js',
          '**/gulpfile.*.js',
          '**/Gruntfile{,.js}',
          '**/protractor.conf.js',
          '**/protractor.conf.*.js',
          '**/*.conf.{js,ts}',
          '**/*.config.{js,ts}',
          '**/*.d.ts',
        ],
        optionalDependencies: false,
      },
    ],

    // Forbid the use of mutable exports with `var` or `let`.
    'import/no-mutable-exports': 'error',

    // Report modules without exports, or exports without matching import in another module
    'import/no-unused-modules': 'off',
  },
};
