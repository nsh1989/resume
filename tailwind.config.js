/** @type {import('tailwindcss').Config} */
const {join} = require('path')
module.exports = {
    content: [
        "./components/**/*.{js,jsx,ts,tsx}",
        "./components/*.{js,jsx,ts,tsx}",
        "./pages/**/*.{js,jsx}",
        "./pages/*.{js,jsx}",
        "./public/**/*.html",
        "./pages/*.{js,jsx,ts,tsx}",
        join(__dirname, 'pages/*.{js,jsx}'),
        join(__dirname, 'pages/**/*.{js,jsx}')
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
