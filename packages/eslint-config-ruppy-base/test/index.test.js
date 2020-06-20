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

async function getReport(configsFileName, isLegacy = false) {
  const cli = new ESLint({
    ignore: false,
    useEslintrc: false,
    overrideConfigFile: path.resolve(__dirname, '..', configsFileName),
    overrideConfig: {
      env: {
        browser: true,
      },
    },
  });

  const files = [
    'packages/eslint-config-ruppy-base/test/mocks/base-test-file.js',
  ];
  const legacyFiles = [
    'packages/eslint-config-ruppy-base/test/mocks/legacy-test-file.js',
  ];

  const report = await cli.lintFiles(isLegacy ? legacyFiles : files);

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
 * Test Suite for `ruppy-base` configs
 */
describe('ruppy-base', () => {
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
 * Test Suite for `ruppy-base/legacy` configs
 */
describe('ruppy-base/legacy', () => {
  it('should have valid configurations', async () => {
    const report = await getReport('legacy.js', true);
    const problems = report.match('problems');
    expect(problems).toEqual(null);
  });

  it('should not contain deprecated rules', () => {
    const deprecated = getDeprecated('legacy.js');
    expect(deprecated).toEqual([]);
  });
});
