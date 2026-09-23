<script setup lang="ts">
import EventsListSection from '~/components/events/EventsListSection.vue'
import UiCTASection from '~/components/ui/CTASectionLayout.vue'
import FaqSectionMini from '~/components/ui/shared/FaqSectionMini.vue'
import { eventsFinalCta } from '~/data/events'

const ctas = [eventsFinalCta.primaryCta, eventsFinalCta.secondaryCta] as const

useSeoMeta({
  title: 'Events & Webinars — Indian Mentors',
  description:
    'Join live workshops, board-exam masterclasses, and parent webinars from Indian Mentors.',
  ogTitle: 'Events & Webinars — Indian Mentors',
  ogDescription: 'Live learning sessions, exam workshops, and career guidance events.',
  ogType: 'website',
})
</script>

<template>
  <div class="min-h-screen">
    <EventsListSection />
    <FaqSectionMini category="insights" />
    <UiCTASection heading-id="events-cta-heading" badge-icon-mdi="mdi:microphone-outline"
      :badge="eventsFinalCta.badge" :title="eventsFinalCta.title" :description="eventsFinalCta.description"
      :supporting="eventsFinalCta.supporting" :ctas="ctas" />
  </div>
</template>
