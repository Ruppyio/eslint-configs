# Changelog

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](https://semver.org) and [Conventional Commits](https://www.conventionalcommits.org) for commit guidelines.

## [eslint-config-ruppy-base-v3.0.0](https://github.com/Ruppyio/eslint-configs/compare/eslint-config-ruppy-base@2.0.1...eslint-config-ruppy-base@3.0.0) (2021-09-12)

### ⚠ BREAKING CHANGES

- **deps:** `eslint-plugin-prettier` drops support for old versions of ESLint, Prettier and Node.
  You must use at least ESLint v7.28.0, Prettier v2.0.0 and Node v12.0.0.
  Aside from that, usage of this config remains identical.

### 🏗️ Builds System

- **deps:** upgrade `eslint-plugin-prettier` to v4 [`2541c33`](https://github.com/Ruppyio/eslint-configs/commit/2541c33dbf50fd9f8769fcc6217fa4bde0a6b4e9).

# Changelog

All notable changes to this project will be documented in this file.

This project adheres to [Semantic Versioning](https://semver.org) and [Conventional Commits](https://www.conventionalcommits.org) for commit guidelines.

## [eslint-config-ruppy-base-v2.0.1](https://github.com/Ruppyio/eslint-configs/compare/eslint-config-ruppy-base@2.0.0...eslint-config-ruppy-base@2.0.1) (2021-08-07)

### 🐛 Fixes

- include missing patch file 🤦‍♂️ ([a2a1b5c](https://github.com/Ruppyio/eslint-configs/commit/a2a1b5c2030524cbd855abfc1e6eb8465b78feb0))

## [eslint-config-ruppy-base-v2.0.0](https://github.com/Ruppyio/eslint-configs/compare/eslint-config-ruppy-base@1.6.1...eslint-config-ruppy-base@2.0.0) (2021-08-05)

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

### 📚 Documentations

- **readme:** update usage to reflect peerDeps problem ([97d57f5](https://github.com/Ruppyio/eslint-configs/commit/97d57f57d1dff4774e471375403ab0f361d529c0))
