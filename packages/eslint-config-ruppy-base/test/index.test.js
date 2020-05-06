'use strict';

const { CLIEngine } = require('eslint');
const path = require('path');
const getRuleFinder = require('eslint-find-rules');

function getDeprecated(configsFileName) {
  const ruleFinder = getRuleFinder(
    path.resolve(__dirname, '..', configsFileName)
  );
  const deprecated = ruleFinder.getDeprecatedRules();

  expect(deprecated).toEqual([]);
}

function getReport(configsFileName, isLegacy = false) {
  const cli = new CLIEngine({
    configFile: path.resolve(__dirname, '..', configsFileName),
    envs: ['node', 'jest'],
    useEslintrc: false,
  });

  const files = ['.'];
  const text =
    "'use strict';\nvar foo = 'bar';\n// eslint-disable-next-line no-console\nconsole.log(foo);\n";

  const report = isLegacy
    ? cli.executeOnText(text, 'test-legacy.js')
    : cli.executeOnFiles(files);

  return report;
}

beforeEach(() => {
  process.env.ESLINT_CONFIG_PRETTIER_NO_DEPRECATED = 'true';
});

/**
 * Test Suite for `ruppy-base` configs
 */
describe('ruppy-base', () => {
  it('should have valid configurations', () => {
    const report = getReport('index.js');
    expect(report.errorCount).toBe(0);
    expect(report.warningCount).toBe(0);
  });

  it('should not contain deprecated rules', () => {
    getDeprecated('index.js');
  });
});

/**
 * Test Suite for `ruppy-base/legacy` configs
 */
describe('ruppy-base/legacy', () => {
  it('should have valid configurations', () => {
    const report = getReport('legacy.js', true);
    expect(report.errorCount).toBe(0);
    expect(report.warningCount).toBe(0);
  });

  it('should not contain deprecated rules', () => {
    getDeprecated('legacy.js');
  });
});
