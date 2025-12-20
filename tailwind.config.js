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
				"spotlight": "rgba(63, 79, 162, 0.15)",
			},
			spacing: {
				"spotlight-radius": "800px",
			},
			transitionDuration: {
				"standard": "300ms",
			},
		},
	},
}
