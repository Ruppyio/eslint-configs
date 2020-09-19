'use strict';

module.exports = {
  overrides: [
    {
      files: [
        '**/__tests__/**',
        '**/*.{spec,test}.*',
        '**/{jest,test,tests}.{setup,utils,helper}.*',
      ],
      extends: ['./rules/jest.js'],
      env: { 'jest/globals': true },
      plugins: ['jest'],
    },
  ],
};
