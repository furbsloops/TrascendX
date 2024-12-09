export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      keyframes: {
        moveRight: {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(100px)' },
        },
        moveLeft: {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(-100px)' },
        }
      },
      animation: {
        'move-right': 'moveRight 1s infinite alternate',
        'move-left': 'moveLeft 1s infinite alternate'
      }
    }
  }
};
