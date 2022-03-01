module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'desktop-header-img': "url('/images/banner_large.jpg')",
        'tablet-header-img': "url('/images/banner_medium.jpg')",
        'mobile-header-img': "url('/images/banner_small.jpg')",

        'desktop-logo-img': "url('/images/logo_large.png')",
        'tablet-logo-img': "url('/images/logo_medium.png')",
        'mobile-logo-img': "url('/images/logo_small.png')",
      }
    },
    screens: {
      'mobile': '200px',
      // => @media (min-width: 200px) { ... }

      'tablet': '700px',
      // => @media (min-width: 640px) { ... }

      'desktop': '1024px',
      // => @media (min-width: 1024px) { ... }

    },
  },
  plugins: [],
}
