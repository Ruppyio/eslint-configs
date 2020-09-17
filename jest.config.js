'use strict';
// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  testTimeout: 15000,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  collectCoverage: true,
  collectCoverageFrom: [
    'packages/**/*.{js,jsx,ts,tsx}',
    '!packages/**/{test,tests}/**/*',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!**/vendor/**',
    '!**/dist/**',
  ],
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.js'],
  errorOnDeprecated: true,
  testEnvironment: 'node',
  verbose: true,
};
