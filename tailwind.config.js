/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			sm: { min: "375px", max: "767px" },
			md: "768px",
			lg: "1440px",
			xl: "1880px",
		},
		extend: {
			colors: {
				"dark-blue": "hsl(209, 23%, 22%)",
				"deep-dark-blue": "hsl(207, 26%, 17%)",
				"text-accent": "hsl(200, 15%, 8%)",
				white: "hsl(0, 0%, 100%)",
				"gray-light": "hsl(0, 0%, 98%)",
				"gray-dark": "hsl(0, 0%, 52%)",
			},
		},
	},
	plugins: [],
};
