module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'gray-950': '#121212',
        'custom-yellow': '#917c2b',
        'custom-yellow-2': '#8c793c',
      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
};