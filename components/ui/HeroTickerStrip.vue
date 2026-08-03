<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    items?: string[]
    ariaLabel?: string
  }>(),
  {
    items: () => [],
    ariaLabel: 'Highlights',
  },
)

const tickerItems = computed(() => {
  if (!props.items.length) return []
  return [...props.items, ...props.items]
})
</script>

<template>
  <div v-if="tickerItems.length" class="relative z-[4] -mb-5 h-[4.5rem] sm:-mb-6 sm:h-20" :aria-label="ariaLabel">
    <div
      class="theme-ticker-strip absolute inset-x-[-6%] top-0 origin-center rotate-[-3.1deg] scale-[1.06] py-3 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.35)] sm:py-3.5">
      <div class="overflow-hidden">
        <div class="hero-ticker-marquee-reverse flex w-max items-center gap-7 motion-reduce:animate-none sm:gap-9">
          <template v-for="(item, i) in tickerItems" :key="`back-${item}-${i}`">
            <span class="shrink-0 font-display text-[12px] font-black uppercase tracking-[0.18em] sm:text-[13px]"
              v-html="item" />
            <span aria-hidden="true" class="shrink-0 text-sm font-black opacity-30">|</span>
          </template>
        </div>
      </div>
    </div>

    <div
      class="theme-ticker-strip absolute inset-x-[-6%] top-6 origin-center -rotate-[-2.5deg] scale-[1.06] py-3 shadow-[0_10px_28px_-12px_rgba(0,0,0,0.4)] sm:top-7 sm:py-3.5">
      <div class="overflow-hidden">
        <div class="flex w-max items-center gap-7 animate-marquee motion-reduce:animate-none sm:gap-9">
          <template v-for="(item, i) in tickerItems" :key="`front-${item}-${i}`">
            <span class="shrink-0 font-display text-[12px] font-black uppercase tracking-[0.18em] sm:text-[13px]"
              v-html="item" />
            <span aria-hidden="true" class="shrink-0 text-sm font-black opacity-30">|</span>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-ticker-marquee-reverse {
  animation: hero-ticker-marquee-reverse 40s linear infinite;
}

@keyframes hero-ticker-marquee-reverse {
  from {
    transform: translateX(-50%);
  }

  to {
    transform: translateX(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-ticker-marquee-reverse {
    animation: none;
  }
}
</style>
