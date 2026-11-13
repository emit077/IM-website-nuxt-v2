<script setup lang="ts">
import HeroLayout from '~/components/ui/HeroLayout.vue'

const { data: heroScreens } = await useWebsiteHeroScreens('channel-partner/investment')

const heroContent = computed(() => {
  const screen = heroScreens.value?.[0]
  if (!screen) return null
  return heroContentFromWebsiteScreen(screen, {
    headingId: 'investment-hero-heading',
  })
})
</script>

<template>
  <HeroLayout v-if="heroContent" :hero-content="heroContent" />
</template>
