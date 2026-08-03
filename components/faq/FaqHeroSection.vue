<script setup lang="ts">
import SecondaryHeroLayout from '~/components/ui/SecondaryHeroLayout.vue'
import type { SecondaryHeroContent } from '~/components/ui/SecondaryHeroLayout.vue'
import { faqHero, faqCategoryLinks } from '~/data/faq'

const secondaryHero: SecondaryHeroContent = {
  badge: faqHero.badge,
  title: `${faqHero.title} ${faqHero.titleHighlight}`,
  description: faqHero.description,
  caption: faqHero.supporting,
  actionBtns: [
    { label: 'Browse Topics', href: '#faq-topics' },
    { label: 'Book Free Demo', href: '#book-demo' },
  ],
  ticker: faqCategoryLinks.map((item) => item.title),
  headingId: 'faq-hero-heading',
  tickerAriaLabel: 'FAQ topics',
  patternId: 'faq-hero-waves',
}
</script>

<template>
  <SecondaryHeroLayout :hero-content="secondaryHero" />
</template>
