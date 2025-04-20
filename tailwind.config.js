/** @type {import('tailwindcss').Config} */
export const content = [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
];
export const theme = {
    extend: {
        colors: {
            green: {
                500: "#4CAF50",
                600: "#3F9142",
            },
        },
    },
};
export const plugins = [];