'use strict';

/**
 * @see https://github.com/yannickcr/eslint-plugin-react#configuration
 */
module.exports = {
  settings: {
    react: {
      version: 'detect',
      linkComponents: ['Hyperlink', { name: 'Link', linkAttribute: 'to' }],
    },
  },
};
