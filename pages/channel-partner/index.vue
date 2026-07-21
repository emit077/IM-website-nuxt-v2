<script setup lang="ts">
import ChannelPartnerHeroSection from '~/components/channel-partner/ChannelPartnerHeroSection.vue'
import AboutPartnershipSection from '~/components/channel-partner/AboutPartnershipSection.vue'
import PartnerRoleSection from '~/components/channel-partner/PartnerRoleSection.vue'
import WhyPartnerSection from '~/components/channel-partner/WhyPartnerSection.vue'
import PartnershipOpportunitiesSection from '~/components/channel-partner/PartnershipOpportunitiesSection.vue'
import RevenueSplitSection from '~/components/channel-partner/RevenueSplitSection.vue'
import TerritoryStructureSection from '~/components/channel-partner/TerritoryStructureSection.vue'
import PartnershipProcessSection from '~/components/channel-partner/PartnershipProcessSection.vue'
import PartnerEligibilitySection from '~/components/channel-partner/PartnerEligibilitySection.vue'
import AvailableTerritoriesSection from '~/components/channel-partner/AvailableTerritoriesSection.vue'
import PartnerTestimonialsSection from '~/components/channel-partner/PartnerTestimonialsSection.vue'
import PartnerFaqSection from '~/components/channel-partner/PartnerFaqSection.vue'
import UiCTASection from '~/components/ui/CTASectionLayout.vue'
import { finalCta } from '~/data/channel-partner'

const partnerCtas = [
  { ...finalCta.primaryCta, iconMdi: 'mdi:account-plus-outline', primary: true },
  { ...finalCta.secondaryCta, iconMdi: 'mdi:headset' },
] as const

useSeoMeta({
  title: 'Channel Partner Program — Indian Mentors',
  description:
    'Partner with Indian Mentors to build a rewarding education business. Offer personalised tutoring services in your city with operational support, defined territories, and attractive commissions.',
  ogTitle: 'Channel Partner Program — Indian Mentors',
  ogDescription:
    'Join the Indian Mentors Channel Partner Network. Apply for local, city, or regional partnerships and help students access quality personalised tutoring.',
  ogType: 'website',
})
</script>

<template>
  <div>
    <ChannelPartnerHeroSection />
    <AboutPartnershipSection />
    <PartnerRoleSection />
    <WhyPartnerSection />
    <PartnershipOpportunitiesSection />
    <RevenueSplitSection />
    <div class="container-page -mt-4 mb-2 pb-10 text-center">
      <NuxtLink to="/channel-partner/investment"
        class="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-800">
        Explore Investment & Revenue-Sharing Model
        <span aria-hidden="true">→</span>
      </NuxtLink>
    </div>
    <TerritoryStructureSection />
    <PartnershipProcessSection />
    <PartnerEligibilitySection />
    <!-- <AvailableTerritoriesSection /> -->
    <PartnerTestimonialsSection />
    <PartnerFaqSection />
    <UiCTASection section-id="partner-register" heading-id="partner-cta-heading" :title="finalCta.title"
      :description="finalCta.description" :supporting="`${finalCta.closingTitle}. ${finalCta.closingStatement}`"
      :ctas="partnerCtas" />
  </div>
</template>
