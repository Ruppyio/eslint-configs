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

function getReport(configsFileName, isCommonJs = false) {
  const cli = new CLIEngine({
    configFile: path.resolve(__dirname, '..', configsFileName),
    envs: ['node', 'jest'],
    useEslintrc: false,
  });

  const text =
    "const foo = 'bar';\n// eslint-disable-next-line no-console\nconsole.log(foo);\n";
  const textCommonJs =
    "'use strict';\n\nconst foo = 'bar';\n// eslint-disable-next-line no-console\nconsole.log(foo);\n";

  const report = cli.executeOnText(isCommonJs ? textCommonJs : text, 'test.js');

  return report;
}

beforeEach(() => {
  process.env.ESLINT_CONFIG_PRETTIER_NO_DEPRECATED = 'true';
});

/**
 * Test Suite for `ruppy-node` configs
 */
describe('ruppy-node', () => {
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

/**
 * Test Suite for `ruppy-node/common` configs
 */
describe('ruppy-node/common', () => {
  it('should have valid configurations', () => {
    const report = getReport('common.js', true);
    expect(report.errorCount).toBe(0);
    expect(report.warningCount).toBe(0);
  });

  it('should not contain deprecated rules', () => {
    const deprecated = getDeprecated('common.js');
    expect(deprecated).toEqual([]);
  });
});
