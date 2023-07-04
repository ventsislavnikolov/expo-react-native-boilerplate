module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel',
      '@babel/plugin-transform-modules-commonjs',
      [
        'module-resolver',
        {
          alias: {
            store: './src/store',
            screens: './src/screens',
            components: './src/components',
            navigation: './src/navigation',
            translations: './src/translations',
          },
        },
      ],
    ],
  };
};
