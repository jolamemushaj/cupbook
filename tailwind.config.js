/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,vue}"
  ],
  theme: {
    extend: {
      // Add a custom font family
        fontFamily: {
            'sans': ['Vonique', 'sans-serif'],
            'serif': ['Vonique64', 'serif'],
        },
      colors: {
        'tile': '#1A6668',
        'dark-tile': '#1B5257',
        'ecstasy': '#C46137',
        'dark-ecstasy': '#9F4428',
        'cinnamonMilk': '#F1E6D1',
        'cinnamonMilkDark': '#EBD9B6',
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.15em',
      }
    },
  },
  plugins: [],
}

