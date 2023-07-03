module.exports = {
  darkMode: 'class',
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{ts,tsx,js,jsx,mdx}'],
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
