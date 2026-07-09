<script setup lang="ts">
import SuccessStoriesHeroSection from '~/components/success-stories/SuccessStoriesHeroSection.vue'
import SuccessStoriesStudentRail from '~/components/success-stories/SuccessStoriesStudentRail.vue'
import SuccessStoriesQuoteSection from '~/components/success-stories/SuccessStoriesQuoteSection.vue'
import SuccessStoriesPlacementSection from '~/components/success-stories/SuccessStoriesPlacementSection.vue'
import SuccessStoriesVideoSection from '~/components/success-stories/SuccessStoriesVideoSection.vue'
import UiCTASection from '~/components/ui/CTASection.vue'
import {
  institutionalFeedback,
  parentReviews,
  partnerReviews,
  successStoriesFinalCta,
  storyTabs,
  tutorReviews,
} from '~/data/success-stories'

const parentSection = storyTabs.find((t) => t.id === 'parents')!
const tutorSection = storyTabs.find((t) => t.id === 'tutors')!
const institutionSection = storyTabs.find((t) => t.id === 'institutions')!
const partnerSection = storyTabs.find((t) => t.id === 'partners')!
const successStoriesCtas = [
  { ...successStoriesFinalCta.primaryCta, iconMdi: 'mdi:calendar-check-outline', primary: true },
  { ...successStoriesFinalCta.secondaryCta, iconMdi: 'mdi:phone-outline' },
] as const

useSeoMeta({
  title: 'Success Stories — Indian Mentors',
  description:
    'Explore real experiences and success stories from students, parents, tutors, institutions, and channel partners who trust Indian Mentors across India.',
  ogTitle: 'Success Stories — Real Growth. Real Trust. | Indian Mentors',
  ogDescription:
    'Authentic testimonials from every stakeholder in our academic ecosystem — structured mentorship with measurable results.',
  ogType: 'website',
})
</script>

<template>
  <div class="min-h-screen bg-cream-50">
    <SuccessStoriesHeroSection />
    <SuccessStoriesStudentRail />
    <SuccessStoriesQuoteSection :section="parentSection" :reviews="parentReviews" bg-class="bg-white" />
    <SuccessStoriesQuoteSection :section="tutorSection" :reviews="tutorReviews" bg-class="bg-cream-50" />
    <SuccessStoriesQuoteSection :section="institutionSection" :reviews="institutionalFeedback" bg-class="bg-white" />
    <SuccessStoriesPlacementSection />
    <SuccessStoriesQuoteSection :section="partnerSection" :reviews="partnerReviews" bg-class="bg-white" />
    <SuccessStoriesVideoSection />
    <UiCTASection :badge="successStoriesFinalCta.badge" badge-icon-mdi="mdi:trophy-outline"
      :title="successStoriesFinalCta.title" :description="successStoriesFinalCta.description"
      :supporting="successStoriesFinalCta.closing" :ctas="successStoriesCtas" />
  </div>
</template>
