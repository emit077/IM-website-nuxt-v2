<script setup lang="ts">
import AppNavbar from '~/components/AppNavbar.vue'
import Footer from '~/components/Footer.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <AppNavbar />
    <main class="flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>
