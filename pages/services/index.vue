<script setup lang="ts">
import ServicesHeroSection from '~/components/services/ServicesHeroSection.vue'
import ServicesGridSection from '~/components/services/ServicesGridSection.vue'
import ServicesSpecialisedSection from '~/components/services/ServicesSpecialisedSection.vue'
import ServicesWhyChooseSection from '~/components/services/ServicesWhyChooseSection.vue'
import ServicesAudienceSection from '~/components/services/ServicesAudienceSection.vue'
import ServicesConversionStrip from '~/components/services/ServicesConversionStrip.vue'
import PartnersStrip from '~/components/home/PartnersStrip.vue'
import WhyChooseDifferentiatorsSection from '~/components/services/WhyChooseDifferentiatorsSection.vue'

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
    <!-- <ServicesWhyChooseSection /> -->
    <ServicesAudienceSection />
    <WhyChooseDifferentiatorsSection />
    <ServicesConversionStrip />
  </div>
</template>
