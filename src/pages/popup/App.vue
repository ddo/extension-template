<script setup>
import Splash from '@/views/Splash.vue'

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
    <Header />
    <Splash />
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