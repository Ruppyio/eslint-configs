'use strict';

const { getDeprecated, getReport } = require('../../../test/jest.setup');

/**
 * Test Suite for `ruppy-node` configs
 */
describe('ruppy-node', () => {
  it('should have valid configurations', async () => {
    const report = await getReport({
      configPaths: [__dirname, '..', 'index.js'],
      testPaths: [__dirname, 'mocks', 'node-test-file.js'],
    });

    expect(report).toBeNull();
  });

  it('should not contain deprecated rules', () => {
    const deprecated = getDeprecated(__dirname, '..', 'index.js');

    expect(deprecated).toEqual([]);
  });
});

/**
 * Test Suite for `ruppy-node/common` configs
 */
describe('ruppy-node/common', () => {
  it('should have valid configurations', async () => {
    const report = await getReport({
      configPaths: [__dirname, '..', 'common.js'],
      testPaths: [__dirname, 'mocks', 'common-test-file.js'],
    });

    expect(report).toBeNull();
  });

  it('should not contain deprecated rules', () => {
    const deprecated = getDeprecated(__dirname, '..', 'common.js');

    expect(deprecated).toEqual([]);
  });
});
