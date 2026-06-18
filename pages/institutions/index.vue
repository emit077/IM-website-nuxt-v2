<script setup lang="ts">
import InstitutionsHeroSection from '~/components/institutions/InstitutionsHeroSection.vue'
import InstitutionsNavSection from '~/components/institutions/InstitutionsNavSection.vue'
import InstitutionsSectorsSection from '~/components/institutions/InstitutionsSectorsSection.vue'
import InstitutionsReliabilitySection from '~/components/institutions/InstitutionsReliabilitySection.vue'
import InstitutionsProcessSection from '~/components/institutions/InstitutionsProcessSection.vue'
import InstitutionsWhySection from '~/components/institutions/InstitutionsWhySection.vue'
import InstitutionsCTASection from '~/components/institutions/InstitutionsCTASection.vue'
import NewsletterSection from '~/components/shared/NewsletterSection.vue'

useSeoMeta({
  title: 'Teacher Recruitment Services — Indian Mentors',
  description:
    'Hire qualified, verified, and pre-screened educators for schools, colleges, coaching institutes, EdTech companies, and academic programs across India. Structured recruitment, background verification, and flexible hiring models.',
  ogTitle: 'Trusted Teacher Recruitment & Academic Staffing Solutions — Indian Mentors',
  ogDescription:
    'Build strong academic teams with verified educators. End-to-end teacher recruitment for schools, coaching institutes, colleges, EdTech, and corporate academic programs.',
  ogType: 'website',
})
</script>

<template>
  <div class="min-h-screen bg-cream-50">
    <InstitutionsHeroSection />
    <InstitutionsNavSection />
    <InstitutionsSectorsSection />
    <InstitutionsReliabilitySection />
    <InstitutionsProcessSection />
    <InstitutionsWhySection />
    <InstitutionsCTASection />
    <NewsletterSection />
  </div>
</template>
