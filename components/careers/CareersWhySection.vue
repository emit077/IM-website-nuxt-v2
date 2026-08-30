<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { meaningSection, whyCareersSection, whyCareerValues } from '~/data/careers'

const accentClasses: Record<
  (typeof whyCareerValues)[number]['accent'],
  { tile: string; bar: string }
> = {
  blue: { tile: 'bg-blue-50 text-blue-600 ring-blue-100', bar: 'bg-gradient-to-r from-blue-500 to-indigo-500' },
  indigo: { tile: 'bg-indigo-50 text-indigo-600 ring-indigo-100', bar: 'bg-gradient-to-r from-indigo-500 to-violet-500' },
  emerald: { tile: 'bg-emerald-50 text-emerald-600 ring-emerald-100', bar: 'bg-gradient-to-r from-emerald-500 to-teal-500' },
  amber: { tile: 'bg-amber-50 text-amber-600 ring-amber-100', bar: 'bg-gradient-to-r from-amber-500 to-orange-500' },
  violet: { tile: 'bg-violet-50 text-violet-600 ring-violet-100', bar: 'bg-gradient-to-r from-violet-500 to-purple-500' },
  teal: { tile: 'bg-teal-50 text-teal-600 ring-teal-100', bar: 'bg-gradient-to-r from-teal-500 to-cyan-500' },
}
</script>

<template>
  <section id="why-indian-mentors" class="relative overflow-hidden bg-white section-py"
    aria-labelledby="why-careers-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-16 top-10 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />

    <div class="container-page relative">
      <CardHeader heading-id="why-careers-heading" :badge="whyCareersSection.kicker" :title="whyCareersSection.title"
        :description="whyCareersSection.description" :classes="whyCareersSection.classes" />

      <ul class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5" role="list">
        <li v-for="(item, i) in whyCareerValues" :key="item.id" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 420, delay: i * 60 } }">
          <article
            class="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-card sm:p-7">
            <span :class="[
              'relative inline-flex h-12 w-12 items-center justify-center rounded-2xl ring-1 transition duration-300 group-hover:scale-105',
              accentClasses[item.accent].tile,
            ]">
              <Icon :icon="item.iconMdi" class="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 class="font-display relative mt-5 text-base font-bold leading-snug text-slate-900 sm:text-lg">
              {{ item.title }}
            </h3>
            <p class="relative mt-2.5 flex-1 text-sm leading-relaxed text-slate-600">
              {{ item.description }}
            </p>
            <div aria-hidden="true"
              :class="['relative mt-6 h-1 w-10 rounded-full transition-all duration-500 group-hover:w-full', accentClasses[item.accent].bar]" />
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>
