<script setup lang="ts">
import AboutHeroSection from '~/components/about/AboutHeroSection.vue'
import AboutMissionSection from '~/components/about/AboutMissionSection.vue'
import AboutCommitmentSection from '~/components/about/AboutCommitmentSection.vue'
import AboutLeadershipSection from '~/components/about/AboutLeadershipSection.vue'
import AboutHowWeWorkSection from '~/components/about/AboutHowWeWorkSection.vue'
import AboutTeamStructureSection from '~/components/about/AboutTeamStructureSection.vue'
import AboutStorySection from '~/components/about/AboutStorySection.vue'
import AboutRoadmapSection2 from '~/components/about/AboutRoadmapSection2.vue'
import AboutComparisonSection from '~/components/about/AboutComparisonSection.vue'
import UiCTASection from '~/components/ui/CTASectionLayout.vue'
import NewsletterSection from '~/components/ui/shared/NewsletterSection.vue'
import { aboutPartnersCta } from '~/data/about'

const aboutCtas = [
  { label: 'Book Free Demo', href: '#book-demo', iconMdi: 'mdi:calendar-check-outline', primary: true },
  { label: 'Explore Academic Coverage', href: '/academic-coverage', iconMdi: 'mdi:book-open-page-variant-outline' },
] as const

const partnersCtas = [
  { ...aboutPartnersCta.primaryCta, iconMdi: 'mdi:handshake-outline', primary: true },
  { ...aboutPartnersCta.secondaryCta, iconMdi: 'mdi:account-school-outline' },
  { ...aboutPartnersCta.tertiaryCta, iconMdi: 'mdi:domain' },
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
  <div class="min-h-screen section-surface-muted">
    <AboutHeroSection />
    <AboutMissionSection />
    <AboutCommitmentSection />
    <AboutHowWeWorkSection />
    <AboutLeadershipSection />
    <UiCTASection section-id="partner-cta" heading-id="partner-cta-heading" variant="light" surface-class="bg-white"
      :badge="aboutPartnersCta.badge" badge-icon-mdi="mdi:handshake-outline" :title="aboutPartnersCta.title"
      :description="aboutPartnersCta.description" :ctas="partnersCtas" />
    <AboutTeamStructureSection />
    <AboutStorySection />
    <AboutRoadmapSection2 />
    <AboutComparisonSection />
    <UiCTASection heading-id="about-cta-heading" surface-class="bg-white" title="Ready to Learn Smarter?"
      description="Book a free demo with a verified mentor — personalised learning, transparent progress, no commitment."
      :ctas="aboutCtas" />
    <NewsletterSection />
  </div>
</template>
