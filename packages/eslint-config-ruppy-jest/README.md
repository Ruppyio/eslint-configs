# `eslint-config-ruppy-jest` 🃏

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/Ruppyio/eslint-configs/blob/main/CONTRIBUTING.md)
[![Discord](https://img.shields.io/discord/758271814153011201?label=Developers%20Indonesia&logo=discord&style=flat-square)](https://discord.gg/njSj2Nq "Chat and discuss at Developers Indonesia")

> Ruppy's eslint extension configs for Jest environments

## Description

This eslint configurations is the extension of ruppy-configs for jest environments.

### `ruppy-jest`

This is the default configs. It contains recommended and style rules from plugin and,
also personal preferences.

## Usage

- The easiest way to add this configs into project is running this commands in your root project:

  ```bin
  npx eslint-ruppy -i
  ```

---

**OR** follow along these steps below:

- This configs use need another config. This config only extension.
  Example use along with ruppy-react:

- Install this configs and its peer dependencies.

  ```bin
  yarn add -D eslint-config-ruppy-react eslint-config-ruppy-jest eslint eslint-plugin-import eslint-plugin-node eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-jest eslint-plugin-prettier prettier
  ```

  or

  ```bin
  npm install -D eslint-config-ruppy-react eslint-config-ruppy-ts eslint eslint-plugin-import eslint-plugin-node eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-jest eslint-plugin-prettier prettier
  ```

- Create `.eslintrc.js` file in the root project and extends the configs.
  Also set the environment your project would live on.

  ```js
  module.exports = {
    extends: ["ruppy-react, ruppy-jest"],
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

[airbnb]: https://github.com/airbnb/javascript "Airbnb JavaScript Style Guide"
[eslint-rules]: https://eslint.org/docs/rules/ "ESLint Rules"
[eslint-env]: https://eslint.org/docs/user-guide/configuring#specifying-environments "ESLint Environments"
[prettier]: https://prettier.io/ "Prettier Code Formatter"
[prettier-option]: https://prettier.io/docs/en/options.html "Prettier Options"
[prettier-config]: https://prettier.io/docs/en/configuration.html "Prettier Configurations"
