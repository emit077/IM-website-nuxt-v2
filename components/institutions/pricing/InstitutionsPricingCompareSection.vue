<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { institutionsPricingCompare } from '~/data/institutions-pricing'
</script>

<template>
  <section id="compare-models" class="relative scroll-mt-24 bg-white section-py"
    aria-labelledby="pricing-compare-heading">
    <div class="container-page">
      <CardHeader heading-id="pricing-compare-heading" :badge="institutionsPricingCompare.badge"
        :title="institutionsPricingCompare.title" :description="institutionsPricingCompare.description"
        :classes="institutionsPricingCompare.classes" />

      <div class="relative mt-8 overflow-hidden rounded-[20px] border border-slate-200/90 bg-white shadow-soft" v-motion
        :initial="{ opacity: 0, y: 18 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 520 } }">
        <div class="overflow-x-auto">
          <table class="w-full min-w-[720px] text-left text-sm">
            <thead>
              <tr class="bg-blue-800">
                <th scope="col" class="w-[32%] px-4 py-4 pl-5 text-[13px] font-semibold tracking-wide text-white">
                  {{ institutionsPricingCompare.featureLabel }}
                </th>
                <th scope="col" class="w-[34%] px-4 py-4 text-[13px] font-semibold tracking-wide text-white">
                  {{ institutionsPricingCompare.primeLabel }}
                </th>
                <th scope="col" class="w-[34%] px-4 py-4 pr-5 text-[13px] font-semibold tracking-wide text-white">
                  <span class="flex flex-wrap items-center gap-2">
                    {{ institutionsPricingCompare.eliteLabel }}
                    <span
                      class="inline-flex items-center rounded-md bg-amber-400 px-1.5 py-0 text-[10px] font-bold tracking-wide text-slate-900">
                      Unlimited
                    </span>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in institutionsPricingCompare.rows" :key="row.feature" :class="[
                'border-b border-slate-100 transition duration-200 last:border-0',
                i % 2 === 1 ? 'bg-blue-50/60' : 'bg-white hover:bg-slate-50/80',
              ]">
                <th scope="row" class="px-4 py-3.5 pl-5 text-left font-display text-[14.5px] font-bold text-slate-900">
                  {{ row.feature }}
                </th>
                <td class="px-4 py-3.5 text-[13px] leading-snug text-slate-600">
                  {{ row.prime }}
                </td>
                <td class="px-4 py-3.5 pr-5 text-[13px] leading-snug font-medium text-blue-700">
                  {{ row.elite }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="relative border-t border-slate-100 bg-slate-50/80 px-5 py-4 sm:px-6">
          <div class="flex items-start gap-2.5 text-[13px] leading-relaxed text-slate-600 sm:text-sm">
            <Icon icon="mdi:information-outline" class="mt-0.5 h-6 w-6 shrink-0 text-blue-600" aria-hidden="true" />
            <p>{{ institutionsPricingCompare.footnote }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
