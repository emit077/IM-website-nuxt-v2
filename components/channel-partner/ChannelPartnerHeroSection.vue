<script setup lang="ts">
import HeroLayout from '~/components/ui/HeroLayout.vue'
import type { HeroContent } from '~/components/ui/HeroLayout.vue'
import { heroContent, heroTrustStats } from '~/data/channel-partner'

const secondaryIconClass =
  'grid h-6 w-6 place-items-center rounded-full bg-blue-100 text-blue-700 transition-colors duration-200 group-hover:bg-blue-600 group-hover:text-white'

const layoutContent: HeroContent = {
  badge: heroContent.badge,
  title: heroContent.title,
  subtitle: heroContent.subtitle,
  description: heroContent.description,
  contentClass: heroContent.contentClass,
  backgroundImage: `url('${usePublicAsset(heroContent.backgroundImage)}')`,
  mobileBackgroundImage: `${usePublicAsset(heroContent.mobileBackgroundImage)}`,
  headingId: 'partner-hero-heading',
  actionBtns: [
    {
      variant: 'primary',
      label: heroContent.primaryCta.label,
      icon: 'mdi:account-plus-outline',
      link: heroContent.primaryCta.href,
    },
    {
      variant: 'secondary',
      label: heroContent.secondaryCta.label,
      icon: 'mdi:map-search-outline',
      link: heroContent.secondaryCta.href,
      iconWrapperClass: secondaryIconClass,
    },
  ],
  trustStats: heroTrustStats,
}
</script>

<template>
  <HeroLayout :hero-content="layoutContent" />
</template>
