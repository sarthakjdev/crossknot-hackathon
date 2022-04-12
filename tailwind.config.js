module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './sections/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mainbg: '#FEFBEA',
        primary: '#0EB29F',
        primary_light: 'rgba(14, 178, 159, 0.3)',
        primary_extra_light: '#CBF0E9',
        primary_dark: '#075650',
        secondary: '#656565',
        card_light: '#F4C456', 
        card_dark: '#F4C559', 
        card_text: '#474747',
        footer_clr: '#D2EEDC',
        sponsor_clr: '#B6E6D4',
        hero_section_text: '#075650',
      },
      typography: {
        DEAFAULT: {
          css: {
          h1: {
              fontFamily: 'Product Sans',
          },
          h2: {
              fontFamily: 'Product Sans',
          },
          h3: {
              fontFamily: 'Product Sans',
          },
          h4: {
              fontFamily: 'Product Sans',
          },
          h5: {
              fontFamily: 'Product Sans',
          },
          h6: {
              fontFamily: 'Product Sans',
            },
          }
        }
      },
      keyframes: {
        whirl: {
         '0%, 100%': { transform: 'translateY(-8%)' },
         '50%': { transform: 'translateY(0)'}
        }
      },
      animation: {
        'whirl': 'whirl 4s ease-in-out infinite' 
      },
      fontFamily: {
        primary: ['Gilroy', 'sans-serif'],
        secondary: ['Product Sans', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif']
      },
      width: {
        '30': '30%',
        '40': '40%',
        '70': '70%',
        '90': '90%',
        '16rem': '16rem',
        '15rem': '15rem',
        half: '50%',
        quarter_past: '75%'
      },
      height: {
        '90vh': '90vh',
        '30': '9rem',
        '14rem': '14rem'
      },
      zIndex: {
        '100': 100
      },
      maxHeight: {
        '30': '7rem'
      },
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
        
        'midLg': {'max': '900px'},
        // => @media (max-width: 900px) { ... }

        'md': {'max': '769px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
}