<script setup lang="ts">
import CarouselLayout from '~/components/ui/CarouselLayout.vue'
import HeroLayout from '~/components/ui/HeroLayout.vue'

const props = withDefaults(
  defineProps<{
    /** Auto-advance interval in ms */
    interval?: number
    autoplay?: boolean
    showButtons?: boolean
    showDots?: boolean
  }>(),
  {
    interval: 5000,
    autoplay: true,
    showButtons: true,
    showDots: false,
  },
)


const { data: heroScreenRows } = await useWebsiteHeroScreens('home')

const heroScreens = computed(() =>
  (heroScreenRows.value ?? []).map((row, index) =>
    heroContentFromWebsiteScreen(row, {
      contentClass: '!px-0 !py-0 max-w-2xl lg:max-w-[46rem]',
      headingId: `hero-screen-${index + 1}-heading`,
    }),
  ),
)
</script>

<template>
  <div v-if="heroScreens.length" class="hero-carousel overflow-x-clip">
    <CarouselLayout :items="heroScreens" :interval="props.interval" :autoplay="props.autoplay"
      :show-buttons="props.showButtons" :show-dots="props.showDots" aria-label="Featured highlights">
      <template #default="{ item }">
        <HeroLayout :hero-content="item" />
      </template>
    </CarouselLayout>


    <!-- <div class="hero-carousel-ticker mb-10 mt-[-20px]">
      <HeroTickerStrip :items="heroTickerItems" aria-label="Platform highlights" />
    </div> -->
  </div>
</template>

<style scoped>
.hero-carousel-ticker {
  --theme-secondary: var(--theme-blue, #2a2fff);
  --theme-secondary-ink: #ffffff;
  --theme-secondary-glow: rgba(42, 47, 255, 0.45);
}
</style>
