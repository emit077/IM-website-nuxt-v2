<script setup lang="ts">
import WhyChooseHeroSection from '~/components/why-choose/WhyChooseHeroSection.vue'
import WhyChooseDifferentiatorsSection from '~/components/why-choose/WhyChooseDifferentiatorsSection.vue'
import WhyChooseDifferenceSection from '~/components/why-choose/WhyChooseDifferenceSection.vue'
import WhyChooseJourneySection from '~/components/why-choose/WhyChooseJourneySection.vue'
import WhyChooseEcosystemSection from '~/components/why-choose/WhyChooseEcosystemSection.vue'
import WhyChooseCommitmentsSection from '~/components/why-choose/WhyChooseCommitmentsSection.vue'
import WhyChooseConversionStrip from '~/components/why-choose/WhyChooseConversionStrip.vue'
import QuickServiceCategoriesSection from '~/components/ui/shared/QuickServiceCategoriesSection.vue'

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
    <WhyChooseDifferentiatorsSection />
    <WhyChooseDifferenceSection />
    <WhyChooseJourneySection />
    <QuickServiceCategoriesSection />
    <WhyChooseEcosystemSection />
    <WhyChooseCommitmentsSection />
    <WhyChooseConversionStrip />
  </div>
</template>
