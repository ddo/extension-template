import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueI18n from '@intlify/vite-plugin-vue-i18n'

export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    plugins: [
        vue(),
        vueI18n({
            include: resolve(__dirname, './src/locales/**'),
        }),
    ],
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
