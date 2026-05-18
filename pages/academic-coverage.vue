<script setup lang="ts">
import AcademicHeroSection from '~/components/academic/AcademicHeroSection.vue'
import WhyChooseSection from '~/components/academic/WhyChooseSection.vue'
import AcademicServicesSection from '~/components/academic/AcademicServicesSection.vue'
import GradesSection from '~/components/academic/GradesSection.vue'
import BoardsSection from '~/components/academic/BoardsSection.vue'
import SubjectsSection from '~/components/academic/SubjectsSection.vue'
import CourseMatchingSection from '~/components/academic/CourseMatchingSection.vue'
import AcademicCTASection from '~/components/academic/AcademicCTASection.vue'
import ServiceSection from '~/components/home/ServiceSection.vue'
import LearningLibrarySection from '~/components/home/LearningLibrarySection.vue'

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
    <WhyChooseSection />
    <ServiceSection />
    <LearningLibrarySection />
    <GradesSection />
    <BoardsSection />
    <SubjectsSection />
    <CourseMatchingSection />
    <AcademicCTASection />
  </div>
</template>
