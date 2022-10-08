module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'next',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'comma-dangle': 'off',
    quotes: 'off',
    indent: 'off',
    // 'react/react-in-jsx-scope': 'off',
    // 'react/prop-types': 0,
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    }],
    'operator-linebreak': ['off'],
  },
  ignorePatterns: ['coverage.json', '/coverage/*', '/test/*'],
}
