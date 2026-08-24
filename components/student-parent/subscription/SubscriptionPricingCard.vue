<script setup lang="ts">
import { Icon } from '@iconify/vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
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
      ? 'bg-blue-700 text-white shadow-[0_28px_60px_-20px_rgba(29,78,216,0.55)]  '
      : 'bg-white text-slate-800 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.28)]',
  ]">
    <span v-if="plan.badge"
      class="absolute top-2 -right-1 z-10 inline-flex items-center gap-1.5 rounded-l-md bg-amber-300 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wide text-slate-900 shadow-sm">
      <Icon icon="mdi:star" class="h-3.5 w-3.5" aria-hidden="true" />
      {{ plan.badge }}
    </span>

    <div :class="['flex items-center  gap-3', plan.badge ? 'pr-28' : '']">
      <span :class="[
        'grid h-11 w-11 shrink-0 place-items-center rounded-2xl',
        plan.featured ? 'bg-white/15 text-white' : 'bg-blue-50 text-blue-700',
      ]" aria-hidden="true">
        <Icon :icon="plan.iconMdi" class="h-6 w-6" />
      </span>
      <h3 :class="[
        'font-display text-[1.75rem] font-extrabold tracking-tight sm:text-[2rem]',
        plan.featured ? 'text-white' : 'text-slate-900',
      ]">
        {{ plan.name }}
      </h3>

    </div>
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
    <div class="flex flex-1 flex-col">
      <ul class="mt-7 space-y-2.5" role="list">
        <li v-for="item in plan.core" :key="item" class="flex items-start gap-2.5 text-[14px] leading-snug">
          <span :class="[
            'mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full',
            plan.featured ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-600',
          ]" aria-hidden="true">
            <IconCheck class="h-2.5 w-2.5" />
          </span>
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
            <span :class="[
              'mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full',
              plan.featured ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-600',
            ]" aria-hidden="true">
              <IconCheck class="h-2.5 w-2.5" />
            </span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
      <div class="mt-auto pt-7">
        <ActionBtn class="!w-full" :variant="plan.featured ? 'theme-secondary' : 'primary'" :label="plan.ctaLabel"
          :href="href" />
      </div>
    </div>
  </article>
</template>
