module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        error: '#e53e3e',
        primary: '#0275d8',
        success: '#38a169',
      },
      fontFamily: {
        title: ['Roboto'],
        text: ['Roboto'],
      },
    },
  },
  plugins: [],
};
