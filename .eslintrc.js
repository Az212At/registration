module.exports = {
    root: true,
    env: {
        node: true,
        es2022: true,
    },
    plugins: ["unused-imports"],
    extends: [
        "eslint:recommended",
        "plugin:vue/vue3-strongly-recommended",
        "plugin:prettier/recommended",
    ],
    rules: {
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": "warn",
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto",
            },
        ],
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",

        "vue/v-on-event-hyphenation": [
            "error",
            "never",
            {
                autofix: true,
                ignore: [],
            },
        ],
        "vue/block-tag-newline": [
            "error",
            { singleline: "always", multiline: "always", maxEmptyLines: 2 },
        ],
        "vue/singleline-html-element-content-newline": "off",
        "vue/component-name-in-template-casing": [
            "error",
            "PascalCase",
            {
                registeredComponentsOnly: false,
                ignores: [],
            },
        ],
        "vue/component-options-name-casing": ["error", "PascalCase"],
        "vue/custom-event-name-casing": [
            "error",
            "camelCase",
            {
                ignores: [],
            },
        ],
        "vue/new-line-between-multi-line-property": [
            "error",
            {
                minLineOfMultilineProperty: 2,
            },
        ],
        "vue/next-tick-style": ["error", "callback"],
        "vue/no-deprecated-model-definition": [
            "error",
            {
                allowVue3Compat: true,
            },
        ],
        "vue/no-unused-refs": ["error"],
        "vue/no-use-v-else-with-v-for": ["error"],
        "vue/attributes-order": [
            "error",
            {
                order: [
                    "DEFINITION",
                    "LIST_RENDERING",
                    "CONDITIONALS",
                    "RENDER_MODIFIERS",
                    "GLOBAL",
                    ["UNIQUE", "SLOT"],
                    "TWO_WAY_BINDING",
                    "OTHER_DIRECTIVES",
                    "OTHER_ATTR",
                    "EVENTS",
                    "CONTENT",
                ],
                alphabetical: false,
            },
        ],
        "vue/no-useless-v-bind": [
            "error",
            {
                ignoreIncludesComment: false,
                ignoreStringEscape: false,
            },
        ],
        "vue/padding-line-between-blocks": ["error", "always"],
        "vue/padding-lines-in-component-definition": [
            "error",
            {
                betweenOptions: "always",

                withinOption: "always",

                groupSingleLineProperties: true,
            },
        ],
        "vue/prefer-define-options": ["error"],
        "vue/prefer-separate-static-class": ["error"],
        "vue/prefer-true-attribute-shorthand": ["error", "always"],
        "vue/require-direct-export": [
            "error",
            {
                disallowFunctionalComponentFunction: false,
            },
        ],
        "vue/require-name-property": ["error"],
        "vue/require-typed-ref": ["error"],
        "vue/v-for-delimiter-style": ["error", "in"],
        "vue/valid-define-options": ["error"],
        "vue/block-order": [
            "error",
            {
                order: ["script", "template", "style[scoped]"],
            },
        ],
        "vue/order-in-components": [
            "error",
            {
                order: [
                    "el",
                    "name",
                    "key",
                    "parent",
                    "functional",
                    ["delimiters", "comments"],
                    ["components", "directives", "filters"],
                    "extends",
                    "mixins",
                    ["provide", "inject"],
                    "ROUTER_GUARDS",
                    "layout",
                    "middleware",
                    "validate",
                    "scrollToTop",
                    "transition",
                    "loading",
                    "inheritAttrs",
                    "model",
                    "emits",
                    ["props", "propsData"],
                    "setup",
                    "asyncData",
                    "data",
                    "fetch",
                    "head",
                    "computed",
                    "watch",
                    "watchQuery",
                    "methods",
                    "LIFECYCLE_HOOKS",
                    ["template", "render"],
                    "renderError",
                ],
            },
        ],
    },
};