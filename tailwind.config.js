module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme = ({
        main: `url('../../static/bg.jpg')`
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
