<script setup lang="ts">
import SecondaryHeroLayout from '~/components/ui/SecondaryHeroLayout.vue'
import type { SecondaryHeroContent } from '~/components/ui/SecondaryHeroLayout.vue'
import { institutionsPricingHero } from '~/data/institutions-pricing'

const { data: heroScreens } = await useWebsiteHeroScreens('institutions/pricing')

const fallbackHero: SecondaryHeroContent = {
  badge: institutionsPricingHero.badge,
  title: institutionsPricingHero.title,
  subtitle: institutionsPricingHero.subtitle,
  description: institutionsPricingHero.description,
  caption: institutionsPricingHero.caption,
  actionBtns: [institutionsPricingHero.primaryCta, institutionsPricingHero.secondaryCta],
  ticker: institutionsPricingHero.ticker,
  headingId: institutionsPricingHero.headingId,
  tickerAriaLabel: institutionsPricingHero.tickerAriaLabel,
  patternId: 'institutions-pricing-hero-waves',
}

const heroContent = computed(() =>
  mergeWebsiteHeroScreen(fallbackHero, heroScreens.value?.[0]),
)
</script>

<template>
  <SecondaryHeroLayout :hero-content="heroContent" />
</template>
