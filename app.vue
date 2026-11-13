<script setup lang="ts">
import ToastContainer from '~/components/ui/ToastContainer.vue'
import PageLoader from '~/components/ui/PageLoader.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-cream-50">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <ToastContainer />
    <ClientOnly>
      <PageLoader />
      <UiLaunchCurtain />
    </ClientOnly>
  </div>
</template>
