<script setup lang="ts">
import Main from '../components/Main.vue';
import { SpeedInsights } from "@vercel/speed-insights/vue"
import { Analytics } from "@vercel/analytics/vue"
</script>

<template>
  <SpeedInsights />
  <Main />
  <Analytics />
</template>
