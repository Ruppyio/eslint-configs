'use strict';

const { getDeprecated, getReport } = require('../../../test/jest.setup');

/**
 * Test Suite for `ruppy-ts` configs
 */
describe('ruppy-ts', () => {
  it('should have valid configurations', async () => {
    const report = await getReport({
      configPaths: [__dirname, 'mocks', 'index.js'],
      testPaths: [__dirname, 'mocks', 'typescript-test-file.ts'],
    });

    expect(report).toBeNull();
  });

  it('should not contain deprecated rules', () => {
    const deprecated = getDeprecated(__dirname, '..', 'index.js');

    expect(deprecated).toEqual([]);
  });
});
