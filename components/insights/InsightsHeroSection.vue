<script setup lang="ts">
import SecondaryHeroLayout from '~/components/ui/SecondaryHeroLayout.vue'
import type { SecondaryHeroContent } from '~/components/ui/SecondaryHeroLayout.vue'
import { insightsHero, insightsHeroHighlights } from '~/data/insights'

const secondaryHero: SecondaryHeroContent = {
  badge: insightsHero.badge,
  title: insightsHero.title,
  subtitle: insightsHero.subtitle,
  description: insightsHero.description,
  caption: insightsHero.caption,
  actionBtns: [insightsHero.primaryCta, insightsHero.secondaryCta],
  ticker: [...insightsHeroHighlights],
  headingId: 'insights-hero-heading',
  tickerAriaLabel: 'Insights Hub highlights',
  patternId: 'insights-hero-waves',
}
</script>

<template>
  <SecondaryHeroLayout :hero-content="secondaryHero">
    <template #badge>
      <nav class="mb-5" aria-label="Breadcrumb" v-motion :initial="{ opacity: 0, y: 8 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 400 } }">
        <ol class="flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/65">
          <li>
            <NuxtLink to="/" class="transition hover:text-white">Home</NuxtLink>
          </li>
          <li aria-hidden="true">/</li>
          <li class="text-white">Insights Hub</li>
        </ol>
      </nav>
      <p class="font-display text-[12px] font-bold uppercase tracking-[0.28em] text-white/75 sm:text-xs" v-motion
        :initial="{ opacity: 0, y: 10 }" :enter="{ opacity: 1, y: 0, transition: { duration: 450 } }">
        {{ insightsHero.badge }}
      </p>
    </template>
  </SecondaryHeroLayout>
</template>
