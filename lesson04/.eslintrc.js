module.exports = {
  'env': {
    'browser': true,
    'es6': false,
    'node': true
  },
  'extends': 'standard',
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaVersion': 3,
    'sourceType': 'module'
  },
  'rules': {
    "quotes": "off",
    "no-unused-vars": "off",
    "space-in-parens": "off"
  }
}
