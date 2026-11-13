<script setup lang="ts">
import HeroLayout from '~/components/ui/HeroLayout.vue'

const { data: heroScreens } = await useWebsiteHeroScreens('channel-partner')

const layoutContent = computed(() => {
  const screen = heroScreens.value?.[0]
  if (!screen) return null
  return heroContentFromWebsiteScreen(screen, {
    headingId: 'partner-hero-heading',
  })
})
</script>

<template>
  <HeroLayout v-if="layoutContent" :hero-content="layoutContent" />
</template>
