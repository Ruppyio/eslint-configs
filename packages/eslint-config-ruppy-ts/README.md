# `eslint-config-ruppy-ts` 💪🏻

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/Ruppyio/eslint-configs/blob/main/CONTRIBUTING.md)
[![Discord](https://img.shields.io/discord/758271814153011201?label=Developers%20Indonesia&logo=discord&style=flat-square)](https://discord.gg/njSj2Nq "Chat and discuss at Developers Indonesia")

> Ruppy's eslint extension configs for Typescript projects

## Description

This eslint configurations is the extension of ruppy-configs for typescript project.

### `ruppy-ts`

This is the default configs. It contains recommended rules from plugin and the extension rules
from the plugin, also personal preferences.

**Important**: it needs `tsconfig.json` in your project. The path default to looked up
in your root project (`process.cwd()`). If you have another location of `tsconfig.json`,
you should add this settings in your `.eslintrc.js`:

```diff
module.exports = {
  extends: ['ruppy-react/ts', 'ruppy-ts'],
  env: { browser: true, jest: true },
+ parserOptions: {
+   // it accepts string, string[], or glob pattern
+   project: '**/{!(node_modules)/**,**}/tsconfig.json',
+ },
+ settings: {
+   'import/resolver': {
+     typescript: {
+       // it accept string, string[], or glob pattern
+       project: 'path/to/tsconfig.json',
+     },
+   },
+ },
}
```

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
  yarn add -D eslint-config-ruppy-react eslint-config-ruppy-ts eslint eslint-plugin-import eslint-plugin-node eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-prettier prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin typescript
  ```

  or

  ```bin
  npm install -D eslint-config-ruppy-react eslint-config-ruppy-ts eslint eslint-plugin-import eslint-plugin-node eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-prettier prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin typescript
  ```

- Create `.eslintrc.js` file in the root project and extends the configs.
  Also set the environment your project would live on.

  ```js
  module.exports = {
    extends: ["ruppy-react/ts, ruppy-ts"],
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
