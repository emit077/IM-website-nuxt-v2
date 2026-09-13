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
      { ...institutionsPricingFinalCta.tertiaryCta, iconMdi: 'mdi:file-document-outline' },
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
  title: 'Faculty Prime & Faculty Elite — Institutional Recruitment Pricing | Indian Mentors',
  description:
    'Compare Faculty Prime (8–15% of Annual Teacher CTC, pay per successful hire) and Faculty Elite (fixed annual subscription, unlimited hiring) for institutional academic staffing.',
  ogTitle: 'Institutional Recruitment Pricing — Faculty Prime & Faculty Elite',
  ogDescription:
    'Two commercial models for teacher recruitment: Faculty Prime for requirement-based hiring, Faculty Elite for unlimited annual partnerships.',
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
      <template #footer>
        <div class="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
          <div v-for="plan in institutionsPricingFinalCta.plans" :key="plan.name"
            class="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-left">
            <p class="font-display text-sm font-extrabold text-white">{{ plan.name }}</p>
            <p class="mt-0.5 text-[12px] text-blue-100">{{ plan.model }}</p>
            <p class="mt-1 text-[12.5px] font-semibold text-amber-200">{{ plan.price }}</p>
          </div>
        </div>
      </template>
    </UiCTASection>
    <NewsletterSection />
  </div>
</template>
