<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'
import { CAREERS_EMAIL, careerResumeMailto, jobsSection, jobFilterOptions } from '~/data/careers'
import { careerJobs, jobPath, type CareerJob } from '~/data/career-jobs'

const searchQuery = ref('')
const department = ref('all')
const experience = ref('all')
const employment = ref('all')
const workMode = ref('all')

const filteredJobs = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()

  return careerJobs.filter((job) => {
    if (department.value !== 'all' && job.departmentId !== department.value) return false
    if (experience.value !== 'all' && !job.experienceFilters.includes(experience.value as CareerJob['experienceFilters'][number])) return false
    if (employment.value !== 'all' && job.employmentFilter !== employment.value) return false
    if (workMode.value !== 'all' && job.workModeFilter !== workMode.value) return false
    if (!query) return true

    const haystack = [job.title, job.departmentLabel, job.location, job.employmentType, job.workMode, job.hero.subheadline, ...job.tags]
      .join(' ')
      .toLowerCase()
    return haystack.includes(query)
  })
})

const hasActiveFilters = computed(
  () =>
    searchQuery.value.trim() !== '' ||
    department.value !== 'all' ||
    experience.value !== 'all' ||
    employment.value !== 'all' ||
    workMode.value !== 'all',
)

function resetFilters() {
  searchQuery.value = ''
  department.value = 'all'
  experience.value = 'all'
  employment.value = 'all'
  workMode.value = 'all'
}

function jobLocation(job: CareerJob) {
  return job.workModeFilter === 'field' ? 'Field-based, Across India' : 'Bhilai, Chhattisgarh'
}

function jobExperience(job: CareerJob) {
  return job.experienceLabel.replace(' preferred', '').replace('Years', 'years')
}

const selectClass =
  'w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-[13px] text-slate-800 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100'
</script>

<template>
  <section id="open-positions" class="relative scroll-mt-24 overflow-hidden bg-white section-py" aria-labelledby="open-positions-heading">
    <div class="container-page relative">
      <div class="max-w-3xl">
        <p class="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-800">{{ jobsSection.kicker }}</p>
        <h2 id="open-positions-heading" class="font-display mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {{ jobsSection.title }}
        </h2>
        <p class="mt-4 text-[15px] leading-relaxed text-slate-600">
          {{ jobsSection.locationLine }}
          {{ jobsSection.applyLine }}
          <a :href="careerResumeMailto()" class="font-semibold text-blue-700 underline decoration-blue-200 underline-offset-2 hover:text-blue-800">
            {{ CAREERS_EMAIL }}
          </a>
        </p>
      </div>

      <div class="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
        <div class="relative sm:col-span-2 lg:col-span-1">
          <Icon
            icon="mdi:magnify"
            class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            aria-hidden="true"
          />
          <input
            v-model="searchQuery"
            type="search"
            :placeholder="jobsSection.searchPlaceholder"
            class="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-[13px] text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
            aria-label="Search open positions"
          />
        </div>
        <select v-model="department" :class="selectClass" aria-label="Filter by department">
          <option v-for="option in jobFilterOptions.departments" :key="option.value" :value="option.value">
            {{ option.label }}
          </option>
        </select>
        <select v-model="experience" :class="selectClass" aria-label="Filter by experience level">
          <option v-for="option in jobFilterOptions.experience" :key="option.value" :value="option.value">
            {{ option.label }}
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

      <button
        v-if="hasActiveFilters"
        type="button"
        class="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 transition hover:text-blue-800"
        @click="resetFilters"
      >
        <Icon icon="mdi:filter-off-outline" class="h-4 w-4" aria-hidden="true" />
        Clear search &amp; filters
      </button>

      <ul v-if="filteredJobs.length" class="mt-8 space-y-4" role="list">
        <li
          v-for="(job, i) in filteredJobs"
          :key="job.slug"
          v-motion
          :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 20 + i * 40, duration: 360 } }"
        >
          <NuxtLink
            :to="jobPath(job.slug)"
            class="group block rounded-2xl border border-slate-200 bg-white p-5 no-underline transition duration-300 hover:border-blue-200 hover:shadow-[0_12px_32px_-18px_rgba(15,23,42,0.2)] sm:p-6"
          >
            <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <h3 class="font-display text-lg font-bold leading-snug text-slate-900 group-hover:text-blue-800 sm:text-xl">
                {{ job.title }}
              </h3>
              <div class="flex flex-wrap items-center gap-2 sm:justify-end sm:pt-0.5">
                <span class="rounded-full bg-blue-50 px-3 py-1 text-[12px] font-semibold text-blue-800">
                  {{ job.departmentLabel }}
                </span>
                <span class="rounded-full bg-slate-100 px-3 py-1 text-[12px] font-semibold text-slate-600">
                  {{ job.employmentType }}
                </span>
              </div>
            </div>

            <p class="mt-3 max-w-3xl text-[14px] leading-relaxed text-slate-600">
              {{ job.hero.subheadline }}
            </p>

            <div class="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-slate-500">
              <span class="inline-flex items-center gap-1.5">
                <Icon icon="mdi:map-marker-outline" class="h-4 w-4 text-slate-400" aria-hidden="true" />
                {{ jobLocation(job) }}
              </span>
              <span class="inline-flex items-center gap-1.5">
                <Icon icon="mdi:clock-outline" class="h-4 w-4 text-slate-400" aria-hidden="true" />
                {{ jobExperience(job) }}
              </span>
            </div>

            <ul v-if="job.tags.length" class="mt-4 flex flex-wrap gap-2" role="list">
              <li
                v-for="tag in job.tags"
                :key="tag"
                class="rounded-full bg-lime-300 px-3 py-1 text-[12px] font-semibold text-slate-900"
              >
                {{ tag }}
              </li>
            </ul>
          </NuxtLink>
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
  </section>
</template>
