<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { caseStudiesListSection } from '~/data/case-studies'
import { caseStudyPath, excerptText, useWebsiteCaseStudies } from '~/composables/useWebsiteContent'

const route = useRoute()
const router = useRouter()
const selectClass =
  'w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100'

const searchQuery = ref(typeof route.query.q === 'string' ? route.query.q : '')
const grade = ref(typeof route.query.grade === 'string' ? route.query.grade : 'all')
const board = ref(typeof route.query.board === 'string' ? route.query.board : 'all')
const subject = ref(typeof route.query.subject === 'string' ? route.query.subject : 'all')
const category = ref(typeof route.query.category === 'string' ? route.query.category : 'all')

watch(
  () => route.query,
  (query) => {
    searchQuery.value = typeof query.q === 'string' ? query.q : ''
    grade.value = typeof query.grade === 'string' ? query.grade : 'all'
    board.value = typeof query.board === 'string' ? query.board : 'all'
    subject.value = typeof query.subject === 'string' ? query.subject : 'all'
    category.value = typeof query.category === 'string' ? query.category : 'all'
  },
)

const { data: allStudies } = await useWebsiteCaseStudies({}, { cacheKey: 'website-case-studies-facets' })
const apiFilters = computed(() => ({
  grade: grade.value === 'all' ? undefined : grade.value,
  board: board.value === 'all' ? undefined : board.value,
  subject: subject.value === 'all' ? undefined : subject.value,
  category: category.value === 'all' ? undefined : category.value,
}))
const { data: studies, pending, refresh } = await useWebsiteCaseStudies(apiFilters, {
  cacheKey: 'website-case-studies-filtered',
})

const facetSource = computed(() => (allStudies.value?.length ? allStudies.value : studies.value) ?? [])
const grades = computed(() => uniqueValues(facetSource.value.map((item) => item.student_profile?.grade)))
const boards = computed(() => uniqueValues(facetSource.value.map((item) => item.student_profile?.board)))
const subjects = computed(() => uniqueValues(facetSource.value.map((item) => item.student_profile?.subject)))
const categories = computed(() => uniqueValues(facetSource.value.map((item) => item.category)))

const filteredStudies = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  const list = studies.value ?? []
  if (!query) return list
  return list.filter((item) =>
    [
      item.title,
      item.challenge,
      item.category,
      item.testimonial,
      item.student_profile?.grade,
      item.student_profile?.board,
      item.student_profile?.subject,
    ]
      .join(' ')
      .toLowerCase()
      .includes(query),
  )
})

const hasActiveFilters = computed(
  () =>
    Boolean(searchQuery.value.trim()) ||
    grade.value !== 'all' ||
    board.value !== 'all' ||
    subject.value !== 'all' ||
    category.value !== 'all',
)

function uniqueValues(values: Array<string | null | undefined>) {
  return [...new Set(values.filter((value): value is string => Boolean(value)))].sort((a, b) => a.localeCompare(b))
}

function syncQuery() {
  router.replace({
    path: '/case-studies',
    query: {
      ...(grade.value !== 'all' ? { grade: grade.value } : {}),
      ...(board.value !== 'all' ? { board: board.value } : {}),
      ...(subject.value !== 'all' ? { subject: subject.value } : {}),
      ...(category.value !== 'all' ? { category: category.value } : {}),
      ...(searchQuery.value.trim() ? { q: searchQuery.value.trim() } : {}),
    },
    hash: '#case-study-list',
  })
}

function resetFilters() {
  searchQuery.value = ''
  grade.value = 'all'
  board.value = 'all'
  subject.value = 'all'
  category.value = 'all'
  router.replace({ path: '/case-studies', hash: '#case-study-list' })
}

watch([grade, board, subject, category], syncQuery)
</script>

<template>
  <section id="case-study-list" class="relative scroll-mt-28 overflow-hidden section-surface-muted section-py"
    aria-labelledby="case-study-list-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-emerald-200/25 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-20 bottom-8 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl" />

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
          <li class="text-slate-700">Case Studies</li>
        </ol>
      </nav>

      <CardHeader heading-id="case-study-list-heading" :badge="caseStudiesListSection.kicker"
        :title="caseStudiesListSection.title" :description="caseStudiesListSection.description"
        :classes="`${caseStudiesListSection.classes} mx-auto max-w-3xl`" />

      <div class="mx-auto mt-8 max-w-5xl rounded-[1.75rem] p-4 sm:p-6" v-motion :initial="{ opacity: 0, y: 12 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 420 } }">
        <div class="relative">
          <Icon icon="mdi:magnify"
            class="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
            aria-hidden="true" />
          <input v-model="searchQuery" type="search" :placeholder="caseStudiesListSection.searchPlaceholder"
            class="w-full rounded-2xl border border-slate-200/90 bg-white py-3.5 pl-12 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
            aria-label="Search case studies" />
        </div>

      </div>

      <div v-if="pending" class="mt-8 grid gap-4 lg:grid-cols-3" aria-live="polite">
        <div v-for="n in 3" :key="n" class="h-64 animate-pulse rounded-[1.5rem] bg-white/80" />
        <p class="sr-only">Loading case studies</p>
      </div>

      <ul v-else-if="filteredStudies.length" class="mt-8 grid gap-4 lg:grid-cols-3" role="list">
        <li v-for="(study, i) in filteredStudies" :key="study.id" v-motion :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 20 + i * 50, duration: 360 } }">
          <NuxtLink :to="caseStudyPath(study)"
            class="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-card">
            <div class="aspect-[16/10] overflow-hidden bg-slate-100">
              <img :src="study.image || usePublicAsset('/assets/img/insights/personalised-learning.png')"
                :alt="study.title" width="640" height="400"
                class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" loading="lazy" />
            </div>
            <div class="flex flex-1 flex-col p-5 sm:p-6">
              <div class="flex items-center justify-between gap-3">
                <span
                  class="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-emerald-700 ring-1 ring-emerald-100">
                  <Icon icon="mdi:chart-line" class="h-3.5 w-3.5" aria-hidden="true" />
                  {{ study.category }}
                </span>
                <span class="text-[12px] font-medium text-slate-400">{{ study.read_time }} min</span>
              </div>
              <h3
                class="mt-4 font-display text-base font-bold leading-snug text-slate-900 group-hover:text-emerald-800">
                {{ study.title }}
              </h3>
              <p v-if="study.student_profile" class="mt-2 text-[12.5px] font-medium text-slate-500">
                {{ study.student_profile.grade }} · {{ study.student_profile.board }} · {{ study.student_profile.subject
                }}
              </p>
              <p class="mt-2 flex-1 text-[13.5px] leading-relaxed text-slate-500">
                {{ excerptText(study.challenge, 140) }}
              </p>
              <p v-if="study.outcome?.[0]" class="mt-4 text-[13px] font-semibold text-emerald-800">
                {{ study.outcome[0] }}
              </p>
              <span class="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-emerald-700">
                Read case study
                <Icon icon="mdi:arrow-right" class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true" />
              </span>
            </div>
          </NuxtLink>
        </li>
      </ul>

      <div v-else class="mt-8 rounded-[1.5rem] border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
        <span
          class="mx-auto grid h-12 w-12 place-items-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100"
          aria-hidden="true">
          <Icon icon="mdi:magnify-close" class="h-6 w-6" />
        </span>
        <p class="mt-4 font-display text-lg font-bold text-slate-900">{{ caseStudiesListSection.emptyTitle }}</p>
        <p class="mt-2 text-sm text-slate-500">{{ caseStudiesListSection.emptyDescription }}</p>
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
