'use strict';

const { getDeprecated, getReport } = require('../../../test/jest.setup');

/**
 * Test Suite for `ruppy-jest` configs
 */
describe('ruppy-jest', () => {
  it('should have valid configurations', async () => {
    const report = await getReport({
      configPaths: [__dirname, 'mocks', 'index.js'],
      testPaths: [__dirname, 'mocks', 'test-file.js'],
    });

    expect(report).toBeNull();
  });

  it('should not contain deprecated rules', () => {
    const deprecated = getDeprecated(__dirname, '..', 'index.js');

    expect(deprecated).toEqual([]);
  });
});
