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
          'deep-blue': '#1E1231',
        },
        transparent: {
          'white-60': 'rgba(255, 255, 255, 0.60)',
          'white-12': 'rgba(255, 255, 255, 0.12)',
        },
        additional: {
          purple: '#9DADF2',
        },
      },
      screens: {
        xl: { min: '1088px' },
        '2xl': { max: '1840px' },
        'full-hd': { min: '1920px' },
      },
      animation: {
        'move-normal': 'move 10s linear infinite',
        'move-slow': 'move 15s linear infinite',
        'move-normal-reverse': 'moveReverse 10s linear infinite',
      },
    },
  },
  plugins: [],
};
