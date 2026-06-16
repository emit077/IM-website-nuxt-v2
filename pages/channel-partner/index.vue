<script setup lang="ts">
import ChannelPartnerHeroSection from '~/components/channel-partner/ChannelPartnerHeroSection.vue'
import PartnerRoleSection from '~/components/channel-partner/PartnerRoleSection.vue'
import PartnershipProcessSection from '~/components/channel-partner/PartnershipProcessSection.vue'
import PartnerBenefitsSection from '~/components/channel-partner/PartnerBenefitsSection.vue'
import PartnerEligibilitySection from '~/components/channel-partner/PartnerEligibilitySection.vue'
import WhyPartnerSection from '~/components/channel-partner/WhyPartnerSection.vue'
import PartnershipBenefitsSection from '~/components/channel-partner/PartnershipBenefitsSection.vue'
import ChannelPartnerCTASection from '~/components/channel-partner/ChannelPartnerCTASection.vue'

useSeoMeta({
  title: 'Channel Partner Program — Indian Mentors',
  description:
    'Become an Authorised Channel Partner of Indian Mentors. Build a scalable education business in your territory with structured operational support, a transparent dashboard, and revenue opportunities.',
  ogTitle: 'Channel Partner Program — Indian Mentors',
  ogDescription:
    'Empowering local leaders to deliver quality education. Manage tutoring operations in your region with brand, platform, and national network support.',
  ogType: 'website',
})
</script>

<template>
  <div>
    <ChannelPartnerHeroSection />
    <PartnerRoleSection />
    <PartnershipProcessSection />
    <PartnerBenefitsSection />
    <PartnerEligibilitySection />
    <WhyPartnerSection />
    <PartnershipBenefitsSection />
    <ChannelPartnerCTASection />
  </div>
</template>
