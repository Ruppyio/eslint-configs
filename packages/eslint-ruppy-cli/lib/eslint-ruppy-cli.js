/* eslint-disable no-console */
'use strict';

const inquirer = require('inquirer');
const spawn = require('cross-spawn');
const { format } = require('prettier');
const { join } = require('path');
const { copyFile, writeFile } = require('fs').promises;
const {
  constants: { COPYFILE_EXCL },
} = require('fs');

async function askQuestions() {
  let value;
  let ts;

  const projType = await inquirer.prompt([
    {
      type: 'list',
      name: 'type',
      message: 'What type of project?',
      choices: ['nodeJS', { value: 'react', name: 'reactJS' }, 'vanilla'],
      default: 0,
    },
  ]);

  if (projType.type === 'nodeJS') {
    value = await inquirer.prompt([
      {
        type: 'list',
        name: 'type',
        message: 'What type of modules?',
        choices: [
          { value: 'esm', name: 'ECMAScript modules' },
          { value: 'cjs', name: 'CommonJS modules' },
        ],
        default: 0,
      },
    ]);

    projType.type = value.type;
  }

  if (projType.type === 'vanilla') {
    value = await inquirer.prompt([
      {
        type: 'list',
        name: 'type',
        message: 'What syntax do you write?',
        choices: [
          { value: 'es6', name: 'ES2015+ syntax' },
          { value: 'es5', name: 'legacy JS syntax' },
        ],
        default: 0,
      },
    ]);

    projType.type = value.type;
  }

  const env = await inquirer.prompt([
    {
      type: 'checkbox',
      name: 'env',
      message:
        'Select additional environments! (Node env already selected for node based configs)\nMore: https://eslint.org/docs/user-guide/configuring#specifying-environments',
      choices: [
        { name: 'browser', checked: true },
        { name: 'jest' },
        { name: 'serviceworker' },
      ],
    },
  ]);

  if (projType.type !== 'es5' && projType.type !== 'cjs') {
    ts = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'typescript',
        message: 'Using typescript?',
        default: projType.type !== 'es6',
      },
    ]);
  }

  const manager = await inquirer.prompt([
    {
      type: 'list',
      name: 'manager',
      message: 'What package manager for installing devDependencies?',
      choices: ['yarn', 'npm', 'pnpm'],
      default: 0,
    },
  ]);

  return { ...projType, ...env, ...ts, ...manager };
}

function fetchPeerDependencies(packageName) {
  const npmProcess = spawn.sync(
    'npm',
    ['view', '--json', packageName, 'peerDependencies'],
    { encoding: 'utf8' }
  );

  const { error } = npmProcess;

  if (error && error.code === 'ENOENT') {
    return null;
  }

  const fetchedText = npmProcess.stdout.trim();

  const packageObject = JSON.parse(fetchedText || '{}');

  return Object.keys(packageObject);
}

function eslintConfigs(answer) {
  const eslintConfig = {
    extends: [],
    env: {},
  };

  const modules = [];

  answer.env.forEach((item) => {
    eslintConfig.env[item] = true;
  });

  if (answer.type === 'es6') {
    eslintConfig.extends.push('ruppy-base');
    modules.push('eslint-config-ruppy-base');
    modules.push(...fetchPeerDependencies('eslint-config-ruppy-base'));
  }

  if (answer.type === 'es5') {
    eslintConfig.extends.push('ruppy-base/legacy');
    modules.push('eslint-config-ruppy-base');
    modules.push(...fetchPeerDependencies('eslint-config-ruppy-base'));
  }

  if (answer.type === 'esm') {
    eslintConfig.extends.push('ruppy-node');
    modules.push('eslint-config-ruppy-node');
    modules.push(...fetchPeerDependencies('eslint-config-ruppy-node'));
  }

  if (answer.type === 'cjs') {
    eslintConfig.extends.push('ruppy-node/common');
    modules.push('eslint-config-ruppy-node');
    modules.push(...fetchPeerDependencies('eslint-config-ruppy-node'));
  }

  if (answer.type === 'react') {
    eslintConfig.extends.push(
      answer.typescript ? 'ruppy-react/ts' : 'ruppy-react'
    );
    modules.push('eslint-config-ruppy-react');
    modules.push(...fetchPeerDependencies('eslint-config-ruppy-react'));
  }

  if (answer.typescript) {
    eslintConfig.extends.push('ruppy-ts');
    modules.push('eslint-config-ruppy-ts');
    modules.push(...fetchPeerDependencies('eslint-config-ruppy-ts'));
  }

  return { configs: eslintConfig, modules };
}

async function writeConfigs(config, useStrict) {
  const ignoreFile = join(__dirname, 'configs', 'ignore-file');
  const prettierConfig = join(__dirname, 'configs', 'prettierrc');
  const configString = JSON.stringify(config);
  const jsStrict = useStrict ? "'use strict';\n\n" : '';
  const jsString = format(`${jsStrict}module.exports = ${configString};\n`, {
    singleQuote: true,
    parser: 'babel',
  });

  try {
    await Promise.all([
      copyFile(
        prettierConfig,
        join(process.cwd(), '.prettierrc'),
        COPYFILE_EXCL
      ),
      copyFile(
        ignoreFile,
        join(process.cwd(), '.prettierignore'),
        COPYFILE_EXCL
      ),
      copyFile(ignoreFile, join(process.cwd(), '.eslintignore'), COPYFILE_EXCL),
      writeFile(join(process.cwd(), '.eslintrc.js'), jsString),
    ]);
  } catch (error) {
    if (error.code !== 'EEXIST') {
      console.error(error);
    }
  }
}

function installPackages(answer, modules) {
  let npmProcess;
  const { manager } = answer;

  if (manager === 'npm') {
    npmProcess = spawn.sync('npm', ['i', '--save-dev'].concat(modules), {
      stdio: 'inherit',
    });
  } else {
    npmProcess = spawn.sync(manager, ['add', '-D'].concat(modules), {
      stdio: 'inherit',
    });
  }

  const { error } = npmProcess;

  if (error && error.code === 'ENOENT') {
    const pluralS = modules.length > 1 ? 's' : '';

    console.error(
      `Could not execute npm. Please install the following package${pluralS} with a package manager of your choice: ${modules.join(
        ', '
      )}`
    );
  }
}

async function eslintRuppyCli() {
  const answer = await askQuestions();
  const { configs, modules } = eslintConfigs(answer);
  await writeConfigs(configs, answer.type !== 'react' && answer.type !== 'esm');
  installPackages(answer, modules);
}

module.exports = { askQuestions, eslintRuppyCli };
