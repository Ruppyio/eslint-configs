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

  const env = await inquirer.prompt([
    {
      type: 'list',
      name: 'env',
      message: 'What type of project?',
      choices: ['nodeJS', { value: 'react', name: 'reactJS' }, 'vanilla'],
      default: 0,
    },
  ]);

  if (env.env === 'nodeJS') {
    value = await inquirer.prompt([
      {
        type: 'list',
        name: 'env',
        message: 'What type of modules?',
        choices: [
          { value: 'esm', name: 'ECMAScript modules' },
          { value: 'cjs', name: 'CommonJS modules' },
        ],
        default: 0,
      },
    ]);

    env.env = value.env;
  }

  if (env.env === 'vanilla') {
    value = await inquirer.prompt([
      {
        type: 'list',
        name: 'env',
        message: 'What syntax do you write?',
        choices: [
          { value: 'es6', name: 'ES2015++' },
          { value: 'es5', name: 'legacy codes' },
        ],
        default: 0,
      },
    ]);

    env.env = value.env;
  }

  if (env.env !== 'es5' && env.env !== 'cjs') {
    ts = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'typescript',
        message: 'Using typescript?',
        default: env.env !== 'es6',
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

  return { ...env, ...ts, ...manager };
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
    env: {
      node: true,
      browser: true,
      jest: true,
    },
  };

  const typescriptConfig = {
    parserOptions: {
      parser: '@typescript-eslint/parser',
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    settings: {
      'import/resolver': { typescript: {} },
    },
    rules: {
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  };

  const modules = [];

  if (answer.env === 'es6') {
    eslintConfig.extends.push('ruppy-base');
    modules.push('eslint-config-ruppy-base');
    modules.push(...fetchPeerDependencies('eslint-config-ruppy-base'));
  }

  if (answer.env === 'es5') {
    eslintConfig.extends.push('ruppy-base/legacy');
    modules.push('eslint-config-ruppy-base');
    modules.push(...fetchPeerDependencies('eslint-config-ruppy-base'));
  }

  if (answer.env === 'esm') {
    eslintConfig.extends.push('ruppy-node');
    modules.push('eslint-config-ruppy-node');
    modules.push(...fetchPeerDependencies('eslint-config-ruppy-node'));
  }

  if (answer.env === 'cjs') {
    eslintConfig.extends.push('ruppy-node/common');
    modules.push('eslint-config-ruppy-node');
    modules.push(...fetchPeerDependencies('eslint-config-ruppy-node'));
  }

  if (answer.env === 'react') {
    eslintConfig.extends.push('ruppy-react');
    modules.push('eslint-config-ruppy-react');
    modules.push(...fetchPeerDependencies('eslint-config-ruppy-react'));
  }

  if (answer.typescript) {
    eslintConfig.extends.push('plugin:@typescript-eslint/recommended');
    modules.push('eslint-import-resolver-typescript');
    modules.push('@typescript-eslint/eslint-plugin');
    modules.push('@typescript-eslint/parser');
    modules.push('typescript');
  }

  const configs = {
    ...eslintConfig,
    ...(answer.typescript ? typescriptConfig : {}),
  };

  return { configs, modules };
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
  await writeConfigs(configs, answer.env !== 'react' && answer.env !== 'esm');
  installPackages(answer, modules);
}

module.exports = { askQuestions, eslintRuppyCli };
