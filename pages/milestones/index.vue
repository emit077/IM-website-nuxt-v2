<script setup lang="ts">
import MilestonesHeroSection from '~/components/milestones/MilestonesHeroSection.vue'
import MilestonesTimelineSection from '~/components/milestones/MilestonesTimelineSection.vue'
import AboutFinalCTASection from '~/components/about/AboutFinalCTASection.vue'
import NewsletterSection from '~/components/home/NewsletterSection.vue'

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
  <div class="min-h-screen bg-cream-50">
    <MilestonesHeroSection />
    <MilestonesTimelineSection />
    <AboutFinalCTASection />
    <NewsletterSection />
  </div>
</template>
