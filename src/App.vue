<script setup lang="ts">
import { onMounted } from 'vue'
import { useAppStore } from '@/stores/app'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

const appStore = useAppStore()

onMounted(() => {
  appStore.initializeApp()
})
</script>

<template>
  <div class="flex flex-col min-h-screen bg-white">
    <Header />
    <main class="flex-grow">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
</style>
