/** @type {import("tailwindcss").Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				"sans": ["Inter", "system-ui", "sans-serif"],
			},
			fontWeight: {
				normal: 300,
				medium: 400,
				semibold: 500,
				bold: 600,
			},
			colors: {
				"primary": "#12172e",
			},
			transitionDuration: {
				"standard": "300ms",
			},
		},
	},
}
