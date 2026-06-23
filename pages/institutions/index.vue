<script setup lang="ts">
import InstitutionsHeroSection from '~/components/institutions/InstitutionsHeroSection.vue'
import InstitutionsNavSection from '~/components/institutions/InstitutionsNavSection.vue'
import InstitutionsSectorsSection from '~/components/institutions/InstitutionsSectorsSection.vue'
import InstitutionsReliabilitySection from '~/components/institutions/InstitutionsReliabilitySection.vue'
import InstitutionsProcessSection from '~/components/institutions/InstitutionsProcessSection.vue'
import InstitutionsWhySection from '~/components/institutions/InstitutionsWhySection.vue'
import UiCTASection from '~/components/ui/CTASection.vue'
import NewsletterSection from '~/components/ui/NewsletterSection.vue'
import { institutionsFinalCta } from '~/data/institutions'

const institutionsCtas = [
  { ...institutionsFinalCta.primaryCta, iconMdi: 'mdi:account-tie-outline', primary: true },
  { ...institutionsFinalCta.secondaryCta, iconMdi: 'mdi:phone-outline' },
  { ...institutionsFinalCta.tertiaryCta, iconMdi: 'mdi:whatsapp', target: '_blank' },
] as const

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
    <UiCTASection section-id="hire-teachers" heading-id="institutions-cta-heading"
      :extra-anchor-ids="['talk-to-recruiter', 'book-demo']" :badge="institutionsFinalCta.badge"
      badge-icon-mdi="mdi:account-tie-outline" :title="institutionsFinalCta.title"
      :description="institutionsFinalCta.description" :supporting="institutionsFinalCta.closing"
      :ctas="institutionsCtas" />
    <NewsletterSection />
  </div>
</template>
