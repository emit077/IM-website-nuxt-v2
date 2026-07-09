<script setup lang="ts">
import CareersHeroSection from '~/components/careers/CareersHeroSection.vue'
import CareersOpportunitiesSection from '~/components/careers/CareersOpportunitiesSection.vue'
import CareersBenefitsSection from '~/components/careers/CareersBenefitsSection.vue'
import CareersPurposeSection from '~/components/careers/CareersPurposeSection.vue'
import UiCTASection from '~/components/ui/CTASection.vue'
import { careersFinalCta } from '~/data/careers'

const careersCtas = [
  { ...careersFinalCta.primaryCta, iconMdi: 'mdi:send-outline', primary: true },
  { ...careersFinalCta.secondaryCta, iconMdi: 'mdi:file-upload-outline' },
  { ...careersFinalCta.tertiaryCta, iconMdi: 'mdi:phone-outline' },
] as const

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
  <div class="min-h-screen section-surface-muted">
    <CareersHeroSection />
    <CareersOpportunitiesSection />
    <CareersBenefitsSection />
    <CareersPurposeSection />
    <UiCTASection section-id="apply" :badge="careersFinalCta.badge" badge-icon-mdi="mdi:briefcase-check-outline"
      :title="careersFinalCta.title" :description="careersFinalCta.description"
      :supporting="careersFinalCta.closing" :ctas="careersCtas" />
  </div>
</template>
