module.exports = {
  theme: {
    extend: {
      keyframes: {
        slideRightToLeft: {
          '0%, 100%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(-100%)' }
        },
        slideLeftToRight: {
          '0%, 100%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(100%)' }
        }
      },
      animation: {
        'right-to-left': 'slideRightToLeft 10s infinite linear',
        'left-to-right': 'slideLeftToRight 10s infinite linear'
      }
    }
  },
  plugins: [],
}
