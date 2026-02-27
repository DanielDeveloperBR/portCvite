<script setup lang="ts">
import Header from './views/Header.vue';
import Main from './views/Main.vue'
import Footer from './views/Footer.vue'
import { Analytics } from "@vercel/analytics/next"
</script>

<template>
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
    <Analytics />
</template>
