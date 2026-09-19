<script setup lang="ts">
import { computed, ref } from 'vue'
import JobDetailSections from '~/components/careers/job/JobDetailSections.vue'
import JobStickyCta from '~/components/careers/job/JobStickyCta.vue'
import JobApplyModal from '~/components/careers/job/JobApplyModal.vue'
import { jobPageCtas } from '~/data/careers'
import FaqSectionMini from '~/components/ui/shared/FaqSectionMini.vue'
import { useCareerJob } from '~/composables/useCareerContent'
import type { CareerApplicationType } from '~/types/career-api'

const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))
const { data: jobData, pending, refresh } = await useCareerJob(slug)
const job = computed(() => jobData.value?.item ?? null)
const jobFailed = computed(() => Boolean(jobData.value?.failed))

const applyOpen = ref(false)
const applicationType = ref<CareerApplicationType>('Apply Now')
const toast = useToast()

useSeoMeta({
  title: () => (job.value ? `${job.value.position} — Careers | Indian Mentors` : 'Careers — Indian Mentors'),
  description: () => job.value?.intro || job.value?.headline,
  ogTitle: () => (job.value ? `${job.value.position} — Indian Mentors` : 'Careers — Indian Mentors'),
  ogDescription: () => job.value?.intro || job.value?.headline,
  ogType: 'website',
})

function openApply(type: CareerApplicationType) {
  if (!job.value?.is_open) {
    toast.error('This job opening is no longer accepting applications', { title: 'Applications closed' })
    return
  }
  applicationType.value = type
  applyOpen.value = true
}
</script>

<template>
  <div class="min-h-screen">
    <div v-if="pending" class="container-page section-py" aria-live="polite">
      <div class="mx-auto max-w-4xl space-y-4">
        <div class="h-10 w-2/3 animate-pulse rounded-lg bg-slate-100" />
        <div class="h-24 animate-pulse rounded-2xl bg-slate-100" />
        <div class="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div v-for="n in 3" :key="n" class="h-20 animate-pulse rounded-2xl bg-slate-100" />
        </div>
      </div>
      <p class="sr-only">Loading this role</p>
    </div>

    <div v-else-if="jobFailed" class="container-page section-py">
      <div
        class="mx-auto max-w-xl rounded-2xl border border-dashed border-rose-200 bg-rose-50/60 px-6 py-12 text-center">
        <p class="font-display text-2xl font-bold text-slate-900">Unable to load this role</p>
        <p class="mt-2 text-sm text-slate-600">Please try again in a moment.</p>
        <button type="button"
          class="mt-6 inline-flex items-center justify-center rounded-xl bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-800"
          @click="refresh()">
          Retry
        </button>
      </div>
    </div>

    <div v-else-if="!job" class="container-page section-py">
      <div
        class="mx-auto max-w-xl rounded-2xl border border-dashed border-slate-300 bg-cream-50/60 px-6 py-12 text-center">
        <p class="font-display text-2xl font-bold text-slate-900">Job not found</p>
        <p class="mt-2 text-sm text-slate-600">
          This position is no longer listed, or the link may be incorrect.
        </p>
        <NuxtLink to="/careers#open-positions"
          class="mt-6 inline-flex items-center justify-center rounded-xl bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-800">
          View open positions
        </NuxtLink>
      </div>
    </div>

    <template v-else>
      <JobDetailSections :job="job" @apply="openApply" />
      <FaqSectionMini category="Career" />

      <div class="container-page py-10">
        <div class="mx-auto max-w-5xl text-center">
          <p v-if="job.apply_intro" class="mx-auto mb-6  text-sm leading-relaxed text-slate-600 sm:text-base">
            {{ job.apply_intro }}
          </p>
          <button v-if="job.is_open" type="button" class="btn-primary ripple group px-20"
            @click="openApply('Apply Now')">
            {{ jobPageCtas.applyLabel }}
          </button>
          <p v-else class="rounded-xl bg-slate-100 px-5 py-2.5 text-sm font-semibold text-slate-500">
            This job opening is no longer accepting applications
          </p>
        </div>
      </div>

      <JobStickyCta :job="job" @apply="openApply" />

      <JobApplyModal v-model="applyOpen" :slug="job.slug" :position="job.position" :application-type="applicationType"
        :is-open="job.is_open" />
    </template>
  </div>
</template>
