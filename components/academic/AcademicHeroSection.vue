<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { academicHero } from '~/data/academic-coverage'

const tickerItems = [...academicHero.ticker, ...academicHero.ticker]
</script>

<template>
  <section class="academic-hero relative overflow-x-clip" aria-labelledby="academic-hero-heading">
    <svg aria-hidden="true" class="pointer-events-none absolute inset-0 h-full w-full opacity-[0.14]"
      xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <defs>
        <pattern id="academic-hero-waves" width="120" height="60" patternUnits="userSpaceOnUse">
          <path d="M0 30 Q 30 0 60 30 T 120 30" fill="none" stroke="white" stroke-width="1.2" />
          <path d="M0 45 Q 30 20 60 45 T 120 45" fill="none" stroke="white" stroke-width="0.8" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#academic-hero-waves)" />
    </svg>

    <div aria-hidden="true"
      class="pointer-events-none absolute -left-28 top-10 h-80 w-80 rounded-full bg-[#6b8cff]/25 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-24 bottom-24 h-96 w-96 rounded-full bg-[#1518b8]/35 blur-3xl" />

    <div class="container-page relative z-[1] pb-24 pt-12 sm:pb-28 lg:pb-32 lg:pt-16">
      <div class="mx-auto flex max-w-4xl flex-col items-center text-center">
        <p class="font-display text-[11px] font-bold  tracking-[0.28em] text-white/75 sm:text-xs" v-motion
          :initial="{ opacity: 0, y: 10 }" :enter="{ opacity: 1, y: 0, transition: { duration: 450 } }">
          {{ academicHero.brand }}
        </p>

        <h1 id="academic-hero-heading"
          class="academic-hero-title mt-5  text-balance font-display text-[2.6rem] font-black  leading-[0.95] tracking-[-0.03em] text-white sm:text-5xl lg:text-[4.5rem] xl:text-[5rem]"
          v-motion :initial="{ opacity: 0, y: 16 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 60 } }">
          <span class="block">{{ academicHero.titleLine1 }}</span>
        </h1>



        <p class="mt-6 max-w-xl text-pretty text-[14px] font-medium leading-relaxed text-white/85 sm:mt-7 sm:text-[15px]"
          v-motion :initial="{ opacity: 0, y: 12 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 180 } }">
          {{ academicHero.description }}
        </p>

        <div class="mt-6 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center"
          v-motion :initial="{ opacity: 0, y: 12 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 280 } }">
          <a :href="academicHero.primaryCta.href"
            class="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--ac-lime)] px-7 py-3.5 text-[13px] font-black uppercase tracking-[0.12em] text-black shadow-[0_14px_32px_-12px_rgba(212,255,0,0.75)] transition duration-300 hover:-translate-y-0.5 hover:brightness-105">
            {{ academicHero.primaryCta.label }}
            <span class="grid h-5 w-5 place-items-center rounded-full bg-black text-[var(--ac-lime)]"
              aria-hidden="true">
              <Icon icon="mdi:arrow-right" class="h-3.5 w-3.5" />
            </span>
          </a>
          <a :href="academicHero.secondaryCta.href"
            class="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-transparent px-6 py-3.5 text-[13px] font-bold uppercase tracking-[0.1em] text-white transition duration-300 hover:bg-white/10">
            {{ academicHero.secondaryCta.label }}
          </a>
        </div>
      </div>
    </div>

    <!-- Dual crossed lime strips (reference style) -->
    <div class="relative z-[4] -mb-5 h-[4.5rem] sm:-mb-6 sm:h-20" aria-label="Academic coverage highlights">
      <!-- Back strip: tilt up L→R -->
      <div
        class="absolute inset-x-[-6%] top-0 origin-center rotate-[2.5deg] scale-[1.06] bg-[var(--ac-lime)] py-3 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.35)] sm:py-3.5">
        <div class="overflow-hidden">
          <div class="academic-hero-marquee-reverse flex w-max items-center gap-7 motion-reduce:animate-none sm:gap-9">
            <template v-for="(item, i) in tickerItems" :key="`back-${item}-${i}`">
              <span
                class="shrink-0 font-display text-[12px] font-black uppercase tracking-[0.18em] text-black sm:text-[13px]">
                {{ item }}
              </span>
              <span aria-hidden="true" class="shrink-0 text-sm font-black text-black/30">|</span>
            </template>
          </div>
        </div>
      </div>

      <!-- Front strip: tilt down L→R -->
      <div
        class="absolute inset-x-[-6%] top-6 origin-center -rotate-[2.5deg] scale-[1.06] bg-[var(--ac-lime)] py-3 shadow-[0_10px_28px_-12px_rgba(0,0,0,0.4)] sm:top-7 sm:py-3.5">
        <div class="overflow-hidden">
          <div class="flex w-max items-center gap-7 animate-marquee motion-reduce:animate-none sm:gap-9">
            <template v-for="(item, i) in tickerItems" :key="`front-${item}-${i}`">
              <span
                class="shrink-0 font-display text-[12px] font-black uppercase tracking-[0.18em] text-black sm:text-[13px]">
                {{ item }}
              </span>
              <span aria-hidden="true" class="shrink-0 text-sm font-black text-black/30">|</span>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.academic-hero {
  background: var(--ac-blue, #2a2fff);
}

.academic-hero-title {
  text-shadow: 0 2px 0 rgba(0, 0, 0, 0.04);
}

.academic-hero-marquee-reverse {
  animation: academic-marquee-reverse 40s linear infinite;
}

@keyframes academic-marquee-reverse {
  from {
    transform: translateX(-50%);
  }

  to {
    transform: translateX(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .academic-hero-marquee-reverse {
    animation: none;
  }
}
</style>
