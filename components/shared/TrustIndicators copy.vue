<script lang="ts">
export interface TrustItem {
  id?: string
  title: string
  description?: string
  icon: string
}

/** Legacy stat shape still used on some pages. */
export interface LegacyTrustStat {
  id?: string
  value: string
  suffix?: string
  label: string
  icon?: string
  sub?: string
}

export type TrustStatInput = TrustItem | LegacyTrustStat

export function normalizeTrustItem(item: TrustStatInput): TrustItem | null {
  if ('title' in item && item.title) {
    return {
      id: item.id,
      title: item.title,
      description: item.description,
      icon: item.icon ?? 'solar:info-circle-bold-duotone',
    }
  }

  if ('value' in item && item.value) {
    return {
      id: item.id,
      title: `${item.value}${item.suffix ?? ''}`.trim(),
      description: item.label ?? item.sub,
      icon: item.icon ?? 'solar:chart-2-bold-duotone',
    }
  }

  return null
}

export const defaultTrustItems: TrustItem[] = [
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

<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'

const props = withDefaults(
  defineProps<{
    variant?: 'card'
    stats?: TrustStatInput[]
    /** Wrap in `container-page` with section padding (standalone page sections). */
    container?: boolean
  }>(),
  { variant: 'card', stats: () => defaultTrustItems, container: false },
)

const items = computed(() =>
  (props.stats ?? [])
    .map(normalizeTrustItem)
    .filter((item): item is TrustItem => item !== null),
)

const gridColsClass = computed(() => {
  const cols = Math.min(items.value.length, 5)
  return (
    {
      1: 'sm:grid-cols-1 lg:grid-cols-1',
      2: 'sm:grid-cols-2 lg:grid-cols-2',
      3: 'sm:grid-cols-2 lg:grid-cols-3',
      4: 'sm:grid-cols-2 lg:grid-cols-4',
      5: 'sm:grid-cols-2 lg:grid-cols-5',
    }[cols] ?? 'sm:grid-cols-2 lg:grid-cols-5'
  )
})

/** Metric-style titles (e.g. 50K+, 98%) get larger type. */
const isMetricTitle = (title?: string) => Boolean(title && /^\d/.test(title.trim()))
</script>

<template>
  <component :is="container ? 'section' : 'div'" :class="container ? 'container-page py-8 sm:py-10' : 'w-full'">
    <ul v-if="items.length" :class="['grid grid-cols-1 gap-3 sm:gap-4', gridColsClass]" role="list"
      aria-label="Trust signals">
      <li v-for="item in items" :key="item.id ?? item.title"
        class="group relative flex min-w-0 items-start gap-3.5 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_18px_40px_-22px_rgba(37,99,235,0.45)] sm:p-5">
        <span aria-hidden="true"
          class="absolute inset-y-0 left-0 w-1 origin-bottom scale-y-0 bg-gradient-to-b from-blue-500 to-indigo-500 transition-transform duration-300 group-hover:scale-y-100" />

        <span
          class="relative inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 ring-1 ring-inset ring-blue-100/80 transition-all duration-300 group-hover:from-blue-500 group-hover:to-indigo-600 group-hover:text-white group-hover:ring-blue-500/40 sm:h-12 sm:w-12"
          aria-hidden="true">
          <Icon :icon="item.icon" class="h-[20px] w-[20px] sm:h-6 sm:w-6" />
        </span>

        <div class="min-w-0 flex-1">
          <p :class="[
            'font-display tracking-tight text-slate-900',
            isMetricTitle(item.title)
              ? 'text-xl font-extrabold leading-none sm:text-2xl'
              : 'text-sm font-bold leading-snug sm:text-[15px]',
          ]">
            {{ item.title }}
          </p>
          <p v-if="item.description" class="mt-1.5 text-[11px] leading-relaxed text-slate-500 sm:text-xs">
            {{ item.description }}
          </p>
        </div>
      </li>
    </ul>
  </component>
</template>
