<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import {
  comparisonSection,
  planDetailedRows,
  planOverviewRows,
} from '~/data/tutor-registration-plans'

const activeTab = ref<'overview' | 'detailed'>('overview')

const rows = computed(() => (activeTab.value === 'overview' ? planOverviewRows : planDetailedRows))

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
  <section id="plan-comparison" class="relative scroll-mt-28 bg-white section-py"
    aria-labelledby="plan-comparison-heading">
    <div class="container-page">
      <CardHeader heading-id="plan-comparison-heading" :badge="comparisonSection.badge"
        :title="comparisonSection.title" :description="comparisonSection.description"
        :classes="comparisonSection.classes" />

      <div class="mt-8 flex justify-center" role="tablist" aria-label="Plan comparison views">
        <div class="inline-flex rounded-2xl border border-slate-200/80 bg-cream-50/80 p-1">
          <button v-for="tab in comparisonSection.tabs" :key="tab.id" type="button" role="tab"
            :aria-selected="activeTab === tab.id" :class="[
              'rounded-xl px-4 py-2 text-[13px] font-semibold transition duration-300 sm:px-5 sm:text-sm',
              activeTab === tab.id
                ? 'bg-blue-700 text-white shadow-sm'
                : 'text-slate-600 hover:text-blue-700',
            ]" @click="activeTab = tab.id as 'overview' | 'detailed'">
            {{ tab.label }}
          </button>
        </div>
      </div>

      <div class="relative mt-8 overflow-hidden rounded-[20px] border border-slate-200/90 bg-white shadow-soft"
        v-motion :initial="{ opacity: 0, y: 18 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 520 } }">
        <div class="overflow-x-auto">
          <table class="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr class="bg-blue-800">
                <th scope="col" class="w-[34%] px-4 py-4 pl-5 text-[13px] font-semibold tracking-wide text-white">
                  Feature
                </th>
                <th scope="col" class="w-[30%] px-4 py-4 text-[13px] font-semibold tracking-wide text-white">
                  Free Profile
                </th>
                <th scope="col" class="w-[36%] px-4 py-4 pr-5 text-[13px] font-semibold tracking-wide text-white">
                  <span class="flex flex-wrap items-center gap-2">
                    Premium Profile
                    <span
                      class="inline-flex items-center rounded-md bg-amber-400 px-1.5 py-0 text-[10px] font-bold tracking-wide text-slate-900">
                      ₹1,000 / Year
                    </span>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in rows" :key="row.feature" :class="[
                'border-b border-slate-100 transition duration-200 last:border-0',
                i % 2 === 1 ? 'bg-blue-50/60' : 'bg-white hover:bg-slate-50/80',
              ]">
                <td class="px-4 py-3.5 pl-5 font-display text-[14.5px] font-bold text-slate-900">
                  {{ row.feature }}
                </td>
                <td class="px-4 py-3.5 text-slate-600">
                  <span v-if="isIncluded(row.free)" class="inline-flex text-emerald-600">
                    <IconCheck class="h-4 w-4" />
                    <span class="sr-only">Included</span>
                  </span>
                  <span v-else-if="isEmpty(row.free)" class="text-slate-300">
                    —
                    <span class="sr-only">Not included</span>
                  </span>
                  <span v-else>{{ row.free }}</span>
                </td>
                <td class="px-4 py-3.5 pr-5">
                  <span v-if="isIncluded(row.premium)" class="inline-flex text-blue-700">
                    <IconCheck class="h-4 w-4" />
                    <span class="sr-only">Included</span>
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
            <p class="flex items-start gap-2.5 text-[13px] leading-relaxed text-slate-600 sm:text-sm">
              <Icon icon="mdi:information-outline" class="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
              {{ comparisonSection.footnote }}
            </p>
            <div class="flex flex-col gap-2 sm:flex-row sm:items-center">
              <a :href="comparisonSection.freeCta.href"
                class="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-[13px] font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-700">
                {{ comparisonSection.freeCta.label }}
              </a>
              <a :href="comparisonSection.premiumCta.href"
                class="inline-flex items-center justify-center rounded-xl bg-blue-700 px-4 py-2.5 text-[13px] font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-800">
                {{ comparisonSection.premiumCta.label }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
