module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        error: '#e53e3e',
        primary: '#0275d8',
        success: '#38a169',
      },
    },
  },
  plugins: [],
};
