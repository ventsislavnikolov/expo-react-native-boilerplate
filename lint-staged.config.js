export default {
  'src/**/*.{css,scss,md}': ['yarn prettier:fix'],
  'src/**/*.{js,jsx,ts,tsx}': ['yarn lint:fix', 'yarn prettier:fix'],
};
