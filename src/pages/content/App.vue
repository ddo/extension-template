<script setup></script>

<template>
    <button @click="test" class="extension dd-btn">
        Extension Content Scripts
    </button>
</template>

<script>
import Ex from '@/extension'

export default {
    data() {
        return {
            data: null,
        }
    },
    mounted() {
        console.log('content scripts')
    },
    methods: {
        test() {
            Ex.sendMsg(
                { channel: 'test', data: 'hello from content scripts' },
                (msg) => {
                    console.log('msg:', msg)
                    alert(msg)
                }
            )
        },
    },
}
</script>
<style>
.extension {
    border: 1px solid red;
}
</style>