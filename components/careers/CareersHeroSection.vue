<script setup lang="ts">
import SecondaryHeroLayout from '~/components/ui/SecondaryHeroLayout.vue'
import type { SecondaryHeroContent } from '~/components/ui/SecondaryHeroLayout.vue'
import { careersHero, careersHeroHighlights } from '~/data/careers'

const secondaryHero: SecondaryHeroContent = {
  badge: careersHero.badge,
  title: careersHero.title,
  subtitle: careersHero.subtitle,
  description: careersHero.description,
  caption: careersHero.caption,
  actionBtns: [careersHero.primaryCta, careersHero.secondaryCta],
  ticker: careersHeroHighlights.map((item) => item.label),
  headingId: 'careers-hero-heading',
  tickerAriaLabel: 'Career values at Indian Mentors',
  patternId: 'careers-hero-waves',
}
</script>

<template>
  <SecondaryHeroLayout :hero-content="secondaryHero">
    <template #title>
      <h1
        id="careers-hero-heading"
        class="mt-5 capitalize font-display text-[2.4rem] font-black leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem]"
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 60 } }"
        v-html="careersHero.title"
      />
    </template>
    <p
      class="mt-8 max-w-3xl text-center font-display text-base font-bold text-white sm:text-lg"
      v-motion
      :initial="{ opacity: 0, y: 10 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 450, delay: 340 } }"
    >
      {{ careersHero.promise }}
    </p>
  </SecondaryHeroLayout>
</template>
