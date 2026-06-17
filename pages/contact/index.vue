<script setup lang="ts">
import ContactHeroSection from '~/components/contact/ContactHeroSection.vue'
import ContactCitiesSection from '~/components/contact/ContactCitiesSection.vue'
import ContactCitiesImageSection from '~/components/contact/ContactCitiesImageSection.vue'
import ContactHeadOfficeSection from '~/components/contact/ContactHeadOfficeSection.vue'
import ContactFindMentorSection from '~/components/contact/ContactFindMentorSection.vue'
import ContactPhoneSection from '~/components/contact/ContactPhoneSection.vue'
import ContactWhatsAppSection from '~/components/contact/ContactWhatsAppSection.vue'
import ContactEmailSection from '~/components/contact/ContactEmailSection.vue'
import ContactCTASection from '~/components/contact/ContactCTASection.vue'
import ContactClosingSection from '~/components/contact/ContactClosingSection.vue'
import NewsletterSection from '~/components/home/NewsletterSection.vue'

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
    <ContactCitiesSection />
    <ContactCitiesImageSection />
    <ContactHeadOfficeSection />
    <ContactFindMentorSection />
    <ContactPhoneSection />
    <ContactWhatsAppSection />
    <ContactEmailSection />
    <ContactCTASection />
    <ContactClosingSection />
    <NewsletterSection />
  </div>
</template>
