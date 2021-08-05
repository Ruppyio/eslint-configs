# `eslint-config-ruppy-node` 🐥

[![Discord][discord-image]][discord-url]
[![GitHub Workflow Status][workflow-image]][workflow-url]
[![NPM Package][npm-image]][npm-url]

> Ruppy's eslint configs for NodeJS projects

## Description

This eslint configurations is mostly follow and heavily inspired by
[Airbnb JavaScript Style Guide][airbnb]. Ruppy use [prettier][prettier] styles
for formatting the codes. With that it mind, this configs extends prettier
for linting javascript code styles with prettier.
This eslint configurations has two exported configs.

### `ruppy-node`

This is the default configs. This configs is suitable for linting nodeJS project.
It support for linting ES2015/ES6 - ESNext javascript syntax **with ESModules**
(`import`/`export` syntax) with **assumption you have polyfill for ESNext** syntax.

### `ruppy-node/common`

This configs is suitable for linting nodeJS project.
It support for linting ES2015+/ES6+ javascript syntax **without ESModules**
(`require()` syntax) with assumption you use minimum node version to
**node LTS (12.18.3 LTS)**.

## Usage

- The easiest way to add this configs into project is running this commands in your root project:

  ```bin
  npx eslint-ruppy -i
  ```

---

**OR** follow along these steps below:

- Install this configs and its peer dependencies.

  ```bin
  yarn add -D eslint-config-ruppy-node eslint prettier
  ```

  or

  ```bin
  npm install -D eslint-config-ruppy-node eslint prettier
  ```

- Create `.eslintrc.js` file in the root project and extends this configs.
  Also set the environment your project would live on.

  ```js
  require("eslint-config-ruppy-node/patch");

  module.exports = {
    extends: ["ruppy-node"], // or 'ruppy-node/common'
    env: {},
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

[discord-image]: https://img.shields.io/discord/758271814153011201?label=Developers%20Indonesia&logo=discord&style=flat-square
[discord-url]: https://discord.gg/njSj2Nq "Chat and discuss at Developers Indonesia"
[workflow-image]: https://img.shields.io/github/workflow/status/Ruppyio/eslint-configs/Continuous%20Integration%20and%20Continuous%20Delivery%20%E2%9A%99%F0%9F%9A%80?label=CI%2FCD&logo=github%20actions&style=flat-square
[workflow-url]: https://github.com/Ruppyio/eslint-configs/actions "GitHub Actions"
[npm-image]: https://img.shields.io/npm/v/eslint-config-ruppy-node?label=package&logo=npm&style=flat-square
[npm-url]: https://npmjs.org/package/eslint-config-ruppy-node "eslint-config-ruppy-node on NPM"
[airbnb]: https://github.com/airbnb/javascript "Airbnb JavaScript Style Guide"
[eslint-rules]: https://eslint.org/docs/rules/ "ESLint Rules"
[eslint-env]: https://eslint.org/docs/user-guide/configuring#specifying-environments "ESLint Environments"
[prettier]: https://prettier.io/ "Prettier Code Formatter"
[prettier-option]: https://prettier.io/docs/en/options.html "Prettier Options"
[prettier-config]: https://prettier.io/docs/en/configuration.html "Prettier Configurations"
