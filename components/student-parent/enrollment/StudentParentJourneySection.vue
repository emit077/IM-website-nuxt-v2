<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { enrollmentHow } from '~/data/student-parent'
</script>

<template>
  <section id="enrollment-journey" class="relative scroll-mt-28 overflow-hidden bg-white section-py"
    aria-labelledby="journey-heading">
    <div class="container-page relative">
      <CardHeader heading-id="journey-heading" :badge="enrollmentHow.badge" :title="enrollmentHow.title"
        :classes="enrollmentHow.classes" />

      <ol class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
        <li v-for="(step, i) in enrollmentHow.steps" :key="step.no" class="relative" v-motion
          :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + i * 40, duration: 400 } }">
          <article
            class="flex h-full flex-col rounded-[1.5rem] border border-slate-200/80 bg-cream-50/50 p-5 shadow-soft sm:p-6">
            <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">
              {{ step.no }} — {{ step.title }}
            </p>
            <p class="mt-3 text-[13.5px] leading-relaxed text-slate-600">{{ step.description }}</p>
            <p v-if="step.detail" class="mt-3 text-[12px] font-semibold text-slate-500">{{ step.detail }}</p>
          </article>
        </li>
      </ol>

      <div
        class="mt-8 overflow-hidden rounded-[1.5rem] bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 px-5 py-5 text-center shadow-[0_20px_50px_-24px_rgba(29,78,216,0.5)] sm:px-8 sm:py-6"
        v-motion :initial="{ opacity: 0, y: 12 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450 } }">
        <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-100/80">
          {{ enrollmentHow.premiumLabel }}
        </p>
        <div class="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
          <template v-for="(label, i) in enrollmentHow.premiumFlow" :key="label">
            <span class="text-[13px] font-semibold text-white sm:text-sm">{{ label }}</span>
            <Icon v-if="i < enrollmentHow.premiumFlow.length - 1" icon="mdi:arrow-right"
              class="h-4 w-4 text-amber-300" aria-hidden="true" />
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
