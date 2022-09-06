<script setup></script>

<template>
    <button class="extension dd-btn">Extension Content</button>
</template>

<script>
export default {
    name: 'Content',
    data() {
        return {
            data: null,
        }
    },
    mounted() {
        console.log('content scripts')
    },
}
</script>
<style>
.extension {
    border: 1px solid red;
}
</style>