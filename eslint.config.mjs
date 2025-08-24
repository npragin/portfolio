import { defineConfig } from "eslint/config"
import react from "eslint-plugin-react"
import path from "node:path"
import { fileURLToPath } from "node:url"
import js from "@eslint/js"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
})

export default defineConfig([{
	ignores: [".next/**"],

	extends: compat.extends("eslint:recommended", "plugin:react/recommended", "plugin:import/recommended", "next/core-web-vitals"),

	plugins: {
		react,
	},

	languageOptions: {
		ecmaVersion: 2021,
		sourceType: "module",

		parserOptions: {
			ecmaFeatures: {
				jsx: true,
			},
		},
	},

	settings: {
		react: {
			version: "detect",
		},
		"import/resolver": {
			alias: {
				map: [
					["@components", "./components/index.js"],
					["@styles", "./styles"],
				],
				extensions: [".js", ".jsx", ".ts", ".tsx", ".css"],
			},
			node: { extensions: [".js", ".jsx", ".ts", ".tsx", ".css"] },
		},
	},

	rules: {
		semi: ["error", "never"],
		indent: ["error", "tab"],
		"no-unused-vars": "error",
		"no-unused-expressions": "error",
		"no-unused-labels": "error",
		"no-undef": "error",
		quotes: ["error", "double"],
		"react/react-in-jsx-scope": "off",
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
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
}])
