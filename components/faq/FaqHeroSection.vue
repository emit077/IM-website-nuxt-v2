<script setup lang="ts">
import { computed } from 'vue'
import SecondaryHeroLayout from '~/components/ui/SecondaryHeroLayout.vue'
import type { SecondaryHeroContent } from '~/components/ui/SecondaryHeroLayout.vue'
import { faqCategories, faqHero, faqCategoryLinks } from '~/data/faq'
import { externalLinks } from '~/data/external-links'

const { data: apiCategories } = await useWebsiteFaqs(faqCategories)

const secondaryHero = computed<SecondaryHeroContent>(() => ({
  badge: faqHero.badge,
  title: `${faqHero.title} ${faqHero.titleHighlight}`,
  description: faqHero.description,
  caption: faqHero.supporting,
  actionBtns: [
    { label: 'Browse Topics', href: '#faq-topics' },
    { label: 'Book Free Demo', href: externalLinks.studentSignup },
  ],
  ticker: (apiCategories.value?.length
    ? apiCategories.value.map((item) => item.title)
    : faqCategoryLinks.map((item) => item.title)),
  headingId: 'faq-hero-heading',
  tickerAriaLabel: 'FAQ topics',
  patternId: 'faq-hero-waves',
}))
</script>

<template>
  <SecondaryHeroLayout :hero-content="secondaryHero" />
</template>
