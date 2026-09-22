<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import type { WebsiteCaseStudy } from '~/types/website-api'

const props = defineProps<{
  study: WebsiteCaseStudy
}>()

function formatScore(value?: string | null) {
  const raw = value?.trim()
  if (!raw) return '—'
  if (/[%+]/.test(raw)) return raw
  if (/^\d+(\.\d+)?$/.test(raw)) return `${raw}%`
  return raw
}

const snapshot = computed(() => {
  const profile = props.study.student_profile
  if (!profile) return []
  return [
    { label: 'Grade', value: profile.grade, icon: 'mdi:school-outline' },
    { label: 'Board', value: profile.board, icon: 'mdi:certificate-outline' },
    { label: 'Subject', value: profile.subject, icon: 'mdi:book-open-page-variant-outline' },
    {
      label: 'Starting score',
      value: formatScore(profile.initial_score),
      icon: 'mdi:chart-timeline-variant',
      accent: true,
    },
  ]
})
</script>

<template>
  <article class="relative overflow-hidden section-surface-muted section-py">
    <div class="container-page">
      <div class="mx-auto max-w-3xl">
        <nav aria-label="Breadcrumb">
          <ol
            class="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            <li>
              <NuxtLink to="/" class="transition hover:text-slate-700">Home</NuxtLink>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <NuxtLink to="/insights" class="transition hover:text-slate-700">Insights</NuxtLink>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <NuxtLink to="/case-studies" class="transition hover:text-slate-700">Case Studies</NuxtLink>
            </li>
          </ol>
        </nav>

        <p class="mt-8 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
          {{ study.category }}
        </p>

        <h1 class="heading-display text-[1.85rem] leading-[1.12] sm:text-4xl">
          {{ study.title }}
        </h1>

        <p class="mt-4 text-sm font-medium text-slate-500">
          {{ study.read_time }} min read
          <span v-if="study.author?.name"> · {{ study.author.name }}</span>
        </p>

        <div v-if="study.image"
          class="mt-8 overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white shadow-soft">
          <img :src="study.image" :alt="study.title" class="w-full object-cover" />
        </div>

        <section v-if="snapshot.length" class="mt-8" aria-label="Student snapshot">
          <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">Student snapshot</p>
          <dl class="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div v-for="item in snapshot" :key="item.label" :class="[
              'rounded-2xl border px-4 py-4',
              item.accent
                ? 'border-emerald-200 bg-emerald-50/80'
                : 'border-slate-200/80 bg-white shadow-soft',
            ]">
              <dt class="flex items-center gap-2">
                <span :class="[
                  'grid h-8 w-8 shrink-0 place-items-center rounded-lg',
                  item.accent ? 'bg-white text-emerald-700' : 'bg-slate-50 text-slate-500',
                ]" aria-hidden="true">
                  <Icon :icon="item.icon" class="h-4 w-4" />
                </span>
                <span class="text-[11px] font-bold uppercase leading-tight tracking-[0.12em]"
                  :class="item.accent ? 'text-emerald-700' : 'text-slate-400'">
                  {{ item.label }}
                </span>
              </dt>
              <dd class="mt-3 font-display text-[17px] font-bold leading-snug tracking-tight"
                :class="item.accent ? 'text-emerald-900' : 'text-slate-900'">
                {{ item.value }}
              </dd>
            </div>
          </dl>
        </section>

        <section class="mt-12">
          <h2 class="font-display text-2xl font-bold tracking-tight text-slate-900">The challenge</h2>
          <p class="mt-4 text-[15.5px] leading-relaxed text-slate-600">{{ study.challenge }}</p>
        </section>

        <div class="mt-12 grid gap-10 lg:grid-cols-2">
          <section>
            <h2 class="font-display text-xl font-bold tracking-tight text-slate-900">The approach</h2>
            <ul class="mt-5 space-y-3">
              <li v-for="item in study.approach" :key="item"
                class="flex gap-2.5 text-[15px] leading-relaxed text-slate-600">
                <Icon icon="mdi:check-circle-outline" class="mt-0.5 h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </section>
          <section>
            <h2 class="font-display text-xl font-bold tracking-tight text-slate-900">The outcome</h2>
            <ul class="mt-5 space-y-3">
              <li v-for="item in study.outcome" :key="item"
                class="flex gap-2.5 text-[15px] leading-relaxed text-slate-600">
                <Icon icon="mdi:trending-up" class="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-hidden="true" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </section>
        </div>

        <blockquote v-if="study.testimonial" class="mt-12 border-l-2 border-blue-600 pl-5">
          <p class="font-display text-xl font-semibold leading-snug text-slate-800">
            &ldquo;{{ study.testimonial }}&rdquo;
          </p>
        </blockquote>
      </div>
    </div>
  </article>
</template>
