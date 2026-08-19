<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { enrollmentPlans, enrollmentWhyPremium } from '~/data/student-parent'

const premiumPlan = enrollmentPlans.find((p) => p.id === 'premium')!

function isEmpty(value: string) {
  return value === '—'
}
</script>

<template>
  <section id="why-premium" class="relative scroll-mt-28 overflow-hidden section-surface-muted section-py"
    aria-labelledby="why-premium-heading">
    <div class="container-page relative">
      <CardHeader heading-id="why-premium-heading" :badge="enrollmentWhyPremium.badge"
        :title="enrollmentWhyPremium.title" :description="enrollmentWhyPremium.description"
        :classes="enrollmentWhyPremium.classes" />

      <div class="relative mt-10 overflow-hidden rounded-[20px] border border-slate-200/90 bg-white shadow-soft"
        v-motion :initial="{ opacity: 0, y: 18 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 520 } }">
        <div class="overflow-x-auto">
          <table class="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr class="bg-blue-800">
                <th scope="col" class="w-[22%] px-4 py-4 pl-5 text-[13px] font-semibold tracking-wide text-white">
                  Benefit
                </th>
                <th scope="col" class="w-[39%] px-4 py-4 text-[13px] font-semibold tracking-wide text-white">
                  Free Student Profile
                </th>
                <th scope="col" class="w-[39%] px-4 py-4 pr-5 text-[13px] font-semibold tracking-wide text-white">
                  <span class="flex flex-wrap items-center gap-2">
                    Premium Student Profile
                    <span
                      class="inline-flex items-center rounded-md bg-blue-500 px-1.5 py-0 text-[10px] font-bold tracking-wide text-white">
                      {{ premiumPlan.badge }}
                    </span>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in enrollmentWhyPremium.items" :key="row.label" :class="[
                'border-b border-slate-100 transition duration-200 last:border-0',
                i % 2 === 1 ? 'bg-blue-50/60' : 'bg-white hover:bg-slate-50/80',
              ]">
                <td class="px-4 py-4 pl-5">
                  <div class="flex items-center gap-3">
                    <span
                      class="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100"
                      aria-hidden="true">
                      <Icon :icon="row.iconMdi" class="h-4 w-4" />
                    </span>
                    <span class="font-display text-[15px] font-bold text-slate-900">{{ row.label }}</span>
                  </div>
                </td>
                <td class="px-4 py-4 text-slate-600">
                  <span v-if="isEmpty(row.free)" class="text-slate-300">—</span>
                  <span v-else>{{ row.free }}</span>
                </td>
                <td class="px-4 py-4 pr-5">
                  <span class="inline-flex items-start gap-1.5 font-medium text-blue-700">
                    <IconCheck class="mt-0.5 h-4 w-4 shrink-0" />
                    {{ row.premium }}
                  </span>
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
              {{ enrollmentWhyPremium.closing }}
            </p>
            <a :href="enrollmentWhyPremium.cta.href"
              class="inline-flex shrink-0 items-center justify-center rounded-xl bg-blue-700 px-4 py-2.5 text-[13px] font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-800">
              {{ enrollmentWhyPremium.cta.label }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
