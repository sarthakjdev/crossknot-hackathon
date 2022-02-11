module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './sections/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2B2273',
        secondary: '#FE0F9F'       
      },
      typography: {
        DEAFAULT: {
          css: {
          h1: {
              fontFamily: 'Montserrat',
          },
          h2: {
              fontFamily: 'Montserrat',
          },
          h3: {
              fontFamily: 'Montserrat',
          },
          h4: {
              fontFamily: 'Montserrat',
          },
          h5: {
              fontFamily: 'Montserrat',
          },
          h6: {
              fontFamily: 'Montserrat',
            },
          }
        }
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
        secondary: ['Freehand', 'sans-serif']
      },
      width: {
        quarter_past: '75%',
        half: '50%'
      },
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
}