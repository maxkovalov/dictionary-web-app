/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#050505",
      charcoal: "#1f1f1f",
      slate: "#2d2d2d",
      graphite: "#3a3a3a",
      gray: "#757575",
      "light-gray": "#e9e9e9",
      "off-white": "#f4f4f4",
      white: "#FFFFFF",
      lavender: "#a445ed",
      red: "#FF5252",
    },
    maxWidth: {
      "3xl": "46.0625rem",
    },
    extend: {
      boxShadow: {
        'lg': '0px 7px 29px 0px rgba(100, 100, 111, 0.2)'},
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
        'serif': ['Lora', ...defaultTheme.fontFamily.serif],
        'mono': ['Inconsolata', ...defaultTheme.fontFamily.mono],
      }
    }
  },
  plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				'.drag-none': {
					'-webkit-user-drag': 'none',
					'-khtml-user-drag': 'none',
					'-moz-user-drag': 'none',
					'-o-user-drag': 'none',
					'user-drag': 'none'
				}
			});
		})
	]
};