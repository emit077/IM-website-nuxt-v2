<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { subjectsSection, type SubjectStream } from '~/data/academic-coverage'

type StreamFilter = 'all' | SubjectStream['id']

const streams = subjectsSection.streams
const searchQuery = ref('')
const activeStream = ref<StreamFilter>('all')
const selectedSubject = ref<string | null>(null)
const revealKey = ref(0)

const query = computed(() => searchQuery.value.trim().toLowerCase())

const accentChip: Record<SubjectStream['accent'], string> = {
  teal: 'border-teal-200/80 bg-teal-50/80 text-teal-800 hover:border-teal-300 hover:bg-teal-50',
  blue: 'border-blue-200/80 bg-blue-50/80 text-blue-800 hover:border-blue-300 hover:bg-blue-50',
  amber: 'border-amber-200/80 bg-amber-50/80 text-amber-900 hover:border-amber-300 hover:bg-amber-50',
  sky: 'border-sky-200/80 bg-sky-50/80 text-sky-800 hover:border-sky-300 hover:bg-sky-50',
  indigo: 'border-indigo-200/80 bg-indigo-50/80 text-indigo-800 hover:border-indigo-300 hover:bg-indigo-50',
  rose: 'border-rose-200/80 bg-rose-50/80 text-rose-800 hover:border-rose-300 hover:bg-rose-50',
  slate: 'border-slate-200 bg-slate-50 text-slate-800 hover:border-slate-300 hover:bg-slate-100',
}

const accentIcon: Record<SubjectStream['accent'], string> = {
  teal: 'bg-teal-600 text-white',
  blue: 'bg-blue-600 text-white',
  amber: 'bg-amber-500 text-white',
  sky: 'bg-sky-600 text-white',
  indigo: 'bg-indigo-600 text-white',
  rose: 'bg-rose-600 text-white',
  slate: 'bg-slate-700 text-white',
}

const accentSelected: Record<SubjectStream['accent'], string> = {
  teal: 'border-teal-500 bg-teal-600 text-white shadow-[0_10px_24px_-12px_rgba(13,148,136,0.65)]',
  blue: 'border-blue-500 bg-blue-600 text-white shadow-[0_10px_24px_-12px_rgba(37,99,235,0.65)]',
  amber: 'border-amber-500 bg-amber-500 text-white shadow-[0_10px_24px_-12px_rgba(245,158,11,0.65)]',
  sky: 'border-sky-500 bg-sky-600 text-white shadow-[0_10px_24px_-12px_rgba(2,132,199,0.65)]',
  indigo: 'border-indigo-500 bg-indigo-600 text-white shadow-[0_10px_24px_-12px_rgba(79,70,229,0.65)]',
  rose: 'border-rose-500 bg-rose-600 text-white shadow-[0_10px_24px_-12px_rgba(225,29,72,0.55)]',
  slate: 'border-slate-600 bg-slate-800 text-white shadow-[0_10px_24px_-12px_rgba(15,23,42,0.55)]',
}

function subjectMatches(subject: string) {
  if (!query.value) return true
  return subject.toLowerCase().includes(query.value)
}

function streamMatches(stream: SubjectStream) {
  if (activeStream.value !== 'all' && stream.id !== activeStream.value) return false
  if (!query.value) return true
  return (
    stream.title.toLowerCase().includes(query.value) ||
    stream.tagline.toLowerCase().includes(query.value) ||
    stream.subjects.some(subjectMatches)
  )
}

const visibleShelves = computed(() =>
  streams
    .filter(streamMatches)
    .map((stream) => ({
      ...stream,
      visibleSubjects: query.value
        ? stream.subjects.filter(
            (subject) =>
              subjectMatches(subject) ||
              stream.title.toLowerCase().includes(query.value) ||
              stream.tagline.toLowerCase().includes(query.value),
          )
        : stream.subjects,
    }))
    .filter((stream) => stream.visibleSubjects.length > 0),
)

