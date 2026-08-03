<script setup lang="ts">
import WhyChooseHeroSection from '~/components/why-choose/WhyChooseHeroSection.vue'
import WhyChoosePageNav from '~/components/why-choose/WhyChoosePageNav.vue'
import WhyChooseTrustStrip from '~/components/why-choose/WhyChooseTrustStrip.vue'
import WhyChooseDifferentiatorsSection from '~/components/why-choose/WhyChooseDifferentiatorsSection.vue'
import WhyChooseDetailsSection from '~/components/why-choose/WhyChooseDetailsSection.vue'
import WhyChooseEcosystemSection from '~/components/why-choose/WhyChooseEcosystemSection.vue'
import WhyChooseCommitmentsSection from '~/components/why-choose/WhyChooseCommitmentsSection.vue'
import WhyChooseConversionStrip from '~/components/why-choose/WhyChooseConversionStrip.vue'
import WhyChooseBrandMessage from '~/components/why-choose/WhyChooseBrandMessage.vue'
import UiCTASection from '~/components/ui/CTASectionLayout.vue'
import PartnersStrip from '~/components/home/PartnersStrip.vue'
import { whyChooseReadyCta } from '~/data/why-choose'

useSeoMeta({
  title: 'Why Choose Indian Mentors — Personalised Tutoring Ecosystem',
  description:
    'Discover why families choose Indian Mentors: verified tutors, personalised learning plans, curriculum-aligned teaching, transparent progress monitoring, flexible formats, and technology-enabled academic support.',
  ogTitle: 'Why Choose Indian Mentors',
  ogDescription:
    'Personalised Tutoring. Structured Academic Support. Measurable Progress. Verified educators, transparent monitoring, and dedicated support for every learner.',
  ogType: 'website',
})
</script>

<template>
  <div class="min-h-screen">
    <WhyChooseHeroSection />
    <!-- <WhyChoosePageNav /> -->
    <!-- <PartnersStrip /> -->
    <WhyChooseTrustStrip />
    <WhyChooseDifferentiatorsSection />
    <!-- <WhyChooseDetailsSection /> -->
    <WhyChooseEcosystemSection />
    <WhyChooseCommitmentsSection />
    <!-- <UiCTASection section-id="ready-cta" heading-id="ready-cta-heading" variant="light" surface-class="bg-white"
      :badge="whyChooseReadyCta.badge" badge-icon-mdi="mdi:rocket-launch-outline" :title="whyChooseReadyCta.title"
      :description="whyChooseReadyCta.description" :supporting="whyChooseReadyCta.supporting"
      :ctas="whyChooseReadyCta.ctas" /> -->
    <WhyChooseConversionStrip />
    <!-- <WhyChooseBrandMessage /> -->
  </div>
</template>
