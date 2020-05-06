'use strict';

/**
 * @see https://eslint.org/docs/rules/#strict-mode
 */
module.exports = {
  rules: {
    // require or disallow strict mode directives
    // NOTE: this rule will be ['error', 'never'] if the type is ESModule
    strict: ['error', 'safe'],
  },
};
