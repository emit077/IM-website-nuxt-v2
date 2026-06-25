<script setup lang="ts">
import ContactHeroSection from '~/components/contact/ContactHeroSection.vue'
import ContactBranchCitiesSection from '~/components/contact/ContactBranchCitiesSection.vue'
import ContactHeadOfficeSection from '~/components/contact/ContactHeadOfficeSection.vue'
import ContactCenteredSection from '~/components/contact/ContactCenteredSection.vue'
import ContactChannelSection from '~/components/contact/ContactChannelSection.vue'
import UiCTASection from '~/components/ui/CTASection.vue'
import NewsletterSection from '~/components/ui/NewsletterSection.vue'
import { findMentorSection, contactGetStarted } from '~/data/contact'

useSeoMeta({
  title: 'Cities of Operation — Indian Mentors',
  description:
    'Indian Mentors delivers structured and personalised tutoring across major cities in India. Find headquarters, branch offices, and service zones — with home tutoring, online support, and verified mentors nationwide.',
  ogTitle: 'Cities of Operation — Indian Mentors',
  ogDescription:
    'Structured academic support delivered nationwide. Explore Indian Mentors locations across metropolitan areas, regional cities, and educational hubs in India.',
  ogType: 'website',
})
</script>

<template>
  <div class="min-h-screen bg-cream-50">
    <ContactHeroSection />
    <ContactBranchCitiesSection variant="images" section-id="city-images" heading-id="city-images-heading"
      other-cities-id="city-images-other" bg-class="bg-cream-50" />

    <ContactHeadOfficeSection />

    <ContactCenteredSection id="find-mentor" heading-id="find-mentor-heading" icon="mdi:school-outline"
      :title="findMentorSection.title" :description="findMentorSection.description"
      :closing="findMentorSection.closing" />
    <ContactChannelSection />
    <UiCTASection :title="contactGetStarted.title" :description="contactGetStarted.description"
      :ctas="contactGetStarted.ctas" />
    <NewsletterSection />
  </div>
</template>
