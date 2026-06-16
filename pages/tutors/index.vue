<script setup lang="ts">
import TutorsHeroSection from '~/components/tutors/TutorsHeroSection.vue'
import TutorsNavSection from '~/components/tutors/TutorsNavSection.vue'
import TutorsResourcesSection from '~/components/tutors/TutorsResourcesSection.vue'
import TutorPlansSection from '~/components/tutors/TutorPlansSection.vue'
import TutorHiringProcessSection from '~/components/tutors/TutorHiringProcessSection.vue'
import TutorComplianceSection from '~/components/tutors/TutorComplianceSection.vue'
import TutorOpportunitiesSection from '~/components/tutors/TutorOpportunitiesSection.vue'
import TutorErpSection from '~/components/tutors/TutorErpSection.vue'
import TutorPolicySection from '~/components/tutors/TutorPolicySection.vue'
import TutorsCTASection from '~/components/tutors/TutorsCTASection.vue'

useSeoMeta({
  title: 'Tutors — Indian Mentors',
  description:
    "Join India's growing network of professional mentors. Verified student leads, structured onboarding, transparent payouts, and ERP-powered teaching tools for educators across India.",
  ogTitle: 'Tutors — Indian Mentors',
  ogDescription:
    'Become a teaching partner with Indian Mentors — flexible registration plans, a trusted hiring process, and a professional ecosystem to grow your tutoring career.',
  ogType: 'website',
})
</script>

<template>
  <div>
    <TutorsHeroSection />
    <TutorsNavSection />
    <TutorsResourcesSection />
    <TutorPlansSection />
    <TutorHiringProcessSection />
    <TutorComplianceSection />
    <TutorOpportunitiesSection />
    <TutorErpSection />
    <TutorPolicySection />
    <TutorsCTASection />
  </div>
</template>
