<script setup lang="ts">
import MilestonesHeroSection from '~/components/milestones/MilestonesHeroSection.vue'
import MilestonesTimelineSection from '~/components/milestones/MilestonesTimelineSection.vue'
import UiCTASection from '~/components/ui/CTASectionLayout.vue'
import NewsletterSection from '~/components/ui/shared/NewsletterSection.vue'

const milestoneCtas = [
  { label: 'Book Free Demo', href: '#book-demo', iconMdi: 'mdi:calendar-check-outline', primary: true },
  { label: 'Explore Academic Coverage', href: '/academic-coverage', iconMdi: 'mdi:book-open-page-variant-outline' },
] as const

useSeoMeta({
  title: 'Our Milestones — Indian Mentors',
  description:
    'Explore the Indian Mentors journey — from founding vision and mentor network development to technology integration and a pan-India academic ecosystem.',
  ogTitle: 'Our Milestones — Indian Mentors',
  ogDescription:
    'Four years of purposeful growth. Seven milestones building India\'s most trusted personalised tutoring ecosystem.',
  ogType: 'website',
})
</script>

<template>
  <div class="min-h-screen section-surface-muted">
    <MilestonesHeroSection />
    <MilestonesTimelineSection />
    <UiCTASection section-id="about-cta" heading-id="milestones-cta-heading" title="Ready to Learn Smarter?"
      description="Book a free demo with a verified mentor — personalised learning, transparent progress, no commitment."
      :ctas="milestoneCtas" />
    <NewsletterSection />
  </div>
</template>
