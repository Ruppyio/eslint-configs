'use strict';

const { CLIEngine } = require('eslint');
const path = require('path');
const getRuleFinder = require('eslint-find-rules');

function getDeprecated(configsFileName) {
  const ruleFinder = getRuleFinder(
    path.resolve(__dirname, '..', configsFileName)
  );
  const deprecated = ruleFinder.getDeprecatedRules();

  return deprecated;
}

function getReport(configsFileName) {
  const cli = new CLIEngine({
    configFile: path.resolve(__dirname, '..', configsFileName),
    envs: ['node', 'jest'],
    useEslintrc: false,
  });

  const report = cli.executeOnFiles(['**/react-test-file.jsx']);

  return report;
}

beforeEach(() => {
  process.env.ESLINT_CONFIG_PRETTIER_NO_DEPRECATED = 'true';
});

/**
 * Test Suite for `ruppy-react` configs
 */
describe('ruppy-react', () => {
  it('should have valid configurations', () => {
    const report = getReport('index.js');
    expect(report.errorCount).toBe(0);
    expect(report.warningCount).toBe(0);
  });

  it('should not contain deprecated rules', () => {
    const deprecated = getDeprecated('index.js');
    expect(deprecated).toEqual([]);
  });
});
