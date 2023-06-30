module.exports = {
  preset: 'jest-expo',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: {
          jsx: 'react-jsx',
        },
      },
    ],
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.js'],
  testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ['node_modules', 'src'],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/web-build/**',
    '!**/.storybook/**',
    '!**/.expo/**',
    '!**/babel.config.js',
    '!**/jest.setup.js',
    '!**/lint-staged.config.js',
    '!**/commitlint.config.js',
    '!**/release.config.js',
    '!**/prettier.config.js',
    '!**/.eslintrc.js',
    '!**/webpack.config.js',
    '!**/env.mjs',
    '!**/next-env.d.ts',
    '!**/jest.config.js',
    '!**/tailwind.config.js',
    '!**/mock-async-storage.js',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|unimodules-permissions-interface|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|sentry-expo|@sentry/react-native|@sentry/core|@expo-google-fonts|native-base)',
  ],
};
