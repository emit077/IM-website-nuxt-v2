<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'

const props = withDefaults(
  defineProps<{
    /** `hero-blue`: full-width strip on hero slides. `card`: light panel (default). */
    variant?: 'card' | 'hero-blue'
  }>(),
  { variant: 'card' },
)

const rootClass = computed(() =>
  props.variant === 'hero-blue'
    ? 'rounded-2xl border border-indigo-300/35 bg-gradient-to-br from-indigo-900 via-indigo-700 to-indigo-500 p-3 shadow-[0_24px_55px_-30px_rgba(37,99,235,0.85)] backdrop-blur-sm sm:p-4'
    : 'rounded-2xl border border-blue-100/80 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/40 p-3 shadow-sm sm:p-4',
)

const items = [
  {
    id: 'bg',
    title: 'Verified & Trusted',
    description: 'Every tutor is background checked and verified.',
    icon: 'solar:shield-check-bold-duotone',
    tone: 'text-blue-700',
  },
  {
    id: 'subj',
    title: 'Subject Verified',
    description: 'Experts in 250+ subjects across all boards.',
    icon: 'solar:book-bookmark-bold-duotone',
    tone: 'text-indigo-700',
  },
  {
    id: 'demo',
    title: 'Demo Evaluated',
    description: 'Each tutor goes through a demo to ensure quality.',
    icon: 'solar:check-circle-bold-duotone',
    tone: 'text-blue-700',
  },
  {
    id: 'match',
    title: 'Quick Matching',
    description: 'Get the right tutor for your child within 24 hours.',
    icon: 'solar:users-group-rounded-bold-duotone',
    tone: 'text-indigo-700',
  },
]
</script>

<template>
  <div :class="rootClass" aria-label="Trust signals">
    <ul class="flex flex-col lg:flex-row lg:items-stretch" role="list">
      <li
        v-for="(item, i) in items"
        :key="item.id"
        v-motion
        :initial="{ y: 10 }"
        :enter="{
          y: 0,
          transition: { duration: 480, delay: 200 + i * 70, ease: 'easeOut' },
        }"
        :class="[
          'group flex min-w-0 flex-1 items-start gap-3 rounded-lg px-3 py-2.5 transition-all duration-200 sm:px-4 sm:py-3 lg:rounded-none',
          variant === 'hero-blue' ? 'hover:bg-white/10' : 'hover:bg-white/70',
        ]"
      >
        <div class="flex items-start gap-3">
          <span
            :class="[
              'grid h-10 w-10 shrink-0 place-items-center',
              variant === 'hero-blue' ? 'text-indigo-100' : item.tone,
            ]"
          >
            <Icon :icon="item.icon" class="h-10 w-10" />
          </span>
          <div>
            <p
              class="text-sm font-semibold"
              :class="variant === 'hero-blue' ? 'text-white' : 'text-slate-900'"
            >
              {{ item.title }}
            </p>
            <p
              class="mt-1 text-xs leading-relaxed sm:text-[13px]"
              :class="variant === 'hero-blue' ? 'text-white/90' : 'text-slate-600'"
            >
              {{ item.description }}
            </p>
          </div>
        </div>

        <span
          v-if="i < items.length - 1"
          class="ml-4 hidden select-none self-center text-xl leading-none lg:block"
          :class="variant === 'hero-blue' ? 'text-white/25' : 'text-slate-300'"
          aria-hidden="true"
        >
          |
        </span>
      </li>
    </ul>
  </div>
</template>
