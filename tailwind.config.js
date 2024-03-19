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
                'primary': ['Vonique64', 'serif'],
                'secondary': ['GlorifyDEMO', 'serif'],
                'ternary': ['"TeX Gyre Adventor"', 'serif'],
            },
            colors: {
                leaf: {
                    DEFAULT: '#1A6668',
                    dark: '#1B5257',
                    darker: '#025035',
                },
                ecstasy: {
                    DEFAULT: '#C46137',
                    dark: '#9F4428',
                },
                cinnamon: {
                    light: '#F8EFE0',
                    DEFAULT: '#F1E6D1',
                    dark: '#EBD9B6',
                    darker: '#C9B37C'
                }
            },
        },
    },
    plugins: [],
}

