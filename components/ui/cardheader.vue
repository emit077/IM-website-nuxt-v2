<script setup lang="ts">
import { computed } from 'vue'
import IconCheck from '~/components/icons/IconCheck.vue'

/**
 * Section header: pill badge + headline + description (stacked, centered).
 * `theme="dark"` matches black hero reference; `theme="light"` for cards / light UI.
 * `variant-2` always uses white badge/title/description text (for use on dark or brand backgrounds).
 * `hero` — large animated headline block for hero sections (badge/title/description via props, HTML allowed).
 * `section` — centered page section kicker + h2 + description (success stories, about sections).
 * `section-left` — left-aligned section header.
 * `section-dark` — centered header for dark backgrounds (video / CTA bands).
 */
defineOptions({ inheritAttrs: false })

type HeaderAccent = 'blue' | 'emerald' | 'amber' | 'violet' | 'rose' | 'indigo'

const props = withDefaults(
  defineProps<{
    variant?: 'default' | 'variant-1' | 'variant-2' | 'hero' | 'section' | 'section-left' | 'section-dark'
    badge?: string
    title?: string
    titleHighlight?: string
    description?: string
    tagline?: string
    /** Unique id for h1/h2 heading */
    headingId?: string
    /** Accent color for section kicker badge */
    accent?: HeaderAccent
    /** dark: black bg, light text. on-blue: light text on blue/brand sections (no solid bar). light: cards */
    theme?: 'light' | 'dark' | 'on-blue'
    /** Extra classes on root (padding, margins) */
    contentClass?: string
  }>(),
  {
    badge: '',
    title: '',
    titleHighlight: '',
    description: '',
    theme: 'light',
    contentClass: '',
    headingId: 'hero-heading',
    accent: 'blue',
  },
)

const isSectionVariant = computed(() =>
  props.variant === 'section' || props.variant === 'section-left' || props.variant === 'section-dark',
)

const accentKickerClass: Record<HeaderAccent, string> = {
  blue: 'text-blue-600',
  emerald: 'text-emerald-600',
  amber: 'text-amber-600',
  violet: 'text-violet-600',
  rose: 'text-rose-600',
  indigo: 'text-indigo-600',
}

const rootClass = computed(() => {
  if (props.variant === 'hero') return 'relative text-left px-0 py-0'
  if (isSectionVariant.value) return `relative px-0 py-0 ${props.contentClass}`
  if (props.theme === 'dark') return 'bg-black text-center px-4 py-12 sm:py-14 text-white'
  if (props.theme === 'on-blue') return 'relative text-left px-0 py-0 text-white'
  return 'text-center px-2 py-6 sm:py-8'
})

const sectionWrapClass = computed(() => {
  if (props.variant === 'section-left') return 'max-w-3xl text-left'
  if (props.variant === 'section-dark') return 'mx-auto max-w-3xl text-center'
  if (props.variant === 'section') return 'mx-auto max-w-3xl text-center'
  return ''
})

const kickerClass = computed(() => {
  if (props.variant === 'section-dark') return 'text-xs font-bold uppercase tracking-[0.16em] text-blue-300'
  return `text-xs font-bold uppercase tracking-[0.16em] ${accentKickerClass[props.accent]}`
})

const sectionTitleClass = computed(() => {
  if (props.variant === 'section-dark') {
    return `${props.badge ? 'mt-3' : 'mt-0'} font-display text-2xl font-bold tracking-tight text-white sm:text-3xl`
  }
  return `${props.badge ? 'mt-3' : 'mt-0'} font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl`
})

const sectionHighlightClass = computed(() =>
  props.variant === 'section-dark' ? 'text-blue-300' : 'text-gradient-brand',
)

const sectionDescriptionClass = computed(() => {
  if (props.variant === 'section-dark') return 'mt-3 text-sm leading-relaxed text-slate-400 sm:text-base'
  return 'mt-3 text-sm leading-relaxed text-slate-600 sm:text-base'
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

const headingTag = computed(() => (props.variant === 'hero' ? 'h1' : 'h2'))
</script>

<template>
  <div data-slot="card-header" :class="[rootClass, !isSectionVariant && contentClass]" v-bind="$attrs">
    <!-- Tiny sparkle accent near the badge -->
    <svg v-if="variant !== 'hero' && !isSectionVariant" aria-hidden="true"
      class="pointer-events-none absolute right-0 top-2 hidden h-8 w-8 text-yellow-400/70 sm:block" viewBox="0 0 24 24"
      fill="currentColor">
      <path d="M12 2 13.5 8 19 9.5 13.5 11 12 17 10.5 11 5 9.5 10.5 8 12 2z" />
    </svg>

    <div v-if="variant === 'hero'" class="flex flex-col gap-7 lg:gap-8">
      <span v-if="badge" class="badge-pill w-fit">
        <span class="grid h-5 w-5 place-items-center rounded-full bg-emerald-500 text-white">
          <IconCheck class="h-3 w-3" />
        </span>
        <span v-html="badge" />
      </span>
      <h1 v-if="title" :id="headingId"
        class="heading-display text-balance text-[2.4rem] leading-[1.06] text-slate-900 sm:text-5xl lg:text-[3.7rem] xl:text-[4rem]"
        v-html="title" />
      <p v-if="tagline" class="max-w-xl text-pretty text-base font-bold leading-relaxed text-slate-900 sm:text-lg"
        v-motion :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 700, delay: 150 } }" v-html="tagline" />
      <p v-if="description" class="max-w-xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg" v-motion
        :initial="{ opacity: 0, y: 16 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 700, delay: 250 } }"
        v-html="description" />

      <slot />
    </div>

    <div v-else-if="isSectionVariant" :class="sectionWrapClass">
      <span v-if="badge" data-slot="card-badge" :class="kickerClass" v-html="badge" />
      <component :is="headingTag" v-if="title || titleHighlight" :id="headingId" :class="sectionTitleClass">
        <span v-if="title" v-html="title" />
        <span v-if="titleHighlight" :class="sectionHighlightClass">{{ titleHighlight }}</span>
      </component>
      <p v-if="description" data-slot="card-description" :class="sectionDescriptionClass" v-html="description" />
      <slot />
    </div>

    <div v-else-if="variant === 'variant-1'" class="text-left">
      <span v-if="badge" data-slot="card-badge" :class="badgeClass" v-html="badge" />
      <h2 v-if="title" data-slot="card-title" :class="titleClass" v-html="title" />
      <p v-if="description" data-slot="card-description" :class="descriptionClass" v-html="description" />
    </div>

    <div v-else-if="variant === 'variant-2'" class="text-left text-white">
      <span v-if="badge" data-slot="card-badge" :class="badgeClass" v-html="badge" />
      <h2 v-if="title" data-slot="card-title" :class="titleClass" v-html="title" />
      <p v-if="description" data-slot="card-description" :class="descriptionClass" v-html="description" />
    </div>

    <div v-else>
      <span v-if="badge" data-slot="card-badge" :class="badgeClass" v-html="badge" />
      <h2 v-if="title" data-slot="card-title" :class="titleClass" v-html="title" />
      <p v-if="description" data-slot="card-description" :class="descriptionClass" v-html="description" />
      <slot />
    </div>
  </div>
</template>
