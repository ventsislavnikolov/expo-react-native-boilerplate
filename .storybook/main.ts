const config = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-coverage',
    '@storybook/addon-designs',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-styling',
    'storybook-dark-mode',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        lazyCompilation: true,
      },
    },
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
