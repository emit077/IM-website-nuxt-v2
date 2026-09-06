<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import {
  commitmentSection,
  differenceSection,
  whyChooseReasons,
  whyInstitutionsSection,
} from '~/data/institutions'

const accentClasses: Record<string, { tile: string; bar: string }> = {
  blue: { tile: 'bg-blue-50 text-blue-600 ring-blue-100', bar: 'bg-gradient-to-r from-blue-500 to-indigo-500' },
  emerald: { tile: 'bg-emerald-50 text-emerald-600 ring-emerald-100', bar: 'bg-gradient-to-r from-emerald-500 to-teal-500' },
  amber: { tile: 'bg-amber-50 text-amber-600 ring-amber-100', bar: 'bg-gradient-to-r from-amber-500 to-orange-500' },
  violet: { tile: 'bg-violet-50 text-violet-600 ring-violet-100', bar: 'bg-gradient-to-r from-violet-500 to-purple-500' },
  indigo: { tile: 'bg-indigo-50 text-indigo-600 ring-indigo-100', bar: 'bg-gradient-to-r from-indigo-500 to-violet-500' },
  teal: { tile: 'bg-teal-50 text-teal-600 ring-teal-100', bar: 'bg-gradient-to-r from-teal-500 to-cyan-500' },
}
</script>

<template>
  <section id="why-institutions" class="relative scroll-mt-24 overflow-hidden section-surface-muted section-py"
    aria-labelledby="why-institutions-heading">
    <div class="container-page relative">
      <CardHeader heading-id="why-institutions-heading" :badge="whyInstitutionsSection.badge"
        :title="whyInstitutionsSection.title" :description="whyInstitutionsSection.description"
        :classes="whyInstitutionsSection.classes" />

      <ul class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5" role="list">
        <li v-for="(item, i) in whyChooseReasons" :key="item.id" v-motion :initial="{ opacity: 0, y: 14 }"
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
            <p class="relative mt-2.5 line-clamp-3 min-h-[4.875em] flex-1 text-sm leading-relaxed text-slate-600">
              {{ item.description }}
            </p>
            <div aria-hidden="true"
              :class="['relative mt-6 h-1 w-10 rounded-full transition-all duration-500', accentClasses[item.accent].bar]" />
          </article>
        </li>
      </ul>

      <!-- <div
        class="mt-12 overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-soft sm:p-8"
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      >
        <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">{{ differenceSection.badge }}</p>
        <h3 class="font-display mt-2 text-xl font-bold text-slate-900 sm:text-2xl" v-html="differenceSection.title" />
        <p class="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">{{ differenceSection.description }}</p>
        <div class="mt-6 flex flex-wrap items-center gap-2">
          <template v-for="(step, i) in differenceSection.flow" :key="step">
            <span class="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[12px] font-semibold text-blue-800">
              {{ step }}
            </span>
            <Icon
              v-if="i < differenceSection.flow.length - 1"
              icon="mdi:arrow-right"
              class="hidden h-4 w-4 text-blue-300 sm:block"
              aria-hidden="true"
            />
          </template>
</div>
<p class="mt-5 text-sm font-medium text-slate-700">{{ differenceSection.objective }}</p>
</div> -->

      <div
        class="mt-6 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-6 text-white shadow-[0_24px_60px_-24px_rgba(29,78,216,0.5)] sm:p-8"
        v-motion :initial="{ opacity: 0, y: 16 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }">
        <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-amber-200">{{ commitmentSection.badge }}</p>
        <h3 class="font-display mt-2 text-xl font-bold sm:text-2xl" v-html="commitmentSection.title" />
        <p class="mt-3 max-w-3xl text-sm leading-relaxed text-blue-100">{{ commitmentSection.description }}</p>
        <ul class="mt-5 flex flex-wrap gap-2" role="list">
          <li v-for="item in commitmentSection.focus" :key="item"
            class="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[12.5px] font-semibold">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
