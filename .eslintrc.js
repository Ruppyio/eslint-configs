module.exports = {
  extends: ['./packages/eslint-config-ruppy-node/common'],
  env: {
    jest: true,
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
  },
};
