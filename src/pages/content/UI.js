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

    // shadow DOM
    const shadow = wrapper.attachShadow({ mode: 'open' })

    const link = createStyleLink('/content/index.css')
    shadow.appendChild(link)

    const app = new App({
        target: shadow,
    })

    return app
}

function createStyleLink(path) {
    path = Ex.getURL(path)

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = path

    return link
}
