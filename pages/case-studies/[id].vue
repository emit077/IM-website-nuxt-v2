<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import CaseStudyDetailBody from '~/components/case-studies/CaseStudyDetailBody.vue'
import UiCTASection from '~/components/ui/CTASectionLayout.vue'
import { caseStudiesFinalCta } from '~/data/case-studies'
import type { WebsiteCaseStudy } from '~/types/website-api'
import { caseStudyPath, excerptText, useWebsiteCaseStudies, useWebsiteCaseStudy } from '~/composables/useWebsiteContent'
import { usePublicAsset } from '~/composables/usePublicAsset'

const route = useRoute()
const id = computed(() => String(route.params.id || ''))
const { data: study, pending, refresh } = await useWebsiteCaseStudy(id)
const { data: studies } = await useWebsiteCaseStudies()

function shuffleWithSeed<T>(items: T[], seed: number) {
  const arr = [...items]
  let s = seed || 1
  for (let i = arr.length - 1; i > 0; i -= 1) {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0
    const j = s % (i + 1)
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

const related = computed(() => {
  const current = study.value
  const all = studies.value ?? []
  if (!current) return [] as WebsiteCaseStudy[]
  const others = all.filter((item) => item.id !== current.id)
  const same = others.filter((item) => item.category === current.category)
  const rest = others.filter((item) => item.category !== current.category)
  return [...shuffleWithSeed(same, current.id), ...shuffleWithSeed(rest, current.id * 13 + 5)].slice(0, 3)
})

const ctas = [caseStudiesFinalCta.primaryCta, caseStudiesFinalCta.secondaryCta] as const

function coverSrc(item: WebsiteCaseStudy) {
  return item.image || usePublicAsset('/assets/img/insights/personalised-learning.png')
}

useSeoMeta({
  title: () => (study.value ? `${study.value.title} — Case Study | Indian Mentors` : 'Case Study — Indian Mentors'),
  description: () => (study.value ? excerptText(study.value.challenge, 160) : 'Indian Mentors case study'),
  ogTitle: () => study.value?.title || 'Indian Mentors Case Study',
  ogDescription: () => (study.value ? excerptText(study.value.challenge, 160) : ''),
  ogType: 'article',
  ogImage: () => study.value?.image || undefined,
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
          <div class="mx-auto max-w-2xl text-center">
            <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-600">Keep exploring</p>
            <h2 class="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              More student journeys
            </h2>
          </div>
          <ul class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
            <li v-for="item in related" :key="item.id">
              <NuxtLink :to="caseStudyPath(item)"
                class="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-card">
                <div class="aspect-[16/10] overflow-hidden bg-slate-100">
                  <img :src="coverSrc(item)" :alt="item.title"
                    class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" loading="lazy" />
                </div>
                <div class="flex flex-1 flex-col p-5">
                  <div class="flex items-center justify-between gap-3">
                    <span
                      class="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-emerald-700 ring-1 ring-emerald-100">
                      <Icon icon="mdi:chart-line" class="h-3.5 w-3.5" aria-hidden="true" />
                      {{ item.category }}
                    </span>
                    <span class="text-[12px] font-medium text-slate-400">{{ item.read_time }} min</span>
                  </div>
                  <h3
                    class="mt-3 font-display text-[15px] font-bold leading-snug text-slate-900 transition group-hover:text-emerald-800">
                    {{ item.title }}
                  </h3>
                  <p class="mt-2 line-clamp-2 flex-1 text-[13px] leading-relaxed text-slate-500">
                    {{ excerptText(item.challenge, 110) }}
                  </p>
                  <span class="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-emerald-700">
                    View story
                    <Icon icon="mdi:arrow-right"
                      class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
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
