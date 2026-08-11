<script setup lang="ts">
import SecondaryHeroLayout from '~/components/ui/SecondaryHeroLayout.vue'
import type { SecondaryHeroContent } from '~/components/ui/SecondaryHeroLayout.vue'
import { servicesHero } from '~/data/services'
import { externalLinks } from '~/data/external-links'

const secondaryHero: SecondaryHeroContent = {
  badge: 'Our Services',
  title: 'Personalised Learning Solutions for Every Student',
  description: servicesHero.description,
  actionBtns: [
    { label: 'Book Free Consultation', href: externalLinks.studentSignup, variant: 'theme-secondary' },
    { label: 'Explore Services', href: '#tutoring-services', variant: 'secondary' },
  ],
  ticker: [
    'Home Tutors',
    'Online Tutors',
    'Shadow Tutors',
    'Travel Tutors',
    'Live-In Tutors',
    'Home Schooling',
    'Special Educators',
    'Custom Tutor Services',
  ],
  headingId: 'services-hero-heading',
  tickerAriaLabel: 'Tutoring services highlights',
  patternId: 'services-hero-waves',
}
</script>

<template>
  <SecondaryHeroLayout :hero-content="secondaryHero" />
</template>
