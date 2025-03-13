/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          750: '#2D3748',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'scale': 'scale 0.2s ease-out',
      },
      keyframes: {
        scale: {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      backdropBlur: {
        'xl': '20px',
      },
    },
  },
  plugins: [],
};