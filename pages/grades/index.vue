<script setup lang="ts">
import GradesHeroSection from '~/components/grades/GradesHeroSection.vue'
import GradesProgramsSection from '~/components/grades/GradesProgramsSection.vue'
import UiCTASection from '~/components/ui/CTASection.vue'

const gradesCtas = [
  { label: 'Find a Personalised Tutor', href: '#book-demo', iconMdi: 'mdi:account-search-outline' },
  { label: 'Book a Free Demo Session', href: '#book-demo', iconMdi: 'mdi:calendar-check-outline', primary: true },
] as const

useSeoMeta({
  title: 'Grades Covered — Indian Mentors',
  description:
    'Personalised learning support from pre-primary to postgraduate. Nursery to Class 12, competitive exams, and university mentoring with verified tutors across India.',
  ogTitle: 'Grades Covered — Indian Mentors',
  ogDescription:
    'Structured tutoring for every academic stage — early learning, primary, middle, secondary, senior secondary, competitive exams, and university support.',
  ogType: 'website',
})
</script>

<template>
  <div>
    <GradesHeroSection />
    <GradesProgramsSection />
    <UiCTASection heading-id="grades-cta-heading" title="Start your personalised learning journey"
      description="Whether your child needs foundation learning, board exam preparation, or competitive exam mentoring, Indian Mentors connects you with verified and experienced tutors across India."
      supporting="No commitment required · Background-verified tutors · Free demo session" :ctas="gradesCtas" />
  </div>
</template>
