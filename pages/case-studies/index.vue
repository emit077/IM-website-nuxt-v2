<script setup lang="ts">
import CaseStudiesListSection from '~/components/case-studies/CaseStudiesListSection.vue'
import UiCTASection from '~/components/ui/CTASectionLayout.vue'
import FaqSectionMini from '~/components/ui/shared/FaqSectionMini.vue'
import { caseStudiesFinalCta } from '~/data/case-studies'

const ctas = [caseStudiesFinalCta.primaryCta, caseStudiesFinalCta.secondaryCta] as const

useSeoMeta({
  title: 'Case Studies — Indian Mentors',
  description:
    'Real student success stories with starting scores, personalised academic approaches, and measurable outcomes across CBSE, ICSE, and more.',
  ogTitle: 'Student Case Studies — Indian Mentors',
  ogDescription: 'See how structured mentoring improved scores, confidence, and study habits.',
  ogType: 'website',
})
</script>

<template>
  <div class="min-h-screen">
    <CaseStudiesListSection />
    <FaqSectionMini category="Student" />
    <UiCTASection heading-id="case-studies-cta-heading" badge-icon-mdi="mdi:chart-box-outline"
      :badge="caseStudiesFinalCta.badge" :title="caseStudiesFinalCta.title"
      :description="caseStudiesFinalCta.description" :supporting="caseStudiesFinalCta.supporting" :ctas="ctas" />
  </div>
</template>
