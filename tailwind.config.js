/** @type {import("tailwindcss").Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				"circular": ["circular-normal", "sans-serif"],
				"circular-light": ["circular-light", "sans-serif"],
				"circular-medium": ["circular-medium", "sans-serif"],
				"circular-bold": ["circular-bold", "sans-serif"],
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
