'use strict';

const { ESLint } = require('eslint');
const path = require('path');
const getRuleFinder = require('eslint-find-rules');

/**
 * Get deprecated rules for configs
 * @param  {...string} paths - absolute paths section
 */
function getDeprecated(...paths) {
  const ruleFinder = getRuleFinder(path.resolve(...paths));
  const deprecated = ruleFinder.getDeprecatedRules();

  if (deprecated.length > 0) {
    // eslint-disable-next-line no-console
    console.log('Deprecated rules: ', deprecated);
  }

  return deprecated;
}

/**
 * GetReport for rule configs
 *
 * @param {Object} report - report options
 * @param {string[]} report.configPaths - absolute paths to config file
 * @param {string[]} report.testPaths - absolute paths to test target
 */
async function getReport({ configPaths, testPaths }) {
  const cli = new ESLint({
    ignore: false,
    useEslintrc: false,
    overrideConfigFile: path.resolve(...configPaths),
  });

  const testTarget = path.resolve(...testPaths);

  const report = await cli.lintFiles(testTarget);

  const formatter = await cli.loadFormatter('stylish');
  const resultText = formatter.format(report);
  const problems = resultText.match(/problem/gim);

  if (problems) {
    // eslint-disable-next-line no-console
    console.log(resultText);
  }

  return resultText.match(/problem/gim);
}

beforeEach(() => {
  process.env.ESLINT_CONFIG_PRETTIER_NO_DEPRECATED = 'true';
});

module.exports = { getDeprecated, getReport };
