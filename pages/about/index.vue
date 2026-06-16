<script setup lang="ts">
import AboutHeroSection from '~/components/about/AboutHeroSection.vue'
import AboutMissionSection from '~/components/about/AboutMissionSection.vue'
import AboutLeadershipSection from '~/components/about/AboutLeadershipSection.vue'
import AboutPhilosophySection from '~/components/about/AboutPhilosophySection.vue'
import AboutJourneySection from '~/components/about/AboutJourneySection.vue'
import AboutComparisonSection from '~/components/about/AboutComparisonSection.vue'
import AboutAudienceSection from '~/components/about/AboutAudienceSection.vue'
import AboutFinalCTASection from '~/components/about/AboutFinalCTASection.vue'
import NewsletterSection from '~/components/home/NewsletterSection.vue'

useSeoMeta({
  title: 'About Us — Indian Mentors',
  description:
    'Learn how Indian Mentors connects students, parents, tutors, and institutions through structured, transparent, technology-enabled academic mentorship.',
  ogTitle: 'About Us — Indian Mentors',
  ogDescription:
    'Building futures through personalised education — verified tutors, structured processes, and measurable academic progress.',
  ogType: 'website',
})
</script>

<template>
  <div class="min-h-screen bg-cream-50">
    <AboutHeroSection />
    <AboutMissionSection />
    <AboutLeadershipSection />
    <AboutPhilosophySection />
    <AboutJourneySection />
    <AboutComparisonSection />
    <AboutAudienceSection />
    <AboutFinalCTASection />
    <NewsletterSection />
  </div>
</template>
