<script setup lang="ts">
import AcademicHeroSection from '~/components/academic/AcademicHeroSection.vue'
import GradesSection from '~/components/academic/GradesSection.vue'
import BoardsSection from '~/components/academic/BoardsSection.vue'
import SubjectsSection from '~/components/academic/SubjectsSection.vue'
import CourseMatchingSection from '~/components/academic/CourseMatchingSection.vue'
import UiCTASection from '~/components/ui/CTASectionLayout.vue'

const academicCtas = [
  { label: 'Book Free Demo', href: '#book-demo', iconMdi: 'mdi:calendar-check-outline', primary: true },
  { label: 'Find a Personalised Tutor', href: '#book-demo', iconMdi: 'mdi:account-search-outline' },
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
  <div>
    <AcademicHeroSection />
    <GradesSection />
    <BoardsSection />
    <SubjectsSection />
    <CourseMatchingSection />
    <UiCTASection title="Start Your Personalised Learning Journey Today"
      description="Whether your child needs foundation learning, board exam preparation, or competitive mentoring, we connect you with verified tutors across India."
      supporting="No commitment required · Background-verified tutors · Free demo session" :ctas="academicCtas" />
  </div>
</template>
