# Changelog

All notable changes to this project will be documented in this file.

This project adheres to [Semantic Versioning](https://semver.org) and [Conventional Commits](https://www.conventionalcommits.org) for commit guidelines.

## [eslint-ruppy-v2.1.0](https://github.com/Ruppyio/eslint-configs/compare/eslint-ruppy@2.0.0...eslint-ruppy@2.1.0) (2021-08-07)

### ✨ Features

- support `cjs` and `mjs` files ([623fba1](https://github.com/Ruppyio/eslint-configs/commit/623fba1a0094317c2cfb018dfbc7e3619da47b77))

### 🐛 Fixes

- **ruppy-cli:** resolve `await` typo for patch path ([26247f5](https://github.com/Ruppyio/eslint-configs/commit/26247f5b974eaf700a1eb5f5e33921f7f28bb626))

## [eslint-ruppy-v2.0.0](https://github.com/Ruppyio/eslint-configs/compare/eslint-ruppy@1.5.0...eslint-ruppy@2.0.0) (2021-08-05)

### ⚠ BREAKING CHANGES

- Now plugins resolved from configs so you don't need to
  install plugins yourself (previously with peerDependencies). Instead you need
  to include the eslint patch in the root eslint configuration. Example:

```js
// file: .eslintrc.js
require("eslint-config-node/patch");

module.exports = {
  /** the configs */
};
```

### ✨ Features

- resolve plugins from configs 🛣 ([8ce6fe3](https://github.com/Ruppyio/eslint-configs/commit/8ce6fe3d2b6ccf0136bc4b8a0cd6ffdbb42c5594))

### 🐛 Fixes

- **ruppy-cli:** detect if using `yarn berry` for workspace 🐱‍👤 ([e2b69ef](https://github.com/Ruppyio/eslint-configs/commit/e2b69efb7fa258c31f5c705cb2618b420e20ffb2))

### 📚 Documentations

- **readme:** add warning on usage ([16f5ce8](https://github.com/Ruppyio/eslint-configs/commit/16f5ce8a6ed8fdaf1200aafa2b4494ef7788e979))
