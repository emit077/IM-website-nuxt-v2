<script setup lang="ts">
import { computed } from 'vue'
import InstitutionsPricingHeroSection from '~/components/institutions/pricing/InstitutionsPricingHeroSection.vue'
import InstitutionsPricingPackagesSection from '~/components/institutions/pricing/InstitutionsPricingPackagesSection.vue'
import InstitutionsPricingGuaranteeSection from '~/components/institutions/pricing/InstitutionsPricingGuaranteeSection.vue'
import InstitutionsPricingPartnershipSection from '~/components/institutions/pricing/InstitutionsPricingPartnershipSection.vue'
import UiCTASection from '~/components/ui/CTASectionLayout.vue'
import NewsletterSection from '~/components/ui/shared/NewsletterSection.vue'
import { institutionsPricingFinalCta } from '~/data/institutions-pricing'

const { data: institutionBrochures } = await useWebsiteBrochures('Institutions')

const pricingCtas = computed(() => {
  const brochureUrl = institutionBrochures.value?.[0]?.brochure
  const ctas: Array<{
    label: string
    href: string
    iconMdi: string
    primary?: boolean
    target?: '_blank'
  }> = [
      { ...institutionsPricingFinalCta.primaryCta, iconMdi: 'mdi:account-plus-outline', primary: true },
      { ...institutionsPricingFinalCta.secondaryCta, iconMdi: 'mdi:headset' },
      { ...institutionsPricingFinalCta.tertiaryCta, iconMdi: 'mdi:clipboard-plus-outline', target: '_blank' },
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
  title: 'Institutional Recruitment Pricing & Commercial Structure — Indian Mentors',
  description:
    'Two institutional hiring plans from Indian Mentors: Plan A — commission on each successful joining; Plan B — a fixed annual fee to hire whatever faculty you need through the year.',
  ogTitle: 'Institutional Recruitment Pricing — Indian Mentors',
  ogDescription:
    'Plan A is commission per successful joining. Plan B is a fixed annual partnership so institutions can hire as needed through the year.',
  ogType: 'website',
})
</script>

<template>
  <div class="min-h-screen">
    <InstitutionsPricingHeroSection />
    <InstitutionsPricingPackagesSection />
    <InstitutionsPricingGuaranteeSection />
    <InstitutionsPricingPartnershipSection />
    <UiCTASection section-id="pricing-hire-teachers" heading-id="institutions-pricing-cta-heading"
      :badge="institutionsPricingFinalCta.badge" badge-icon-mdi="mdi:currency-inr"
      :title="institutionsPricingFinalCta.title" :description="institutionsPricingFinalCta.description"
      :supporting="institutionsPricingFinalCta.closing" :ctas="pricingCtas" />
    <NewsletterSection />
  </div>
</template>
