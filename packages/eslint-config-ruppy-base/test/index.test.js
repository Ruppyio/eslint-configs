'use strict';

const { getDeprecated, getReport } = require('../../../test/jest.setup');

/**
 * Test Suite for `ruppy-base` configs
 */
describe('ruppy-base', () => {
  it('should have valid configurations', async () => {
    const report = await getReport({
      configPaths: [__dirname, 'mocks', 'index.js'],
      testPaths: [__dirname, 'mocks', 'base-test-file.js'],
    });

    expect(report).toBeNull();
  });

  it('should not contain deprecated rules', () => {
    const deprecated = getDeprecated(__dirname, '..', 'index.js');

    expect(deprecated).toEqual([]);
  });
});

/**
 * Test Suite for `ruppy-base/legacy` configs
 */
describe('ruppy-base/legacy', () => {
  it('should have valid configurations', async () => {
    const report = await getReport({
      configPaths: [__dirname, 'mocks', 'legacy.js'],
      testPaths: [__dirname, 'mocks', 'legacy-test-file.js'],
    });

    expect(report).toBeNull();
  });

  it('should not contain deprecated rules', () => {
    const deprecated = getDeprecated(__dirname, '..', 'legacy.js');

    expect(deprecated).toEqual([]);
  });
});
