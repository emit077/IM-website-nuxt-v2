<script setup lang="ts">
import AboutHeroSection from '~/components/about/AboutHeroSection.vue'
import AboutHeroSection2 from '~/components/about/AboutHeroSection copy.vue'
import AboutMissionSection from '~/components/about/AboutMissionSection.vue'
import AboutCommitmentSection from '~/components/about/AboutCommitmentSection.vue'
import AboutLeadershipSection from '~/components/about/AboutLeadershipSection.vue'
import AboutPhilosophySection from '~/components/about/AboutPhilosophySection.vue'
import AboutHowWeWorkSection from '~/components/about/AboutHowWeWorkSection.vue'
import AboutTeamStructureSection from '~/components/about/AboutTeamStructureSection.vue'
import AboutJourneySection from '~/components/about/AboutJourneySection.vue'
import AboutStorySection from '~/components/about/AboutStorySection.vue'
import AboutRoadmapSection from '~/components/about/AboutRoadmapSection.vue'
import AboutRoadmapSection2 from '~/components/about/AboutRoadmapSection2.vue'
import AboutComparisonSection from '~/components/about/AboutComparisonSection.vue'
import AboutAudienceSection from '~/components/about/AboutAudienceSection.vue'
import UiCTASection from '~/components/ui/CTASection.vue'
import NewsletterSection from '~/components/ui/NewsletterSection.vue'

const aboutCtas = [
  { label: 'Book Free Demo', href: '#book-demo', iconMdi: 'mdi:calendar-check-outline', primary: true },
  { label: 'Explore Academic Coverage', href: '/academic-coverage', iconMdi: 'mdi:book-open-page-variant-outline' },
] as const

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
    <AboutHeroSection2 />
    <AboutMissionSection />
    <AboutCommitmentSection />
    <!-- <AboutPhilosophySection /> -->
    <AboutHowWeWorkSection />
    <AboutLeadershipSection />
    <AboutTeamStructureSection />
    <!-- <AboutJourneySection /> -->
    <AboutStorySection />
    <!-- <AboutRoadmapSection /> -->
    <AboutRoadmapSection2 />
    <AboutComparisonSection />
    <!-- <AboutAudienceSection /> -->
    <UiCTASection heading-id="about-cta-heading" surface-class="bg-white" title="Ready to Learn Smarter?"
      description="Book a free demo with a verified mentor — personalised learning, transparent progress, no commitment."
      :ctas="aboutCtas" />
    <NewsletterSection />
  </div>
</template>
