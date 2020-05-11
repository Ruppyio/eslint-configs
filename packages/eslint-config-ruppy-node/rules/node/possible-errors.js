'use strict';

/**
 * @see https://github.com/mysticatea/eslint-plugin-node#possible-errors
 */
module.exports = {
  rules: {
    // require error handling in callbacks
    'node/handle-callback-err': 'off',

    // ensure Node.js-style error-first callback pattern is followed
    'node/no-callback-literal': 'off',

    // disallow the assignment to `exports`
    'node/no-exports-assign': 'error',

    // disallow `import` declarations which import extraneous modules
    'node/no-extraneous-import': 'off',

    // disallow `require()` expressions which import extraneous modules
    'node/no-extraneous-require': 'off',

    // disallow import declarations which import non-existence modules
    'node/no-missing-import': 'off',

    // disallow `require()` expressions which import non-existence modules
    'node/no-missing-require': 'off',

    // disallow `new` operators with calls to `require`
    'node/no-new-require': 'error',

    // disallow string concatenation with `__dirname` and `__filename`
    'node/no-path-concat': 'error',

    // disallow the use of `process.exit()`
    'node/no-process-exit': 'off',

    // disallow `bin` files that npm ignores
    'node/no-unpublished-bin': 'error',

    // disallow `import` declarations which import private modules
    /** @see https://github.com/mysticatea/eslint-plugin-node/issues/225 */
    'node/no-unpublished-import': 'off',

    // disallow `require()` expressions which import private modules
    /** @see https://github.com/mysticatea/eslint-plugin-node/issues/225 */
    'node/no-unpublished-require': 'off',

    // disallow unsupported ECMAScript built-ins on the specified version
    'node/no-unsupported-features/es-builtins': 'off',

    // disallow unsupported ECMAScript syntax on the specified version
    'node/no-unsupported-features/es-syntax': 'off',

    // disallow unsupported Node.js built-in APIs on the specified version
    'node/no-unsupported-features/node-builtins': 'off',

    // make `process.exit()` expressions the same code path as throw
    'node/process-exit-as-throw': 'error',

    // suggest correct usage of shebang
    'node/shebang': 'error',
  },
};
