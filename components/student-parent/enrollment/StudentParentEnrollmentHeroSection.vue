<script setup lang="ts">
import SecondaryHeroLayout from '~/components/ui/SecondaryHeroLayout.vue'
import type { SecondaryHeroContent } from '~/components/ui/SecondaryHeroLayout.vue'
import { enrollmentHero } from '~/data/student-parent'

const heroContent: SecondaryHeroContent = {
  badge: enrollmentHero.badge,
  title: enrollmentHero.title,
  description: enrollmentHero.description,
  caption: enrollmentHero.caption,
  actionBtns: [enrollmentHero.primaryCta, enrollmentHero.secondaryCta],
  ticker: enrollmentHero.ticker,
  headingId: 'sp-enrollment-hero-heading',
  tickerAriaLabel: 'Student enrollment highlights',
  patternId: 'sp-enrollment-hero-waves',
}
</script>

<template>
  <SecondaryHeroLayout :hero-content="heroContent" />
</template>
