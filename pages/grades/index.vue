<script setup lang="ts">
import GradesHeroSection from '~/components/grades/GradesHeroSection.vue'
import GradesNavSection from '~/components/grades/GradesNavSection.vue'
import GradesProgramsSection from '~/components/grades/GradesProgramsSection.vue'
import GradesCTASection from '~/components/grades/GradesCTASection.vue'

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
    <GradesCTASection />
  </div>
</template>
