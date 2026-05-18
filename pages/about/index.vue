<script setup lang="ts">
import AboutHeroSection from '~/components/about/AboutHeroSection.vue'
import AboutVideoSection from '~/components/about/AboutVideoSection.vue'
import AboutMissionSection from '~/components/about/AboutMissionSection.vue'
import AboutJourneySection from '~/components/about/AboutJourneySection.vue'
import AboutTeamSection from '~/components/about/AboutTeamSection.vue'
import RegistrationCTASection from '~/components/home/RegistrationCTASection.vue'
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
    <!-- <AboutVideoSection /> -->
    <AboutMissionSection />
    <AboutJourneySection />
    <AboutTeamSection />
    <RegistrationCTASection />
    <NewsletterSection />
  </div>
</template>
