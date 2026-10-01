<script setup lang="ts">
import SuccessStoriesHeroSection from '~/components/success-stories/SuccessStoriesHeroSection.vue'
import SuccessStoriesStudentRail from '~/components/success-stories/SuccessStoriesStudentRail.vue'
import SuccessStoriesQuoteSection from '~/components/success-stories/SuccessStoriesQuoteSection.vue'
import SuccessStoriesTutorReviews from '~/components/success-stories/SuccessStoriesTutorReviews.vue'
import SuccessStoriesInstitutionFeedback from '~/components/success-stories/SuccessStoriesInstitutionFeedback.vue'
import SuccessStoriesPlacementSection from '~/components/success-stories/SuccessStoriesPlacementSection.vue'
import SuccessStoriesPartnerReviews from '~/components/success-stories/SuccessStoriesPartnerReviews.vue'
import SuccessStoriesVideoSection from '~/components/success-stories/SuccessStoriesVideoSection.vue'
import UiCTASection from '~/components/ui/CTASectionLayout.vue'
import FaqSectionMini from '~/components/ui/shared/FaqSectionMini.vue'
import {
  parentReviews,
  successStoriesFinalCta,
  storyTabs,
} from '~/data/success-stories'

const parentSection = storyTabs.find((t) => t.id === 'parents')!
const successStoriesCtas = [
  { ...successStoriesFinalCta.primaryCta, iconMdi: 'mdi:calendar-check-outline', primary: true },
  { ...successStoriesFinalCta.secondaryCta, iconMdi: 'mdi:phone-outline' },
] as const

useSeoMeta({
  title: 'Success Stories — Indian Mentors',
  description:
    'Explore real experiences and success stories from students, parents, tutors, institutions, and channel partners who trust Indian Mentors across the Globe.',
  ogTitle: 'Success Stories — Real Growth. Real Trust. | Indian Mentors',
  ogDescription:
    'Authentic testimonials from every stakeholder in our academic ecosystem — structured mentorship with measurable results.',
  ogType: 'website',
})
</script>

<template>
  <div class="min-h-screen section-surface-muted">
    <SuccessStoriesHeroSection />
    <SuccessStoriesStudentRail />
    <SuccessStoriesQuoteSection :section="parentSection" :reviews="parentReviews" bg-class="bg-white" />
    <SuccessStoriesTutorReviews />
    <SuccessStoriesInstitutionFeedback />
    <SuccessStoriesPartnerReviews />
    <SuccessStoriesPlacementSection />

    <SuccessStoriesVideoSection />
    <FaqSectionMini category="insights" />
    <UiCTASection :badge="successStoriesFinalCta.badge" badge-icon-mdi="mdi:trophy-outline"
      :title="successStoriesFinalCta.title" :description="successStoriesFinalCta.description"
      :supporting="successStoriesFinalCta.closing" :ctas="successStoriesCtas" />
  </div>
</template>
