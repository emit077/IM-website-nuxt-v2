<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { WebsiteEvent } from '~/types/website-api'
import { formatContentDate, formatContentTime } from '~/composables/useWebsiteContent'

const props = defineProps<{
  event: WebsiteEvent
}>()

const schedule = computed(() => {
  const date = formatContentDate(props.event.event_date)
  const start = formatContentTime(props.event.start_time)
  const end = formatContentTime(props.event.end_time)
  if (start && end) return `${date} · ${start}–${end}`
  if (start) return `${date} · ${start}`
  return date
})
</script>

<template>
  <article class="relative overflow-hidden section-surface-muted section-py">
    <div class="container-page">
      <div class="mx-auto max-w-3xl">
        <nav aria-label="Breadcrumb">
          <ol
            class="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            <li>
              <NuxtLink to="/" class="transition hover:text-slate-700">Home</NuxtLink>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <NuxtLink to="/insights" class="transition hover:text-slate-700">Insights</NuxtLink>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <NuxtLink to="/events" class="transition hover:text-slate-700">Events &amp; Webinars</NuxtLink>
            </li>
          </ol>
        </nav>

        <p class="mt-8 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
          {{ event.mode_display || event.mode }}
        </p>
        <h1 class="heading-display mt-2 text-[1.85rem] leading-[1.12] sm:text-4xl">
          {{ event.title }}
        </h1>
        <p class="mt-4 text-sm font-medium text-slate-500">
          {{ schedule }}
          <span v-if="event.audience"> · {{ event.audience }}</span>
        </p>

        <div v-if="event.image"
          class="mt-8 overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white shadow-soft">
          <img :src="event.image" :alt="event.title" class="w-full object-cover" />
        </div>

        <dl class="mt-8 grid gap-3 sm:grid-cols-2">
          <div class="rounded-2xl border border-slate-200/80 bg-white px-4 py-4 shadow-soft">
            <dt class="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">When</dt>
            <dd class="mt-1 font-display text-[15px] font-bold text-slate-900">{{ schedule }}</dd>
          </div>
          <div class="rounded-2xl border border-slate-200/80 bg-white px-4 py-4 shadow-soft">
            <dt class="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">Where</dt>
            <dd class="mt-1 font-display text-[15px] font-bold text-slate-900">
              {{ event.venue || event.mode_display || event.mode }}
            </dd>
          </div>
        </dl>

        <section class="mt-12">
          <h2 class="font-display text-2xl font-bold tracking-tight text-slate-900">Overview</h2>
          <p class="mt-4 text-[15.5px] leading-relaxed text-slate-600">{{ event.overview }}</p>
        </section>

        <section v-if="event.learning_points?.length" class="mt-12">
          <h2 class="font-display text-xl font-bold tracking-tight text-slate-900">What you’ll learn</h2>
          <ul class="mt-5 space-y-3">
            <li v-for="point in event.learning_points" :key="point"
              class="flex gap-2.5 text-[15px] leading-relaxed text-slate-600">
              <Icon icon="mdi:check-circle-outline" class="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" aria-hidden="true" />
              <span>{{ point }}</span>
            </li>
          </ul>
        </section>

        <div class="mt-10 flex flex-wrap gap-3">
          <a v-if="event.register_link" :href="event.register_link" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center justify-center rounded-xl bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800">
            Register
          </a>
          <NuxtLink to="/events"
            class="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-indigo-200 hover:text-indigo-700">
            Back to events
          </NuxtLink>
        </div>
      </div>
    </div>
  </article>
</template>
