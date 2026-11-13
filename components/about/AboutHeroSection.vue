<script setup lang="ts">
import HeroLayout from '~/components/ui/HeroLayout.vue'

const { data: heroScreens } = await useWebsiteHeroScreens('about')

const heroContent = computed(() => {
  const screen = heroScreens.value?.[0]
  if (!screen) return null
  return heroContentFromWebsiteScreen(screen, {
    contentClass: '!px-0 !py-0 max-w-2xl lg:max-w-[46rem]',
    headingId: 'about-hero-heading',
  })
})
</script>

<template>
  <HeroLayout v-if="heroContent" :hero-content="heroContent" />
</template>
