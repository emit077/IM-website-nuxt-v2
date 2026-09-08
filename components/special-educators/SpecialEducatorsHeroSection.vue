<script setup lang="ts">
import SecondaryHeroLayout from '~/components/ui/SecondaryHeroLayout.vue'
import type { SecondaryHeroContent } from '~/components/ui/SecondaryHeroLayout.vue'
import { seHero } from '~/data/special-educators'

const secondaryHero: SecondaryHeroContent = {
  badge: seHero.badge,
  title: seHero.title,
  subtitle: seHero.subtitle,
  description: seHero.description,
  caption: seHero.caption,
  actionBtns: seHero.actionBtns,
  ticker: seHero.ticker,
  headingId: seHero.headingId,
  tickerAriaLabel: seHero.tickerAriaLabel,
  patternId: 'special-educators-hero-waves',
}
</script>

<template>
  <SecondaryHeroLayout :hero-content="secondaryHero" />
</template>
