<script setup lang="ts">
import HeroLayout from '~/components/ui/HeroLayout.vue'
import type { HeroContent } from '~/components/ui/HeroLayout.vue'
import { academicHero, academicHeroStats } from '~/data/academic-coverage'

const secondaryIconClass =
  'grid h-6 w-6 place-items-center rounded-full bg-blue-100 text-blue-700 transition-colors duration-200 group-hover:bg-blue-600 group-hover:text-white'

const heroContent: HeroContent = {
  badge: academicHero.badge,
  title: academicHero.title,
  subtitle: academicHero.subtitle,
  description: academicHero.description,
  backgroundImage: `url('${usePublicAsset(academicHero.backgroundImage)}')`,
  mobileBackgroundImage: `${usePublicAsset(academicHero.mobileBackgroundImage)}`,
  caption: academicHero.caption,
  headingId: 'academic-hero-heading',
  actionBtns: [
    {
      variant: 'primary',
      label: academicHero.primaryCta.label,
      icon: 'mdi:calendar-check-outline',
      link: academicHero.primaryCta.href,
    },
    {
      variant: 'secondary',
      label: academicHero.secondaryCta.label,
      icon: 'mdi:compass-outline',
      link: academicHero.secondaryCta.href,
      iconWrapperClass: secondaryIconClass,
    },
  ],
  trustStats: academicHeroStats,
}
</script>

<template>
  <HeroLayout :hero-content="heroContent" />
</template>
