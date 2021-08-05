# `eslint-ruppy-cli` 👩🏻‍💻👨🏻‍💻

[![Discord][discord-image]][discord-url]
[![GitHub Workflow Status][workflow-image]][workflow-url]
[![NPM Package][npm-image]][npm-url]

> Ruppy's eslint configs bootstrapper for your projects

## Description

Add custom eslint configuration in the projects easily. This CLI will ask few questions
about your project and then will install required packages based on your answer.
Fast and easy way to add eslint + prettier configuration in the projects.

## Usage

- IMPORTANT: You need >= npm@5.2.0 to run these commands.

  ```bin
  $ npx eslint-ruppy -h
  eslint-ruppy

  Bootstrap eslint configs (+ prettier configs) into projects 🐣

  Options:
    -i, --init, --bootstrap  Bootstrap the configs into current working directory.
                                                              [boolean] [required]
    -h, --help               Show help                                   [boolean]
    -v, --version            Show version number                         [boolean]

  Presented by https://ruppy.io © 2020
  ```

- Install/bootstrap eslint configs with running this commands in your project root:

  ```bin
  npx eslint-ruppy -i
  ```

- **WARNING**: When running init script again, only `.eslintrc.js` file would be overwritten. If you already modified that file, your modified configuration would be overwritten.

## Hacking to the Gate~! 🎶

[discord-image]: https://img.shields.io/discord/758271814153011201?label=Developers%20Indonesia&logo=discord&style=flat-square
[discord-url]: https://discord.gg/njSj2Nq "Chat and discuss at Developers Indonesia"
[workflow-image]: https://img.shields.io/github/workflow/status/Ruppyio/eslint-configs/Continuous%20Integration%20and%20Continuous%20Delivery%20%E2%9A%99%F0%9F%9A%80?label=CI%2FCD&logo=github%20actions&style=flat-square
[workflow-url]: https://github.com/Ruppyio/eslint-configs/actions "GitHub Actions"
[npm-image]: https://img.shields.io/npm/v/eslint-ruppy?label=package&logo=npm&style=flat-square
[npm-url]: https://npmjs.org/package/eslint-ruppy "eslint-ruppy on NPM"
