<script setup lang="ts">
import SecondaryHeroLayout from '~/components/ui/SecondaryHeroLayout.vue'
import type { SecondaryHeroContent } from '~/components/ui/SecondaryHeroLayout.vue'
import { gradesHero } from '~/data/grades'

const secondaryHero: SecondaryHeroContent = {
  badge: gradesHero.badge,
  title: gradesHero.title,
  subtitle: gradesHero.subtitle,
  description: gradesHero.description,
  caption: gradesHero.caption,
  actionBtns: gradesHero.actionBtns,
  ticker: gradesHero.ticker,
  headingId: gradesHero.headingId,
  tickerAriaLabel: gradesHero.tickerAriaLabel,
  patternId: 'grades-hero-waves',
}
</script>

<template>
  <SecondaryHeroLayout :hero-content="secondaryHero">
    <template #title>
      <h1
        id="grades-hero-heading"
        class="mt-5 capitalize font-display text-[2.4rem] font-black leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem]"
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 60 } }"
        v-html="gradesHero.title"
      />
    </template>
  </SecondaryHeroLayout>
</template>
