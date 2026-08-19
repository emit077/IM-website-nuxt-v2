<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { subTenures } from '~/data/subscription'

const accentStyles = {
  emerald: {
    bar: 'bg-emerald-500',
    icon: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
  },
  blue: {
    bar: 'bg-blue-600',
    icon: 'bg-blue-50 text-blue-700 ring-blue-100',
  },
  violet: {
    bar: 'bg-violet-500',
    icon: 'bg-violet-50 text-violet-700 ring-violet-100',
  },
  amber: {
    bar: 'bg-amber-500',
    icon: 'bg-amber-50 text-amber-800 ring-amber-100',
  },
} as const
</script>

<template>
  <section id="tenures" class="relative scroll-mt-36 overflow-hidden section-surface-muted section-py lg:scroll-mt-44"
    aria-labelledby="sub-tenure-heading">
    <div class="container-page relative">
      <CardHeader heading-id="sub-tenure-heading" :badge="subTenures.badge" :title="subTenures.title"
        :description="subTenures.description" :classes="subTenures.classes" />

      <div
        class="-mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0 lg:pb-0">
        <article v-for="(item, i) in subTenures.items" :key="item.id" :class="[
          'relative flex w-[min(19rem,82vw)] shrink-0 snap-center flex-col overflow-hidden rounded-[1.5rem] border bg-white shadow-soft lg:w-auto',
          item.recommended ? 'border-amber-300 ring-1 ring-amber-200' : 'border-slate-200/80',
        ]" v-motion :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 70, duration: 420 } }">
          <span :class="['h-1.5 w-full', accentStyles[item.accent].bar]" aria-hidden="true" />
          <div class="flex flex-1 flex-col p-5 sm:p-6">
            <div class="flex items-start justify-between gap-3">
              <span :class="['grid h-11 w-11 place-items-center rounded-2xl ring-1', accentStyles[item.accent].icon]"
                aria-hidden="true">
                <Icon :icon="item.iconMdi" class="h-5 w-5" />
              </span>
              <span v-if="item.recommended"
                class="rounded-full bg-amber-400 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-slate-900">
                Recommended
              </span>
            </div>
            <p class="mt-4 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">{{ item.subtitle }}</p>
            <h3 class="mt-1 font-display text-xl font-bold text-slate-900">{{ item.name }}</h3>
            <p class="mt-1 text-[13px] font-semibold text-slate-700">{{ item.headline }}</p>
            <p class="mt-3 min-h-[4.125rem] text-[13.5px] leading-relaxed text-slate-600">
              {{ item.description }}
            </p>

            <dl class="mt-4 space-y-2 text-[13px]">
              <div class="flex justify-between gap-3">
                <dt class="text-slate-500">Duration</dt>
                <dd class="font-semibold text-slate-800">{{ item.duration }}</dd>
              </div>
              <div class="flex justify-between gap-3">
                <dt class="text-slate-500">Payment</dt>
                <dd class="text-right font-medium text-slate-800">{{ item.payment }}</dd>
              </div>
              <div class="flex justify-between gap-3">
                <dt class="text-slate-500">Discount</dt>
                <dd class="font-semibold text-green-800">{{ item.discount }}</dd>
              </div>
            </dl>

            <a :href="item.cta.href" :class="[
              'mt-6 inline-flex w-full items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold transition hover:-translate-y-0.5',
              item.recommended
                ? 'bg-blue-600 text-white shadow-cta hover:bg-blue-700'
                : 'border border-slate-300 bg-white text-slate-800 hover:border-blue-400 hover:text-blue-700',
            ]">
              {{ item.cta.label }}
            </a>
          </div>
        </article>
      </div>
      <!-- 
      <div class="mt-12 overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white shadow-soft">
        <div class="border-b border-slate-100 px-5 py-4 sm:px-6">
          <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">{{ subTenures.comparison.badge }}
          </p>
          <h3 class="mt-1 font-display text-lg font-bold text-slate-900">{{ subTenures.comparison.title }}</h3>
        </div>
        <div class="overflow-x-auto">
          <table class="min-w-full text-left text-sm">
            <thead class="bg-cream-50 text-[11px] font-bold uppercase tracking-[0.08em] text-slate-500">
              <tr>
                <th class="px-5 py-3 sm:px-6">Tenure</th>
                <th class="px-4 py-3">Duration</th>
                <th class="px-4 py-3">Payment</th>
                <th class="px-4 py-3">Discount</th>
                <th class="px-5 py-3 sm:px-6">Best Suited For</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in subTenures.comparison.rows" :key="row.tenure"
                class="border-t border-slate-100 text-[13px]">
                <td class="px-5 py-3 font-semibold text-slate-800 sm:px-6">{{ row.tenure }}</td>
                <td class="px-4 py-3 text-slate-600">{{ row.duration }}</td>
                <td class="px-4 py-3 text-slate-600">{{ row.payment }}</td>
                <td class="px-4 py-3 font-medium text-slate-800">{{ row.discount }}</td>
                <td class="px-5 py-3 text-slate-600 sm:px-6">{{ row.suited }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> -->
    </div>
  </section>
</template>
