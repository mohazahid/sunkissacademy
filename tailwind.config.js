/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'mono': ['"Inter"', 'monospace'],
      'league': ['"LeagueSpartan-Bold"', 'Bold'],
      'BubblyReg': ['"FuzzyBubbles-Regular"', 'Regular'],
      'BubblyBold': ['"FuzzyBubbles-Bold"', 'Bold'],
    },
  },
  plugins: [],
}

