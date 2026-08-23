<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import {
  planComparisonSection,
  subscriptionComparisonRows,
  subscriptionPlans,
} from '~/data/student-parent'

const goldPlan = subscriptionPlans.find((p) => p.id === 'gold')!
const diamondPlan = subscriptionPlans.find((p) => p.id === 'diamond')!
const platinumPlan = subscriptionPlans.find((p) => p.id === 'platinum')!
</script>

<template>
  <section id="plan-comparison" class="relative scroll-mt-36 bg-white section-py lg:scroll-mt-44"
    aria-labelledby="plan-comparison-heading">
    <div class="container-page">
      <CardHeader heading-id="plan-comparison-heading" :badge="planComparisonSection.badge"
        :title="planComparisonSection.title" :description="planComparisonSection.description"
        :classes="planComparisonSection.classes" />

      <div class="relative mt-10 overflow-hidden rounded-[20px] border border-slate-200/90 bg-white shadow-soft"
        v-motion :initial="{ opacity: 0, y: 18 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 520 } }">
        <div class="overflow-x-auto">
          <table class="w-full min-w-[760px] text-left text-sm">
            <thead>
              <tr class="bg-blue-800">
                <th scope="col" class="w-[22%] px-4 py-4 pl-5 text-[13px] font-semibold tracking-wide text-white">
                  Feature
                </th>
                <th scope="col" class="w-[26%] px-4 py-4 text-[13px] font-semibold tracking-wide text-white">
                  <span class="inline-flex items-center gap-2">
                    <Icon :icon="goldPlan.iconMdi" class="h-4 w-4" aria-hidden="true" />
                    {{ goldPlan.name }}
                  </span>
                </th>
                <th scope="col" class="w-[26%] px-4 py-4 text-[13px] font-semibold tracking-wide text-white">
                  <span class="flex flex-wrap items-center gap-2">
                    <Icon :icon="diamondPlan.iconMdi" class="h-4 w-4" aria-hidden="true" />
                    {{ diamondPlan.name }}
                    <span
                      class="inline-flex items-center rounded-md bg-blue-500 px-1.5 py-0 text-[10px] font-bold tracking-wide text-white">
                      Most Popular
                    </span>
                  </span>
                </th>
                <th scope="col" class="w-[26%] px-4 py-4 pr-5 text-[13px] font-semibold tracking-wide text-white">
                  <span class="inline-flex items-center gap-2">
                    <Icon :icon="platinumPlan.iconMdi" class="h-4 w-4" aria-hidden="true" />
                    {{ platinumPlan.name }}
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in subscriptionComparisonRows" :key="row.feature" :class="[
                'border-b border-slate-100 transition duration-200 last:border-0',
                i % 2 === 1 ? 'bg-blue-50/60' : 'bg-white hover:bg-slate-50/80',
              ]">
                <td class="px-4 py-3.5 pl-5 font-display text-[15px] font-bold text-slate-900">
                  {{ row.feature }}
                </td>
                <td class="px-4 py-3.5 text-slate-600">{{ row.gold }}</td>
                <td class="px-4 py-3.5 font-medium text-blue-700">{{ row.diamond }}</td>
                <td class="px-4 py-3.5 pr-5 text-slate-600">{{ row.platinum }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="relative border-t border-slate-100 bg-slate-50/80 px-5 py-4 sm:px-6">
          <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <p class="flex items-start gap-2.5 text-[13px] leading-relaxed text-slate-600 sm:items-center sm:text-sm">
              <Icon icon="mdi:information-outline" class="mt-0.5 h-4 w-4 shrink-0 text-blue-600 sm:mt-0"
                aria-hidden="true" />
              {{ planComparisonSection.footnote }}
            </p>
            <div class="flex flex-col gap-2 sm:flex-row sm:items-center">
              <a :href="goldPlan.cta.href"
                class="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-[13px] font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-700">
                {{ goldPlan.cta.label }}
              </a>
              <a :href="diamondPlan.cta.href"
                class="inline-flex items-center justify-center rounded-xl bg-blue-700 px-4 py-2.5 text-[13px] font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-800">
                {{ diamondPlan.cta.label }}
              </a>
              <a :href="platinumPlan.cta.href"
                class="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-[13px] font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-700">
                {{ platinumPlan.cta.label }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
