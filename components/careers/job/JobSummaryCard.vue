<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { jobsSection } from '~/data/careers'
import { jobPath } from '~/data/career-jobs'
import { careerKeywords, formatCareerLocation } from '~/composables/useCareerContent'
import type { CareerJobListItem } from '~/types/career-api'

const props = withDefaults(
  defineProps<{
    job: CareerJobListItem
    linked?: boolean
    heading?: 'h1' | 'h3'
    headingId?: string
  }>(),
  {
    linked: false,
    heading: 'h3',
  },
)

const emit = defineEmits<{
  apply: []
}>()

const location = computed(() => formatCareerLocation(props.job.city))
const tags = computed(() => [props.job.work_model, props.job.industry].filter(Boolean))
const keywords = computed(() => careerKeywords(props.job.keywords))
const alltags = computed(() => [...tags.value, ...keywords.value])

console.log(keywords.value, 'keywords');


const showDetailpage = (slug: string) => {
  router.push(jobPath(slug))
}
const router = useRouter()
</script>

<template>
  <article class="group relative rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"
    :class="linked && 'transition duration-300 hover:border-blue-200 hover:shadow-[0_12px_32px_-18px_rgba(15,23,42,0.2)]'">
    <NuxtLink v-if="linked" :to="jobPath(job.slug)" class="absolute inset-0 z-[1] rounded-2xl"
      :aria-label="`View ${job.position} details`" />

    <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <component :is="heading" :id="headingId"
        class="font-display text-lg font-bold leading-snug text-slate-900 sm:text-xl"
        :class="linked && 'group-hover:text-blue-800'">
        {{ job.position }}
      </component>
      <div class="flex flex-wrap items-center gap-2 sm:justify-end sm:pt-0.5">
        <span v-if="job.department" class="rounded-full bg-blue-50 px-3 py-1 text-[12px] font-semibold text-blue-800">
          {{ job.department }}
        </span>
        <span v-if="job.employment_types" v-for="employment_type in job.employment_types" :key="employment_type"
          class="rounded-full bg-slate-100 px-3 py-1 text-[12px] font-semibold text-slate-600">
          {{ employment_type }}
        </span>
      </div>
    </div>

    <p v-if="job.intro || job.headline" class="mt-3 max-w-3xl text-[14px] leading-relaxed text-slate-600">
      {{ job.intro || job.headline }}
    </p>

    <!-- <ul v-if="keywords.length" class="mt-3 flex flex-wrap gap-2" role="list" aria-label="Keywords">
      <li v-for="keyword in keywords" :key="keyword"
        class="rounded-full border border-blue-100 bg-blue-50/70 px-2.5 py-0.5 text-[12px] font-medium text-blue-800">
        {{ keyword }}
      </li>
    </ul> -->

    <div class="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-slate-500">
      <span v-if="location" class="inline-flex items-center gap-1.5">
        <Icon icon="mdi:map-marker-outline" class="h-4 w-4 text-slate-400" aria-hidden="true" />
        {{ location }}
      </span>
      <span v-if="job.experience" class="inline-flex items-center gap-1.5">
        <Icon icon="mdi:clock-outline" class="h-4 w-4 text-slate-400" aria-hidden="true" />
        {{ job.experience }}
      </span>
      <span v-if="job.work_model" class="inline-flex items-center gap-1.5">
        <Icon icon="mdi:office-building-outline" class="h-4 w-4 text-slate-400" aria-hidden="true" />
        {{ job.work_model }}
      </span>
    </div>

    <div class="mt-4 flex flex-wrap items-end justify-between gap-3">
      <ul v-if="alltags.length" class="flex flex-wrap gap-2" role="list">
        <li v-for="tag in alltags" :key="tag"
          class="rounded-full bg-lime-300 px-3 py-1 text-[12px] font-semibold text-slate-900">
          {{ tag }}
        </li>
      </ul>
      <button v-if="linked" type="button"
        class="relative z-10 ml-auto inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl bg-blue-700 px-4 py-2 text-[13px] font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-800"
        :aria-label="`Apply for ${job.position}`" @click.stop="showDetailpage(job.slug)">
        {{ jobsSection.applyLabel }}
        <Icon icon="mdi:arrow-right" class="h-4 w-4" aria-hidden="true" />
      </button>
      <span v-else
        class="relative z-10 ml-auto inline-flex shrink-0 items-center justify-center rounded-xl bg-slate-100 px-4 py-2 text-[13px] font-semibold text-slate-500">
        Applications closed
      </span>
    </div>
  </article>
</template>