const visibleSubjectCount = computed(() =>
  visibleShelves.value.reduce((sum, stream) => sum + stream.visibleSubjects.length, 0),
)

const selectedMeta = computed(() => {
  if (!selectedSubject.value) return null
  for (const stream of streams) {
    if (stream.subjects.includes(selectedSubject.value)) {
      return { subject: selectedSubject.value, stream }
    }
  }
  return null
})

function selectSubject(subject: string) {
  selectedSubject.value = selectedSubject.value === subject ? null : subject
}

function resetFilters() {
  searchQuery.value = ''
  activeStream.value = 'all'
  selectedSubject.value = null
}

watch([searchQuery, activeStream], () => {
  revealKey.value += 1
  if (selectedSubject.value) {
    const stillVisible = visibleShelves.value.some((shelf) =>
      shelf.visibleSubjects.includes(selectedSubject.value!),
    )
    if (!stillVisible) selectedSubject.value = null
  }
})
</script>

<template>
  <section id="subjects-offered" class="relative scroll-mt-20 overflow-hidden section-surface-muted section-py"
    aria-labelledby="subjects-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-28 top-10 h-80 w-80 rounded-full bg-blue-200/25 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-sky-200/20 blur-3xl" />

    <div class="container-page relative">
      <div class="mx-auto max-w-3xl text-center">
        <CardHeader heading-id="subjects-heading" :badge="subjectsSection.kicker" :title="subjectsSection.title"
          :description="subjectsSection.description" :classes="subjectsSection.classes" />
      </div>

      <!-- Search + stream filters -->
      <div class="mx-auto mt-10 max-w-4xl space-y-4" v-motion :initial="{ opacity: 0, y: 14 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 480 } }">
        <div class="relative">
          <Icon icon="mdi:magnify"
            class="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
            aria-hidden="true" />
          <input v-model="searchQuery" type="search" :placeholder="subjectsSection.searchPlaceholder"
            class="w-full rounded-2xl border border-slate-200/90 bg-white py-3.5 pl-12 pr-28 text-sm text-slate-800 shadow-soft outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
            aria-label="Search subjects" />
          <span
            class="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 items-center gap-1.5 rounded-full bg-slate-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-slate-500 ring-1 ring-slate-200 sm:inline-flex">
            <span class="text-blue-600">{{ subjectsSection.metricValue }}</span>
            {{ subjectsSection.metricLabel }}
          </span>
        </div>

        <div
          class="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="tablist" aria-label="Filter by stream">
          <button type="button" role="tab" :aria-selected="activeStream === 'all'" :class="[
            'inline-flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide transition',
            activeStream === 'all'
              ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/25'
              : 'border border-slate-200/90 bg-white text-slate-600 hover:border-blue-200 hover:text-blue-700',
          ]" @click="activeStream = 'all'">
            <Icon icon="mdi:view-grid-outline" class="h-3.5 w-3.5" aria-hidden="true" />
            {{ subjectsSection.filterAllLabel }}
          </button>
          <button v-for="stream in streams" :key="stream.id" type="button" role="tab"
            :aria-selected="activeStream === stream.id" :class="[
              'inline-flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide transition',
              activeStream === stream.id
                ? 'bg-slate-900 text-white shadow-sm'
                : 'border border-slate-200/90 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900',
            ]" @click="activeStream = stream.id">
            <Icon :icon="stream.iconMdi" class="h-3.5 w-3.5" aria-hidden="true" />
            {{ stream.title }}
          </button>
        </div>

        <p class="text-center text-xs font-medium text-slate-500">
          Showing {{ visibleSubjectCount }} subjects
          <span v-if="activeStream !== 'all' || query"> · filtered</span>
        </p>
      </div>

      <!-- Empty state -->
      <div v-if="!visibleShelves.length"
        class="mx-auto mt-10 max-w-md rounded-[28px] border border-dashed border-slate-300 bg-white/80 px-6 py-14 text-center">
        <Icon icon="mdi:book-search-outline" class="mx-auto h-12 w-12 text-slate-300" aria-hidden="true" />
        <p class="mt-4 font-display text-lg font-bold text-slate-800">{{ subjectsSection.emptyTitle }}</p>
        <p class="mt-1 text-sm text-slate-500">{{ subjectsSection.emptyDescription }}</p>
        <button type="button" class="btn-secondary mt-6" @click="resetFilters">
          {{ subjectsSection.resetLabel }}
        </button>
      </div>

      <!-- Subject shelves atlas -->
      <div v-else :key="revealKey" class="mt-8 space-y-3 sm:mt-10 sm:space-y-4">
        <article v-for="(stream, i) in visibleShelves" :key="stream.id"
          class="group relative overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-soft transition duration-300 hover:border-slate-300"
          v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + Math.min(i, 6) * 45, duration: 420 } }">
          <div class="grid gap-4 p-4 sm:p-5 lg:grid-cols-[220px_1fr] lg:items-start lg:gap-6 lg:p-6">
            <div class="relative min-w-0">
              <span aria-hidden="true"
                class="pointer-events-none absolute -right-1 -top-3 select-none font-display text-5xl font-black leading-none text-slate-100 sm:text-6xl">
                {{ String(i + 1).padStart(2, '0') }}
              </span>
              <div class="relative flex items-start gap-3">
                <span :class="[
                  'grid h-11 w-11 shrink-0 place-items-center rounded-2xl',
                  accentIcon[stream.accent],
                ]" aria-hidden="true">
                  <Icon :icon="stream.iconMdi" class="h-5 w-5" />
                </span>
                <div class="min-w-0 pt-0.5">
                  <h3 class="font-display text-lg font-bold tracking-tight text-slate-900">
                    {{ stream.title }}
                  </h3>
                  <p class="mt-0.5 text-[13px] leading-snug text-slate-500">{{ stream.tagline }}</p>
                  <p class="mt-2 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">
                    {{ stream.visibleSubjects.length }} subjects
                  </p>
                </div>
              </div>
            </div>

            <ul class="flex flex-wrap content-start gap-2" role="list" :aria-label="`${stream.title} subjects`">
              <li v-for="subject in stream.visibleSubjects" :key="subject">
                <button type="button" :class="[
                  'rounded-full border px-3.5 py-2 text-[13px] font-semibold transition duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300/60',
                  selectedSubject === subject
                    ? accentSelected[stream.accent]
                    : accentChip[stream.accent],
                ]" :aria-pressed="selectedSubject === subject" @click="selectSubject(subject)">
                  {{ subject }}
                </button>
              </li>
            </ul>
          </div>
        </article>
      </div>

      <!-- Selection / CTA strip -->
      <div
        class="mt-8 overflow-hidden rounded-[24px] border border-blue-200/70 bg-gradient-to-br from-blue-700 via-blue-600 to-sky-600 px-5 py-5 shadow-[0_18px_40px_-24px_rgba(37,99,235,0.55)] sm:px-7 sm:py-6"
        v-motion :initial="{ opacity: 0, y: 12 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 480 } }">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div class="min-w-0">
            <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-100">
              {{ selectedMeta ? selectedMeta.stream.title : 'Ready to match' }}
            </p>
            <p class="mt-1 font-display text-lg font-bold text-white sm:text-xl">
              <template v-if="selectedMeta">
                {{ subjectsSection.selectedCtaPrefix }}
                <span class="text-sky-100">{{ selectedMeta.subject }}</span>
              </template>
              <template v-else>
                {{ subjectsSection.selectHint }}
              </template>
            </p>
            <p class="mt-1 text-sm text-blue-100/85">{{ subjectsSection.footerNote }}</p>
          </div>
          <a href="#book-demo"
            class="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-blue-700 shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-blue-50">
            {{ subjectsSection.detailCta }}
            <Icon icon="mdi:arrow-right" class="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
