module.exports = {
  env: {
    jest: true,
    node: true,
    es2022: true,
    browser: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'plugin:storybook/recommended',
  ],
  plugins: ['react', 'jsx-a11y', 'jest', 'jest-dom', 'testing-library', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
  },
  overrides: [
    {
      files: ['**/tests/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  rules: {
    'no-undef': 'off', // TODO: remove this rule and fix all errors
    'func-names': 'off', // TODO: remove this rule and fix all errors
    'global-require': 'off', // TODO: remove this rule and fix all errors
    'react/prop-types': 'off', // TODO: remove this rule and fix all errors
    'import/extensions': 'off', // TODO: remove this rule and fix all errors
    'import/no-unresolved': 'off', // TODO: remove this rule and fix all errors
    'no-use-before-define': 'off', // TODO: remove this rule and fix all errors
    'react/style-prop-object': 'off', // TODO: remove this rule and fix all errors
    'react/react-in-jsx-scope': 'off', // TODO: remove this rule and fix all errors
    'react/jsx-props-no-spreading': 'off', // TODO: remove this rule and fix all errors
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.tsx', '.ts'],
      },
    ],
    'no-promise-executor-return': 'off', // TODO: remove this rule and fix all errors
    '@typescript-eslint/no-explicit-any': 'off', // TODO: remove this rule and fix all errors
    '@typescript-eslint/no-var-requires': 'off', // TODO: remove this rule and fix all errors
  },
};
