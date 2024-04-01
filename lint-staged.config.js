module.exports = {
  './src/**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}': ['yarn lint', 'yarn prettier'],
  './__tests__/**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}': ['yarn lint', 'yarn prettier'],
};
