<script>
    import { onMount } from 'svelte'
    import Counter from '@/components/Counter.svelte'

    onMount(() => {
        console.log('content scripts')
    })
</script>

<button class="extension dd-btn">Extension Content</button>
<Counter />

<style>
    .extension {
        border: 1px solid red;
    }
</style>
