/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '4rem',
    },
    extend: {
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeSlide: {
          from: { opacity: '0', transform: 'translateX(20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        hop: {
          '0%, 100%': { transform: 'translateY(0)' },
          '30%': { transform: 'translateY(-6px)' },
          '50%': { transform: 'translateY(0)' },
          '65%': { transform: 'translateY(-3px)' },
        },
        bubbleIn: {
          '0%': { opacity: '0', transform: 'scale(0.92) translateY(10px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease',
        'fade-slide': 'fadeSlide 0.4s ease',
        'hop': 'hop 0.6s ease',
        'bubble-in': 'bubbleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) both',
      },
      fontFamily: {
        sans: ['Jost', 'sans-serif'], 
        heading: ['lora', 'serif'], 
        bubble: ['Bagel Fat One', 'sans-serif'],
      },
      fontSize: {
        xs: ['12px'],
        sm: ['14px'],
        base: ['16px'],
        lg: ['18px'],
        xl: ['21px'],
        '2xl': ['27px'],
        '3xl': ['36px'],
        '4xl': ['48px'],
      },
      screens: {
        'xxs': { 'max': '350px'},
        'ios': { 'min': '351px', 'max': '419px'},
        'xs': { 'raw': '(max-height: 750px), (max-width: 350px)' },
        'sm': {'min': '420px', 'max': '570px'},
        'md': {'min': '571px'},
        'lg': {'min': '1024px'},
        'xl': {'min': '1280px'},
        '2xl': {'min': '1536px'},
        '3xl': {'min': '1700px'}
      },
      margin: {
        // Twelfths
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',

        // Sixths
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',

        // Fifths
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',

        // Thirds
        '1/3': '33.333333%',
        '2/3': '66.666667%',

        // Halves
        '1/2': '50%',

        // Quarters
        '1/4': '25%',
        '3/4': '75%',
      },
      padding: {
        // Twelfths
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',

        // Sixths
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',

        // Fifths
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',

        // Thirds
        '1/3': '33.333333%',
        '2/3': '66.666667%',

        // Halves
        '1/2': '50%',

        // Quarters
        '1/4': '25%',
        '3/4': '75%',
      },
    },
    colors: {
      'bg': '#fff0e2',
      'light': '#ffffff',
      'primary': '#ff8da9',
      'secondary': '#ff4d6d',
      'accent': '#c6ad1f',
      'text': '#354EBC',
      'dark': '#51331b'
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        ':root': {
          '--color-bg': theme('colors.bg'),
          '--color-primary': theme('colors.primary'),
          '--color-secondary': theme('colors.secondary'),
          '--color-accent': theme('colors.accent'),
          '--color-text': theme('colors.text'),
          '--color-dark': theme('colors.dark'),
          '--color-light': theme('colors.light'),
          '--bubble-font': theme('fontFamily.bubble'),
          '--header-font': theme('fontFamily.heading'),
          '--header-font-weight': '600'
        }
      })
    }
  ],
}

