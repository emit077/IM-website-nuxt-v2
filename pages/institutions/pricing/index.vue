<script setup lang="ts">
import { computed } from 'vue'
import InstitutionsPricingHeroSection from '~/components/institutions/pricing/InstitutionsPricingHeroSection.vue'
import InstitutionsPricingPackagesSection from '~/components/institutions/pricing/InstitutionsPricingPackagesSection.vue'
import InstitutionsPricingCompareSection from '~/components/institutions/pricing/InstitutionsPricingCompareSection.vue'
import InstitutionsPricingGuaranteeSection from '~/components/institutions/pricing/InstitutionsPricingGuaranteeSection.vue'
import InstitutionsPricingTermsSection from '~/components/institutions/pricing/InstitutionsPricingTermsSection.vue'
import InstitutionsPricingChooseSection from '~/components/institutions/pricing/InstitutionsPricingChooseSection.vue'
import InstitutionsPricingWhySection from '~/components/institutions/pricing/InstitutionsPricingWhySection.vue'
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
  title: 'Mentor Staffing & Mentor Enterprise — Institutional Recruitment Pricing | Indian Mentors',
  description:
    'Compare Mentor Staffing (8–15% of Annual Teacher CTC, pay per successful hire) and Mentor Enterprise (fixed annual subscription, unlimited hiring) for institutional academic staffing.',
  ogTitle: 'Institutional Recruitment Pricing — Mentor Staffing & Mentor Enterprise',
  ogDescription:
    'Two commercial models for teacher recruitment: Mentor Staffing for requirement-based hiring, Mentor Enterprise for unlimited annual partnerships.',
  ogType: 'website',
})
</script>

<template>
  <div class="min-h-screen">
    <InstitutionsPricingHeroSection />
    <InstitutionsPricingPackagesSection />
    <InstitutionsPricingCompareSection />
    <InstitutionsPricingGuaranteeSection />
    <InstitutionsPricingTermsSection />
    <InstitutionsPricingChooseSection />
    <InstitutionsPricingWhySection />
    <UiCTASection section-id="pricing-hire-teachers" heading-id="institutions-pricing-cta-heading"
      :badge="institutionsPricingFinalCta.badge" badge-icon-mdi="mdi:account-tie-outline"
      :title="institutionsPricingFinalCta.title" :description="institutionsPricingFinalCta.description"
      :supporting="institutionsPricingFinalCta.closing" :ctas="pricingCtas">
    </UiCTASection>
    <NewsletterSection />
  </div>
</template>
