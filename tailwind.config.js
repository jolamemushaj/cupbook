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
                'vonique': ['Vonique64', 'serif'],
                'glorify': ['GlorifyDEMO', 'serif'],
                'texGyreAdventor': ['TeX Gyre Adventor', 'serif'],

                //TeX Gyre Adventor (OTF)
                // TeX Gyre Adventor Bold (OTF)
                // Vonique 64 Bold Italic (TrueType)
                // Vonique64 (OTF)
                // Vonique 64 Bold (TrueType)
                // Glorify DEMO (OTF)
            },
            colors: {
                'tile': '#1A6668',
                'dark-tile': '#1B5257',
                'ecstasy': '#C46137',
                'dark-ecstasy': '#9F4428',
                'cinnamonMilky': '#F8EFE0',
                'cinnamonMilk': '#F1E6D1',
                'cinnamonMilkDark': '#EBD9B6',
                'cinnamonMilkDarker': '#C9B37C',
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

