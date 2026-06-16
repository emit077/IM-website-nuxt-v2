<script setup lang="ts">
import CareersHeroSection from '~/components/careers/CareersHeroSection.vue'
import CareersOpportunitiesSection from '~/components/careers/CareersOpportunitiesSection.vue'
import CareersBenefitsSection from '~/components/careers/CareersBenefitsSection.vue'
import CareersPurposeSection from '~/components/careers/CareersPurposeSection.vue'
import CareersCTASection from '~/components/careers/CareersCTASection.vue'

useSeoMeta({
  title: 'Careers — Indian Mentors',
  description:
    'Build your career in a structured academic ecosystem. Join Indian Mentors for roles in admissions, recruitment, operations, and technology — with defined KPIs, transparent policies, and performance-based growth.',
  ogTitle: 'Careers at Indian Mentors — Build Your Future with Structure and Integrity',
  ogDescription:
    'Explore career opportunities at Indian Mentors. We welcome educators, administrators, strategists, and technology professionals committed to responsible academic mentorship.',
  ogType: 'website',
})
</script>

<template>
  <div class="min-h-screen bg-cream-50">
    <CareersHeroSection />
    <CareersOpportunitiesSection />
    <CareersBenefitsSection />
    <CareersPurposeSection />
    <CareersCTASection />
  </div>
</template>
