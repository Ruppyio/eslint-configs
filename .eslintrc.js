'use strict';

require('./packages/eslint-config-ruppy-node/patch');

module.exports = {
  extends: [
    './packages/eslint-config-ruppy-node/common',
    './packages/eslint-config-ruppy-jest',
  ],
  rules: {
    'import/no-extraneous-dependencies': 'off',
  },
};
