<script setup lang="ts">
import { Icon } from '@iconify/vue'

export interface TrustIndicatorItem {
  value: string
  label: string
  icon: string
}

const iconStyles = [
  { bg: 'bg-blue-50', text: 'text-blue-700' },
  { bg: 'bg-green-50', text: 'text-green-700' },
  { bg: 'bg-purple-50', text: 'text-purple-700' },
  { bg: 'bg-amber-50', text: 'text-amber-700' },
  { bg: 'bg-indigo-50', text: 'text-indigo-700' },
] as const

defineOptions({ inheritAttrs: false })

defineProps<{
  items: TrustIndicatorItem[]
}>()

function resolveIconStyle(index: number) {
  return iconStyles[index % iconStyles.length]!
}

function itemEnterDelay(index: number) {
  return 120 + index * 100
}
</script>

<template>
  <div v-if="items.length" class="w-full" v-bind="$attrs">
    <div
      class="trust-indicators-card overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_4px_24px_-8px_rgba(15,23,42,0.08)] sm:rounded-2xl"
      role="list" aria-label="Platform trust indicators" v-motion :initial="{ opacity: 0, y: 20 }"
      :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600, delay: 80 } }">
      <div class="flex flex-col divide-y divide-slate-200/80 sm:flex-row sm:divide-x sm:divide-y-0">
        <div v-for="(item, index) in items" :key="`${item.label}-${index}`" role="listitem"
          class="trust-indicator-item group flex min-w-0 flex-1 items-center gap-3.5 px-5 py-4 transition-colors duration-300 hover:bg-cream-50/70 sm:gap-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6"
          v-motion :initial="{ opacity: 0, y: 16 }" :visibleOnce="{
            opacity: 1,
            y: 0,
            transition: { duration: 500, delay: itemEnterDelay(index) },
          }">
          <span
            class="trust-indicator-icon inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-all duration-300  sm:h-12 sm:w-12"
            :class="[resolveIconStyle(index).bg, resolveIconStyle(index).text]" aria-hidden="true">
            <Icon :icon="item.icon"
              class="h-5 w-5 transition-transform duration-300 group-hover:scale-105 sm:h-[22px] sm:w-[22px]" />
          </span>
          <div class="min-w-0 transition-transform duration-300 group-hover:translate-x-0.5">
            <p class="font-display text-xl font-extrabold leading-none tracking-tight text-slate-900 sm:text-2xl"
              v-html="item.value" />
            <p class="mt-1 text-xs font-medium text-slate-500 sm:text-sm capitalize" v-html="item.label" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trust-indicators-card {
  transition: box-shadow 0.35s ease, border-color 0.35s ease;
}

.trust-indicators-card:hover {
  border-color: rgb(226 232 240 / 1);
  box-shadow: 0 12px 40px -16px rgb(37 99 235 / 0.18);
}

.trust-indicator-icon {
  animation: trust-icon-enter 0.55s ease-out both;
}

.trust-indicator-item:nth-child(1) .trust-indicator-icon {
  animation-delay: 0.18s;
}

.trust-indicator-item:nth-child(2) .trust-indicator-icon {
  animation-delay: 0.28s;
}

.trust-indicator-item:nth-child(3) .trust-indicator-icon {
  animation-delay: 0.38s;
}

.trust-indicator-item:nth-child(4) .trust-indicator-icon {
  animation-delay: 0.48s;
}

.trust-indicator-item:nth-child(5) .trust-indicator-icon {
  animation-delay: 0.58s;
}

@keyframes trust-icon-enter {
  0% {
    opacity: 0;
    transform: scale(0.72);
  }

  70% {
    transform: scale(1.08);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .trust-indicator-icon {
    animation: none;
  }
}
</style>
