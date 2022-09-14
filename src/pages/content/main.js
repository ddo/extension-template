const div = document.createElement('section')
div.id = 'unique-app-id'
document.body.appendChild(div)

import App from './App.svelte'
import './index.css'

const app = new App({
    target: document.getElementById('unique-app-id'),
})

export default app