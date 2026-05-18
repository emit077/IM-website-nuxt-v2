<script setup lang="ts">
import AboutSection from '~/components/home/AboutSection.vue'
import VideoTestimonialsSection from '~/components/home/VideoTestimonialsSection.vue'
import BannerCarousel from '~/components/home/BannerCarousel.vue'
import ServiceSection from '~/components/home/ServiceSection.vue'
import SmartLearningDashboardSection from '~/components/home/SmartLearningDashboardSection.vue'
import PartnersStrip from '~/components/home/PartnersStrip.vue'
import HireInstituteSection from '~/components/home/HireInstituteSection.vue'
import LearningLibrarySection from '~/components/home/LearningLibrarySection.vue'
import LearningStepsSection from '~/components/home/LearningStepsSection.vue'
import BrowseMentorsSection from '~/components/shared/BrowseMentorsSection.vue'
import NewsletterSection from '~/components/home/NewsletterSection.vue'
import RegistrationCTASection from '~/components/home/RegistrationCTASection.vue'
import PartnerProgrammeSection from '~/components/home/PartnerProgrammeSection.vue'
import HeroCarousel from '~/components/home/HeroCarousel.vue'

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
    <RegistrationCTASection />
    <LearningStepsSection />
    <BrowseMentorsSection />
    <SmartLearningDashboardSection />
    <PartnerProgrammeSection />
    <HireInstituteSection />
    <VideoTestimonialsSection />
    <NewsletterSection />
  </div>
</template>
