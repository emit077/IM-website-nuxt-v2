<script setup lang="ts">
import { computed } from 'vue'
import InstitutionsHeroSection from '~/components/institutions/InstitutionsHeroSection.vue'
import InstitutionsMissionSection from '~/components/institutions/InstitutionsMissionSection.vue'
import InstitutionsSectorsSection from '~/components/institutions/InstitutionsSectorsSection.vue'
import InstitutionsSubjectsSection from '~/components/institutions/InstitutionsSubjectsSection.vue'
import InstitutionsWhySection from '~/components/institutions/InstitutionsWhySection.vue'
import InstitutionsProcessSection from '~/components/institutions/InstitutionsProcessSection.vue'
import InstitutionsBulkHiringSection from '~/components/institutions/InstitutionsBulkHiringSection.vue'
import InstitutionsServicesSection from '~/components/institutions/InstitutionsServicesSection.vue'
import InstitutionsStaffingSupportSection from '~/components/institutions/InstitutionsStaffingSupportSection.vue'
import InstitutionsQualitySection from '~/components/institutions/InstitutionsQualitySection.vue'
import InstitutionsRequirementsSection from '~/components/institutions/InstitutionsRequirementsSection.vue'
import InstitutionsErpSection from '~/components/institutions/InstitutionsErpSection.vue'
import InstitutionsFaqSection from '~/components/institutions/InstitutionsFaqSection.vue'
import UiCTASection from '~/components/ui/CTASectionLayout.vue'
import NewsletterSection from '~/components/ui/shared/NewsletterSection.vue'
import { institutionsFinalCta } from '~/data/institutions'

const { data: institutionBrochures } = await useWebsiteBrochures('Institutions')

const institutionsCtas = computed(() => {
  const brochureUrl = institutionBrochures.value?.[0]?.brochure
  const ctas: Array<{
    label: string
    href: string
    iconMdi: string
    primary?: boolean
    target?: '_blank'
  }> = [
      { ...institutionsFinalCta.primaryCta, iconMdi: 'mdi:account-plus-outline', primary: true },
      { ...institutionsFinalCta.secondaryCta, iconMdi: 'mdi:headset' },
      { ...institutionsFinalCta.tertiaryCta, iconMdi: 'mdi:clipboard-plus-outline', target: '_blank' },
    ]
  if (brochureUrl) {
    ctas.splice(1, 0, {
      label: 'Download Brochure',
      href: brochureUrl,
      iconMdi: 'mdi:file-download-outline',
      target: '_blank',
    })
  }
  return ctas
})

useSeoMeta({
  title: 'Institutional Teacher Recruitment & Academic Staffing — Indian Mentors',
  description:
    'Hire qualified, verified, curriculum-aligned teachers for schools, coaching institutes, colleges, universities, and EdTech. Structured recruitment, demo evaluation, bulk hiring, and replacement support.',
  ogTitle: 'Build Strong Academic Teams. Hire With Confidence. — Indian Mentors',
  ogDescription:
    'Institutional hiring for schools, coaching institutes, colleges, and EdTech. Verified educators, structured screening, and flexible academic staffing across India.',
  ogType: 'website',
})
</script>

<template>
  <div class="min-h-screen">
    <InstitutionsHeroSection />
    <InstitutionsMissionSection />
    <InstitutionsSectorsSection />
    <!-- <InstitutionsSubjectsSection /> -->
    <!-- <InstitutionsRequirementsSection /> -->
    <InstitutionsWhySection />
    <InstitutionsProcessSection />
    <!-- <InstitutionsBulkHiringSection /> -->
    <InstitutionsServicesSection />
    <InstitutionsStaffingSupportSection />
    <InstitutionsQualitySection />
    <InstitutionsErpSection />
    <UiCTASection section-id="hire-teachers" heading-id="institutions-cta-heading"
      :extra-anchor-ids="['talk-to-recruiter', 'book-demo']" :badge="institutionsFinalCta.badge"
      badge-icon-mdi="mdi:account-tie-outline" :title="institutionsFinalCta.title"
      :description="institutionsFinalCta.description" :supporting="institutionsFinalCta.closing"
      :ctas="institutionsCtas" />
    <NewsletterSection />
  </div>
</template>
