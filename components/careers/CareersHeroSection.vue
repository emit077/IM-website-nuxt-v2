<script setup lang="ts">
import SecondaryHeroLayout from '~/components/ui/SecondaryHeroLayout.vue'
import type { SecondaryHeroContent } from '~/components/ui/SecondaryHeroLayout.vue'
import { careersHero, careersHeroHighlights } from '~/data/careers'

const secondaryHero: SecondaryHeroContent = {
  badge: careersHero.badge,
  title: `${careersHero.title} ${careersHero.titleHighlight}`,
  description: careersHero.description,
  caption: careersHero.supporting,
  actionBtns: [careersHero.primaryCta, careersHero.secondaryCta],
  ticker: careersHeroHighlights.map((item) => item.label),
  headingId: 'careers-hero-heading',
  tickerAriaLabel: 'Careers highlights',
  patternId: 'careers-hero-waves',
}
</script>

<template>
  <SecondaryHeroLayout :hero-content="secondaryHero" />
</template>
