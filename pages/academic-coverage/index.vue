<script setup lang="ts">
import AcademicHeroSection from '~/components/academic/AcademicHeroSection.vue'
import GradesSection from '~/components/academic/GradesSection.vue'
import SubjectsSection from '~/components/academic/SubjectsSection.vue'
import ExamPreparationSection from '~/components/academic/ExamPreparationSection.vue'
import EnrichmentSection from '~/components/academic/EnrichmentSection.vue'
import CourseMatchingSection from '~/components/academic/CourseMatchingSection.vue'
import WhyChooseAcademicSection from '~/components/academic/WhyChooseAcademicSection.vue'
import LearningJourneySection from '~/components/academic/LearningJourneySection.vue'
import UiCTASection from '~/components/ui/CTASectionLayout.vue'
import { academicFinalCta } from '~/data/academic-coverage'
import BoardCovered from '~/components/academic/BoardCovered.vue'
import QuickServiceCategoriesSection from '~/components/ui/shared/QuickServiceCategoriesSection.vue'

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
    <GradesSection />
    <QuickServiceCategoriesSection />
    <BoardCovered />
    <SubjectsSection />
    <ExamPreparationSection />
    <EnrichmentSection />
    <CourseMatchingSection />
    <WhyChooseAcademicSection />
    <!-- <LearningJourneySection /> -->
    <UiCTASection heading-id="academic-cta-heading" :title="academicFinalCta.title"
      :description="academicFinalCta.description" :supporting="academicFinalCta.supporting" :ctas="academicCtas" />
  </div>
</template>
