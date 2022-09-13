/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', 'index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'san-serif'],
      },
      backgroundImage: {
        galaxy: "url('/background-galaxy.png')",
        'nlw-gradient':
          'linear-gradient(89.86deg, #9572FC 23.08%, #43E7AD 73.94%, #E1D55D 24.57%);',
        'game-gradient':
          'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%);',
      },
    },
  },
  plugins: [],
};
