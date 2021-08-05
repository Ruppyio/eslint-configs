# `eslint-config-ruppy-react` ⚛🐤

[![Discord][discord-image]][discord-url]
[![GitHub Workflow Status][workflow-image]][workflow-url]
[![NPM Package][npm-image]][npm-url]

> Ruppy's eslint configs for React.js projects

## Description

This eslint configurations is mostly follow and heavily inspired by
[Airbnb JavaScript Style Guide][airbnb]. Ruppy use [prettier][prettier] styles
for formatting the codes. With that it mind, this configs extends prettier
for linting javascript code styles with prettier.

### `ruppy-react`

This is the default configs. It contains all [eslint rules][eslint-rules] without
deprecated and removed rules. It support for linting ES2015/ES6 - ESNext javascript
syntax with **assumption you have polyfill for ESNext** syntax.
It enforce linting for react and JSX.

### `ruppy-react/ts`

This is the extension configs for typescript. This disable some rules not needed for TS (like
props validation).

## Usage

- The easiest way to add this configs into project is running this commands in your root project:

  ```bin
  npx eslint-ruppy -i
  ```

---

**OR** follow along these steps below:

- Install this configs and its peer dependencies.

  ```bin
  yarn add -D eslint-config-ruppy-react eslint prettier
  ```

  or

  ```bin
  npm install -D eslint-config-ruppy-react eslint prettier
  ```

- Create `.eslintrc.js` file in the root project and extends this configs.
  Also set the environment your project would live on.

  ```js
  require("eslint-config-ruppy-react/patch");

  module.exports = {
    extends: ["ruppy-react"],
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
[npm-image]: https://img.shields.io/npm/v/eslint-config-ruppy-react?label=package&logo=npm&style=flat-square
[npm-url]: https://npmjs.org/package/eslint-config-ruppy-react "eslint-config-ruppy-react on NPM"
[airbnb]: https://github.com/airbnb/javascript "Airbnb JavaScript Style Guide"
[eslint-rules]: https://eslint.org/docs/rules/ "ESLint Rules"
[eslint-env]: https://eslint.org/docs/user-guide/configuring#specifying-environments "ESLint Environments"
[prettier]: https://prettier.io/ "Prettier Code Formatter"
[prettier-option]: https://prettier.io/docs/en/options.html "Prettier Options"
[prettier-config]: https://prettier.io/docs/en/configuration.html "Prettier Configurations"
