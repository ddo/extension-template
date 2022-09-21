<script>
    import { onMount } from 'svelte'
    import Router from './router'

    import Splash from '@/views/Splash.svelte'
    import SignIn from '@/views/SignIn.svelte'
    import Main from '@/views/Main.svelte'

    import Header from '@/components/Header.svelte'

    import User from '@/models/user'

    let view
    const router = Router.init('/', (route) => {
        view = route.view
    })

    let session = null
    onMount(async () => {
        session = await User.checkSession()
        if (!session) {
            router('/signin')
            return
        }

        router('/main')
    })

    async function checkSession() {
        try {
            const session = await User.getSession()
            if (!session) {
                return null
            }

            return session
        } catch (err) {
            alert(err)
        }
    }

    let test = 'test'
</script>

<div>
    <Header />

    <svelte:component this={view} {session} />
</div>