import { createApp } from 'vue'
import App from './App.vue'
import '@/index.css'
import I18n from '@/i18n'

const app = createApp(App)
app.use(I18n.i18n)
app.mount('#app')