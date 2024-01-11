export default {
  'src/**/*.{css,scss,md}': ['yarn fix:format'],
  'src/**/*.{js,jsx,ts,tsx}': ['yarn lint', 'yarn fix:format'],
};
