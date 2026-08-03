<script setup lang="ts">
import AboutSection from '~/components/home/AboutSection.vue'
import VideoTestimonialsSection from '~/components/home/VideoTestimonialsSection.vue'
import BannerCarousel from '~/components/home/BannerCarousel.vue'
import ServiceSection from '~/components/home/ServiceSection.vue'
import SmartLearningDashboardSection from '~/components/home/SmartLearningDashboardSection.vue'
import PartnersStrip from '~/components/home/PartnersStrip.vue'
import PartneredWithStrip from '~/components/home/PartneredWithStrip.vue'
import HireInstituteSection from '~/components/home/HireInstituteSection.vue'
import LearningLibrarySection from '~/components/home/LearningLibrarySection.vue'
import LearningStepsSection from '~/components/home/LearningStepsSection.vue'
import BrowseMentorsSection from '~/components/shared/BrowseMentorsSection.vue'
import UiCTASection from '~/components/ui/CTASectionLayout.vue'
import NewsletterSection from '~/components/ui/shared/NewsletterSection.vue'
import PartnerProgrammeSection from '~/components/home/PartnerProgrammeSection.vue'
import HeroCarousel from '~/components/home/HeroCarousel.vue'
import WhyChooseUs from '~/components/ui/shared/WhyChooseUs.vue'

const homeCtas = [
  { label: 'Book Free Demo', href: '#book-demo', iconMdi: 'mdi:calendar-check-outline', primary: true },
  { label: 'Become a Tutor', href: '#become-tutor', iconMdi: 'mdi:account-plus-outline' },
] as const

useSeoMeta({
  title: 'Indian Mentors — Find the Perfect Tutor for Your Child',
  description:
    "India's #1 verified tutor platform. Connect with background-checked, subject-verified home and online tutors for Classes 1-12, JEE/NEET and college students.",
  ogTitle: 'Indian Mentors — Verified Tutors for Every Student',
  ogDescription:
    'Structured tutoring and reliable teacher recruitment — built for families and educators across India.',
  ogType: 'website',
})
</script>

<template>
  <div>
    <HeroCarousel />
    <BannerCarousel />
    <PartnersStrip />
    <ServiceSection />
    <LearningLibrarySection />
    <AboutSection />
    <UiCTASection surface-class="section-surface-white" title="Ready to start with Indian Mentors?"
      description="Book a free demo with a background-verified mentor, or join India's trusted tutor network."
      :ctas="homeCtas" />
    <WhyChooseUs />
    <PartneredWithStrip />
    <LearningStepsSection />
    <BrowseMentorsSection />
    <SmartLearningDashboardSection />
    <PartnerProgrammeSection />
    <HireInstituteSection />
    <VideoTestimonialsSection />
    <NewsletterSection />
  </div>
</template>
