<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import {
  insightContentTypes,
  insightGrades,
  insightSubjects,
  insightTopics,
  insightTypeMeta,
  insightsCatalog,
  insightsSearchSection,
  type InsightContentType,
} from '~/data/insights'

const route = useRoute()
const router = useRouter()

const searchQuery = ref(typeof route.query.q === 'string' ? route.query.q : '')
const contentType = ref(typeof route.query.type === 'string' ? route.query.type : 'all')
const gradeLevel = ref(typeof route.query.grade === 'string' ? route.query.grade : 'all')
const subject = ref(typeof route.query.subject === 'string' ? route.query.subject : 'all')
const topic = ref(typeof route.query.topic === 'string' ? route.query.topic : 'all')

watch(
  () => route.query,
  (query) => {
    searchQuery.value = typeof query.q === 'string' ? query.q : ''
    contentType.value = typeof query.type === 'string' ? query.type : 'all'
    gradeLevel.value = typeof query.grade === 'string' ? query.grade : 'all'
    subject.value = typeof query.subject === 'string' ? query.subject : 'all'
    topic.value = typeof query.topic === 'string' ? query.topic : 'all'
  },
)

const hasActiveFilters = computed(
  () =>
    Boolean(searchQuery.value.trim()) ||
    contentType.value !== 'all' ||
    gradeLevel.value !== 'all' ||
    subject.value !== 'all' ||
    topic.value !== 'all',
)

const filteredItems = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()

  return insightsCatalog.filter((item) => {
    const matchesQuery =
      !q ||
      item.title.toLowerCase().includes(q) ||
      item.summary.toLowerCase().includes(q) ||
      insightTypeMeta[item.type].label.toLowerCase().includes(q)

    const matchesType = contentType.value === 'all' || item.type === contentType.value
    const matchesGrade =
      gradeLevel.value === 'all' || item.grade === gradeLevel.value || item.grade === 'all-levels'
    const matchesSubject = subject.value === 'all' || item.subject === subject.value
    const matchesTopic = topic.value === 'all' || item.topic === topic.value

    return matchesQuery && matchesType && matchesGrade && matchesSubject && matchesTopic
  })
})

function resetFilters() {
  searchQuery.value = ''
  contentType.value = 'all'
  gradeLevel.value = 'all'
  subject.value = 'all'
  topic.value = 'all'
  router.replace({ path: '/insights', hash: '#explore' })
}

function typeLabel(type: InsightContentType) {
  return insightTypeMeta[type].label
}

function typeIcon(type: InsightContentType) {
  return insightTypeMeta[type].iconMdi
}
</script>

<template>
  <section id="explore" class="relative scroll-mt-28 overflow-hidden section-surface-muted section-py"
    aria-labelledby="insights-search-heading">
    <div class="container-page">
      <CardHeader heading-id="insights-search-heading" :badge="insightsSearchSection.kicker"
        :title="insightsSearchSection.title" :description="insightsSearchSection.description"
        :classes="`${insightsSearchSection.classes} mx-auto max-w-3xl`" />

      <div class="mx-auto mt-8 max-w-5xl rounded-[1.75rem] border border-slate-200/80 bg-white p-4 shadow-soft sm:p-6"
        v-motion :initial="{ opacity: 0, y: 12 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 420 } }">
        <div class="relative">
          <Icon icon="mdi:magnify"
            class="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
            aria-hidden="true" />
          <input v-model="searchQuery" type="search" :placeholder="insightsSearchSection.placeholder"
            class="w-full rounded-2xl border border-slate-200/90 bg-cream-50 py-3.5 pl-12 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
            aria-label="Search articles, case studies, or topics" />
        </div>

        <div class="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <label class="block">
            <span class="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">Content type</span>
            <select v-model="contentType"
              class="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100">
              <option v-for="option in insightContentTypes" :key="option.id" :value="option.id">
                {{ option.label }}
              </option>
            </select>
          </label>

          <label class="block">
            <span class="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">Grade level</span>
            <select v-model="gradeLevel"
              class="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100">
              <option v-for="option in insightGrades" :key="option.id" :value="option.id">
                {{ option.label }}
              </option>
            </select>
          </label>

          <label class="block">
            <span class="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">Subject</span>
            <select v-model="subject"
              class="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100">
              <option v-for="option in insightSubjects" :key="option.id" :value="option.id">
                {{ option.label }}
              </option>
            </select>
          </label>

          <label class="block">
            <span class="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">Topic</span>
            <select v-model="topic"
              class="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100">
              <option v-for="option in insightTopics" :key="option.id" :value="option.id">
                {{ option.label }}
              </option>
            </select>
          </label>
        </div>

        <div class="mt-4 flex flex-wrap items-center justify-between gap-3">
          <p class="text-sm font-medium text-slate-500">
            Showing <span class="font-semibold text-slate-800">{{ filteredItems.length }}</span>
            {{ filteredItems.length === 1 ? 'insight' : 'insights' }}
          </p>
          <button v-if="hasActiveFilters" type="button"
            class="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 transition hover:text-blue-700"
            @click="resetFilters">
            <Icon icon="mdi:filter-off-outline" class="h-4 w-4" aria-hidden="true" />
            Clear search &amp; filters
          </button>
        </div>
      </div>

      <ul v-if="filteredItems.length" class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
        <li v-for="(item, i) in filteredItems" :key="item.id" v-motion :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 20 + i * 35, duration: 360 } }">
          <a :href="item.href"
            class="group flex h-full flex-col rounded-[1.5rem] border border-slate-200/80 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-card">
            <div class="flex items-center justify-between gap-3">
              <span
                class="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-blue-700 ring-1 ring-blue-100">
                <Icon :icon="typeIcon(item.type)" class="h-3.5 w-3.5" aria-hidden="true" />
                {{ typeLabel(item.type) }}
              </span>
              <span v-if="item.featured"
                class="rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-amber-700 ring-1 ring-amber-100">
                Featured
              </span>
            </div>
            <h3 class="mt-4 font-display text-base font-bold leading-snug text-slate-900 group-hover:text-blue-700">
              {{ item.title }}
            </h3>
            <p class="mt-2 flex-1 text-[13.5px] leading-relaxed text-slate-500">
              {{ item.summary }}
            </p>
            <span class="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600">
              View insight
              <Icon icon="mdi:arrow-right" class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true" />
            </span>
          </a>
        </li>
      </ul>

      <div v-else
        class="mt-8 rounded-[1.5rem] border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
        <span class="mx-auto grid h-12 w-12 place-items-center rounded-full bg-blue-50 text-blue-600 ring-1 ring-blue-100"
          aria-hidden="true">
          <Icon icon="mdi:magnify-close" class="h-6 w-6" />
        </span>
        <p class="mt-4 font-display text-lg font-bold text-slate-900">No matching insights</p>
        <p class="mt-2 text-sm text-slate-500">Try another topic, or clear the filters to browse everything.</p>
        <button type="button"
          class="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700"
          @click="resetFilters">
          Reset filters
        </button>
      </div>
    </div>
  </section>
</template>
