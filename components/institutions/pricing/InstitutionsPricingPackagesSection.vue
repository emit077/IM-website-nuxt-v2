<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import {
  institutionsPricingPackages,
  institutionsPricingPackagesSection,
} from '~/data/institutions-pricing'

const accentClasses: Record<string, { chip: string; ring: string }> = {
  emerald: { chip: 'bg-emerald-50 text-emerald-600 ring-emerald-100', ring: 'hover:border-emerald-200' },
  blue: { chip: 'bg-blue-50 text-blue-600 ring-blue-100', ring: 'hover:border-blue-200' },
  indigo: { chip: 'bg-indigo-50 text-indigo-600 ring-indigo-100', ring: 'hover:border-indigo-200' },
}
</script>

<template>
  <section id="packages" class="relative scroll-mt-24 overflow-hidden section-surface-muted section-py"
    aria-labelledby="pricing-packages-heading">
    <div class="container-page relative">
      <CardHeader heading-id="pricing-packages-heading" :badge="institutionsPricingPackagesSection.badge"
        :title="institutionsPricingPackagesSection.title" :description="institutionsPricingPackagesSection.description"
        :classes="institutionsPricingPackagesSection.classes" />

      <div class="mx-auto mt-10 grid max-w-5xl grid-cols-1 items-stretch gap-5 lg:mt-12 lg:grid-cols-2">
        <article v-for="(plan, i) in institutionsPricingPackages" :id="plan.id" :key="plan.id" class="scroll-mt-28"
          v-motion :initial="{ opacity: 0, y: 18 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 80, duration: 480 } }">
          <div :class="[
            'relative flex h-full flex-col overflow-hidden rounded-[1.75rem] p-6 sm:p-7',
            plan.featured
              ? 'bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white shadow-[0_28px_60px_-20px_rgba(29,78,216,0.5)]'
              : 'border border-slate-200/80 bg-white shadow-soft ' + accentClasses[plan.accent].ring,
          ]">
            <span v-if="plan.badge" :class="[
              'absolute right-0 top-5 rounded-l-md px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wide',
              plan.featured ? 'bg-amber-300 text-slate-900' : 'bg-slate-100 text-slate-700',
            ]">
              {{ plan.badge }}
            </span>

            <div class="flex items-center gap-3 pr-24">
              <h3 class="font-display text-2xl font-extrabold tracking-tight">{{ plan.name }}</h3>
            </div>

            <p class="mt-6 font-display text-[2.35rem] font-extrabold leading-none tracking-tight">
              {{ plan.price }}
            </p>
            <p :class="['mt-2 text-sm font-medium', plan.featured ? 'text-blue-100' : 'text-slate-500']">
              {{ plan.priceNote }}
            </p>
            <p
              :class="['mt-3 line-clamp-2 min-h-[3.25em] text-sm leading-relaxed', plan.featured ? 'text-blue-50' : 'text-slate-600']">
              {{ plan.tagline }}
            </p>
            <!-- <p :class="[
              'mt-4 rounded-2xl px-4 py-3 text-[13px] leading-relaxed',
              plan.featured ? 'bg-white/10 text-blue-50' : 'bg-slate-50 text-slate-600 ring-1 ring-slate-100',
            ]">
              {{ plan.billing }}
            </p> -->

            <p :class="[
              'mt-6 text-[11px] font-bold uppercase tracking-[0.14em]',
              plan.featured ? 'text-amber-200' : 'text-slate-400',
            ]">
              Includes
            </p>
            <ul class="mt-2.5 flex-1 space-y-2" role="list">
              <li v-for="item in plan.includes" :key="item" class="flex items-start gap-2.5 text-[13.5px] leading-snug">
                <span :class="[
                  'mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full',
                  plan.featured ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-600',
                ]" aria-hidden="true">
                  <IconCheck class="h-2.5 w-2.5" />
                </span>
                {{ item }}
              </li>
            </ul>
            <div>
              <p :class="[
                'mt-5 text-[11px] font-bold uppercase tracking-[0.14em]',
                plan.featured ? 'text-amber-200' : 'text-slate-400',
              ]">
                Suitable for
              </p>
              <ul class="mt-2.5 flex flex-wrap gap-1.5" role="list">
                <li v-for="(item, i) in plan.suitableFor" :key="item" :class="[
                  'text-[11.5px] font-semibold',
                ]">
                  {{ item }} <span class="opacity-50">{{ i < plan.suitableFor.length - 1 ? '/' : '' }}</span>
                </li>
              </ul>
            </div>

            <a :href="plan.cta.href" :class="[
              'mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5',
              plan.featured
                ? 'bg-white text-blue-700 hover:bg-cream-50'
                : 'bg-blue-600 text-white shadow-cta hover:bg-blue-700',
            ]">
              {{ plan.cta.label }}
              <Icon icon="mdi:arrow-right" class="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </article>
      </div>

      <p class="mx-auto mt-8 max-w-2xl text-center text-[12.5px] leading-relaxed text-slate-500">
        {{ institutionsPricingPackagesSection.note }}
      </p>
    </div>
  </section>
</template>
