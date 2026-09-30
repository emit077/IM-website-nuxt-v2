<script setup lang="ts">
import HeroLayout from '~/components/ui/HeroLayout.vue'
import type { HeroContent } from '~/components/ui/HeroLayout.vue'
import { institutionsPricingHero, institutionsPricingHeroStats } from '~/data/institutions-pricing'

const secondaryIconClass =
  'grid h-6 w-6 place-items-center rounded-full bg-blue-100 text-blue-700 transition-colors duration-200 group-hover:bg-blue-600 group-hover:text-white'

const { data: heroScreens } = await useWebsiteHeroScreens('institutions/pricing')

const fallbackHero: HeroContent = {
  badge: institutionsPricingHero.badge,
  title: institutionsPricingHero.title,
  subtitle: institutionsPricingHero.subtitle,
  description: institutionsPricingHero.description,
  contentClass: '!px-0 !py-0 max-w-2xl lg:max-w-[46rem]',
  caption: institutionsPricingHero.caption,
  headingId: institutionsPricingHero.headingId,
  actionBtns: [
    {
      variant: 'primary',
      label: institutionsPricingHero.primaryCta.label,
      icon: 'mdi:clipboard-plus-outline',
      link: institutionsPricingHero.primaryCta.href,
    },
    {
      variant: 'secondary',
      label: institutionsPricingHero.secondaryCta.label,
      icon: 'mdi:phone-outline',
      link: institutionsPricingHero.secondaryCta.href,
      iconWrapperClass: secondaryIconClass,
    },
  ],
  trustStats: institutionsPricingHeroStats,
}

const heroContent = computed(() =>
  mergeWebsiteHeroScreen(fallbackHero, heroScreens.value?.[0]),
)
</script>

<template>
  <HeroLayout :hero-content="heroContent" />
</template>
