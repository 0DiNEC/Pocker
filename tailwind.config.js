module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      borderRadius: {
        'rounded-3xl': '64px',
      },
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'],
      },
      colors: {
        main: {
          'navy-blue': '#110A1D',
          blue: '#478BF9',
        },
        additional: {
          purple: '#9DADF2',
        },
      },
    },
  },
  plugins: [],
};
