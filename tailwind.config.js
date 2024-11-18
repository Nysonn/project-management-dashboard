const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JSX/TSX files in src
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto', ...defaultTheme.fontFamily.sans], // Define the Roboto font
      },
    },
  },
  plugins: [],
};
