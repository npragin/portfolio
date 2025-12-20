/** @type {import("tailwindcss").Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				"inter": ["Inter", "sans-serif"],
				"inter-light": ["Inter", "sans-serif"],
				"inter-medium": ["Inter", "sans-serif"],
				"inter-bold": ["Inter", "sans-serif"],
			},
			fontWeight: {
				"light": 300,
				"normal": 400,
				"medium": 500,
				"bold": 700,
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
