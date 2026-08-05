<script setup lang="ts">
import ServicesHeroSection from '~/components/services/ServicesHeroSection.vue'
import ServicesGridSection from '~/components/services/ServicesGridSection.vue'
import ServicesSpecialisedSection from '~/components/services/ServicesSpecialisedSection.vue'
import ServicesAudienceSection from '~/components/services/ServicesAudienceSection.vue'
import ServicesConversionStrip from '~/components/services/ServicesConversionStrip.vue'
import WhyChooseDifferentiatorsSection from '~/components/why-choose/WhyChooseDifferentiatorsSection.vue'

useSeoMeta({
  title: 'Our Tutoring Services — Indian Mentors',
  description:
    'Explore personalised tutoring solutions from Indian Mentors — Home Tutors, Online Tutors, Shadow Tutors, Travel Tutors, Live-In Tutors, Home Schooling Support, Special Educators, and Custom Tutor Services across India.',
  ogTitle: 'Our Tutoring Services — Indian Mentors',
  ogDescription:
    'Find the right learning format for your child. Verified tutors, flexible schedules, and personalised academic support across CBSE, ICSE, IB, IGCSE, and more.',
  ogType: 'website',
})
</script>

<template>
  <div>
    <ServicesHeroSection />
    <ServicesGridSection />
    <ServicesSpecialisedSection />
    <ServicesAudienceSection />
    <WhyChooseDifferentiatorsSection />
    <ServicesConversionStrip />
  </div>
</template>
