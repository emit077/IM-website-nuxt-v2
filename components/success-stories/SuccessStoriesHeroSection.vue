<script setup lang="ts">
import VideoTestimonialsSection from '~/components/home/VideoTestimonialsSection.vue'
import SecondaryHeroLayout from '~/components/ui/SecondaryHeroLayout.vue'
import type { SecondaryHeroContent } from '~/components/ui/SecondaryHeroLayout.vue'
import { successStoriesHero } from '~/data/success-stories'

const heroContent: SecondaryHeroContent = {
  badge: successStoriesHero.badge,
  title: successStoriesHero.title,
  subtitle: successStoriesHero.subtitle,
  description: successStoriesHero.description,
  caption: successStoriesHero.caption,
  actionBtns: [successStoriesHero.primaryCta, successStoriesHero.secondaryCta],
  ticker: [...successStoriesHero.ticker],
  headingId: 'success-stories-hero-heading',
  tickerAriaLabel: 'Success stories highlights',
  patternId: 'success-stories-hero-waves',
}
</script>

<template>
  <SecondaryHeroLayout :hero-content="heroContent">
    <!-- <VideoTestimonialsSection embedded /> -->
  </SecondaryHeroLayout>
</template>
