<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { hiringSteps, hiringProcessSection, type HiringStep } from '~/data/tutors'

const accentClasses: Record<HiringStep['accent'], { badge: string; tile: string; icon: string }> = {
  violet: { badge: 'bg-violet-600', tile: 'bg-violet-100', icon: 'text-violet-600' },
  blue: { badge: 'bg-blue-600', tile: 'bg-blue-100', icon: 'text-blue-600' },
  emerald: { badge: 'bg-emerald-500', tile: 'bg-emerald-100', icon: 'text-emerald-600' },
  orange: { badge: 'bg-orange-500', tile: 'bg-orange-100', icon: 'text-orange-600' },
  indigo: { badge: 'bg-indigo-600', tile: 'bg-indigo-100', icon: 'text-indigo-600' },
}
</script>

<template>
  <section id="hiring-process" class="relative scroll-mt-20 overflow-hidden bg-white section-py"
    aria-labelledby="hiring-process-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-violet-100/50 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl" />

    <div class="container-page relative">
      <CardHeader heading-id="hiring-process-heading" :badge="hiringProcessSection.badge"
        :title="hiringProcessSection.title" :description="hiringProcessSection.description"
        :classes="hiringProcessSection.classes" />
      <div class="relative mx-auto mt-12 max-w-5xl">
        <div aria-hidden="true"
          class="pointer-events-none absolute left-0 right-0 top-[22px] hidden h-px bg-gradient-to-r from-violet-200 via-blue-300 to-indigo-200 lg:block" />

        <ol class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4" role="list">
          <li v-for="(step, i) in hiringSteps" :key="step.no" class="relative flex gap-4 lg:flex-col lg:gap-0" v-motion
            :initial="{ opacity: 0, y: 18 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 60 + i * 90, duration: 450 } }">
            <div v-if="i < hiringSteps.length - 1" aria-hidden="true"
              class="absolute left-[21px] top-12 bottom-[-24px] w-px bg-gradient-to-b from-blue-200 to-transparent lg:hidden" />

            <span :class="[
              'relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full text-[12px] font-extrabold text-white shadow-[0_8px_18px_-6px_rgba(15,23,42,0.3)] ring-4 ring-white',
              accentClasses[step.accent].badge,
            ]">
              {{ step.no }}
            </span>

            <div
              class="group mt-0 flex-1 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-card lg:mt-5 lg:p-4">
              <span :class="['grid h-10 w-10 place-items-center rounded-xl', accentClasses[step.accent].tile]"
                aria-hidden="true">
                <Icon :icon="step.iconMdi" :class="['h-5 w-5', accentClasses[step.accent].icon]" />
              </span>
              <h3 class="font-display mt-3 text-[14.5px] font-bold leading-snug text-slate-900">{{ step.title }}</h3>
              <p class="mt-1.5 text-[12.5px] leading-relaxed text-slate-500">{{ step.description }}</p>
            </div>
          </li>
        </ol>
      </div>

      <div class="mt-10 text-center" v-motion :initial="{ opacity: 0, y: 10 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450, delay: 200 } }">
        <a href="#tutor-register"
          class="inline-flex items-center gap-2 rounded-2xl border border-blue-200 bg-blue-50/70 px-6 py-3 text-sm font-semibold text-blue-700 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:text-white">
          <Icon icon="mdi:clipboard-check-outline" class="h-4 w-4" aria-hidden="true" />
          Start the Hiring Process
        </a>
      </div>
    </div>
  </section>
</template>
