module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['"Montserrat"', 'cursive'],
        'corinthia': ['"Corinthia"', 'cursive'],
       },
    },
    colors:{
      'linen':'#FAF1E6',
      'spanish-gray':'#9D9D9D',
      'mint-cream':'#E4EFE7',
      'baby-powder':'#FDFAF6',
      'maximum-yellow-red':'#EEC373',
      'cultured':'#F4F4F4',
      'charcoal':'#2C3A47'
    }
  },
  plugins: [],
}
