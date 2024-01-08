import { vneslint } from '@ventsislavnikolov/eslint-config';

export default vneslint(
  [
    {
      ignores: [],
    },
    {
      files: ['**/src/**/*.ts', '**/src/**/*.tsx'],
      rules: {
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/padding-line-between-statements': 'off',
        'import/no-default-export': 'off',
        'lodash/prefer-lodash-method': 'off',
        'lodash/prefer-noop': 'off',
        'no-process-env': 'off',
        'no-restricted-syntax': 'off',
        'react/function-component-definition': 'off',
        'react/prefer-read-only-props': 'off',
        'react/prop-types': 'off',
        'react/style-prop-object': 'off',
        'unicorn/filename-case': 'off',
        'unicorn/prefer-export-from': 'off',
        'unicorn/prefer-spread': 'off',
      },
    },
    {
      files: ['*.config.js', '*.config.cjs'],
      rules: {
        'import/no-anonymous-default-export': 'off',
        'no-process-env': 'off',
        'no-undef': 'off',
      },
    },
    {
      files: ['nativewind-env.d.ts'],
      rules: {
        '@typescript-eslint/triple-slash-reference': 'off',
      },
    },
    {
      files: [
        '**/tests/**/*.test.ts',
        '**/tests/**/*.test.tsx',
        '**/tests/**/*.spec.ts',
        '**/tests/**/*.spec.tsx',
      ],
      rules: {},
    },
    {
      files: [
        '**/stories/**/*.stories.ts',
        '**/stories/**/*.stories.tsx',
        '**/stories/**/*.story.ts',
        '**/stories/**/*.story.tsx',
      ],
      rules: {},
    },
  ],
  {
    compat: true,
    jest: true,
    jestDom: true,
    lodash: true,
    next: false,
    playwright: false,
    prettier: true,
    react: true,
    sortKeys: true,
    storybook: true,
    tailwind: true,
    testingLibrary: true,
    typescript: true,
    typescriptTypecheck: true,
    vitest: false,
  },
);
