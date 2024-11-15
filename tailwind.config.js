/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'headphone-bg': "url('./images/music-arrangement-with-black-headphones-with-copy-space.jpg')",
        'speaker-bg': "url('./images/paul-esch-laurent-YU-OA2TvQRQ-unsplash.jpg')",
        'cutted-bg': "url('/images/cutted-speaker.jpg')",
        'bottom-cutted-bg': "url('/images/bottom-cutted-speaker.jpg')",
        'orange-speaker-bg': "url('/images/orange-bgg.jpg')",
        'mk1-bg': "url('/images/mk1-earphone.jpg')"

      },
      fontFamily: {
        'kanit': ["Kanit", "sans-serif"],
        'poppins': ["Poppins", "sans-serif"],
        'outfit': ["Outfit", "sans-serif"],
      },
      width: {
        'w-30': "30%",
        'w%45': "45%",
        'w%48': "48%",
      },
      height: {
        'h-10': "10%",
        'h-20': "20%",
        'h-30': "30%",
        'h-40': "40%",
        'h-50': "50%",
        'h-60': "60%",
        'h-70': "70%",
        'h-80': "80%",
        'h-90': "90%",
        'h-120': "120%",
        'h-130': "130%",
        'h-140': "140%",
        'h-150': "150%",
      },
      letterSpacing: {
        "letter-most": "1rem"
      }
    },
  },
  plugins: [],
}