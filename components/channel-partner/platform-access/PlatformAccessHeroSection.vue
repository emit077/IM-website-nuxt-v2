<script setup lang="ts">
import HeroLayout from '~/components/ui/HeroLayout.vue'
import type { HeroContent } from '~/components/ui/HeroLayout.vue'
import { platformAccessHero, platformAccessHeroStats } from '~/data/channel-partner-investment'

const secondaryIconClass =
  'grid h-6 w-6 place-items-center rounded-full bg-blue-100 text-blue-700 transition-colors duration-200 group-hover:bg-blue-600 group-hover:text-white'

const heroContent: HeroContent = {
  badge: platformAccessHero.badge,
  title: platformAccessHero.title,
  subtitle: platformAccessHero.subtitle,
  description: platformAccessHero.description,
  contentClass: platformAccessHero.contentClass,
  backgroundImage: `url('${usePublicAsset(platformAccessHero.backgroundImage)}')`,
  mobileBackgroundImage: `${usePublicAsset('assets/img/hero/hero-mobile-4.png')}`,
  caption: platformAccessHero.caption,
  headingId: 'platform-access-hero-heading',
  actionBtns: [
    {
      variant: 'primary',
      label: platformAccessHero.primaryCta.label,
      icon: 'mdi:view-grid-outline',
      link: platformAccessHero.primaryCta.href,
    },
    {
      variant: 'secondary',
      label: platformAccessHero.secondaryCta.label,
      icon: 'mdi:chart-timeline-variant',
      link: platformAccessHero.secondaryCta.href,
      iconWrapperClass: secondaryIconClass,
    },
  ],
  trustStats: platformAccessHeroStats,
}
</script>

<template>
  <HeroLayout :hero-content="heroContent" />
</template>
