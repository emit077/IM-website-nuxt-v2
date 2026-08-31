<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { whyChooseReasons, whyCommitment, whyInstitutionsSection } from '~/data/institutions'

const accentClasses: Record<
  (typeof whyChooseReasons)[number]['accent'],
  { tile: string; bar: string }
> = {
  blue: { tile: 'bg-blue-50 text-blue-600 ring-blue-100', bar: 'bg-gradient-to-r from-blue-500 to-indigo-500' },
  emerald: { tile: 'bg-emerald-50 text-emerald-600 ring-emerald-100', bar: 'bg-gradient-to-r from-emerald-500 to-teal-500' },
  amber: { tile: 'bg-amber-50 text-amber-600 ring-amber-100', bar: 'bg-gradient-to-r from-amber-500 to-orange-500' },
  violet: { tile: 'bg-violet-50 text-violet-600 ring-violet-100', bar: 'bg-gradient-to-r from-violet-500 to-purple-500' },
  indigo: { tile: 'bg-indigo-50 text-indigo-600 ring-indigo-100', bar: 'bg-gradient-to-r from-indigo-500 to-violet-500' },
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
        <li
          v-for="(item, i) in whyChooseReasons"
          :key="item.id"
          :class="i === whyChooseReasons.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''"
          v-motion
          :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 420, delay: i * 60 } }"
        >
          <article
            class="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-card sm:p-7"
          >
            <span
              :class="[
                'relative inline-flex h-12 w-12 items-center justify-center rounded-2xl ring-1 transition duration-300 group-hover:scale-105',
                accentClasses[item.accent].tile,
              ]"
            >
              <Icon :icon="item.iconMdi" class="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 class="font-display relative mt-5 text-base font-bold leading-snug text-slate-900 sm:text-lg">
              {{ item.title }}
            </h3>
            <p class="relative mt-2.5 text-sm leading-relaxed text-slate-600">{{ item.description }}</p>
            <ul class="relative mt-4 flex-1 space-y-2" role="list">
              <li v-for="point in item.points" :key="point" class="flex items-start gap-2.5 text-[13px] text-slate-700">
                <IconCheck class="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                {{ point }}
              </li>
            </ul>
            <div
              aria-hidden="true"
              :class="['relative mt-6 h-1 w-10 rounded-full transition-all duration-500 group-hover:w-full', accentClasses[item.accent].bar]"
            />
          </article>
        </li>
      </ul>

      <div
        class="mt-10 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-6 text-white shadow-[0_24px_60px_-24px_rgba(29,78,216,0.5)] sm:p-8"
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      >
        <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-amber-200">{{ whyCommitment.title }}</p>
        <ul class="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5" role="list">
          <li v-for="item in whyCommitment.items" :key="item" class="flex items-start gap-2.5 text-[13.5px] font-medium">
            <span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/15 text-amber-300"
              aria-hidden="true">
              <IconCheck class="h-3 w-3" />
            </span>
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
