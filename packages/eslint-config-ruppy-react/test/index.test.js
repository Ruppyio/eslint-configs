'use strict';

const { getDeprecated, getReport } = require('../../../tests/jest.setup');

/**
 * Test Suite for `ruppy-react` configs
 */
describe('ruppy-react', () => {
  it('should have valid configurations', async () => {
    const report = await getReport({
      configPaths: [__dirname, '..', 'index.js'],
      testPaths: [__dirname, 'mocks', 'react-test-file.jsx'],
    });

    expect(report).toBeNull();
  });

  it('should not contain deprecated rules', () => {
    const deprecated = getDeprecated(__dirname, '..', 'index.js');

    expect(deprecated).toEqual([]);
  });
});
