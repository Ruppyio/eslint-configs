'use strict';

/**
 * @see https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
 */
module.exports = {
  rules: {
    // Checks rules of Hooks https://reactjs.org/docs/hooks-rules.html
    'react-hooks/rules-of-hooks': 'error',

    // Checks effect dependencies
    'react-hooks/exhaustive-deps': 'warn',
  },
};
