# Changelog

All notable changes to this project will be documented in this file.

This project adheres to [Semantic Versioning](https://semver.org) and [Conventional Commits](https://www.conventionalcommits.org) for commit guidelines.

## [eslint-config-ruppy-react-v2.0.1](https://github.com/Ruppyio/eslint-configs/compare/eslint-config-ruppy-react@2.0.0...eslint-config-ruppy-react@2.0.1) (2021-08-06)

### 🐛 Fixes

- resolve `workspace:*` dependencies ([dd87a57](https://github.com/Ruppyio/eslint-configs/commit/dd87a57a9f4de9dff86fcb555dd33805ac1c7153)), closes [pmowrer/semantic-release-monorepo#107](https://github.com/pmowrer/semantic-release-monorepo/issues/107)

## [eslint-config-ruppy-react-v2.0.0](https://github.com/Ruppyio/eslint-configs/compare/eslint-config-ruppy-react@1.9.0...eslint-config-ruppy-react@2.0.0) (2021-08-05)

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
