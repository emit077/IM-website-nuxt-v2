<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/cardheader.vue'

type Reason = {
  id: string
  title: string
  tagline: string
  iconMdi: string
  gradient: string
  iconTone: string
  span?: string
}

const reasons: Reason[] = [
  {
    id: 'verified',
    title: 'Verified Tutors',
    tagline: 'Screened & background-checked',
    iconMdi: 'mdi:shield-check',
    gradient: 'from-emerald-500/20 via-emerald-400/5 to-white',
    iconTone: 'bg-emerald-500 text-white shadow-emerald-500/30',
    span: 'sm:col-span-2',
  },
  {
    id: 'personalised',
    title: 'Personalised Plans',
    tagline: 'Built around your goals',
    iconMdi: 'mdi:target',
    gradient: 'from-violet-500/20 via-violet-400/5 to-white',
    iconTone: 'bg-violet-500 text-white shadow-violet-500/30',
    span: 'sm:col-span-2',

  },
  {
    id: 'curriculum',
    title: 'Board-Aligned',
    tagline: 'Official syllabus coverage',
    iconMdi: 'mdi:book-open-page-variant',
    gradient: 'from-blue-500/20 via-blue-400/5 to-white',
    iconTone: 'bg-blue-600 text-white shadow-blue-600/30',
  },
  {
    id: 'monitoring',
    title: 'Progress Tracking',
    tagline: 'Reports parents can trust',
    iconMdi: 'mdi:chart-line',
    gradient: 'from-amber-500/20 via-amber-400/5 to-white',
    iconTone: 'bg-amber-500 text-white shadow-amber-500/30',
  },
  {
    id: 'flexible',
    title: 'Flexible Schedule',
    tagline: 'Weekday or weekend',
    iconMdi: 'mdi:clock-outline',
    gradient: 'from-sky-500/20 via-sky-400/5 to-white',
    iconTone: 'bg-sky-500 text-white shadow-sky-500/30',
  },
  {
    id: 'tech',
    title: 'Smart Dashboard',
    tagline: 'ERP-powered transparency',
    iconMdi: 'mdi:monitor-dashboard',
    gradient: 'from-indigo-500/20 via-indigo-400/5 to-white',
    iconTone: 'bg-indigo-600 text-white shadow-indigo-600/30',
  },
]
</script>

<template>
  <section id="why-choose" class="relative overflow-hidden bg-[#f8fafc] py-12 sm:py-14 lg:py-16"
    aria-labelledby="why-choose-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-blue-200/25 blur-3xl" />

    <div class="container-page relative z-[1]">
      <CardHeader heading-id="why-choose-heading" content-class="!px-0 !py-0" badge="Why Indian Mentors"
        title='Built for <span class="text-gradient-brand">trust</span>, not just tutoring' />

      <!-- Bento mosaic -->
      <div class="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:gap-5">
        <a v-for="(item, i) in reasons" :key="item.id" href="#book-demo" :class="[
          'group relative flex min-h-[140px] flex-col justify-between overflow-hidden rounded-[1.35rem] border border-slate-200/70 bg-gradient-to-br p-4 shadow-soft transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_-16px_rgba(37,99,235,0.2)] sm:min-h-[160px] sm:p-5',
          item.gradient,
          item.span ?? '',
        ]" v-motion :initial="{ opacity: 0, scale: 0.96 }"
          :visibleOnce="{ opacity: 1, scale: 1, transition: { delay: 60 + i * 50, duration: 450 } }">
          <!-- Decorative giant icon -->
          <Icon :icon="item.iconMdi"
            class="pointer-events-none absolute -bottom-4 -right-4 h-24 w-24 text-slate-900/[0.04] transition duration-500 group-hover:scale-110 group-hover:text-blue-600/[0.07] sm:h-28 sm:w-28"
            aria-hidden="true" />

          <span :class="[
            'relative inline-flex h-11 w-11 items-center justify-center rounded-2xl shadow-lg ring-2 ring-white/80 transition duration-300 group-hover:scale-110',
            item.iconTone,
          ]">
            <Icon :icon="item.iconMdi" class="h-5 w-5" aria-hidden="true" />
          </span>

          <div class="relative mt-auto pt-6">
            <h3 class="font-display text-base font-bold text-slate-900 sm:text-lg">{{ item.title }}</h3>
            <p
              class="mt-1 max-h-0 overflow-hidden text-sm text-slate-600 opacity-0 transition-all duration-300 group-hover:max-h-12 group-hover:opacity-100 sm:max-h-none sm:opacity-100">
              {{ item.tagline }}
            </p>
          </div>

          <!-- Verified card extra visual -->
          <div v-if="item.id === 'verified'" class="relative mt-4 flex flex-wrap gap-1.5" aria-hidden="true">
            <span v-for="badge in ['ID ✓', 'Quals ✓', 'Demo ✓', 'Safe ✓']" :key="badge"
              class="rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-bold text-emerald-700 shadow-sm ring-1 ring-emerald-100">
              {{ badge }}
            </span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
