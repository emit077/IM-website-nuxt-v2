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
        class="relative mt-10 hidden overflow-hidden rounded-[28px] border border-slate-200/90 bg-white shadow-soft lg:block"
        v-motion :initial="{ opacity: 0, y: 18 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 520 } }">
        <div aria-hidden="true" class="pointer-events-none absolute inset-0 opacity-[0.22]"
          style="background-image: radial-gradient(#cbd5e1 0.45px, transparent 0.45px); background-size: 22px 22px;" />
        <div aria-hidden="true"
          class="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-blue-100/60 blur-3xl" />
        <div aria-hidden="true"
          class="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-indigo-100/40 blur-3xl" />

        <div class="relative overflow-x-auto">
          <table class="w-full min-w-[960px] text-left text-sm">
            <thead>
              <tr class="border-b border-slate-200/80 bg-gradient-to-r from-[#f6f8fd] via-white to-[#f6f8fd]">
                <th v-for="(col, ci) in territoryInvestmentSection.columns" :key="col" :class="[
                  'px-4 py-5 text-sm  text-slate-500',
                  ci === 0 ? 'pl-6' : '',
                  ci === territoryInvestmentSection.columns.length - 1 ? 'pr-6' : '',
                  ci === 2 ? 'text-blue-700' : '',
                ]">
                  <span class="inline-flex items-center gap-1.5" v-html="col">
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in territoryInvestmentSection.rows" :key="row.level" :class="[
                'group border-b border-slate-100/90 transition duration-200 last:border-0',
                row.highlight
                  ? 'bg-gradient-to-r from-blue-50/90 via-blue-50/50 to-transparent'
                  : 'hover:bg-slate-50/80',
              ]">
                <td class="relative px-4 py-4 pl-6">
                  <span v-if="row.highlight" aria-hidden="true"
                    class="absolute inset-y-2 left-0 w-1 rounded-full bg-blue-600" />
                  <div class="flex items-center gap-3">
                    <div class="min-w-0">
                      <div class="flex items-center gap-2">
                        <span class="font-display text-[15px] font-bold text-slate-900">{{ row.level }}</span>
                        <span v-if="row.highlight"
                          class="inline-flex items-center rounded-full bg-green-600 px-1 py-0 text-[10px] font-bold  tracking-wide text-white shadow-sm">
                          Popular
                        </span>
                      </div>
                      <p class="mt-0.5 text-[11px] font-medium uppercase tracking-wider text-slate-400">
                        Tier {{ String(i + 1).padStart(2, '0') }}
                      </p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-4 text-slate-600">{{ row.coverage }}</td>
                <td class="px-4 py-4 font-medium tabular-nums text-slate-700">{{ row.deposit }}
                </td>
                <td class="px-4 py-4 font-medium tabular-nums text-slate-700">{{ row.license1 }}</td>
                <td class="px-4 py-4 font-medium tabular-nums text-slate-700">{{ row.license2 }}</td>
                <td class="px-4 py-4 pr-6 font-medium tabular-nums text-slate-700">{{ row.license5 }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="relative border-t border-slate-100 bg-[#f6f8fd]/70 px-6 py-4">
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
              ? 'border-blue-200 bg-gradient-to-br from-blue-50 via-white to-white ring-1 ring-blue-100'
              : 'border-slate-200/80 bg-white',
          ]">
            <span v-if="row.highlight" aria-hidden="true"
              class="absolute inset-y-3 left-0 w-1 rounded-full bg-blue-600" />

            <div class="flex items-start justify-between gap-3">
              <div class="flex items-center gap-3">
                <span :class="[
                  'grid h-11 w-11 shrink-0 place-items-center rounded-xl',
                  row.highlight
                    ? 'bg-blue-600 text-white shadow-[0_6px_16px_-4px_rgba(37,99,235,0.5)]'
                    : 'bg-[#f0f4fb] text-blue-600 ring-1 ring-[#e2eaf7]',
                ]" aria-hidden="true">
                  <Icon :icon="row.iconMdi" class="h-5 w-5" />
                </span>
                <div>
                  <div class="flex flex-wrap items-center gap-2">
                    <h3 class="font-display text-base font-bold text-slate-900">{{ row.level }}</h3>
                    <span v-if="row.highlight"
                      class="inline-flex items-center gap-1 rounded-full bg-blue-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                      <Icon icon="mdi:star" class="h-3 w-3" aria-hidden="true" />
                      Popular
                    </span>
                  </div>
                  <p class="mt-0.5 text-sm text-slate-500">{{ row.coverage }}</p>
                </div>
              </div>
              <span class="shrink-0 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                {{ String(i + 1).padStart(2, '0') }}
              </span>
            </div>

            <div class="mt-4 rounded-xl border border-slate-100 bg-[#f8fafc] px-3.5 py-3 sm:px-4">
              <div class="flex items-center justify-between gap-3">
                <span
                  class="flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wide text-slate-500">
                  <Icon icon="mdi:shield-check-outline" class="h-3.5 w-3.5 text-blue-600" aria-hidden="true" />
                  Security Deposit
                </span>
                <span :class="[
                  'font-display text-lg font-bold tabular-nums',
                  row.highlight ? 'text-blue-700' : 'text-slate-900',
                ]">{{ row.deposit }}</span>
              </div>
            </div>

            <dl class="mt-3 grid grid-cols-3 gap-2 text-center">
              <div class="rounded-xl border border-slate-100 bg-white px-2 py-2.5">
                <dt class="text-[10px] font-semibold uppercase tracking-wide text-slate-400">1 Year</dt>
                <dd class="mt-1 text-[13px] font-bold tabular-nums text-slate-800">{{ row.license1 }}</dd>
              </div>
              <div class="rounded-xl border border-slate-100 bg-white px-2 py-2.5">
                <dt class="text-[10px] font-semibold uppercase tracking-wide text-slate-400">2 Years</dt>
                <dd class="mt-1 text-[13px] font-bold tabular-nums text-slate-800">{{ row.license2 }}</dd>
              </div>
              <div class="rounded-xl border border-slate-100 bg-white px-2 py-2.5">
                <dt class="text-[10px] font-semibold uppercase tracking-wide text-slate-400">5 Years</dt>
                <dd class="mt-1 text-[13px] font-bold tabular-nums text-slate-800">{{ row.license5 }}</dd>
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
