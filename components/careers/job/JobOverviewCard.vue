<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { jobsSection } from '~/data/careers'
import { formatCareerLocation } from '~/composables/useCareerContent'
import type { CareerJobListItem } from '~/types/career-api'

const props = defineProps<{
  job: CareerJobListItem
}>()

const emit = defineEmits<{
  apply: []
}>()

const location = computed(() => formatCareerLocation(props.job.city))
const tags = computed(() => [props.job.work_model, props.job.industry].filter(Boolean))
</script>

<template>
  <article class="">
    <div class="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-slate-900 justify-end">
      <span v-if="location" class="inline-flex items-center gap-1.5">
        <Icon icon="mdi:map-marker-outline" class="h-4 w-4 text-slate-600" aria-hidden="true" />
        {{ location }}
      </span>
      <span v-if="job.experience" class="inline-flex items-center gap-1.5">
        <Icon icon="mdi:clock-outline" class="h-4 w-4 text-slate-600" aria-hidden="true" />
        {{ job.experience }}
      </span>
      <span v-if="job.work_model" class="inline-flex items-center gap-1.5">
        <Icon icon="mdi:office-building-outline" class="h-4 w-4 text-slate-600" aria-hidden="true" />
        {{ job.work_model }}
      </span>
    </div>

    <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <div class="flex flex-wrap items-center gap-2 sm:justify-end">
        <span v-if="job.department" class="rounded-full bg-blue-50 px-3 py-1 text-[12px] font-semibold text-blue-800">
          {{ job.department }}
        </span>
        <span v-if="job.primary_employment_type"
          class="rounded-full bg-slate-100 px-3 py-1 text-[12px] font-semibold text-slate-600">
          {{ job.primary_employment_type }}
        </span>
      </div>
    </div>

    <div class="mt-4 flex flex-wrap items-end justify-between gap-3">

      <ul v-if="tags.length" class="flex flex-wrap gap-2" role="list">
        <li v-for="tag in tags" :key="tag"
          class="rounded-full bg-lime-300 px-3 py-1 text-[12px] font-semibold text-slate-900">
          {{ tag }}
        </li>
      </ul>
      <button v-if="job.is_open" type="button"
        class="ml-auto inline-flex items-center justify-center gap-1.5 rounded-xl bg-blue-700 px-4 py-2 text-[13px] font-semibold text-white transition hover:bg-blue-800"
        @click="emit('apply')">
        {{ jobsSection.applyLabel }}
        <Icon icon="mdi:arrow-right" class="h-4 w-4" aria-hidden="true" />
      </button>
      <span v-else class="ml-auto rounded-xl bg-slate-100 px-4 py-2 text-[13px] font-semibold text-slate-500">
        Applications closed
      </span>
    </div>
  </article>
</template>
