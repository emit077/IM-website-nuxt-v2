<script setup lang="ts">
import SecondaryHeroLayout from '~/components/ui/SecondaryHeroLayout.vue'
import type { SecondaryHeroContent } from '~/components/ui/SecondaryHeroLayout.vue'
import { heroContent, heroHighlights } from '~/data/tutors'

const secondaryHero: SecondaryHeroContent = {
  badge: heroContent.badge,
  title: "Join India's growing network of professional mentors",
  description: heroContent.description,
  actionBtns: [heroContent.primaryCta, heroContent.secondaryCta],
  ticker: [
    ...heroHighlights.map((item) => item.label),
    ...heroContent.audiences,
  ],
  headingId: 'tutors-hero-heading',
  tickerAriaLabel: 'Tutor partnership highlights',
  patternId: 'tutors-hero-waves',
}
</script>

<template>
  <SecondaryHeroLayout :hero-content="secondaryHero" />
</template>
