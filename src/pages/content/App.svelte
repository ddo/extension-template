<script>
    import { onMount } from 'svelte'
    import Counter from '@/components/Counter.svelte'

    import Ex from '@/extension'

    onMount(() => {
        console.log('content scripts')
    })

    function test() {
        Ex.sendMsg(
            { channel: 'test', data: 'hello from content scripts' },
            (msg) => {
                console.log('msg:', msg)
                alert(msg)
            }
        )
    }
</script>

<button on:click={test} class="extension btn">Extension Content</button>
<Counter />

<style>
    .extension {
        border: 1px solid red;
    }
</style>
