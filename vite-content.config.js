import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    plugins: [vue()],
    publicDir: false,
    build: {
        outDir: 'dist/content',
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
