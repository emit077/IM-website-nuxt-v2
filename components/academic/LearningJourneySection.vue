<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { learningJourneySection } from '~/data/academic-coverage'

const steps = learningJourneySection.steps
</script>

<template>
  <section id="learning-journey" class="relative scroll-mt-20 overflow-hidden section-surface-white section-py"
    aria-labelledby="learning-journey-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-24 top-12 h-80 w-80 rounded-full bg-blue-100/30 blur-3xl" />

    <div class="container-page relative z-[1]">
      <div class="mx-auto max-w-3xl text-center">
        <CardHeader heading-id="learning-journey-heading" :badge="learningJourneySection.kicker"
          :title="learningJourneySection.title" :description="learningJourneySection.description"
          :classes="learningJourneySection.classes" />
      </div>

      <ol class="relative mx-auto mt-10 max-w-lg sm:mt-12" role="list" aria-label="Academic growth path steps">
        <li v-for="(step, i) in steps" :key="step.title" class="relative flex items-start gap-4 pb-8 last:pb-0 sm:gap-5"
          v-motion :initial="{ opacity: 0, y: 10 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 35 + i * 40, duration: 360 } }">
          <div class="relative flex flex-col items-center">
            <span
              class="relative z-[1] grid h-11 w-11 shrink-0 place-items-center rounded-full bg-blue-600 text-[13px] font-extrabold tabular-nums text-white ring-[3px] ring-white sm:h-12 sm:w-12 sm:text-sm"
              aria-hidden="true">
              {{ String(i + 1).padStart(2, '0') }}
            </span>
            <span v-if="i < steps.length - 1" aria-hidden="true" class="mt-2 w-px flex-1 bg-slate-200" />
          </div>

          <div class="flex min-w-0 items-center gap-3 pt-1.5 sm:gap-3.5 sm:pt-2">
            <span class="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-700 sm:h-10 sm:w-10"
              aria-hidden="true">
              <Icon :icon="step.iconMdi" class="h-[18px] w-[18px] sm:h-5 sm:w-5" />
            </span>
            <h3 class="font-display text-[15px] font-bold leading-snug tracking-tight text-slate-900 sm:text-base">
              {{ step.title }}
            </h3>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>
