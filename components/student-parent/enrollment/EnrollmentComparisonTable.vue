<script setup lang="ts">
import { Icon } from '@iconify/vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import {
  enrollmentPlans,
  enrollmentPlansSection,
  planComparisonRows,
} from '~/data/student-parent'

const freePlan = enrollmentPlans.find((p) => p.id === 'free')!
const premiumPlan = enrollmentPlans.find((p) => p.id === 'premium')!

function isIncluded(value: string) {
  return value === '✓'
}

function isEmpty(value: string) {
  return value === '—'
}

function checkSuffix(value: string) {
  return value.startsWith('✓ ') ? value.slice(2) : null
}
</script>

<template>
  <div class="relative overflow-hidden rounded-[20px] border border-slate-200/90 bg-white shadow-soft" v-motion
    :initial="{ opacity: 0, y: 18 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 520 } }">
    <div class="overflow-x-auto">
      <table class="w-full min-w-[640px] text-left text-sm">
        <thead>
          <tr class="bg-blue-800">
            <th scope="col" class="w-[28%] px-4 py-4 pl-5 text-[13px] font-semibold tracking-wide text-white">
              Feature
            </th>
            <th scope="col" class="w-[36%] px-4 py-4 text-[13px] font-semibold tracking-wide text-white">
              <span class="block">{{ freePlan.name }}</span>
            </th>
            <th scope="col" class="w-[36%] px-4 py-4 pr-5 text-[13px] font-semibold tracking-wide text-white">
              <span class="flex flex-wrap items-center gap-2">
                {{ premiumPlan.name }}
                <span
                  class="inline-flex items-center rounded-md bg-blue-500 px-1.5 py-0 text-[10px] font-bold tracking-wide text-white">
                  {{ premiumPlan.badge }}
                </span>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, i) in planComparisonRows" :key="row.feature" :class="[
            'border-b border-slate-100 transition duration-200 last:border-0',
            i % 2 === 1 ? 'bg-blue-50/60' : 'bg-white hover:bg-slate-50/80',
          ]">
            <td class="px-4 py-3.5 pl-5 font-display text-[15px] font-bold text-slate-900">
              {{ row.feature }}
            </td>
            <td class="px-4 py-3.5 text-slate-600">
              <span v-if="isIncluded(row.free)" class="inline-flex text-emerald-600">
                <IconCheck class="h-4 w-4" />
              </span>
              <span v-else-if="isEmpty(row.free)" class="text-slate-300">—</span>
              <span v-else>{{ row.free }}</span>
            </td>
            <td class="px-4 py-3.5 pr-5">
              <span v-if="isIncluded(row.premium)" class="inline-flex text-blue-700">
                <IconCheck class="h-4 w-4" />
              </span>
              <span v-else-if="checkSuffix(row.premium)"
                class="inline-flex items-center gap-1.5 font-medium text-blue-700">
                <IconCheck class="h-4 w-4 shrink-0" />
                {{ checkSuffix(row.premium) }}
              </span>
              <span v-else class="font-medium text-blue-700">{{ row.premium }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="relative border-t border-slate-100 bg-slate-50/80 px-5 py-4 sm:px-6">
      <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <p class="flex items-start gap-2.5 text-[13px] leading-relaxed text-slate-600 sm:items-center sm:text-sm">
          <Icon icon="mdi:information-outline" class="mt-0.5 h-4 w-4 shrink-0 text-blue-600 sm:mt-0"
            aria-hidden="true" />
          {{ enrollmentPlansSection.footnote }}
        </p>
        <div class="flex flex-col gap-2 sm:flex-row sm:items-center">
          <a :href="freePlan.cta.href"
            class="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-[13px] font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-700">
            {{ freePlan.cta.label }}
          </a>
          <a :href="premiumPlan.cta.href"
            class="inline-flex items-center justify-center rounded-xl bg-blue-700 px-4 py-2.5 text-[13px] font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-800">
            {{ premiumPlan.cta.label }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
