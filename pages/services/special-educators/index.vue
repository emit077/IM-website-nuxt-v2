<script setup lang="ts">
import SpecialEducatorsHeroSection from '~/components/special-educators/SpecialEducatorsHeroSection.vue'
import SpecialEducatorsIntroSection from '~/components/special-educators/SpecialEducatorsIntroSection.vue'
import SpecialEducatorsApproachSection from '~/components/special-educators/SpecialEducatorsApproachSection.vue'
import SpecialEducatorsNeedsGridSection from '~/components/special-educators/SpecialEducatorsNeedsGridSection.vue'
import SpecialEducatorsNeedsSection from '~/components/special-educators/SpecialEducatorsNeedsSection.vue'
import SpecialEducatorsServicesSection from '~/components/special-educators/SpecialEducatorsServicesSection.vue'
import SpecialEducatorsMethodologySection from '~/components/special-educators/SpecialEducatorsMethodologySection.vue'
import SpecialEducatorsProcessSection from '~/components/special-educators/SpecialEducatorsProcessSection.vue'
import SpecialEducatorsAudienceSection from '~/components/special-educators/SpecialEducatorsAudienceSection.vue'
import SpecialEducatorsFeaturesSection from '~/components/special-educators/SpecialEducatorsFeaturesSection.vue'
import UiCTASection from '~/components/ui/CTASectionLayout.vue'
import { seFinalCta } from '~/data/special-educators'

useSeoMeta({
  title: 'Special Educators — Personalised Educational Support | Indian Mentors',
  description:
    'Compassionate, qualified special educators delivering individualised educational support for children with ADHD, autism, dyslexia, dysgraphia, dyscalculia, SLD, speech delays, and behavioural learning needs.',
  ogTitle: 'Every Child Can Learn with the Right Support — Indian Mentors',
  ogDescription:
    'Personalised special education that celebrates every child’s potential. Individualised plans, one-to-one support, parent partnership, and school collaboration.',
  ogType: 'website',
})
</script>

<template>
  <div class="min-h-screen">
    <SpecialEducatorsHeroSection />
    <!-- <SpecialEducatorsIntroSection /> -->
    <SpecialEducatorsApproachSection />
    <SpecialEducatorsNeedsGridSection />
    <SpecialEducatorsNeedsSection />
    <SpecialEducatorsServicesSection />
    <SpecialEducatorsMethodologySection />
    <SpecialEducatorsFeaturesSection />
    <SpecialEducatorsProcessSection />
    <SpecialEducatorsAudienceSection />
    <UiCTASection section-id="special-educators-cta" heading-id="special-educators-cta-heading"
      :badge="seFinalCta.badge" badge-icon-mdi="mdi:account-heart-outline" :title="seFinalCta.title"
      :description="seFinalCta.description" :ctas="seFinalCta.ctas" />
  </div>
</template>
