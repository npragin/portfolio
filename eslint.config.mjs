import js from "@eslint/js"
import react from "eslint-plugin-react"
import importPlugin from "eslint-plugin-import"
import globals from "globals"

const reactSettings = {
	react: {
		version: "detect",
	},
}

export default [
	{
		ignores: [".next/**", "node_modules/**"],
	},
	js.configs.recommended,
	{
		...react.configs.flat.recommended,
		settings: {
			...react.configs.flat.recommended.settings,
			...reactSettings,
		},
	},
	{
		...react.configs.flat["jsx-runtime"],
		settings: {
			...react.configs.flat["jsx-runtime"].settings,
			...reactSettings,
		},
	},
	{
		files: ["**/*.{js,jsx,ts,tsx}"],

		plugins: {
			import: importPlugin,
		},

		languageOptions: {
			ecmaVersion: 2021,
			sourceType: "module",
			globals: {
				...globals.browser,
				...globals.node,
			},
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},

		settings: {
			...reactSettings,
			"import/resolver": {
				alias: {
					map: [
						["@components", "./components/index.js"],
						["@icons", "./components/common/icons.js"],
						["@styles", "./styles"],
						["@constants", "./constants/index.js"],
					],
					extensions: [".js", ".jsx", ".ts", ".tsx", ".css"],
				},
				node: { extensions: [".js", ".jsx", ".ts", ".tsx", ".css"] },
			},
		},

		rules: {
			// Disable prop-types (not using PropTypes in modern React)
			"react/prop-types": "off",

			// Style rules
			semi: ["error", "never"],
			indent: ["error", "tab"],
			"no-unused-vars": ["error", { "varsIgnorePattern": "^React$" }],
			"no-unused-expressions": "error",
			"no-unused-labels": "error",
			"no-undef": "error",
			quotes: ["error", "double"],
			"no-console": "warn",
			"no-alert": "error",
			eqeqeq: ["error", "always"],
			curly: ["error", "all"],
			"brace-style": ["error", "1tbs"],
			"block-spacing": "error",
			"comma-dangle": ["error", "always-multiline"],

			"comma-spacing": ["error", {
				before: false,
				after: true,
			}],

			"comma-style": ["error", "last"],
			"dot-notation": "error",
			"func-call-spacing": ["error", "never"],

			"key-spacing": ["error", {
				beforeColon: false,
				afterColon: true,
			}],

			"keyword-spacing": ["error", {
				before: true,
				after: true,
			}],

			"no-multiple-empty-lines": ["error", {
				max: 1,
				maxEOF: 0,
			}],

			"no-trailing-spaces": "error",
			"object-curly-spacing": ["error", "always"],
			"prefer-const": "error",
			"space-before-blocks": "error",

			"space-before-function-paren": ["error", {
				anonymous: "always",
				named: "never",
				asyncArrow: "always",
			}],

			"space-in-parens": ["error", "never"],
			"space-infix-ops": "error",

			"arrow-spacing": ["error", {
				before: true,
				after: true,
			}],

			"no-var": "error",
			"prefer-template": "error",
			"template-curly-spacing": ["error", "never"],
		},
	},
]
