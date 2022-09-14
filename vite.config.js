import { resolve } from 'path'
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    plugins: [svelte()],
    build: {
        emptyOutDir: false,
        rollupOptions: {
            input: {
                background: resolve(
                    __dirname,
                    './src/pages/background/main.js'
                ),
                popup: resolve(__dirname, './popup.html'),
                options: resolve(__dirname, './options.html'),
            },
            output: {
                entryFileNames: '[name].js',
            },
        },
    },
})
