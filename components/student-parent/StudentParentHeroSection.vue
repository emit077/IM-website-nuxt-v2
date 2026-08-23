<script setup lang="ts">
import SecondaryHeroLayout from '~/components/ui/SecondaryHeroLayout.vue'
import type { SecondaryHeroContent } from '~/components/ui/SecondaryHeroLayout.vue'
import { studentParentHero } from '~/data/student-parent'

const heroContent: SecondaryHeroContent = {
  badge: studentParentHero.brand,
  title: studentParentHero.titleLine1,
  description: studentParentHero.description,
  caption: studentParentHero.caption,
  actionBtns: [
    studentParentHero.primaryCta,
    studentParentHero.tertiaryCta,
  ],
  ticker: studentParentHero.ticker,
  headingId: 'sp-hero-heading',
  tickerAriaLabel: 'Students and parents highlights',
  patternId: 'sp-hero-waves',
}
</script>

<template>
  <SecondaryHeroLayout :hero-content="heroContent" />
</template>
