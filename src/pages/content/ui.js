import { createApp } from 'vue'

import Ex from '@/extension'
import App from './App.vue'
import './index.css'

export default {
    init,
}

function init() {
    // wrapper
    const wrapper = document.createElement('section')
    document.body.appendChild(wrapper)

    // shadow DOM
    const shadow = wrapper.attachShadow({ mode: 'open' })

    const app = createApp(App)
    app.mount(shadow)

    // need to set style after mount because mount remove link
    const link = createStyleLink('/content/index.css')
    shadow.appendChild(link)
}

function createStyleLink(path) {
    path = Ex.getURL(path)

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = path

    return link
}
