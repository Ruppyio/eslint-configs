'use strict';

/**
 * @see https://github.com/benmosher/eslint-plugin-import#settings
 */
module.exports = {
  settings: {
    'import/extensions': ['.js', '.mjs', '.jsx', '.cjs', '.ts', '.tsx'],
    'import/ignore': [
      'node_modules',
      '\\.(coffee|sass|scss|css|less|hbs|svg|jpg|png|json)$',
    ],
    'import/core-modules': [],
    'import/resolver': {
      node: {
        extensions: ['.js', '.mjs', '.jsx', '.json', '.cjs', '.ts', '.tsx'],
      },
    },
  },
};
