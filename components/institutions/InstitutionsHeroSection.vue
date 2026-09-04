<script setup lang="ts">
import HeroLayout from '~/components/ui/HeroLayout.vue'
import type { HeroContent } from '~/components/ui/HeroLayout.vue'
import { institutionsHero, institutionsHeroStats } from '~/data/institutions'

const secondaryIconClass =
  'grid h-6 w-6 place-items-center rounded-full bg-blue-100 text-blue-700 transition-colors duration-200 group-hover:bg-blue-600 group-hover:text-white'

const heroContent: HeroContent = {
  badge: institutionsHero.badge,
  title: institutionsHero.title,
  subtitle: institutionsHero.subtitle,
  description: institutionsHero.description,
  contentClass: institutionsHero.contentClass,
  backgroundImage: `url('${usePublicAsset(institutionsHero.backgroundImage)}')`,
  mobileBackgroundImage: `${usePublicAsset('assets/img/hero/hero-mobile-2.png')}`,
  caption: institutionsHero.caption,
  headingId: 'institutions-hero-heading',
  actionBtns: [
    {
      variant: 'primary',
      label: institutionsHero.primaryCta.label,
      icon: 'mdi:clipboard-plus-outline',
      link: institutionsHero.primaryCta.href,
    },
    {
      variant: 'secondary',
      label: institutionsHero.secondaryCta.label,
      icon: 'mdi:account-tie-outline',
      link: institutionsHero.secondaryCta.href,
      iconWrapperClass: secondaryIconClass,
    },
  ],
  trustStats: institutionsHeroStats,
}
</script>

<template>
  <HeroLayout :hero-content="heroContent" />
</template>
