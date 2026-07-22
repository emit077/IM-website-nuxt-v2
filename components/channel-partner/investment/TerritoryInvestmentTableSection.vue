<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { territoryInvestmentSection } from '~/data/channel-partner-investment'
</script>

<template>
  <section id="territory-investment" class="relative scroll-mt-20 section-surface-muted section-py"
    aria-labelledby="territory-investment-heading">
    <div class="container-page">
      <CardHeader heading-id="territory-investment-heading" :badge="territoryInvestmentSection.kicker"
        :title="territoryInvestmentSection.title" :description="territoryInvestmentSection.description"
        :classes="territoryInvestmentSection.classes" />
      <p class="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-500">
        {{ territoryInvestmentSection.note }}
      </p>

      <!-- Desktop table -->
      <div
        class="relative mt-10 hidden overflow-hidden rounded-[20px] border border-slate-200/90 bg-white shadow-soft lg:block"
        v-motion :initial="{ opacity: 0, y: 18 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 520 } }">
        <div class="relative overflow-x-auto">
          <table class="w-full min-w-[880px] text-left text-sm">
            <thead>
              <tr class="bg-[#0f1f3d]">
                <th v-for="(col, ci) in territoryInvestmentSection.columns" :key="col.key" :class="[
                  'px-4 py-4 text-[13px] font-semibold tracking-wide text-white',
                  ci === 0 ? 'pl-5' : '',
                  ci === territoryInvestmentSection.columns.length - 1 ? 'pr-5' : '',
                ]">
                  <span class="block">{{ col.label }}</span>
                  <span v-if="col.sub" :class="[
                    'mt-0.5 block text-[11px] font-medium',
                    col.accent ? 'text-amber-300' : 'text-white/55',
                  ]">
                    {{ col.sub }}
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in territoryInvestmentSection.rows" :key="row.level" :class="[
                'border-b border-slate-100 transition duration-200 last:border-0',
                row.highlight ? 'bg-amber-50/90' : 'bg-white hover:bg-slate-50/80',
              ]">
                <td class="px-4 py-4 pl-5">
                  <div class="flex items-center gap-3">
                    <span :class="[
                      'grid h-9 w-9 shrink-0 place-items-center rounded-lg text-sm font-bold',
                      row.highlight
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-slate-100 text-slate-600',
                    ]" aria-hidden="true">
                      {{ row.initial }}
                    </span>
                    <div class="flex flex-wrap items-center gap-2">
                      <span class="font-display text-[15px] font-bold text-slate-900">{{ row.level }}</span>
                      <span v-if="row.highlight"
                        class="inline-flex items-center rounded-md bg-amber-500 px-1.5 py-0.5 text-[10px] font-bold tracking-wide text-white">
                        Popular
                      </span>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-4 text-slate-600">{{ row.coverage }}</td>
                <td class="px-4 py-4">
                  <p class="font-display text-[15px] font-bold tabular-nums text-slate-900">{{ row.deposit }}</p>
                  <p class="mt-0.5 text-[11px] font-semibold text-emerald-600">Refundable</p>
                </td>
                <td class="px-4 py-4 font-medium tabular-nums text-slate-700">{{ row.license1 }}</td>
                <td class="px-4 py-4 font-medium tabular-nums text-slate-700">{{ row.license2 }}</td>
                <td class="px-4 py-4 pr-5">
                  <p class="font-display text-[15px] font-bold tabular-nums text-amber-700">{{ row.license5 }}</p>
                  <p class="mt-0.5 text-[11px] font-medium text-slate-400">Best Value</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="relative border-t border-slate-100 bg-slate-50/80 px-6 py-4">
          <p class="flex items-start gap-2.5 text-[13px] leading-relaxed text-slate-600 sm:items-center sm:text-sm">
            <Icon icon="mdi:information-outline" class="mt-0.5 h-4 w-4 shrink-0 text-blue-600 sm:mt-0"
              aria-hidden="true" />
            {{ territoryInvestmentSection.closing }}
          </p>
        </div>
      </div>

      <!-- Mobile cards -->
      <ul class="mt-10 space-y-3.5 lg:hidden" role="list">
        <li v-for="(row, i) in territoryInvestmentSection.rows" :key="row.level" v-motion
          :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + i * 55, duration: 420 } }">
          <article :class="[
            'relative overflow-hidden rounded-2xl border p-4 shadow-soft transition duration-200 sm:p-5',
            row.highlight
              ? 'border-amber-200 bg-amber-50/60 ring-1 ring-amber-100'
              : 'border-slate-200/80 bg-white',
          ]">
            <div class="flex items-start justify-between gap-3">
              <div class="flex items-center gap-3">
                <span :class="[
                  'grid h-11 w-11 shrink-0 place-items-center rounded-xl text-base font-bold',
                  row.highlight
                    ? 'bg-amber-500 text-white'
                    : 'bg-slate-100 text-slate-600',
                ]" aria-hidden="true">
                  {{ row.initial }}
                </span>
                <div>
                  <div class="flex flex-wrap items-center gap-2">
                    <h3 class="font-display text-base font-bold text-slate-900">{{ row.level }}</h3>
                    <span v-if="row.highlight"
                      class="inline-flex items-center rounded-md bg-amber-500 px-1.5 py-0.5 text-[10px] font-bold tracking-wide text-white">
                      Popular
                    </span>
                  </div>
                  <p class="mt-0.5 text-sm text-slate-500">{{ row.coverage }}</p>
                </div>
              </div>
            </div>

            <div class="mt-4 rounded-xl border border-slate-100 bg-white px-3.5 py-3 sm:px-4">
              <div class="flex items-center justify-between gap-3">
                <div>
                  <span class="text-[12px] font-semibold uppercase tracking-wide text-slate-500">
                    Security Deposit
                  </span>
                  <p class="mt-0.5 text-[11px] font-semibold text-emerald-600">Refundable</p>
                </div>
                <span class="font-display text-lg font-bold tabular-nums text-slate-900">{{ row.deposit }}</span>
              </div>
            </div>

            <dl class="mt-3 grid grid-cols-3 gap-2 text-center">
              <div class="rounded-xl border border-slate-100 bg-white px-2 py-2.5">
                <dt class="text-[10px] font-semibold uppercase tracking-wide text-slate-400">License 1Y</dt>
                <dd class="mt-1 text-[13px] font-bold tabular-nums text-slate-800">{{ row.license1 }}</dd>
              </div>
              <div class="rounded-xl border border-slate-100 bg-white px-2 py-2.5">
                <dt class="text-[10px] font-semibold uppercase tracking-wide text-slate-400">License 2Y</dt>
                <dd class="mt-1 text-[13px] font-bold tabular-nums text-slate-800">{{ row.license2 }}</dd>
              </div>
              <div class="rounded-xl border border-amber-100 bg-amber-50/50 px-2 py-2.5">
                <dt class="text-[10px] font-semibold uppercase tracking-wide text-amber-600">License 5Y</dt>
                <dd class="mt-1 text-[13px] font-bold tabular-nums text-amber-700">{{ row.license5 }}</dd>
                <p class="mt-0.5 text-[9px] font-medium text-slate-400">Best Value</p>
              </div>
            </dl>
          </article>
        </li>
      </ul>

      <p
        class="mt-8 flex items-start justify-center gap-2.5 text-center text-sm leading-relaxed text-slate-600 lg:hidden">
        <Icon icon="mdi:information-outline" class="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
        {{ territoryInvestmentSection.closing }}
      </p>
    </div>
  </section>
</template>
