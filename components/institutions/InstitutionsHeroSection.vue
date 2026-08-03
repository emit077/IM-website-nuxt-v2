<script setup lang="ts">
import SecondaryHeroLayout from '~/components/ui/SecondaryHeroLayout.vue'
import type { SecondaryHeroContent } from '~/components/ui/SecondaryHeroLayout.vue'
import { institutionsHero, institutionsHeroHighlights } from '~/data/institutions'

const secondaryHero: SecondaryHeroContent = {
  badge: institutionsHero.badge,
  title: `${institutionsHero.title} ${institutionsHero.titleHighlight}`,
  subtitle: institutionsHero.tagline,
  description: institutionsHero.description,
  caption: institutionsHero.goal,
  actionBtns: [institutionsHero.primaryCta, institutionsHero.secondaryCta],
  ticker: institutionsHeroHighlights.map((item) => item.label),
  headingId: 'institutions-hero-heading',
  tickerAriaLabel: 'Institutional hiring highlights',
  patternId: 'institutions-hero-waves',
}
</script>

<template>
  <SecondaryHeroLayout :hero-content="secondaryHero" />
</template>
