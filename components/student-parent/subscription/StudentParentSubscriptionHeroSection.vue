<script setup lang="ts">
import SecondaryHeroLayout from '~/components/ui/SecondaryHeroLayout.vue'
import type { SecondaryHeroContent } from '~/components/ui/SecondaryHeroLayout.vue'
import { subscriptionHero } from '~/data/student-parent'

const heroContent: SecondaryHeroContent = {
  badge: subscriptionHero.badge,
  title: subscriptionHero.title,
  description: subscriptionHero.description,
  caption: subscriptionHero.caption,
  actionBtns: [
    subscriptionHero.secondaryCta,
    { ...subscriptionHero.tertiaryCta, variant: 'secondary', showArrow: false },
  ],
  ticker: subscriptionHero.ticker,
  headingId: 'sp-subscription-hero-heading',
  tickerAriaLabel: 'Subscription plan highlights',
  patternId: 'sp-subscription-hero-waves',
}
</script>

<template>
  <div id="overview">
    <SecondaryHeroLayout :hero-content="heroContent" />
  </div>
</template>
