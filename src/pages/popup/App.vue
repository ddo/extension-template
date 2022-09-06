<script setup>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
</script>

<template>
    <Header />
    <h1>Popup</h1>
    <button class="btn btn-lg">Extension Popup</button>
    <Footer />
</template>

<script>
export default {
    data() {
        return {
            data: null,
        }
    },
}
</script>