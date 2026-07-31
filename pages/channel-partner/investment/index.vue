<script setup lang="ts">
import InvestmentHeroSection from '~/components/channel-partner/investment/InvestmentHeroSection.vue'
import InvestmentStructureSection from '~/components/channel-partner/investment/InvestmentStructureSection.vue'
import TerritoryInvestmentTableSection from '~/components/channel-partner/investment/TerritoryInvestmentTableSection.vue'
import TerritoryModelSection from '~/components/channel-partner/investment/TerritoryModelSection.vue'
import SubscriptionShareSection from '~/components/channel-partner/investment/SubscriptionShareSection.vue'
import RevenueCalculatorSection from '~/components/channel-partner/investment/RevenueCalculatorSection.vue'
import EarningsIllustrationSection from '~/components/channel-partner/investment/EarningsIllustrationSection.vue'
import InvestmentAdvantagesSection from '~/components/channel-partner/investment/InvestmentAdvantagesSection.vue'
import UiCTASection from '~/components/ui/CTASectionLayout.vue'
import NewsletterSection from '~/components/ui/shared/NewsletterSection.vue'
import { investmentFinalCta } from '~/data/channel-partner-investment'
import InvestmentDigitalPlatformLicensing from '~/components/channel-partner/investment/InvestmentDigitalPlatformLicensing.vue'

const investmentCtas = [
  { ...investmentFinalCta.primaryCta, iconMdi: 'mdi:account-plus-outline', primary: true },
  { ...investmentFinalCta.tertiaryCta, iconMdi: 'mdi:file-download-outline' },
] as const

useSeoMeta({
  title: 'Investment & Revenue-Sharing Model — Channel Partner | Indian Mentors',
  description:
    'Explore the Indian Mentors Channel Partner investment structure, security deposit, platform licensing fees, territory pricing, and 90/10 revenue-sharing model.',
  ogTitle: 'Investment & Revenue-Sharing Model — Channel Partner | Indian Mentors',
  ogDescription:
    'Become an Authorised Reseller with a structured investment framework, refundable security deposit, digital platform license, and sustainable revenue sharing.',
  ogType: 'website',
})
</script>

<template>
  <div>
    <InvestmentHeroSection />
    <InvestmentStructureSection />
    <InvestmentDigitalPlatformLicensing />

    <TerritoryInvestmentTableSection />
    <TerritoryModelSection />
    <SubscriptionShareSection />
    <EarningsIllustrationSection />
    <RevenueCalculatorSection />
    <InvestmentAdvantagesSection />
    <UiCTASection section-id="partner-investment-register" heading-id="investment-cta-heading" surface-class="bg-white"
      :title="investmentFinalCta.title" :description="investmentFinalCta.description"
      :supporting="investmentFinalCta.opportunities.join(' · ')" :ctas="investmentCtas" />
    <NewsletterSection />
  </div>
</template>
