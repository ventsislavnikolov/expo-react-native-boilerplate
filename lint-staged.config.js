module.exports = {
  'src/**/*.{js,jsx,ts,tsx}': ['pnpm run eslint', 'pnpm run prettier'],
  'src/**/*.{css,scss,md}': ['pnpm run prettier'],
};
