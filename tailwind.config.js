/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#E8590C',
          'orange-dark': '#C04302',
          'orange-light': '#F76B1C',
          amber: '#FF9F1C',
          'amber-light': '#FFB049',
          'amber-glow': 'rgba(255, 159, 28, 0.4)',
        },
        surface: {
          light: '#F4F1EC',
          'light-card': '#FFFFFF',
          'light-subtle': '#EAE6DF',
          dark: '#0D0D0E',
          'dark-card': '#141416',
          'dark-card-hover': '#1B1B1E',
          'dark-subtle': '#222226',
        }
      },
      fontFamily: {
        display: ['"Bebas Neue"', '"Anton"', 'sans-serif'],
        anton: ['"Anton"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'glow-pulse': 'glow 4s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        glow: {
          '0%': { opacity: '0.4', transform: 'scale(0.95)' },
          '100%': { opacity: '0.8', transform: 'scale(1.05)' },
        }
      },
      boxShadow: {
        'orange-glow': '0 20px 50px -10px rgba(232, 89, 12, 0.35)',
        'amber-glow': '0 20px 50px -10px rgba(255, 159, 28, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
}

