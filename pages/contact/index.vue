<script setup lang="ts">
import ContactHeroSection from '~/components/contact/ContactHeroSection.vue'
import ContactChannelSection from '~/components/contact/ContactChannelSection.vue'
import ContactFindUsSection from '~/components/contact/ContactFindUsSection.vue'
import ContactBranchCitiesSection from '~/components/contact/ContactBranchCitiesSection.vue'
import ContactCloserSection from '~/components/contact/ContactCloserSection.vue'
import UiCTASection from '~/components/ui/CTASection.vue'
import NewsletterSection from '~/components/ui/NewsletterSection.vue'
import { findMentorSection, contactGetStarted, contactCTA2 } from '~/data/contact'

useSeoMeta({
  title: 'Contact Us — Indian Mentors',
  description:
    'Get in touch with Indian Mentors. Call, WhatsApp, or email our support team, send an inquiry, find our head and corporate offices, and search operational office locations across India.',
  ogTitle: 'Contact Us — Indian Mentors',
  ogDescription:
    'Reach Indian Mentors for enrollment, tutor allocation, and demo bookings. Explore support channels, submit an inquiry, and locate our offices nationwide.',
  ogType: 'website',
})
</script>

<template>
  <div class="min-h-screen section-surface-muted">
    <ContactHeroSection />
    <ContactFindUsSection />
    <ContactBranchCitiesSection variant="images" section-id="city-images" heading-id="city-images-heading"
      other-cities-id="city-images-other" bg-class="section-surface-white" />
    <UiCTASection heading-id="contact-cta-heading" variant="light" :title="contactCTA2.title"
      :description="contactCTA2.description" :ctas="contactCTA2.ctas" />
    <ContactChannelSection />
    <ContactCloserSection id="find-mentor" heading-id="find-mentor-heading" :badge="findMentorSection.badge"
      :title="findMentorSection.title" :description="findMentorSection.description"
      :closing="findMentorSection.closing" />
    <UiCTASection heading-id="contact-cta-heading" variant="dark" surface-class="section-surface-white" :title="contactGetStarted.title"
      :description="contactGetStarted.description" :ctas="contactGetStarted.ctas" />
    <NewsletterSection />
  </div>
</template>
