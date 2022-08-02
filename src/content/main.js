import { createApp } from 'vue'
import App from './App.vue'

const div = document.createElement('section')
div.id = 'unique-app-id'
document.body.appendChild(div)

const app = createApp(App)
app.mount('#unique-app-id')