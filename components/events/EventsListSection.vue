<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { eventModes, eventsListSection } from '~/data/events'
import type { WebsiteEvent } from '~/types/website-api'
import {
  formatContentDate,
  formatContentTime,
  useWebsiteEvents,
} from '~/composables/useWebsiteContent'

const route = useRoute()
const router = useRouter()

const searchQuery = ref(typeof route.query.q === 'string' ? route.query.q : '')
const mode = ref(typeof route.query.mode === 'string' ? route.query.mode : 'all')
const selectedId = ref<number | null>(null)

watch(
  () => route.query,
  (query) => {
    searchQuery.value = typeof query.q === 'string' ? query.q : ''
    mode.value = typeof query.mode === 'string' ? query.mode : 'all'
  },
)

const apiFilters = computed(() => ({
  mode: mode.value === 'all' ? undefined : mode.value,
}))
const { data: events, pending, refresh } = await useWebsiteEvents(apiFilters, {
  cacheKey: 'website-events-filtered',
})

const filteredEvents = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  return (events.value ?? []).filter((item) => {
    if (!query) return true
    return [item.title, item.overview, item.audience, item.mode_display, item.venue]
      .join(' ')
      .toLowerCase()
      .includes(query)
  })
})

watch(
  filteredEvents,
  (list) => {
    if (!list.length) {
      selectedId.value = null
      return
    }
    if (selectedId.value == null || !list.some((item) => item.id === selectedId.value)) {
      selectedId.value = list[0].id
    }
  },
  { immediate: true },
)

const hasActiveFilters = computed(() => Boolean(searchQuery.value.trim()) || mode.value !== 'all')

function setMode(next: string) {
  mode.value = next
  router.replace({
    path: '/events',
    query: {
      ...(next !== 'all' ? { mode: next } : {}),
      ...(searchQuery.value.trim() ? { q: searchQuery.value.trim() } : {}),
    },
    hash: '#event-list',
  })
}

function resetFilters() {
  searchQuery.value = ''
  mode.value = 'all'
  router.replace({ path: '/events', hash: '#event-list' })
}

function selectEvent(id: number) {
  selectedId.value = id
}

function isSelected(item: WebsiteEvent) {
  return selectedId.value === item.id
}

function parseDateParts(value: string) {
  const date = new Date(`${value}T00:00:00`)
  if (Number.isNaN(date.getTime())) {
    return { day: '—', month: '', weekday: '', year: '' }
  }
  return {
    day: date.toLocaleDateString('en-IN', { day: '2-digit' }),
    month: date.toLocaleDateString('en-IN', { month: 'short' }),
    weekday: date.toLocaleDateString('en-IN', { weekday: 'short' }),
    year: date.toLocaleDateString('en-IN', { year: 'numeric' }),
  }
}

function timeRange(item: Pick<WebsiteEvent, 'start_time' | 'end_time'>) {
  const start = formatContentTime(item.start_time)
  const end = formatContentTime(item.end_time)
  if (start && end) return `${start}–${end}`
  return start || ''
}

function isOnline(item: WebsiteEvent) {
  return /online/i.test(item.mode_display || item.mode || '')
}
</script>

