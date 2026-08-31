<script setup lang="ts">
import CareersHeroSection from '~/components/careers/CareersHeroSection.vue'
import CareersWhySection from '~/components/careers/CareersWhySection.vue'
import CareersDepartmentsSection from '~/components/careers/CareersDepartmentsSection.vue'
import CareersHowWeWorkSection from '~/components/careers/CareersHowWeWorkSection.vue'
import CareersCultureSection from '~/components/careers/CareersCultureSection.vue'
import CareersGrowthSection from '~/components/careers/CareersGrowthSection.vue'
import CareersStandardsSection from '~/components/careers/CareersStandardsSection.vue'
import CareersHiringProcessSection from '~/components/careers/CareersHiringProcessSection.vue'
import CareersWhoCanApplySection from '~/components/careers/CareersWhoCanApplySection.vue'
import CareersJobsSection from '~/components/careers/CareersJobsSection.vue'
import CareersTalentNetworkSection from '~/components/careers/CareersTalentNetworkSection.vue'
import CareersFaqSection from '~/components/careers/CareersFaqSection.vue'
import UiCTASection from '~/components/ui/CTASectionLayout.vue'
import { careersFinalCta } from '~/data/careers'

const careersCtas = [
  { ...careersFinalCta.primaryCta },
  { ...careersFinalCta.secondaryCta },
] as const

useSeoMeta({
  title: 'Careers — Indian Mentors',
  description:
    'Build your career in a structured academic ecosystem. Join Indian Mentors for roles in admissions, academics, operations, HR, finance, marketing, and technology.',
  ogTitle: 'Careers at Indian Mentors — Build Your Career in Education & EdTech',
  ogDescription:
    'Explore career opportunities at Indian Mentors. Apply for admission counselling, academic operations, HR, finance, marketing, and technology roles.',
  ogType: 'website',
})
</script>

<template>
  <div class="min-h-screen">
    <CareersHeroSection />
    <CareersWhySection />
    <!-- <CareersDepartmentsSection /> -->
    <CareersHowWeWorkSection />
    <CareersCultureSection />
    <CareersGrowthSection />
    <CareersStandardsSection />
    <CareersHiringProcessSection />
    <!-- <CareersWhoCanApplySection /> -->
    <CareersJobsSection />
    <CareersTalentNetworkSection />
    <!-- <CareersFaqSection /> -->
    <UiCTASection section-id="join-indian-mentors" heading-id="careers-final-cta-heading"
      badge-icon-mdi="mdi:briefcase-check-outline" :badge="careersFinalCta.badge" :title="careersFinalCta.title"
      :description="careersFinalCta.description" :supporting="careersFinalCta.closing" :ctas="careersCtas" />
  </div>
</template>
