<script setup lang="ts">
import ToastContainer from '~/components/ui/ToastContainer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-cream-50">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <ToastContainer />
  </div>
</template>
