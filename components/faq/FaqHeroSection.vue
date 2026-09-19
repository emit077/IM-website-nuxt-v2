<script setup lang="ts">
import { computed } from 'vue'
import SecondaryHeroLayout from '~/components/ui/SecondaryHeroLayout.vue'
import type { SecondaryHeroContent } from '~/components/ui/SecondaryHeroLayout.vue'
import { faqHero } from '~/data/faq'
import type { FaqCategory } from '~/data/faq'
import { externalLinks } from '~/data/external-links'

const props = withDefaults(
  defineProps<{
    categories?: FaqCategory[]
  }>(),
  {
    categories: () => [],
  },
)

const secondaryHero = computed<SecondaryHeroContent>(() => ({
  badge: faqHero.badge,
  title: `${faqHero.title} ${faqHero.titleHighlight}`,
  description: faqHero.description,
  caption: faqHero.supporting,
  actionBtns: [
    { label: 'Browse Topics', href: '#faq-topics' },
    { label: 'Book Free Demo', href: externalLinks.studentSignup },
  ],
  ticker: props.categories.map((item) => item.title),
  headingId: 'faq-hero-heading',
  tickerAriaLabel: 'FAQ topics',
  patternId: 'faq-hero-waves',
}))
</script>

<template>
  <SecondaryHeroLayout :hero-content="secondaryHero" />
</template>
