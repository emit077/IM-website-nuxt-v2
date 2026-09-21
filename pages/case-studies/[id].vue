<script setup lang="ts">
import { computed } from 'vue'
import CaseStudyDetailBody from '~/components/case-studies/CaseStudyDetailBody.vue'
import UiCTASection from '~/components/ui/CTASectionLayout.vue'
import { caseStudiesFinalCta } from '~/data/case-studies'
import { caseStudyPath, excerptText, useWebsiteCaseStudies, useWebsiteCaseStudy } from '~/composables/useWebsiteContent'

const route = useRoute()
const id = computed(() => String(route.params.id || ''))
const { data: study, pending, refresh } = await useWebsiteCaseStudy(id)
const { data: studies } = await useWebsiteCaseStudies()
const related = computed(() =>
  (studies.value ?? []).filter((item) => item.id !== study.value?.id).slice(0, 2),
)
const ctas = [caseStudiesFinalCta.primaryCta, caseStudiesFinalCta.secondaryCta] as const

useSeoMeta({
  title: () => (study.value ? `${study.value.title} — Case Study | Indian Mentors` : 'Case Study — Indian Mentors'),
  description: () => (study.value ? excerptText(study.value.challenge, 160) : 'Indian Mentors case study'),
  ogTitle: () => study.value?.title || 'Indian Mentors Case Study',
  ogDescription: () => (study.value ? excerptText(study.value.challenge, 160) : ''),
  ogType: 'article',
})
</script>

<template>
  <div class="min-h-screen">
    <div v-if="pending" class="container-page section-py" aria-live="polite">
      <div class="mx-auto max-w-4xl space-y-4">
        <div class="h-10 w-2/3 animate-pulse rounded-lg bg-slate-100" />
        <div class="h-40 animate-pulse rounded-2xl bg-slate-100" />
      </div>
      <p class="sr-only">Loading case study</p>
    </div>

    <div v-else-if="!study" class="container-page section-py">
      <div class="mx-auto max-w-xl rounded-2xl border border-dashed border-slate-300 bg-cream-50/60 px-6 py-12 text-center">
        <p class="font-display text-2xl font-bold text-slate-900">Case study not found</p>
        <p class="mt-2 text-sm text-slate-600">This story may have been moved or unpublished.</p>
        <div class="mt-6 flex justify-center gap-3">
          <NuxtLink to="/case-studies"
            class="inline-flex items-center justify-center rounded-xl bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-800">
            Browse case studies
          </NuxtLink>
          <button type="button" class="text-sm font-semibold text-slate-600" @click="refresh()">Retry</button>
        </div>
      </div>
    </div>

    <template v-else>
      <CaseStudyDetailBody :study="study" />

      <section v-if="related.length" class="section-surface-white section-py">
        <div class="container-page">
          <h2 class="text-center font-display text-2xl font-bold tracking-tight text-slate-900">
            More student journeys
          </h2>
          <ul class="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-2">
            <li v-for="item in related" :key="item.id">
              <NuxtLink :to="caseStudyPath(item)"
                class="group block h-full rounded-[1.5rem] border border-slate-200/80 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-card">
                <p class="text-[10px] font-extrabold uppercase tracking-[0.12em] text-emerald-700">{{ item.category }}</p>
                <p class="mt-2 font-display text-[15px] font-bold text-slate-900 group-hover:text-emerald-800">
                  {{ item.title }}
                </p>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </section>

      <UiCTASection heading-id="case-study-cta-heading" :badge="caseStudiesFinalCta.badge"
        :title="caseStudiesFinalCta.title" :description="caseStudiesFinalCta.description"
        :supporting="caseStudiesFinalCta.supporting" :ctas="ctas" />
    </template>
  </div>
</template>
