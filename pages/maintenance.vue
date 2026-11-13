<script setup lang="ts">
import StatusScreen from '~/components/ui/StatusScreen.vue'
import { emailSupport } from '~/data/contact'

definePageMeta({
  layout: false,
})

useSeoMeta({
  title: 'Under maintenance — Indian Mentors',
  description: 'Indian Mentors is briefly unavailable while we update the site. Please check back shortly.',
  robots: 'noindex, nofollow',
})

const actions = [
  { label: 'Back to home', variant: 'primary' as const, to: '/' },
  { label: 'Email us', variant: 'secondary' as const, href: `mailto:${emailSupport.address}` },
]
</script>

<template>
  <StatusScreen
    variant="maintenance"
    eyebrow="Under maintenance"
    title="We’re making a few updates"
    description="Indian Mentors is briefly unavailable while we improve the site for families, tutors, and partners. Please check back shortly."
    :actions="actions"
  />
</template>
