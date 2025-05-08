// tailwind.config.js
module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary:   '#6CC3B0',
        secondary: '#333333',
        neutral:   '#F8F7F4',
        support:   '#BFC0BF',
        accent:    '#F2A65A'
      },
      backgroundSize: {
        '200%': '200% 200%',
      },
      animation: {
        'gradient-background': 'gradientBG 8s ease infinite',
        'float-slow':          'float 6s ease-in-out infinite',
        'pulse-slow':          'pulse 4s ease-in-out infinite',
        'bounce-once':         'bounce 1s ease-out',
        'bounce-fast':         'bounce 0.6s infinite'
      },
      keyframes: {
        gradientBG: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%':      { 'background-position': '100% 50%' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-8px)' }
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: []
}
