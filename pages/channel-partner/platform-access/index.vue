<script setup lang="ts">
import PlatformAccessHeroSection from '~/components/channel-partner/platform-access/PlatformAccessHeroSection.vue'
import PlatformAccessFeaturesSection from '~/components/channel-partner/platform-access/PlatformAccessFeaturesSection.vue'
import UiCTASection from '~/components/ui/CTASectionLayout.vue'
import NewsletterSection from '~/components/ui/shared/NewsletterSection.vue'
import { platformAccessCta } from '~/data/channel-partner-investment'

const platformCtas = [
  { ...platformAccessCta.primaryCta, iconMdi: 'mdi:account-plus-outline', primary: true },
  { ...platformAccessCta.secondaryCta, iconMdi: 'mdi:chart-timeline-variant' },
] as const

useSeoMeta({
  title: 'Platform Access Includes — Channel Partner | Indian Mentors',
  description:
    'Explore the eight Digital Platform modules included with your Channel Partner license — enrollment, tutors, subscriptions, payments, CRM, academics, and marketing.',
  ogTitle: 'Platform Access Includes — Channel Partner | Indian Mentors',
  ogDescription:
    'One license unlocks enrollment management, tutor allocation, subscription tools, revenue tracking, CRM, academic dashboards, and brand support.',
  ogType: 'website',
})
</script>

<template>
  <div>
    <PlatformAccessHeroSection />
    <PlatformAccessFeaturesSection />
    <UiCTASection
      section-id="platform-access-cta"
      heading-id="platform-access-cta-heading"
      surface-class="bg-white"
      :badge="platformAccessCta.badge"
      badge-icon-mdi="mdi:monitor-dashboard"
      :title="platformAccessCta.title"
      :description="platformAccessCta.description"
      :ctas="platformCtas"
    />
    <NewsletterSection />
  </div>
</template>
