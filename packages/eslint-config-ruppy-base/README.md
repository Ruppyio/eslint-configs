# `eslint-config-ruppy-base` 🐣

> Ruppy's base eslint configurations

## Description

This eslint configurations is mostly follow and heavily inspired by
[Airbnb JavaScript Style Guide][airbnb]. Ruppy use [prettier][prettier] styles
for formatting the codes. With that it mind, this configs extends prettier
for linting javascript code styles with prettier.
This eslint configurations has two exported configs.

### `ruppy-base`

This is the default configs. It contains all [eslint rules][eslint-rules] without
deprecated and removed rules. It support for linting ES6+ javascript **without ESModule**.

### `ruppy-base/legacy`

This configs support for linting legacy javascript language (ES5 and below).

## Usage

- Install this configs and its peer dependencies.

  ```bin
  yarn add -D eslint-config-ruppy-base eslint eslint-plugin-prettier prettier
  ```

  or

  ```bin
  npm install -D eslint-config-ruppy-base eslint eslint-plugin-prettier prettier
  ```

- Create `.eslintrc.js` file in the root project and extends this configs.
  Also set the environment your project would live on.

  ```js
  module.exports = {
    extends: ["ruppy-base"], // or 'ruppy-base/legacy' for ES5 and below
    env: {
      node: true,
      browser: true,
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
