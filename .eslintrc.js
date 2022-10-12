module.exports = {
    env: {
        commonjs: true,
        es6: true,
        browser: true,
    },
    extends: ['eslint:recommended', 'plugin:vue/vue3-essential'],
    globals: {
        chrome: 'readonly',
        browser: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
    },
    rules: {
        'no-console': 1,
        'vue/multi-word-component-names': 0,
    },
}