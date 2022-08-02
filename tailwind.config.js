module.exports = {
    content: ['./*.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/@ddict/popup/dist/*.js'],
    theme: {
        extend: {},
    },
    plugins: [require('daisyui')],
}
