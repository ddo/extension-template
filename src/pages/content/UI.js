import Ex from '@/extension'
import App from './App.svelte'
import './index.css'

export default {
    init,
}

function init() {
    // wrapper
    const wrapper = document.createElement('section')
    document.body.appendChild(wrapper)

    const styleURL = Ex.getURL('/content/index.css')
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = styleURL

    // shadow DOM
    const shadow = wrapper.attachShadow({ mode: 'open' })
    shadow.appendChild(link)

    const app = new App({
        target: shadow,
    })

    return app
}
