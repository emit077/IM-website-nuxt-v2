<script setup lang="ts">
import InvestmentHeroSection from '~/components/channel-partner/investment/InvestmentHeroSection.vue'
import InvestmentStructureSection from '~/components/channel-partner/investment/InvestmentStructureSection.vue'
import SecurityDepositSection from '~/components/channel-partner/investment/SecurityDepositSection.vue'
import PlatformLicenseSection from '~/components/channel-partner/investment/PlatformLicenseSection.vue'
import TerritoryInvestmentTableSection from '~/components/channel-partner/investment/TerritoryInvestmentTableSection.vue'
import RevenueSharingOverviewSection from '~/components/channel-partner/investment/RevenueSharingOverviewSection.vue'
import EnrollmentFeeShareSection from '~/components/channel-partner/investment/EnrollmentFeeShareSection.vue'
import SubscriptionShareSection from '~/components/channel-partner/investment/SubscriptionShareSection.vue'
import RevenueCalculatorSection from '~/components/channel-partner/investment/RevenueCalculatorSection.vue'
import EarningsIllustrationSection from '~/components/channel-partner/investment/EarningsIllustrationSection.vue'
import InvestmentAdvantagesSection from '~/components/channel-partner/investment/InvestmentAdvantagesSection.vue'
import UiCTASection from '~/components/ui/CTASectionLayout.vue'
import { investmentFinalCta } from '~/data/channel-partner-investment'
import NewsletterSection from '~/components/ui/shared/NewsletterSection.vue'

const investmentCtas = [
  { ...investmentFinalCta.primaryCta, iconMdi: 'mdi:account-plus-outline', primary: true },
  // { ...investmentFinalCta.secondaryCta, iconMdi: 'mdi:headset' },
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
    <!-- <SecurityDepositSection /> -->
    <PlatformLicenseSection />
    <TerritoryInvestmentTableSection />
    <RevenueSharingOverviewSection />
    <EnrollmentFeeShareSection />
    <SubscriptionShareSection />
    <EarningsIllustrationSection />
    <RevenueCalculatorSection />
    <InvestmentAdvantagesSection />
    <NewsletterSection />

    <UiCTASection section-id="partner-investment-register" heading-id="investment-cta-heading" surface-class="bg-white"
      :title="investmentFinalCta.title" :description="investmentFinalCta.description"
      :supporting="investmentFinalCta.opportunities.join(' · ')" :ctas="investmentCtas" />
  </div>
</template>
