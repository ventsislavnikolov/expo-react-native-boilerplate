module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            assets: './assets',
            components: './src/components',
            constants: './src/constants',
            navigation: './src/navigation',
            screens: './src/screens',
            store: './src/store',
            stories: './src/stories',
            tests: './src/tests',
            translations: './src/translations',
          },
        },
      ],
    ],
    presets: [['babel-preset-expo', { jsxImportSource: 'nativewind' }], 'nativewind/babel'],
  };
};
