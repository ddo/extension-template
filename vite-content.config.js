import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    plugins: [vue()],
    publicDir: false,
    css: {
        postcss: {
            plugins: [
                tailwindcss('./tailwind-content.config.js'),
                autoprefixer,
            ],
        },
    },
    build: {
        outDir: './dist/content',
        rollupOptions: {
            input: {
                content: resolve(__dirname, './src/pages/content/main.js'),
            },
            output: {
                entryFileNames: 'main.js',
                assetFileNames: 'index.css',
            },
        },
    },
})
