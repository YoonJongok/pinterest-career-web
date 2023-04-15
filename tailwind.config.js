/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			sm: "640px",
			// => @media (min-width: 640px) { ... }
			md: "768px",
			// => @media (min-width: 768px) { ... }
			lg: "1024px",
			// => @media (min-width: 1024px) { ... }
			xl: "1280px",
			// => @media (min-width: 1280px) { ... }
			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }
		},
		extend: {
			colors: {
				"pinterest-pink": "#A45D88",
				"pinterest-fluorescent": "#CBFA9C",
				"pinterest-sky-blue": "#81D6D6",
				"pinterest-violet": "#8E5174",
				"pinterest-light-violet": "#8B174E",
				"pinterest-light-yellow": "#DAF3E3",
				"pinterest-purple": "#802489",
				"pinterest-gray": "#63615D",
				"pinterest-light-orange": "#FFE4C1",
				"pinterest-turquoise": "#1F4C71",
				"pinterest-brown": "#621C34",
				"pinterest-light-brown": "#933A20",
				"pinterest-light-sky-blue": "#CDF3FD",
			},
		},
	},
	plugins: [],
};
