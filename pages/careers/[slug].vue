<script setup lang="ts">
import { computed } from 'vue'
import JobHeroSection from '~/components/careers/job/JobHeroSection.vue'
import JobDetailSections from '~/components/careers/job/JobDetailSections.vue'
import JobStickyCta from '~/components/careers/job/JobStickyCta.vue'
import UiCTASection from '~/components/ui/CTASectionLayout.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import { jobPageCtas } from '~/data/careers'
import {
  careerJobSlugs,
  getCareerJobBySlug,
  getRelatedJobs,
  jobApplyHref,
  jobPath,
  jobResumeHref,
} from '~/data/career-jobs'

const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))
const job = computed(() => getCareerJobBySlug(slug.value))

useSeoMeta({
  title: () => (job.value ? `${job.value.title} — Careers | Indian Mentors` : 'Careers — Indian Mentors'),
  description: () => job.value?.hero.subheadline,
  ogTitle: () => (job.value ? `${job.value.title} — Indian Mentors` : 'Careers — Indian Mentors'),
  ogDescription: () => job.value?.hero.subheadline,
  ogType: 'website',
})

prerenderRoutes(careerJobSlugs.map((jobSlug) => `/careers/${jobSlug}`))

if (!job.value) {
  throw createError({ statusCode: 404, statusMessage: 'Position not found' })
}

const relatedJobs = computed(() => (job.value ? getRelatedJobs(job.value) : []))

const applyCtas = computed(() => {
  if (!job.value) return []
  return [
    { label: jobPageCtas.applyLabel, href: jobApplyHref(job.value), iconMdi: 'mdi:send-outline', primary: true },
    { label: jobPageCtas.resumeLabel, href: jobResumeHref(job.value), iconMdi: 'mdi:file-upload-outline' },
    { label: jobPageCtas.contactLabel, href: jobPageCtas.contactHref, iconMdi: 'mdi:phone-outline' },
  ]
})
</script>

<template>
  <div v-if="job" class="min-h-screen">
    <!-- <JobHeroSection :job="job" /> -->
    <JobDetailSections :job="job" />

    <!-- <section id="apply" class="section-surface-muted section-py-compact" aria-labelledby="job-apply-heading">
      <div class="container-page">
        <div class="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 text-center shadow-soft sm:p-8">
          <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700">Apply for this role</p>
          <h2 id="job-apply-heading" class="font-display mt-2 text-xl font-bold text-slate-900 sm:text-2xl">
            {{ job.title }}
          </h2>
          <p class="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">{{ job.applyIntro }}</p>
          <dl class="mx-auto mt-5 grid max-w-xl grid-cols-1 gap-2 text-sm sm:grid-cols-3">
            <div>
              <dt class="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">Position</dt>
              <dd class="mt-0.5 font-medium text-slate-800">{{ job.title }}</dd>
            </div>
            <div>
              <dt class="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">Location</dt>
              <dd class="mt-0.5 font-medium text-slate-800">{{ job.locationShort }}</dd>
            </div>
            <div>
              <dt class="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">Organisation</dt>
              <dd class="mt-0.5 font-medium text-slate-800">Indian Mentors</dd>
            </div>
          </dl>
        </div>
      </div>
    </section> -->

    <!-- <UiCTASection section-id="job-apply-cta" heading-id="job-final-cta-heading"
      badge-icon-mdi="mdi:briefcase-check-outline" badge="Join Indian Mentors" :title="`Apply for ${job.title}`"
      :description="job.applyIntro"
      supporting="Indian Mentors — Personalised Education. Trusted Tutors. Professional Opportunities."
      :ctas="applyCtas" /> -->

    <!-- <section v-if="relatedJobs.length" id="related-roles" class="bg-white section-py"
      aria-labelledby="related-roles-heading">
      <div class="container-page">
        <div class="flex items-end justify-between gap-4">
          <div>
            <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700">More opportunities</p>
            <h2 id="related-roles-heading" class="font-display mt-2 text-2xl font-bold text-slate-900">Other open roles
            </h2>
          </div>
          <NuxtLink to="/careers#open-positions"
            class="hidden text-sm font-semibold text-blue-700 no-underline hover:text-blue-800 sm:inline">
            View all positions
          </NuxtLink>
        </div>
        <ul class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3" role="list">
          <li v-for="related in relatedJobs" :key="related.slug">
            <NuxtLink :to="jobPath(related.slug)"
              class="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-cream-50/50 p-5 no-underline transition hover:border-blue-200 hover:bg-white hover:shadow-card">
              <span class="text-[11px] font-bold uppercase tracking-wide text-blue-700">{{ related.departmentLabel
                }}</span>
              <span class="mt-2 font-display text-[15px] font-bold text-slate-900">{{ related.title }}</span>
              <span class="mt-1 text-[13px] text-slate-500">{{ related.locationShort }} · {{ related.employmentType
                }}</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section> -->

    <div class="flex justify-center py-10">
      <ActionBtn :label="jobPageCtas.applyLabel" :href="jobApplyHref(job)" variant="primary" class="px-20" />
    </div>
    <JobStickyCta :job="job" />
  </div>
</template>
