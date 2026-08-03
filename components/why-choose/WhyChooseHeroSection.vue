<script setup lang="ts">
import SecondaryHeroLayout from '~/components/ui/SecondaryHeroLayout.vue'
import type { SecondaryHeroContent } from '~/components/ui/SecondaryHeroLayout.vue'
import { whyChooseHero } from '~/data/why-choose'

const secondaryHero: SecondaryHeroContent = {
  badge: whyChooseHero.badge,
  title: 'A Structured Academic Partnership',
  description: whyChooseHero.description,
  actionBtns: [whyChooseHero.primaryCta, whyChooseHero.secondaryCta],
  ticker: [
    'Verified Educators',
    'Personalised Learning',
    'Transparent Progress',
    'Flexible Formats',
    'Curriculum Aligned',
    'Dedicated Support',
  ],
  headingId: whyChooseHero.headingId,
  tickerAriaLabel: 'Why choose Indian Mentors highlights',
  patternId: 'why-choose-hero-waves',
}
</script>

<template>
  <SecondaryHeroLayout :hero-content="secondaryHero" />
</template>
