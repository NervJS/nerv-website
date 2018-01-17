module.exports = {
  root: true,
  extends: ['standard', 'standard-jsx'],
  parser: 'babel-eslint',
  env: {
    browser: true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      'jsx': true
    }
  },
  rules: {
    "no-unused-vars": ["error", { "varsIgnorePattern": "Nerv", "args": "after-used", "ignoreRestSiblings": false }],
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
