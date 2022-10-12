<script>
    import { onMount } from 'svelte'
    import Router from './router'

    import Header from '@/components/Header.svelte'

    import User from '@/models/user'

    let view
    const router = Router.init((route) => {
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
</script>

<div>
    <Header />

    <svelte:component this={view} {session} />
</div>