module.exports = {
  extends: 'airbnb-base',
  settings: {
    ecmascript: 6,
  },
  parser: 'babel-eslint',
  env: {
    node: true,
  },
  rules: {
    'array-bracket-spacing': [
      2,
      'always',
    ],
    'arrow-body-style': [
      1,
    ],
    'arrow-parens': [
      2,
      'always',
    ],
    'computed-property-spacing': [
      2,
      'always',
    ],
    'jsx-a11y/no-static-element-interactions': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'max-len': 0,
    'no-debugger': 1,
    'no-unused-vars': 1,
    'space-before-blocks': [
      1,
      'always',
    ],
    'space-in-parens': [
      1,
      'always',
    ],
    'spaced-comment': [
      1,
    ],
    'template-curly-spacing': [
      1,
      'always',
    ],
  },
};
