<script setup lang="ts">
import SecondaryHeroLayout from '~/components/ui/SecondaryHeroLayout.vue'
import type { SecondaryHeroContent } from '~/components/ui/SecondaryHeroLayout.vue'
import { academicHero } from '~/data/academic-coverage'

const heroContent: SecondaryHeroContent = {
  badge: academicHero.brand,
  title: academicHero.titleLine1,
  description: academicHero.description,
  actionBtns: [
    academicHero.primaryCta,
    academicHero.secondaryCta,
  ],
  ticker: academicHero.ticker,
  headingId: 'academic-hero-heading',
  tickerAriaLabel: 'Academic coverage highlights',
  patternId: 'academic-hero-waves',
}
</script>

<template>
  <SecondaryHeroLayout :hero-content="heroContent" />
</template>
