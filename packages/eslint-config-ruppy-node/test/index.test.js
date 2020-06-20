'use strict';

const { ESLint } = require('eslint');
const path = require('path');
const getRuleFinder = require('eslint-find-rules');

function getDeprecated(configsFileName) {
  const ruleFinder = getRuleFinder(
    path.resolve(__dirname, '..', configsFileName)
  );
  const deprecated = ruleFinder.getDeprecatedRules();

  return deprecated;
}

async function getReport(configsFileName, isCommonJs = false) {
  const cli = new ESLint({
    ignore: false,
    useEslintrc: false,
    overrideConfigFile: path.resolve(__dirname, '..', configsFileName),
  });

  const files = [
    'packages/eslint-config-ruppy-node/test/mocks/node-test-file.js',
  ];
  const commonFiles = [
    'packages/eslint-config-ruppy-node/test/mocks/common-test-file.js',
  ];

  const report = await cli.lintFiles(isCommonJs ? commonFiles : files);

  const formatter = await cli.loadFormatter('stylish');
  const resultText = formatter.format(report);

  if (resultText.match('problems')) {
    // eslint-disable-next-line no-console
    console.log(resultText);
  }

  return resultText;
}

beforeEach(() => {
  process.env.ESLINT_CONFIG_PRETTIER_NO_DEPRECATED = 'true';
});

/**
 * Test Suite for `ruppy-node` configs
 */
describe('ruppy-node', () => {
  it('should have valid configurations', async () => {
    const report = await getReport('index.js');
    const problems = report.match('problems');
    expect(problems).toEqual(null);
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
  it('should have valid configurations', async () => {
    const report = await getReport('common.js', true);
    const problems = report.match('problems');
    expect(problems).toEqual(null);
  });

  it('should not contain deprecated rules', () => {
    const deprecated = getDeprecated('common.js');
    expect(deprecated).toEqual([]);
  });
});
