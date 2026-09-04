<script setup lang="ts">
import InsightsHeroSection from '~/components/insights/InsightsHeroSection.vue'
import InsightsNavSection from '~/components/insights/InsightsNavSection.vue'
import InsightsFeaturedSection from '~/components/insights/InsightsFeaturedSection.vue'
import InsightsApproachSection from '~/components/insights/InsightsApproachSection.vue'
import InsightsImpactSection from '~/components/insights/InsightsImpactSection.vue'
import InsightsSearchSection from '~/components/insights/InsightsSearchSection.vue'
import InsightsFaqSection from '~/components/insights/InsightsFaqSection.vue'
import InsightsClosingSection from '~/components/insights/InsightsClosingSection.vue'
import WhyChooseUs from '~/components/ui/shared/WhyChooseUs.vue'
import UiCTASection from '~/components/ui/CTASectionLayout.vue'
import NewsletterSection from '~/components/ui/shared/NewsletterSection.vue'
import { insightsFinalCta, insightsNewsletter, insightsWhy } from '~/data/insights'

const insightsCtas = [
  { ...insightsFinalCta.primaryCta },
  { ...insightsFinalCta.secondaryCta },
] as const

useSeoMeta({
  title: 'Insights Hub — Indian Mentors',
  description:
    'Explore expert articles, student success stories, events, and academic resources. Knowledge, guidance, and real results from Indian Mentors.',
  ogTitle: 'Insights Hub — Knowledge. Guidance. Real Results.',
  ogDescription:
    'Expert guidance, academic strategies, success stories, and the latest updates in personalised education — all in one place.',
  ogType: 'website',
})
</script>

<template>
  <div class="min-h-screen">
    <InsightsHeroSection />
    <InsightsNavSection />
    <InsightsFeaturedSection />
    <WhyChooseUs layout="grid" :show-ctas="false" section-id="why-insights" heading-id="why-insights-heading"
      surface-class="section-surface-white" :badge="insightsWhy.badge" :title="insightsWhy.title"
      :description="insightsWhy.description" :classes="insightsWhy.classes" :items="insightsWhy.items" />
    <InsightsApproachSection />
    <InsightsImpactSection />
    <InsightsSearchSection />
    <NewsletterSection :badge="insightsNewsletter.badge" :title="insightsNewsletter.title"
      :description="insightsNewsletter.description" />
    <UiCTASection section-id="insights-cta" heading-id="insights-final-cta-heading"
      badge-icon-mdi="mdi:school-outline" :badge="insightsFinalCta.badge" :title="insightsFinalCta.title"
      :description="insightsFinalCta.description" :supporting="insightsFinalCta.supporting" :ctas="insightsCtas" />
    <InsightsFaqSection />
    <InsightsClosingSection />
  </div>
</template>
