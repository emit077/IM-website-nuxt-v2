<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { processSection, processSteps, type ProcessStep } from '~/data/channel-partner'

const accentClasses: Record<
  ProcessStep['accent'],
  { badge: string; tile: string; icon: string; line: string; ring: string }
> = {
  violet: {
    badge: 'bg-violet-600',
    tile: 'bg-violet-100',
    icon: 'text-violet-600',
    line: 'from-violet-300 to-violet-500',
    ring: 'ring-violet-100',
  },
  blue: {
    badge: 'bg-blue-600',
    tile: 'bg-blue-100',
    icon: 'text-blue-600',
    line: 'from-blue-300 to-blue-500',
    ring: 'ring-blue-100',
  },
  emerald: {
    badge: 'bg-emerald-500',
    tile: 'bg-emerald-100',
    icon: 'text-emerald-600',
    line: 'from-emerald-300 to-emerald-500',
    ring: 'ring-emerald-100',
  },
  orange: {
    badge: 'bg-orange-500',
    tile: 'bg-orange-100',
    icon: 'text-orange-600',
    line: 'from-orange-300 to-orange-500',
    ring: 'ring-orange-100',
  },
  indigo: {
    badge: 'bg-indigo-600',
    tile: 'bg-indigo-100',
    icon: 'text-indigo-600',
    line: 'from-indigo-300 to-indigo-500',
    ring: 'ring-indigo-100',
  },
}
</script>

<template>
  <section id="partnership-process" class="relative scroll-mt-20 overflow-hidden section-surface-muted section-py"
    aria-labelledby="partnership-process-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-violet-100/50 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl" />

    <div class="container-page relative">
      <CardHeader heading-id="partnership-process-heading" :badge="processSection.kicker" :title="processSection.title"
        :description="processSection.description" :classes="processSection.classes" />

      <!-- Desktop: horizontal stepper -->
      <div class="relative mx-auto mt-12 hidden max-w-6xl lg:block">
        <div aria-hidden="true"
          class="pointer-events-none absolute left-[10%] right-[10%] top-[26px] h-0.5 rounded-full bg-gradient-to-r from-violet-200 via-blue-300 to-indigo-200" />

        <ol class="grid grid-cols-5 items-stretch gap-4" role="list">
          <li v-for="(step, i) in processSteps" :key="step.no"
            class="relative flex min-w-0 flex-col items-center text-center" v-motion :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 50 + i * 70, duration: 450 } }">
            <span :class="[
              'relative z-10 grid h-[52px] w-[52px] shrink-0 place-items-center rounded-full text-[13px] font-extrabold text-white shadow-[0_8px_20px_-6px_rgba(15,23,42,0.35)] ring-4 ring-white',
              accentClasses[step.accent].badge,
            ]">
              {{ step.no }}
            </span>

            <article
              class="group mt-5 flex h-full w-full flex-col rounded-2xl border border-slate-200/80 bg-white p-4 text-left shadow-[0_8px_24px_-14px_rgba(15,23,42,0.14)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-soft">
              <span :class="[
                'grid h-10 w-10 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-105',
                accentClasses[step.accent].tile,
              ]" aria-hidden="true">
                <Icon :icon="step.iconMdi" :class="['h-5 w-5', accentClasses[step.accent].icon]" />
              </span>

              <div :class="['mt-3 h-1 w-full rounded-full bg-gradient-to-r opacity-80', accentClasses[step.accent].line]"
                aria-hidden="true" />

              <h3 class="mt-3 font-display text-[14px] font-bold leading-snug text-slate-900">
                {{ step.title }}
              </h3>
              <p class="mt-1.5 flex-1 text-[12.5px] leading-relaxed text-slate-500">
                {{ step.description }}
              </p>

              <ul v-if="step.points" class="mt-3 space-y-1.5 border-t border-slate-100 pt-3" role="list">
                <li v-for="point in step.points" :key="point"
                  class="flex items-start gap-1.5 text-[11.5px] leading-relaxed text-slate-600">
                  <IconCheck :class="`mt-0.5 h-3 w-3 shrink-0 ${accentClasses[step.accent].icon}`" />
                  {{ point }}
                </li>
              </ul>
            </article>
          </li>
        </ol>
      </div>

      <!-- Mobile & tablet: vertical timeline -->
      <ol class="relative mx-auto mt-10 max-w-2xl space-y-0 lg:hidden" role="list">
        <li v-for="(step, i) in processSteps" :key="`mobile-${step.no}`" class="relative flex gap-4 sm:gap-5"
          v-motion :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 60, duration: 450 } }">
          <div class="flex flex-col items-center">
            <span :class="[
              'z-10 grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-[12px] font-extrabold text-white shadow-[0_8px_18px_-6px_rgba(15,23,42,0.3)] ring-4',
              accentClasses[step.accent].badge,
              accentClasses[step.accent].ring,
            ]">
              {{ step.no }}
            </span>
            <span v-if="i < processSteps.length - 1" aria-hidden="true"
              class="-mt-1 w-px flex-1 bg-gradient-to-b from-blue-200 to-blue-100" />
          </div>

          <div :class="['min-w-0 flex-1', i < processSteps.length - 1 ? 'pb-8 sm:pb-10' : '']">
            <article
              class="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_8px_24px_-14px_rgba(15,23,42,0.12)] transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-soft sm:p-6">
              <div class="flex items-start justify-between gap-3">
                <div>
                  <p :class="['text-[11px] font-bold uppercase tracking-[0.14em]', accentClasses[step.accent].icon]">
                    Step {{ step.no.replace(/^0/, '') }}
                  </p>
                  <h3 class="font-display mt-1 text-base font-bold text-slate-900 sm:text-lg">
                    {{ step.title }}
                  </h3>
                </div>
                <span :class="['grid h-10 w-10 shrink-0 place-items-center rounded-xl', accentClasses[step.accent].tile]"
                  aria-hidden="true">
                  <Icon :icon="step.iconMdi" :class="['h-5 w-5', accentClasses[step.accent].icon]" />
                </span>
              </div>

              <p class="mt-2 text-[13px] leading-relaxed text-slate-600 sm:text-sm">
                {{ step.description }}
              </p>

              <ul v-if="step.points" class="mt-4 space-y-2 border-t border-slate-100 pt-4" role="list">
                <li v-for="point in step.points" :key="point"
                  class="flex items-start gap-2 text-[12.5px] leading-relaxed text-slate-600 sm:text-[13px]">
                  <IconCheck :class="`mt-0.5 h-3.5 w-3.5 shrink-0 ${accentClasses[step.accent].icon}`" />
                  {{ point }}
                </li>
              </ul>
            </article>
          </div>
        </li>
      </ol>

      <div class="mt-10 text-center" v-motion :initial="{ opacity: 0, y: 10 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450, delay: 200 } }">
        <a href="#partner-register"
          class="inline-flex items-center gap-2 rounded-2xl border border-blue-200 bg-blue-50/70 px-6 py-3 text-sm font-semibold text-blue-700 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:text-white">
          <Icon icon="mdi:account-plus-outline" class="h-4 w-4" aria-hidden="true" />
          Start Your Partnership Application
        </a>
      </div>
    </div>
  </section>
</template>
