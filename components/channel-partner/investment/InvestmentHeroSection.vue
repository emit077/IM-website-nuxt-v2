<script setup lang="ts">
import HeroLayout from '~/components/ui/HeroLayout.vue'
import type { HeroContent } from '~/components/ui/HeroLayout.vue'
import { investmentHero, investmentHeroStats } from '~/data/channel-partner-investment'

const secondaryIconClass =
  'grid h-6 w-6 place-items-center rounded-full bg-blue-100 text-blue-700 transition-colors duration-200 group-hover:bg-blue-600 group-hover:text-white'

const heroContent: HeroContent = {
  badge: investmentHero.badge,
  title: investmentHero.title,
  subtitle: investmentHero.subtitle,
  description: investmentHero.description,
  backgroundImage: `url('${usePublicAsset(investmentHero.backgroundImage)}')`,
  mobileBackgroundImage: `${usePublicAsset('assets/img/hero/hero-mobile-4.png')}`,
  caption: investmentHero.caption,
  headingId: 'investment-hero-heading',
  actionBtns: [
    {
      variant: 'primary',
      label: investmentHero.primaryCta.label,
      icon: 'mdi:account-plus-outline',
      link: investmentHero.primaryCta.href,
    },
    {
      variant: 'secondary',
      label: investmentHero.secondaryCta.label,
      icon: 'mdi:file-download-outline',
      link: investmentHero.secondaryCta.href,
      iconWrapperClass: secondaryIconClass,
    },
  ],
  trustStats: investmentHeroStats,
}
</script>

<template>
  <HeroLayout :hero-content="heroContent" />
</template>
