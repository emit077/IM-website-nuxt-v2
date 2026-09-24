<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import {
  institutionsPricingPackages,
  institutionsPricingPackagesSection,
} from '~/data/institutions-pricing'
</script>

<template>
  <section id="packages" class="relative scroll-mt-24 overflow-hidden section-surface-muted section-py"
    aria-labelledby="pricing-packages-heading">
    <div class="container-page relative">
      <CardHeader heading-id="pricing-packages-heading" :badge="institutionsPricingPackagesSection.badge"
        :title="institutionsPricingPackagesSection.title" :description="institutionsPricingPackagesSection.description"
        :classes="institutionsPricingPackagesSection.classes" />

      <div class="mx-auto mt-10 grid max-w-6xl grid-cols-1 items-stretch gap-5 lg:mt-12 md:grid-cols-2">
        <article v-for="(plan, i) in institutionsPricingPackages" :id="plan.id" :key="plan.id" class="scroll-mt-28"
          v-motion :initial="{ opacity: 0, y: 18 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 80, duration: 480 } }">
          <div :class="[
            'relative flex h-full flex-col overflow-hidden rounded-[1.75rem] p-6 sm:p-8',
            plan.featured
              ? 'bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white shadow-[0_28px_60px_-20px_rgba(29,78,216,0.5)]'
              : 'border border-slate-200/80 bg-white shadow-soft',
          ]">
            <span v-if="plan.badge" :class="[
              'absolute right-0 top-5 rounded-l-md px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wide',
              plan.featured ? 'bg-white text-slate-900' : 'bg-slate-100 text-slate-700',
            ]">
              {{ plan.badge }}
            </span>

            <p :class="[
              'pr-28 text-[11px] font-bold uppercase tracking-[0.16em]',
              plan.featured ? 'text-amber-200' : 'text-blue-600',
            ]">
              {{ plan.model }}
            </p>
            <h3 class="mt-1.5 font-display text-2xl font-extrabold tracking-tight sm:text-[1.75rem]">
              {{ plan.name }}
            </h3>
            <p :class="['mt-1 text-[13px] font-medium', plan.featured ? 'text-blue-100' : 'text-slate-500']">
              {{ plan.subtitle }}
            </p>

            <p class="mt-6 font-display text-[2.35rem] font-extrabold leading-none tracking-tight">
              {{ plan.price }}
            </p>
            <p :class="['mt-2 text-sm font-medium', plan.featured ? 'text-blue-100' : 'text-slate-500']">
              {{ plan.priceNote }}
            </p>
            <p
              :class="['mt-4 line-clamp-3 min-h-[4.05em] text-[13.5px] leading-relaxed', plan.featured ? 'text-blue-50/90' : 'text-slate-600']">
              {{ plan.description }}
            </p>

            <p :class="[
              'mt-6 text-[11px] font-bold uppercase tracking-[0.14em]',
              plan.featured ? 'text-amber-200' : 'text-slate-400',
            ]">
              {{ plan.includesLabel }}
            </p>
            <ul class="mt-2.5 space-y-2" role="list">
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

            <p :class="[
              'mt-6 text-[11px] font-bold uppercase tracking-[0.14em]',
              plan.featured ? 'text-amber-200' : 'text-slate-400',
            ]">
              {{ plan.suitableForLabel }}
            </p>
            <ul class="mt-2.5 grid grid-cols-1 lg:grid-cols-2 gap-1.5" role="list">
              <li v-for="item in plan.suitableFor" :key="item" :class="[
                ' rounded-full px-2.5 py-1.5 text-center text-[11.5px] font-semibold leading-none',
                plan.featured ? 'bg-white/10 text-blue-50' : 'bg-slate-50 text-slate-700 ring-1 ring-slate-200/80',
              ]">
                {{ item }}
              </li>
            </ul>
            <p :class="[
              'mt-5 rounded-2xl px-4 py-3 text-[13px] leading-relaxed',
              plan.featured ? 'bg-white/10 text-blue-50' : 'bg-blue-50/70 text-slate-700 ring-1 ring-blue-100',
            ]">
              <span :class="['font-bold', plan.featured ? 'text-amber-200' : 'text-blue-700']">
                Commercial Advantage:
              </span>
              {{ plan.advantage }}
            </p>

            <a :href="plan.cta.href" :class="[
              'mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5',
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

      <p class="mx-auto mt-8  text-center text-[12.5px] leading-relaxed text-slate-500">
        {{ institutionsPricingPackagesSection.note }}
      </p>
    </div>
  </section>
</template>
