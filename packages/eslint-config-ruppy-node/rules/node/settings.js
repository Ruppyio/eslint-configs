'use strict';

module.exports = {
  settings: {
    node: {
      // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-import.md#shared-settings
      allowModules: [],
      resolvePaths: [],
      tryExtensions: ['.js', '.json', '.node'],

      // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/shebang.md#shared-settings
      // convertPath: [{ include: [] }, { exclude: [] }, { replace: [] }],
    },
  },
};
