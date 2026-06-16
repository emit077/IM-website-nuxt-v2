<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'

const props = withDefaults(
  defineProps<{
    /** `hero-blue`: elevated cards for hero slides. `card`: flat light cards (default). */
    variant?: 'card' | 'hero-blue'
  }>(),
  { variant: 'card' },
)

const isHero = computed(() => props.variant === 'hero-blue')

const cardClass = computed(() =>
  isHero.value
    ? 'border-slate-200/70 bg-white/90 shadow-[0_18px_40px_-22px_rgba(37,99,235,0.4)] ring-1 ring-blue-100/50 backdrop-blur-sm'
    : 'border-slate-200/80 bg-white shadow-[0_6px_20px_-12px_rgba(15,23,42,0.18)]',
)

const items = [
  {
    id: 'bg',
    title: 'Verified & Trusted',
    description: 'Every tutor is background checked and verified.',
    icon: 'solar:shield-check-bold-duotone',
  },
  {
    id: 'subj',
    title: 'Subject Verified',
    description: 'Experts in 250+ subjects across all boards.',
    icon: 'solar:book-bookmark-bold-duotone',
  },
  {
    id: 'demo',
    title: 'Demo Evaluated',
    description: 'Each tutor goes through a demo to ensure quality.',
    icon: 'solar:check-circle-bold-duotone',
  },
  {
    id: 'match',
    title: 'Quick Matching',
    description: 'Get the right tutor within 24 hours.',
    icon: 'solar:users-group-rounded-bold-duotone',
  },
]
</script>

<template>
  <ul
    class="grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4 lg:gap-4"
    role="list"
    aria-label="Trust signals"
  >
    <li
      v-for="(item, i) in items"
      :key="item.id"
      v-motion
      :initial="{ y: 12 }"
      :enter="{ y: 0, transition: { duration: 460, delay: 180 + i * 70, ease: 'easeOut' } }"
      :class="[
        'group relative flex flex-col overflow-hidden rounded-2xl border p-3.5 transition duration-300 hover:-translate-y-1 sm:p-4',
        cardClass,
      ]"
    >
      <span
        aria-hidden="true"
        class="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-blue-500 transition-transform duration-300 group-hover:scale-x-100"
      />

      <span
        class="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition-transform duration-200 group-hover:scale-105"
      >
        <Icon :icon="item.icon" class="h-6 w-6" aria-hidden="true" />
      </span>

      <p class="mt-3 text-[13px] font-bold leading-tight text-slate-900 sm:text-sm">
        {{ item.title }}
      </p>
      <p class="mt-1.5 text-[11px] leading-relaxed text-slate-500 sm:text-xs">
        {{ item.description }}
      </p>
    </li>
  </ul>
</template>
