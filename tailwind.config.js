module.exports = {
  mode: "jit",
  purge: ["./*.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#7B61FF',
        gray: '#999999',
        blur: 'rgba(255, 255, 255, 0.8)',
        black: '#333333',
        blue: '#336EE1'
      },
      width: {
        widthCalc: 'calc(33.3333% - 20px)',
        widthCols2: 'calc(50% - 15px)' 
      },
      boxShadow: {
        shadowItem: '0px 24px 60px rgba(51, 51, 51, 0.16)'
      },
      backgroundImage: {
        imageUrl: "url('../images/investors-3.png')",
        imageHeader: "url('../images/header-bg.png')",
      },
      gridTemplateColumns: {
        grid4: '2fr 1fr 1fr auto',
      },
      borderRadius: {
        border: '8px 8px 0px 0px'
      },
      screens: {
        screen767: '769px'
      },
      inset: {
        leftCalc: 'calc(100% + 69px)'
      },
      dropShadow: {
        text: '0px 4px 4px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
};
