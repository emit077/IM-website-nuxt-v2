<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { hiringProcessOutcome, hiringSteps, institutionsProcessSection } from '~/data/institutions'
</script>

<template>
  <section id="hiring-process" class="relative overflow-hidden bg-white section-py"
    aria-labelledby="process-heading">
    <div aria-hidden="true" class="absolute inset-0 -z-10 bg-mesh-light opacity-60" />

    <div class="container-page">
      <CardHeader heading-id="process-heading" :badge="institutionsProcessSection.badge"
        :title="institutionsProcessSection.title" :description="institutionsProcessSection.description"
        :classes="institutionsProcessSection.classes" />

      <ol class="relative mx-auto mt-12 max-w-3xl space-y-0" role="list">
        <li v-for="(step, i) in hiringSteps" :key="step.step" class="relative flex gap-5 sm:gap-6" v-motion
          :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 60 + i * 80, duration: 450 } }">
          <div class="flex flex-col items-center">
            <span
              class="z-10 grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-600 text-white shadow-cta ring-4 ring-blue-100">
              <Icon :icon="step.iconMdi" class="h-5 w-5" aria-hidden="true" />
            </span>
            <span v-if="i < hiringSteps.length - 1" aria-hidden="true"
              class="-mt-1 w-px flex-1 bg-gradient-to-b from-blue-200 to-blue-100" />
          </div>

          <div :class="['flex-1', i < hiringSteps.length - 1 ? 'pb-8 sm:pb-10' : '']">
            <div
              class="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-card sm:p-6">
              <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">
                Step {{ step.step }}
              </p>
              <h3 class="font-display mt-1.5 text-base font-bold text-slate-900 sm:text-lg">
                {{ step.title }}
              </h3>
              <p class="mt-1.5 text-[13px] leading-relaxed text-slate-600 sm:text-sm">
                {{ step.description }}
              </p>
            </div>
          </div>
        </li>
      </ol>

      <p class="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-slate-600 sm:text-base" v-motion
        :initial="{ opacity: 0 }" :visibleOnce="{ opacity: 1, transition: { duration: 500 } }">
        {{ hiringProcessOutcome }}
      </p>
    </div>
  </section>
</template>
