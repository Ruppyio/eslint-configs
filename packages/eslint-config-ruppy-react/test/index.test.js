'use strict';

const { ESLint } = require('eslint');
const path = require('path');
const getRuleFinder = require('eslint-find-rules');

function getDeprecated(configsFileName) {
  const ruleFinder = getRuleFinder(
    path.resolve(__dirname, '..', configsFileName)
  );
  const deprecated = ruleFinder.getDeprecatedRules();

  if (deprecated.length > 0) {
    // eslint-disable-next-line no-console
    console.log('Deprecated rules: ', deprecated);
  }

  return deprecated;
}

async function getReport(configsFileName) {
  const cli = new ESLint({
    ignore: false,
    useEslintrc: false,
    overrideConfigFile: path.resolve(__dirname, '..', configsFileName),
  });

  const report = await cli.lintFiles([
    'packages/eslint-config-ruppy-react/test/mocks/react-test-file.jsx',
  ]);

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
 * Test Suite for `ruppy-react` configs
 */
describe('ruppy-react', () => {
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
