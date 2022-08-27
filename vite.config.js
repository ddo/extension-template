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
        rollupOptions: {
            input: {
                popup: resolve(__dirname, 'src/pages/popup/index.html'),
                options: resolve(__dirname, 'src/pages/options/index.html'),
            },
        },
    },
})
