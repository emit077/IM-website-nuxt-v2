<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { SubscriptionPricingPlan } from '~/data/student-parent'

defineProps<{
  plan: SubscriptionPricingPlan
  href: string
  mini: boolean
}>()
</script>

<template>
  <article :class="[
    'relative flex h-full flex-col overflow-hidden rounded-[1.75rem] px-7 py-8 sm:px-8',
    plan.featured
      ? 'bg-blue-700 text-white shadow-[0_28px_60px_-20px_rgba(29,78,216,0.55)] lg:-mt-6 lg:mb-[-1.5rem] lg:px-9 lg:py-11'
      : 'bg-white text-slate-800 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.28)]',
  ]">
    <span v-if="plan.badge"
      class="absolute -top-px right-5 z-10 inline-flex items-center gap-1.5 rounded-b-md bg-amber-400 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wide text-slate-900 shadow-sm">
      <Icon icon="mdi:star" class="h-3.5 w-3.5" aria-hidden="true" />
      {{ plan.badge }}
    </span>

    <h3 :class="[
      'font-display text-[1.75rem] font-extrabold tracking-tight sm:text-[2rem]',
      plan.featured ? 'text-white' : 'text-slate-900',
    ]">
      {{ plan.name }}
    </h3>
    <p :class="[
      'mt-2 min-h-[2.75rem] text-[13px] leading-relaxed',
      plan.featured ? 'text-white/70' : 'text-slate-500',
    ]">
      {{ plan.tagline }}
    </p>

    <p class="mt-6 font-display text-[2.75rem] font-extrabold leading-none tracking-tight sm:text-5xl">
      {{ plan.metric }}
    </p>
    <p :class="['mt-1.5 text-sm', plan.featured ? 'text-white/65' : 'text-slate-500']">
      {{ plan.metricUnit }}
    </p>
    <p :class="['mt-1 text-[13px]', plan.featured ? 'text-white/50' : 'text-slate-400']">
      {{ plan.audience }}
    </p>

    <ul class="mt-7 space-y-2.5" role="list">
      <li v-for="item in plan.core" :key="item" class="flex items-start gap-2.5 text-[14px] leading-snug">
        <Icon icon="mdi:chevron-right" :class="[
          'mt-0.5 h-4 w-4 shrink-0',
          plan.featured ? 'text-white/80' : 'text-blue-600',
        ]" aria-hidden="true" />
        <span>{{ item }}</span>
      </li>
    </ul>
    <div v-if="!mini">
      <div :class="['my-6 h-px', plan.featured ? 'bg-white/15' : 'bg-slate-200']" />
      <p :class="[
        'text-[11px] font-bold uppercase tracking-[0.16em]',
        plan.featured ? 'text-white/45' : 'text-slate-400',
      ]">
        Additional Features
      </p>
      <ul class="mt-3 flex-1 space-y-2.5" role="list">
        <li v-for="item in plan.additional" :key="item" class="flex items-start gap-2.5 text-[14px] leading-snug">
          <Icon icon="mdi:chevron-right" :class="[
            'mt-0.5 h-4 w-4 shrink-0',
            plan.featured ? 'text-white/80' : 'text-blue-600',
          ]" aria-hidden="true" />
          <span>{{ item }}</span>
        </li>
      </ul>
    </div>

    <a :href="href" :class="[
      'mt-8 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5',
      plan.featured
        ? 'bg-white text-slate-900 hover:bg-white'
        : 'bg-blue-700 text-white hover:bg-blue-800',
    ]">
      {{ plan.ctaLabel }}
    </a>
  </article>
</template>
