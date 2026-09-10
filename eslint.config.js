import cypressPlugin from "eslint-plugin-cypress"

export default [
    {
        ignores: [
            "node_modules/**",
            "cypress/e2e/legacy/**",
            "cypress.config.js",
            "cypress/support/e2e.js"
        ]
    },
    {
        files: ["**/*.js"],
        plugins: {
            cypress: cypressPlugin
        },
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                browser: true,
                node: true,
                ...cypressPlugin.environments.globals.globals
            }
        },
        rules: {
            "semi": ["error", "never"],
            "quotes": ["error", "double", { allowTemplateLiterals: true }],
            "no-unused-vars": ["warn"],
            "cypress/no-unnecessary-waiting": "error",
            "cypress/assertion-before-screenshot": "warn"
        }
    }
]