<template>
  <section id="event-list" class="relative scroll-mt-28 overflow-hidden section-surface-muted section-py"
    aria-labelledby="event-list-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-blue-200/25 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-20 bottom-8 h-72 w-72 rounded-full bg-sky-200/20 blur-3xl" />

    <div class="container-page relative">
      <nav class="mb-8" aria-label="Breadcrumb">
        <ol
          class="flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
          <li>
            <NuxtLink to="/" class="transition hover:text-slate-700">Home</NuxtLink>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <NuxtLink to="/insights" class="transition hover:text-slate-700">Insights</NuxtLink>
          </li>
          <li aria-hidden="true">/</li>
          <li class="text-slate-700">Events &amp; Webinars</li>
        </ol>
      </nav>

      <CardHeader heading-id="event-list-heading" :badge="eventsListSection.kicker" :title="eventsListSection.title"
        :description="eventsListSection.description" :classes="`${eventsListSection.classes} mx-auto max-w-3xl`" />

      <div class="mx-auto mt-8 max-w-4xl">
        <div class="relative">
          <Icon icon="mdi:magnify"
            class="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
            aria-hidden="true" />
          <input v-model="searchQuery" type="search" :placeholder="eventsListSection.searchPlaceholder"
            class="w-full rounded-2xl border border-slate-200/90 bg-white py-3.5 pl-12 pr-4 text-sm text-slate-800 shadow-soft outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
            aria-label="Search events" />
        </div>

        <div class="mt-4 flex flex-wrap items-center justify-between gap-3">
          <div class="flex flex-wrap gap-2" role="group" aria-label="Filter by mode">
            <button type="button" :class="[
              'rounded-full px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.1em] ring-1 transition',
              mode === 'all'
                ? 'bg-blue-700 text-white ring-blue-700'
                : 'bg-white text-slate-600 ring-slate-200 hover:ring-blue-200',
            ]" @click="setMode('all')">
              All
            </button>
            <button v-for="item in eventModes" :key="item.id" type="button" :class="[
              'rounded-full px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.1em] ring-1 transition',
              mode === item.id
                ? 'bg-blue-700 text-white ring-blue-700'
                : 'bg-white text-slate-600 ring-slate-200 hover:ring-blue-200',
            ]" @click="setMode(item.id)">
              {{ item.label }}
            </button>
          </div>
          <div class="flex items-center gap-3">
            <p class="text-sm font-medium text-slate-500">
              <span class="font-semibold text-slate-800">{{ filteredEvents.length }}</span>
              upcoming
            </p>
            <button v-if="hasActiveFilters" type="button"
              class="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 transition hover:text-blue-700"
              @click="resetFilters">
              <Icon icon="mdi:filter-off-outline" class="h-4 w-4" aria-hidden="true" />
              Clear
            </button>
          </div>
        </div>
      </div>

      <div v-if="pending" class="mx-auto mt-10 max-w-4xl space-y-3" aria-live="polite">
        <div class="h-52 animate-pulse rounded-[1.75rem] bg-white/80" />
        <div v-for="n in 4" :key="n" class="h-28 animate-pulse rounded-[1.5rem] bg-white/80" />
        <p class="sr-only">Loading events</p>
      </div>

      <ul v-else-if="filteredEvents.length" class="mx-auto mt-10 max-w-4xl space-y-3" role="list">
        <li v-for="event in filteredEvents" :key="event.id">
          <article
            class="group w-full overflow-hidden rounded-[1.35rem] border bg-white text-left shadow-soft transition duration-300 focus-within:ring-4 focus-within:ring-blue-100"
            :class="isSelected(event)
              ? 'border-blue-200 ring-1 ring-blue-100'
              : 'cursor-pointer border-slate-200/80 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-card'"
            :aria-expanded="isSelected(event)"
            tabindex="0"
            role="button"
            @click="selectEvent(event.id)"
            @keydown.enter.prevent="selectEvent(event.id)"
            @keydown.space.prevent="selectEvent(event.id)">
            <!-- Expanded / selected -->
            <div v-if="isSelected(event)" class="relative grid gap-0 sm:grid-cols-[7.5rem_1fr]">
              <div
                class="flex flex-col items-center justify-center gap-0.5 border-b border-blue-800/20 bg-gradient-to-br from-blue-700 to-blue-800 px-4 py-6 text-center text-white sm:border-b-0">
                <span class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-100">
                  {{ parseDateParts(event.event_date).weekday }}
                </span>
                <span class="font-display text-4xl font-bold leading-none tracking-tight">
                  {{ parseDateParts(event.event_date).day }}
                </span>
                <span class="text-sm font-semibold uppercase tracking-[0.12em] text-blue-100">
                  {{ parseDateParts(event.event_date).month }}
                </span>
                <span class="mt-0.5 text-[11px] font-semibold tracking-[0.08em] text-blue-100/90">
                  {{ parseDateParts(event.event_date).year }}
                </span>
              </div>

              <div class="p-5 sm:p-6">
                <div class="flex flex-wrap items-center gap-2">
                  <span
                    class="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-blue-700 ring-1 ring-blue-100">
                    <Icon :icon="isOnline(event) ? 'mdi:broadcast' : 'mdi:map-marker-outline'" class="h-3.5 w-3.5"
                      aria-hidden="true" />
                    {{ event.mode_display || event.mode }}
                  </span>
                  <span v-if="event.id === filteredEvents[0]?.id"
                    class="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-slate-500">
                    Next up
                  </span>
                </div>

                <h3 class="mt-3 font-display text-xl font-bold leading-snug text-slate-900 sm:text-[1.35rem]">
                  {{ event.title }}
                </h3>

                <div class="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[13px] font-medium text-slate-500">
                  <span class="inline-flex items-center gap-1.5">
                    <Icon icon="mdi:clock-outline" class="h-4 w-4 text-slate-400" aria-hidden="true" />
                    {{ timeRange(event) || formatContentDate(event.event_date) }}
                  </span>
                  <span v-if="event.audience" class="inline-flex items-center gap-1.5">
                    <Icon icon="mdi:account-group-outline" class="h-4 w-4 text-slate-400" aria-hidden="true" />
                    {{ event.audience }}
                  </span>
                  <span v-if="event.venue" class="inline-flex items-center gap-1.5">
                    <Icon icon="mdi:map-marker-outline" class="h-4 w-4 text-slate-400" aria-hidden="true" />
                    {{ event.venue }}
                  </span>
                </div>

                <p class="mt-3 text-[14.5px] leading-relaxed text-slate-500">
                  {{ event.overview }}
                </p>

                <div v-if="event.register_link" class="mt-5">
                  <a :href="event.register_link" target="_blank" rel="noopener noreferrer"
                    class="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 transition hover:text-blue-800"
                    @click.stop>
                    Register
                    <Icon icon="mdi:open-in-new" class="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            <!-- Compact / normal -->
            <div v-else class="grid gap-0 sm:grid-cols-[5.75rem_1fr]">
              <div
                class="flex flex-row items-center justify-center gap-2 border-b border-slate-100 px-4 py-3 text-center sm:flex-col sm:gap-0 sm:border-b-0 sm:border-r sm:py-5">
                <span class="font-display text-2xl font-bold leading-none text-slate-900 sm:text-[1.65rem]">
                  {{ parseDateParts(event.event_date).day }}
                </span>
                <div class="flex items-baseline gap-1.5 sm:mt-1 sm:flex-col sm:items-center sm:gap-0">
                  <span class="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-700">
                    {{ parseDateParts(event.event_date).month }}
                  </span>
                  <span class="text-[11px] font-medium text-slate-400 sm:mt-0.5">
                    {{ parseDateParts(event.event_date).weekday }}
                  </span>
                </div>
              </div>

              <div class="flex flex-col justify-center p-4 sm:px-5 sm:py-4">
                <div class="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span
                    class="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-blue-700">
                    <Icon :icon="isOnline(event) ? 'mdi:broadcast' : 'mdi:map-marker-outline'" class="h-3.5 w-3.5"
                      aria-hidden="true" />
                    {{ event.mode_display || event.mode }}
                  </span>
                  <span v-if="event.audience" class="text-[12px] font-medium text-slate-400">
                    · {{ event.audience }}
                  </span>
                </div>

                <h3
                  class="mt-1.5 font-display text-[15.5px] font-bold leading-snug text-slate-900 transition group-hover:text-blue-700 sm:text-base">
                  {{ event.title }}
                </h3>
                <p class="mt-1 line-clamp-1 text-[13px] leading-relaxed text-slate-500">
                  {{ event.overview }}
                </p>
              </div>
            </div>
          </article>
        </li>
      </ul>

      <div v-else
        class="mx-auto mt-10 max-w-4xl rounded-[1.5rem] border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
        <span
          class="mx-auto grid h-12 w-12 place-items-center rounded-full bg-blue-50 text-blue-700 ring-1 ring-blue-100"
          aria-hidden="true">
          <Icon icon="mdi:magnify-close" class="h-6 w-6" />
        </span>
        <p class="mt-4 font-display text-lg font-bold text-slate-900">{{ eventsListSection.emptyTitle }}</p>
        <p class="mt-2 text-sm text-slate-500">{{ eventsListSection.emptyDescription }}</p>
        <button type="button"
          class="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700"
          @click="resetFilters">
          Reset filters
        </button>
        <button type="button" class="ml-4 text-sm font-semibold text-slate-500" @click="refresh()">
          Retry
        </button>
      </div>
    </div>
  </section>
</template>
