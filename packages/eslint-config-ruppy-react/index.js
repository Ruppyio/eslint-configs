'use strict';

const { rules } = require('eslint-config-ruppy-base/rules/stylistic-issues');

const dangleRules = rules['no-underscore-dangle'];

module.exports = {
  extends: [
    './rules/react/settings',
    './rules/react/react',
    './rules/react/jsx-specific',
    './rules/react-hooks',
    './rules/jsx-a11y',
    'ruppy-node',
  ],
  env: { browser: true },
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  parserOptions: {
    ecmaFeatures: { jsx: true },
  },
  rules: {
    'class-methods-use-this': [
      'error',
      {
        exceptMethods: [
          'render',
          'getInitialState',
          'getDefaultProps',
          'getChildContext',
          'componentWillMount',
          'UNSAFE_componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'UNSAFE_componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'UNSAFE_componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
          'componentDidCatch',
          'getSnapshotBeforeUpdate',
        ],
      },
    ],
    'no-underscore-dangle': [
      dangleRules[0],
      Object.assign(dangleRules[1], {
        allow: dangleRules[1].allow.concat([
          '__REACT_DEVTOOLS_GLOBAL_HOOK__',
          '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__',
        ]),
      }),
    ],
  },
};
