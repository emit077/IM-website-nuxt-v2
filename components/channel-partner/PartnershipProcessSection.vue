<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/cardheader.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { processSection, processSteps, type ProcessStep } from '~/data/channel-partner'

const accentClasses: Record<ProcessStep['accent'], { badge: string; tile: string; icon: string }> = {
  violet: { badge: 'bg-violet-600', tile: 'bg-violet-100', icon: 'text-violet-600' },
  blue: { badge: 'bg-blue-600', tile: 'bg-blue-100', icon: 'text-blue-600' },
  emerald: { badge: 'bg-emerald-500', tile: 'bg-emerald-100', icon: 'text-emerald-600' },
  orange: { badge: 'bg-orange-500', tile: 'bg-orange-100', icon: 'text-orange-600' },
  indigo: { badge: 'bg-indigo-600', tile: 'bg-indigo-100', icon: 'text-indigo-600' },
}
</script>

<template>
  <section id="partnership-process" class="relative scroll-mt-20 overflow-hidden bg-white py-14 sm:py-16 lg:py-20"
    aria-labelledby="partnership-process-heading">
    <!-- Soft mesh blobs -->
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-violet-100/50 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl" />

    <div class="container-page relative">
      <CardHeader heading-id="partnership-process-heading" content-class="!px-0 !py-0" :badge="processSection.kicker"
        title='Simple and <span class="text-gradient-brand">structured onboarding</span>'
        :description="processSection.description" />

      <!-- Journey strip: Register → Collaborate → Earn -->
      <div class="mx-auto mt-7 flex flex-wrap items-center justify-center gap-2" v-motion
        :initial="{ opacity: 0, y: 10 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450 } }">
        <template v-for="(stage, i) in processSection.journey" :key="stage">
          <span
            class="rounded-full border border-slate-200/80 bg-white px-4 py-1.5 text-[13px] font-semibold text-slate-700 shadow-soft">
            {{ stage }}
          </span>
          <Icon v-if="i < processSection.journey.length - 1" icon="mdi:arrow-right" class="h-3.5 w-3.5 text-slate-400"
            aria-hidden="true" />
        </template>
      </div>

      <!-- Steps -->
      <ol class="relative mx-auto mt-12 max-w-3xl space-y-6 sm:space-y-7" role="list">
        <!-- Vertical spine -->
        <div aria-hidden="true"
          class="pointer-events-none absolute bottom-8 left-[17px] top-8 w-px bg-gradient-to-b from-violet-200 via-blue-200 to-indigo-200 sm:left-[21px]" />

        <li v-for="(step, i) in processSteps" :key="step.no" class="relative flex items-start gap-3.5 sm:gap-5" v-motion
          :initial="{ opacity: 0, y: 18 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 60, duration: 450 } }">
          <!-- Number badge -->
          <span :class="[
            'relative z-10 mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full text-[12px] font-extrabold text-white shadow-[0_8px_18px_-6px_rgba(15,23,42,0.25)] ring-[3px] ring-white sm:h-11 sm:w-11 sm:text-[13px]',
            accentClasses[step.accent].badge,
          ]">
            {{ step.no }}
          </span>

          <!-- Card -->
          <article
            class="group w-full rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_8px_24px_-14px_rgba(15,23,42,0.18)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-soft sm:p-5">
            <div class="flex items-start gap-4">
              <span :class="[
                'grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-105 sm:h-12 sm:w-12',
                accentClasses[step.accent].tile,
              ]">
                <Icon :icon="step.iconMdi" :class="['h-6 w-6', accentClasses[step.accent].icon]" aria-hidden="true" />
              </span>
              <div class="min-w-0 flex-1">
                <h3 class="font-display text-[15.5px] font-bold text-slate-900 sm:text-[17px]">
                  {{ step.title }}
                </h3>
                <p class="mt-1 text-[13px] leading-relaxed text-slate-500 sm:text-[13.5px]">
                  {{ step.description }}
                </p>
                <ul v-if="step.points" class="mt-3 grid grid-cols-1 gap-x-4 gap-y-1.5 sm:grid-cols-2" role="list">
                  <li v-for="point in step.points" :key="point"
                    class="flex items-start gap-2 text-[12.5px] leading-relaxed text-slate-600 sm:text-[13px]">
                    <IconCheck :class="['mt-0.5 h-3.5 w-3.5 shrink-0', accentClasses[step.accent].icon]" />
                    {{ point }}
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </li>
      </ol>
    </div>
  </section>
</template>
