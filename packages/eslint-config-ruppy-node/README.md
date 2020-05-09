# `eslint-config-ruppy-node` 🐥

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/Ruppyio/eslint-configs/blob/master/CHANGELOG.md)
[![Discord](https://img.shields.io/discord/340308951826694157?style=flat-square&logo=discord&label=chat+and+discuss)](https://discord.gg/Zw8d3wy "Emperor Ruppy's Kingdom")

> Ruppy's eslint configs for NodeJS projects

## Description

This eslint configurations is mostly follow and heavily inspired by
[Airbnb JavaScript Style Guide][airbnb]. Ruppy use [prettier][prettier] styles
for formatting the codes. With that it mind, this configs extends prettier
for linting javascript code styles with prettier.
This eslint configurations has two exported configs.

### `ruppy-node`

This is the default configs. This configs is suitable for linting nodeJS project.
It support for linting ES6+ javascript **with ESModule** (`import`/`export` syntax).

### `ruppy-node/common`

This configs is suitable for linting nodeJS project.
It support for linting ES6+ javascript **without ESModule** (`require()` syntax).

## Usage

- Install this configs and its peer dependencies.

  ```bin
  yarn add -D eslint-config-ruppy-node eslint eslint-plugin-node eslint-plugin-import eslint-plugin-prettier prettier
  ```

  or

  ```bin
  npm install -D eslint-config-ruppy-node eslint eslint-plugin-node eslint-plugin-import eslint-plugin-prettier prettier
  ```

- Create `.eslintrc.js` file in the root project and extends this configs.
  Also set the environment your project would live on.

  ```js
  module.exports = {
    extends: ["ruppy-node"], // or 'ruppy-node/common'
    env: {
      jest: true,
    },
  };
  ```

  An environment defines global variables that are predefined.
  See [eslint configurations guide][eslint-env] for available environments.

- Optionally create prettier configuration file for the code styles, `.prettierrc`:

  ```json
  {
    "overrides": [
      {
        "files": "*.{js,jsx,ts,tsx}",
        "options": {
          "singleQuote": true
        }
      }
    ]
  }
  ```

  See all available [prettier options][prettier-option] and
  [how to write configuration files][prettier-config] to see more info on that.

## Hacking to the Gate~! 🎶

<!-- Variables -->

[airbnb]: https://github.com/airbnb/javascript "Airbnb JavaScript Style Guide"
[eslint-rules]: https://eslint.org/docs/rules/ "ESLint Rules"
[eslint-env]: https://eslint.org/docs/user-guide/configuring#specifying-environments "ESLint Environments"
[prettier]: https://prettier.io/ "Prettier Code Formatter"
[prettier-option]: https://prettier.io/docs/en/options.html "Prettier Options"
[prettier-config]: https://prettier.io/docs/en/configuration.html "Prettier Configurations"
