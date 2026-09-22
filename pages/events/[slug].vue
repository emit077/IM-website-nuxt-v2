<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import EventDetailBody from '~/components/events/EventDetailBody.vue'
import UiCTASection from '~/components/ui/CTASectionLayout.vue'
import { eventsFinalCta } from '~/data/events'
import {
  eventPath,
  excerptText,
  formatContentDate,
  useWebsiteEvent,
  useWebsiteEvents,
} from '~/composables/useWebsiteContent'
import { usePublicAsset } from '~/composables/usePublicAsset'

const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))
const { data: events, pending: listPending } = await useWebsiteEvents()
const listed = computed(
  () => (events.value ?? []).find((item) => item.slug === slug.value || String(item.id) === slug.value) ?? null,
)
const fallbackId = computed(() => (listed.value ? '' : /^\d+$/.test(slug.value) ? slug.value : ''))
const { data: fetched, pending: itemPending } = await useWebsiteEvent(fallbackId)
const event = computed(() => listed.value ?? fetched.value)
const pending = computed(() => listPending.value || itemPending.value)
const related = computed(() =>
  (events.value ?? []).filter((item) => item.id !== event.value?.id).slice(0, 3),
)
const ctas = [eventsFinalCta.primaryCta, eventsFinalCta.secondaryCta] as const

function coverSrc(item: { image?: string | null }) {
  return item.image || usePublicAsset('/assets/img/insights/personalised-learning.png')
}

useSeoMeta({
  title: () => (event.value ? `${event.value.title} — Event | Indian Mentors` : 'Event — Indian Mentors'),
  description: () => (event.value ? excerptText(event.value.overview, 160) : 'Indian Mentors events and webinars'),
  ogTitle: () => event.value?.title || 'Indian Mentors Event',
  ogDescription: () => (event.value ? excerptText(event.value.overview, 160) : ''),
  ogType: 'article',
  ogImage: () => event.value?.image || undefined,
})
</script>

<template>
  <div class="min-h-screen">
    <div v-if="pending" class="container-page section-py" aria-live="polite">
      <div class="mx-auto max-w-3xl space-y-4">
        <div class="h-10 w-2/3 animate-pulse rounded-lg bg-slate-100" />
        <div class="h-40 animate-pulse rounded-2xl bg-slate-100" />
      </div>
      <p class="sr-only">Loading event</p>
    </div>

    <div v-else-if="!event" class="container-page section-py">
      <div class="mx-auto max-w-xl rounded-2xl border border-dashed border-slate-300 bg-cream-50/60 px-6 py-12 text-center">
        <p class="font-display text-2xl font-bold text-slate-900">Event not found</p>
        <p class="mt-2 text-sm text-slate-600">This session may have been moved or unpublished.</p>
        <NuxtLink to="/events"
          class="mt-6 inline-flex items-center justify-center rounded-xl bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-800">
          Browse events
        </NuxtLink>
      </div>
    </div>

    <template v-else>
      <EventDetailBody :event="event" />

      <section v-if="related.length" class="section-surface-white section-py">
        <div class="container-page">
          <div class="mx-auto max-w-2xl text-center">
            <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-indigo-600">Keep exploring</p>
            <h2 class="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              More sessions
            </h2>
          </div>
          <ul class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
            <li v-for="item in related" :key="item.id">
              <NuxtLink :to="eventPath(item)"
                class="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-card">
                <div class="aspect-[16/10] overflow-hidden bg-slate-100">
                  <img :src="coverSrc(item)" :alt="item.title"
                    class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" loading="lazy" />
                </div>
                <div class="flex flex-1 flex-col p-5">
                  <div class="flex items-center justify-between gap-3">
                    <span
                      class="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-indigo-700 ring-1 ring-indigo-100">
                      <Icon icon="mdi:microphone-outline" class="h-3.5 w-3.5" aria-hidden="true" />
                      {{ item.mode_display || item.mode }}
                    </span>
                    <span class="text-[12px] font-medium text-slate-400">{{ formatContentDate(item.event_date) }}</span>
                  </div>
                  <h3
                    class="mt-3 font-display text-[15px] font-bold leading-snug text-slate-900 transition group-hover:text-indigo-700">
                    {{ item.title }}
                  </h3>
                  <p class="mt-2 line-clamp-2 flex-1 text-[13px] leading-relaxed text-slate-500">
                    {{ excerptText(item.overview, 110) }}
                  </p>
                  <span class="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-indigo-700">
                    View session
                    <Icon icon="mdi:arrow-right"
                      class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </section>

      <UiCTASection heading-id="event-detail-cta-heading" :badge="eventsFinalCta.badge" :title="eventsFinalCta.title"
        :description="eventsFinalCta.description" :supporting="eventsFinalCta.supporting" :ctas="ctas" />
    </template>
  </div>
</template>
