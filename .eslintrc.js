module.exports = {
    env: {
        commonjs: true,
        es6: true,
    },
    extends: ['eslint:recommended', 'plugin:vue/vue3-essential'],
    globals: {
        google: 'readonly',
        firebase: 'readonly',
        console: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
    },
    rules: {},
}