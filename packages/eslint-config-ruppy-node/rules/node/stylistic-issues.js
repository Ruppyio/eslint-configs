'use strict';

/**
 * @see https://github.com/mysticatea/eslint-plugin-node#stylistic-issues
 */
module.exports = {
  rules: {
    // require `return` statements after callbacks
    'node/callback-return': 'off',

    // enforce either `module.exports` or `exports`
    'node/exports-style': 'off',

    // enforce the style of file extensions in `import` declarations
    'node/file-extension-in-import': 'off',

    // require `require()` calls to be placed at top-level module scope
    'node/global-require': 'off',

    // disallow `require` calls to be mixed with regular variable declarations
    'node/no-mixed-requires': 'off',

    // disallow the use of `process.env`
    'node/no-process-env': 'off',

    // disallow specified modules when loaded by `import` declarations
    'node/no-restricted-import': 'off',

    // disallow specified modules when loaded by `require`
    'node/no-restricted-require': 'off',

    // disallow synchronous methods
    'node/no-sync': 'off',

    // enforce either `Buffer` or `require("buffer").Buffer`
    'node/prefer-global/buffer': 'off',

    // enforce either `console` or `require("console")`
    'node/prefer-global/console': 'off',

    // enforce either `process` or `require("process")`
    'node/prefer-global/process': 'off',

    // enforce either `TextDecoder` or `require("util").TextDecoder`
    'node/prefer-global/text-decoder': 'off',

    // enforce either `TextEncoder` or `require("util").TextEncoder`
    'node/prefer-global/text-encoder': 'off',

    // enforce either `URLSearchParams` or `require("url").URLSearchParams`
    'node/prefer-global/url-search-params': 'off',

    // enforce either `URL` or `require("url").URL`
    'node/prefer-global/url': 'off',

    // enforce `require("dns").promises`
    'node/prefer-promises/dns': 'off',

    // enforce `require("fs").promises`
    'node/prefer-promises/fs': 'off',
  },
};
