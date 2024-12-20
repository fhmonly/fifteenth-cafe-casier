/** @type {import('tailwindcss').Config} */
export default {
    theme: {
        extend: {
            colors: {
                main: "#a91d3a",
                body: "#ffffff"
            }
        },
        screens: {
            'mobile': '360px',
            'tablet': '520px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        }
    },
}