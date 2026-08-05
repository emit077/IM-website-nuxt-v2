<script setup lang="ts">
import AcademicHeroSection from '~/components/academic/AcademicHeroSection.vue'
import GradesSection from '~/components/academic/GradesSection.vue'
import SubjectsSection from '~/components/academic/SubjectsSection.vue'
import CourseMatchingSection from '~/components/academic/CourseMatchingSection.vue'
import UiCTASection from '~/components/ui/CTASectionLayout.vue'
import { academicFinalCta } from '~/data/academic-coverage'
import BoardCovered from '~/components/academic/BoardCovered.vue'

const academicCtas = [
  { ...academicFinalCta.primaryCta, iconMdi: 'mdi:calendar-check-outline', primary: true },
  { ...academicFinalCta.secondaryCta, iconMdi: 'mdi:account-search-outline' },
] as const

useSeoMeta({
  title: 'Academic Coverage & Courses — Indian Mentors',
  description:
    'Complete academic support for all grades, boards, and subjects. From nursery to postgraduate — CBSE, ICSE, IGCSE, IB, and competitive exam preparation with verified tutors.',
  ogTitle: 'Academic Coverage & Courses — Indian Mentors',
  ogDescription:
    'Structured learning programs for every stage of education. Home, online, shadow, travel, and live-in tutoring across India.',
  ogType: 'website',
})
</script>

<template>
  <div class="academic-coverage">
    <AcademicHeroSection />
    <BoardCovered />
    <GradesSection />
    <SubjectsSection />
    <CourseMatchingSection />
    <UiCTASection heading-id="academic-cta-heading" :title="academicFinalCta.title"
      :description="academicFinalCta.description" :supporting="academicFinalCta.supporting" :ctas="academicCtas" />
  </div>
</template>
