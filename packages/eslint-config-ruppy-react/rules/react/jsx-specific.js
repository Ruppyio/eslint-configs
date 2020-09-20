'use strict';

/**
 * @see https://github.com/yannickcr/eslint-plugin-react#jsx-specific-rules
 */
module.exports = {
  rules: {
    // Enforce boolean attributes notation in JSX (fixable)
    'react/jsx-boolean-value': ['error', 'never', { always: [] }],

    // Ensures inline tags are not rendered without spaces between them
    'react/jsx-child-element-spacing': 'off',

    // Validate closing bracket location in JSX (fixable)
    'react/jsx-closing-bracket-location': 'off',

    // Validate closing tag location for multiline JSX (fixable)
    'react/jsx-closing-tag-location': 'off',

    // Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes (fixable)
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never' },
    ],

    // Enforce consistent line breaks inside jsx curly (fixable)
    'react/jsx-curly-newline': 'off',

    // Enforce or disallow spaces inside of curly braces in JSX attributes (fixable)
    'react/jsx-curly-spacing': 'off',

    // Disallow or enforce spaces around equal signs in JSX attributes (fixable)
    'react/jsx-equals-spacing': 'off',

    // Restrict file extensions that may contain JSX
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],

    // Ensure proper position of the first property in JSX (fixable)
    'react/jsx-first-prop-new-line': 'off',

    // Enforce shorthand or standard form for React fragments (fixable)
    'react/jsx-fragments': ['error', 'syntax'],

    // Enforce event handler naming conventions in JSX
    'react/jsx-handler-names': 'off',

    // Validate JSX indentation (fixable)
    'react/jsx-indent': 'off',

    // Validate props indentation in JSX (fixable)
    'react/jsx-indent-props': 'off',

    // Report missing key props in iterators/collection literals
    'react/jsx-key': 'error',

    // Validate JSX maximum depth
    'react/jsx-max-depth': 'off',

    // Limit maximum of props on a single line in JSX (fixable)
    'react/jsx-max-props-per-line': 'off',

    // Prevents usage of Function.prototype.bind and arrow functions in React component props
    'react/jsx-no-bind': 'off',

    // Comments inside children section of tag should be placed inside braces
    'react/jsx-no-comment-textnodes': 'error',

    // Enforce no duplicate props
    'react/jsx-no-duplicate-props': 'error',

    // Prevent using string literals in React component definition
    'react/jsx-no-literals': 'off',

    // Forbid javascript: URLs
    'react/jsx-no-script-url': 'off',

    // Forbid target="_blank" attribute without rel="noreferrer"
    'react/jsx-no-target-blank': 'error',

    // Disallow undeclared variables in JSX
    'react/jsx-no-undef': 'error',

    // Disallow unnecessary fragments (fixable)
    'react/jsx-no-useless-fragment': 'off',

    // Limit to one expression per line in JSX (fixable)
    'react/jsx-one-expression-per-line': 'off',

    // Enforce PascalCase for user-defined JSX components
    'react/jsx-pascal-case': [
      'error',
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],

    // Disallow multiple spaces between inline JSX props (fixable)
    'react/jsx-props-no-multi-spaces': 'off',

    // Prevent JSX prop spreading
    'react/jsx-props-no-spreading': [
      'off',
      {
        html: 'enforce',
        custom: 'ignore',
        explicitSpread: 'ignore',
        exceptions: [],
      },
    ],

    // Enforce default props alphabetical sorting
    'react/jsx-sort-default-props': 'off',

    // Enforce props alphabetical sorting (fixable)
    'react/jsx-sort-props': 'off',

    // [DEPRECATED] Validate spacing before closing bracket in JSX (fixable)
    // 'react/jsx-space-before-closing': 'off',

    // Validate whitespace in and around the JSX opening and closing brackets (fixable)
    'react/jsx-tag-spacing': 'off',

    // Prevent React to be marked as unused
    'react/jsx-uses-react': 'error',

    // Prevent variables used in JSX to be marked as unused
    'react/jsx-uses-vars': 'error',

    // Prevent missing parentheses around multilines JSX (fixable)
    'react/jsx-wrap-multilines': 'off',
  },
};
