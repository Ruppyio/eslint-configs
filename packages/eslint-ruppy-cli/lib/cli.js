'use strict';

const factory = require('yargs/yargs');
const eslintRuppyCli = require('./eslint-ruppy-cli');

function cli(cwd) {
  const parser = factory(null, cwd);

  parser.alias('h', 'help');
  parser.alias('v', 'version');

  parser.usage(
    '$0',
    'Bootstrap eslint configs (+ prettier configs) into projects 🐣',
    (yargs) => {
      yargs.options({
        i: {
          alias: ['init', 'bootstrap'],
          demandOption: true,
          describe: 'Bootstrap the configs into current working directory.',
          type: 'boolean',
        },
      });
      yargs.epilog(
        `Presented by https://ruppy.io © ${new Date().getFullYear()}`
      );
    },
    (argv) => eslintRuppyCli(argv)
  );

  return parser;
}

module.exports = cli;
