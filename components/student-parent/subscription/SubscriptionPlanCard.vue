<script setup lang="ts">
import { Icon } from '@iconify/vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import type { FamilyPlan } from '~/data/student-parent'

defineProps<{
  plan: FamilyPlan
}>()
</script>

<template>
  <article :class="[
    'relative flex h-full flex-col rounded-2xl bg-white p-6 sm:p-7',
    plan.popular
      ? 'border-2 border-blue-600 shadow-[0_24px_50px_-18px_rgba(37,99,235,0.38)] lg:px-8 lg:py-8'
      : 'border border-slate-200/80 shadow-soft',
  ]">
    <span v-if="plan.popular"
      class="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white">
      Most Popular
    </span>

    <span :class="[
      'grid h-11 w-11 place-items-center rounded-xl',
      plan.popular ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600',
    ]" aria-hidden="true">
      <Icon :icon="plan.iconMdi" class="h-5 w-5" />
    </span>

    <p class="mt-5 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">{{ plan.name }}</p>
    <h3 class="mt-1 font-display text-xl font-bold tracking-tight text-slate-900">{{ plan.subtitle }}</h3>

    <p class="mt-4 font-display text-[1.85rem] font-extrabold leading-none tracking-tight text-blue-600 sm:text-3xl">
      {{ plan.duration }}
    </p>
    <p class="mt-2 text-sm text-slate-500">{{ plan.audience }}</p>

    <ul class="mt-6 flex-1 space-y-2.5" role="list">
      <li v-for="feature in plan.features" :key="feature"
        class="flex items-center gap-2.5 text-[14px] text-slate-700">
        <span class="grid h-5 w-5 shrink-0 place-items-center text-blue-600" aria-hidden="true">
          <IconCheck class="h-4 w-4" />
        </span>
        <span>{{ feature }}</span>
      </li>
    </ul>

    <a :href="plan.cta.href" :class="[
      'mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5',
      plan.popular
        ? 'bg-blue-600 text-white shadow-cta hover:bg-blue-700'
        : 'bg-blue-50 text-blue-700 hover:bg-blue-100',
    ]">
      {{ plan.cta.label }}
      <Icon icon="mdi:arrow-right" class="h-4 w-4" aria-hidden="true" />
    </a>
  </article>
</template>
