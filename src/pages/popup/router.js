import page from 'page'

import Splash from '@/views/Splash.svelte'
import SignIn from '@/views/SignIn.svelte'
import Main from '@/views/Main.svelte'

export default { init }

const routes = [
    {
        path: '/',
        view: Splash,
    },
    {
        path: '/signin',
        view: SignIn,
    },
    {
        path: '/main',
        view: Main,
    },
    {
        path: '404',
        view: Splash,
    },
]

// callback for each route
function init(base = '/', callback) {
    routes.forEach((route) => {
        page(route.path, () => {
            callback(route)
        })
    })

    page({ hashbang: true })
    return page
}
