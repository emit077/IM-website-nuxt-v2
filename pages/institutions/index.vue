<script setup lang="ts">
import { computed } from 'vue'
import InstitutionsHeroSection from '~/components/institutions/InstitutionsHeroSection.vue'
import InstitutionsNavSection from '~/components/institutions/InstitutionsNavSection.vue'
import InstitutionsMissionSection from '~/components/institutions/InstitutionsMissionSection.vue'
import InstitutionsServicesSection from '~/components/institutions/InstitutionsServicesSection.vue'
import InstitutionsProcessSection from '~/components/institutions/InstitutionsProcessSection.vue'
import InstitutionsWhySection from '~/components/institutions/InstitutionsWhySection.vue'
import InstitutionsSectorsSection from '~/components/institutions/InstitutionsSectorsSection.vue'
import InstitutionsSubjectsSection from '~/components/institutions/InstitutionsSubjectsSection.vue'
import InstitutionsCitiesSection from '~/components/institutions/InstitutionsCitiesSection.vue'
import InstitutionsErpSection from '~/components/institutions/InstitutionsErpSection.vue'
import UiCTASection from '~/components/ui/CTASectionLayout.vue'
import NewsletterSection from '~/components/ui/shared/NewsletterSection.vue'
import { institutionsFinalCta } from '~/data/institutions'

const { data: institutionBrochures } = await useWebsiteBrochures('Institutions')

const institutionsCtas = computed(() => {
  const brochureUrl = institutionBrochures.value?.[0]?.brochure
  const ctas = [
    { ...institutionsFinalCta.primaryCta, iconMdi: 'mdi:clipboard-plus-outline', primary: true },
    { ...institutionsFinalCta.secondaryCta, iconMdi: 'mdi:calendar-month-outline' },
    { ...institutionsFinalCta.tertiaryCta, iconMdi: 'mdi:whatsapp', target: '_blank' as const },
  ]
  if (brochureUrl) {
    ctas.splice(1, 0, {
      label: 'Download Brochure',
      href: brochureUrl,
      iconMdi: 'mdi:file-download-outline',
      target: '_blank' as const,
    })
  }
  return ctas
})

useSeoMeta({
  title: 'Teacher Recruitment Services — Indian Mentors',
  description:
    'Hire qualified, verified teachers for schools, colleges, coaching institutes, and EdTech platforms across India. Structured recruitment, demo-class evaluation, contract staffing, and a transparent institution ERP.',
  ogTitle: 'Teacher Recruitment & Academic Staffing Solutions — Indian Mentors',
  ogDescription:
    'End-to-end teacher recruitment for K–12 schools, colleges, coaching centres, and EdTech. Verified faculty, structured screening, and technology-enabled matching.',
  ogType: 'website',
})
</script>

<template>
  <div class="min-h-screen">
    <InstitutionsHeroSection />
    <InstitutionsNavSection />
    <InstitutionsMissionSection />
    <InstitutionsServicesSection />
    <InstitutionsProcessSection />
    <InstitutionsWhySection />
    <InstitutionsSectorsSection />
    <InstitutionsSubjectsSection />
    <InstitutionsCitiesSection />
    <InstitutionsErpSection />
    <UiCTASection
      section-id="hire-teachers"
      heading-id="institutions-cta-heading"
      :extra-anchor-ids="['talk-to-recruiter', 'book-demo']"
      :badge="institutionsFinalCta.badge"
      badge-icon-mdi="mdi:account-tie-outline"
      :title="institutionsFinalCta.title"
      :description="institutionsFinalCta.description"
      :supporting="institutionsFinalCta.closing"
      :ctas="institutionsCtas"
    />
    <NewsletterSection />
  </div>
</template>
