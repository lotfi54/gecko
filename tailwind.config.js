const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withFonts = require('next-fonts');
module.exports = {
  theme: {
    extend: {
      colors: {
        'maron-light': '#CB997E',
        'blue-about': '#ffffff',
        'fond': '#090909',
        'service': '#ffffff',
        'border': '#e2e1dc',
        'title-section': '#c9c1b6',
      },
      fontFamily:{
        title:['Chromate'],
        desc:['Cremona'],
        coco:['Coco'],
        cocom:['Cocom'],
        bigtitle:['Kiyana'],
        mosk:['Mosk'],
        mosk4:['Mosk400'],
        mosk5:['Mosk500'],
      },
      height: {
               sm: '8px',
               md: '16px',
              lg: '24px',
              xl: '48px',
              xxl:'25rem'
              },
      zIndex: {
              '-1':'-1'
              },

              screens: {
                'sm': '640px',
                // => @media (min-width: 640px) { ... }
          
                'md': '768px',
                // => @media (min-width: 768px) { ... }
          
                'lg': '1024px',
                // => @media (min-width: 1024px) { ... }
          
                'xl': '1537px',
                // => @media (min-width: 1280px) { ... }
              }, 

              maxWidth: {
                       '1/4': '25%',
                       '1/2': '50%',
                       '3/4': '75%',
                       '3/5':'88%'
                      },

                      width: {
                        '5/5':'32.7%',
                        '6/6':'31.7%'
                      },

                      fontSize: {
                  
                        '7xl': '12rem',
                              },

                              maxHeight: {
                                    'about': '184vh',
                                      }
    }
  }

}
