/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
],
theme: {
    extend: {
        colors: {
        sage: {
            50: "#f5f7f4",
            100: "#e7ede3",
            200: "#d0dcc9",
            300: "#b0c4a4",
            400: "#8fa67c",
            500: "#748c5f",
            600: "#5a6f4a",
            700: "#48583c",
            800: "#3c4933",
            900: "#343e2d",
          DEFAULT: "#8fa67c"  // Sample wala exact color
        },
        olive: {
            50: "#f6f7f0",
            100: "#e9ebdb",
            200: "#d4d8ba",
            300: "#b8bf90",
            400: "#9ca56b",
            500: "#848c54",
            600: "#697041",
            700: "#525736",
            800: "#44472f",
            900: "#3b3d2a",
            DEFAULT: "#697041"
        }  
    }
    }
},
plugins: []
};