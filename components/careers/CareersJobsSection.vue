<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { Icon } from '@iconify/vue'
import { jobsSection, jobFilterOptions } from '~/data/careers'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import JobApplyModal from '~/components/careers/job/JobApplyModal.vue'
import JobSummaryCard from '~/components/careers/job/JobSummaryCard.vue'
import {
  formatCareerLocation,
  useCareerCities,
  useCareerJobs,
} from '~/composables/useCareerContent'
import type { CareerApplicationType, CareerJobListItem } from '~/types/career-api'

const searchQuery = ref('')
const department = ref('all')
const city = ref('all')
const employment = ref('all')
const workMode = ref('all')

const applyOpen = ref(false)
const applyJob = ref<CareerJobListItem | null>(null)
const applicationType = ref<CareerApplicationType>('Apply Now')

const jobFilters = computed(() => ({
  department: department.value === 'all' ? undefined : department.value,
  city: city.value === 'all' ? undefined : city.value,
  employment_type: employment.value === 'all' ? undefined : employment.value,
  work_model: workMode.value === 'all' ? undefined : workMode.value,
}))

const { data: cities } = await useCareerCities()
const { data: jobsResult, pending, refresh } = await useCareerJobs(jobFilters)
const jobs = computed(() => jobsResult.value?.items ?? [])
const jobsFailed = computed(() => Boolean(jobsResult.value?.failed))

const knownDepartments = ref<string[]>([])

watch(
  jobs,
  (list) => {
    const next = new Set([
      ...knownDepartments.value,
      ...(list ?? []).map((job) => job.department).filter(Boolean),
    ])
    knownDepartments.value = [...next]
  },
  { immediate: true },
)

const departmentOptions = computed(() => {
  const extras = knownDepartments.value
    .filter((name) => !jobFilterOptions.departments.some((option) => option.value === name))
    .map((name) => ({ value: name, label: name }))
  return [...jobFilterOptions.departments, ...extras]
})

const filteredJobs = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  const list = jobs.value ?? []
  if (!query) return list

  return list.filter((job) => {
    const haystack = [
      job.position,
      job.department,
      job.headline,
      job.intro,
      job.industry,
      job.experience,
      job.primary_employment_type,
      job.work_model,
      formatCareerLocation(job.city),
    ]
      .join(' ')
      .toLowerCase()
    return haystack.includes(query)
  })
})

const hasActiveFilters = computed(
  () =>
    searchQuery.value.trim() !== '' ||
    department.value !== 'all' ||
    city.value !== 'all' ||
    employment.value !== 'all' ||
    workMode.value !== 'all',
)

function resetFilters() {
  searchQuery.value = ''
  department.value = 'all'
  city.value = 'all'
  employment.value = 'all'
  workMode.value = 'all'
}

function openApply(job: CareerJobListItem, type: CareerApplicationType = 'Apply Now') {
  if (!job.is_open) return
  applyJob.value = job
  applicationType.value = type
  applyOpen.value = true
}

const selectClass =
  'w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-[13px] text-slate-800 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100'
</script>

<template>
  <section id="open-positions" class="relative scroll-mt-24 overflow-hidden bg-white section-py"
    aria-labelledby="open-positions-heading">
    <div class="container-page relative">
      <div class="max-w-6xl">
        <CardHeader heading-id="open-positions-heading" :badge="jobsSection.kicker" :title="jobsSection.title"
          :description="jobsSection.description" :classes="jobsSection.classes" align="left" />
      </div>

      <div class="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
        <div class="relative sm:col-span-2 lg:col-span-1">
          <Icon icon="mdi:magnify"
            class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            aria-hidden="true" />
          <input v-model="searchQuery" type="search" :placeholder="jobsSection.searchPlaceholder"
            class="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-[13px] text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
            aria-label="Search open positions" />
        </div>
        <select v-model="department" :class="selectClass" aria-label="Filter by department">
          <option v-for="option in departmentOptions" :key="option.value" :value="option.value">
            {{ option.label }}
          </option>
        </select>
        <select v-model="city" :class="selectClass" aria-label="Filter by location">
          <option value="all">All Locations</option>
          <option v-for="option in cities" :key="option.id" :value="String(option.id)">
            {{ formatCareerLocation(option) }}
          </option>
        </select>
        <select v-model="employment" :class="selectClass" aria-label="Filter by employment type">
          <option v-for="option in jobFilterOptions.employment" :key="option.value" :value="option.value">
            {{ option.label }}
          </option>
        </select>
        <select v-model="workMode" :class="selectClass" aria-label="Filter by work mode">
          <option v-for="option in jobFilterOptions.workMode" :key="option.value" :value="option.value">
            {{ option.label }}
          </option>
        </select>
      </div>

      <button v-if="hasActiveFilters" type="button"
        class="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 transition hover:text-blue-800"
        @click="resetFilters">
        <Icon icon="mdi:filter-off-outline" class="h-4 w-4" aria-hidden="true" />
        Clear search &amp; filters
      </button>

      <div v-if="pending" class="mt-8 space-y-4" aria-live="polite">
        <div v-for="n in 3" :key="n" class="h-40 animate-pulse rounded-2xl border border-slate-200 bg-slate-50" />
        <p class="sr-only">Loading open positions</p>
      </div>

      <div v-else-if="jobsFailed" class="mt-8 rounded-2xl border border-dashed border-rose-200 bg-rose-50/60 px-6 py-12 text-center">
        <p class="font-display text-lg font-bold text-slate-900">Unable to load openings</p>
        <p class="mx-auto mt-2 max-w-md text-sm text-slate-600">Please try again in a moment.</p>
        <button
          type="button"
          class="mt-5 inline-flex items-center justify-center rounded-xl bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
          @click="refresh()"
        >
          Retry
        </button>
      </div>

      <ul v-else-if="filteredJobs.length" class="mt-8 space-y-4" role="list">
        <li v-for="(job, i) in filteredJobs" :key="job.slug" v-motion :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 20 + i * 40, duration: 360 } }">
          <JobSummaryCard :job="job" linked @apply="openApply(job)" />
        </li>
      </ul>

      <div v-else class="mt-8 rounded-2xl border border-dashed border-slate-300 bg-cream-50/60 px-6 py-12 text-center">
        <p class="font-display text-lg font-bold text-slate-900">{{ jobsSection.emptyTitle }}</p>
        <p class="mx-auto mt-2 max-w-md text-sm text-slate-600">{{ jobsSection.emptyDescription }}</p>
        <a href="#talent-network" class="mt-5 inline-flex text-sm font-semibold text-blue-700 hover:text-blue-800">
          Send us your resume
        </a>
      </div>
    </div>

    <JobApplyModal
      v-if="applyJob"
      v-model="applyOpen"
      :slug="applyJob.slug"
      :position="applyJob.position"
      :application-type="applicationType"
      :is-open="applyJob.is_open"
    />
  </section>
</template>
