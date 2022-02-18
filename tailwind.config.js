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
        primary_dark: '#075650',
        secondary: '#656565',
        card_light: '#F4C456', 
        card_dark: '#F4C559', 
        card_text: '#656565'
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
      fontFamily: {
        primary: ['Segoe UI', 'sans-serif'],
        secondary: ['Product Sans', 'sans-serif']
      },
      width: {
        '30': '30%',
        '40': '40%',
        quarter_past: '75%',
        half: '50%',
        '70': '70%',
        '16rem': '16rem'
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
  
        'md': {'max': '769px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
}