export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        error: '#e53e3e',
        primary: '#0275d8',
        success: '#38a169',
      },
      fontFamily: {
        text: ['Roboto'],
        title: ['Roboto'],
      },
    },
  },
};
