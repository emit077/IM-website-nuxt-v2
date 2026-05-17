<script setup lang="ts">
import { computed } from 'vue'

/**
 * Section header: pill badge + headline + description (stacked, centered).
 * `theme="dark"` matches black hero reference; `theme="light"` for cards / light UI.
 * `variant-2` always uses white badge/title/description text (for use on dark or brand backgrounds).
 */
defineOptions({ inheritAttrs: false })

const props = withDefaults(
  defineProps<{
    variant?: 'default' | 'variant-1' | 'variant-2'
    badge?: string
    title?: string
    description?: string
    /** dark: black bg, light text. on-blue: light text on blue/brand sections (no solid bar). light: cards */
    theme?: 'light' | 'dark' | 'on-blue'
    /** Extra classes on root (padding, margins) */
    contentClass?: string
  }>(),
  {
    badge: '',
    title: '',
    description: '',
    theme: 'light',
    contentClass: '',
  },
)

const rootClass = computed(() => {
  if (props.theme === 'dark') return 'bg-black text-center px-4 py-12 sm:py-14 text-white'
  if (props.theme === 'on-blue') return 'relative text-left px-0 py-0 text-white'
  return 'text-center px-2 py-6 sm:py-8'
})

const badgeClass = computed(() => {
  if (props.variant === 'variant-2')
    return 'inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white'
  if (props.theme === 'dark')
    return 'inline-flex rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90'
  if (props.theme === 'on-blue')
    return 'inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white'
  return 'inline-flex rounded-full bg-blue-100 px-4 py-1.5 text-xs font-medium text-blue-600'
})

const titleClass = computed(() => {
  const top = props.badge ? 'mt-5' : 'mt-0'
  if (props.variant === 'variant-2')
    return `${top} font-display text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-[2.25rem]`
  if (props.theme === 'dark')
    return `${top} font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.75rem]`
  if (props.theme === 'on-blue')
    return `${top} font-display text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-[2.25rem]`
  return `${top} font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-[2.25rem]`
})

const descriptionClass = computed(() => {
  if (props.variant === 'variant-2')
    return 'mt-3  text-sm leading-relaxed text-white/90 sm:text-base'
  if (props.theme === 'dark')
    return 'mt-4  mx-auto text-base leading-relaxed text-white/80 sm:text-lg'
  if (props.theme === 'on-blue')
    return 'mt-3  text-sm leading-relaxed text-white/90 sm:text-base'
  return 'mt-3  mx-auto text-sm leading-relaxed text-slate-600 sm:text-base'
})
</script>

<template>
  <div data-slot="card-header" :class="[rootClass, contentClass]" v-bind="$attrs">
    <!-- Tiny sparkle accent near the badge -->
    <svg aria-hidden="true"
      class="pointer-events-none absolute right-0 top-2 hidden h-8 w-8 text-yellow-400/70 sm:block" viewBox="0 0 24 24"
      fill="currentColor">
      <path d="M12 2 13.5 8 19 9.5 13.5 11 12 17 10.5 11 5 9.5 10.5 8 12 2z" />
    </svg>
    <div v-if="variant === 'variant-1'" class="text-left">
      <span v-if="badge" data-slot="card-badge" :class="badgeClass" v-html="badge">
      </span>
      <h2 v-if="title" data-slot="card-title" :class="titleClass" v-html="title">
      </h2>
      <p v-if="description" data-slot="card-description" :class="descriptionClass" v-html="description"></p>
    </div>
    <div v-else-if="variant === 'variant-2'" class="text-left text-white">
      <span v-if="badge" data-slot="card-badge" :class="badgeClass" v-html="badge">
      </span>
      <h2 v-if="title" data-slot="card-title" :class="titleClass" v-html="title">
      </h2>
      <p v-if="description" data-slot="card-description" :class="descriptionClass" v-html="description">
      </p>
    </div>
    <div v-else>
      <span v-if="badge" data-slot="card-badge" :class="badgeClass" v-html="badge">
      </span>
      <h2 v-if="title" data-slot="card-title" :class="titleClass" v-html="title">
      </h2>
      <p v-if="description" data-slot="card-description" :class="descriptionClass" v-html="description">
      </p>
      <slot />
    </div>
  </div>
</template>
