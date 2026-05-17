<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    title: string
    description: string
    features: string[]
    href?: string
    iconSrc?: string
    iconMdi?: string
    span?: 2
    variant?: 'surface' | 'primary'
    accent?: {
      checkCircle: string
      link: string
      iconTint: string
      headingBar?: string
      iconMdiClass?: string
    }
  }>(),
  {
    href: '#tutors',
    variant: 'surface',
    accent: () => ({
      checkCircle: 'bg-blue-600 text-white',
      link: 'text-blue-600 group-hover:text-blue-700',
      iconTint: 'bg-blue-50 ring-1 ring-blue-100/90',
      headingBar: 'bg-blue-600',
      iconMdiClass: 'text-slate-600',
    }),
  },
)

const isPrimary = computed(() => props.variant === 'primary')

const rootClass = computed(() => {
  if (isPrimary.value) {
    return [
      'group relative flex min-h-[300px] min-w-0 flex-col overflow-hidden rounded-2xl border border-white/20',
      'bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-900 p-5 text-center shadow-[0_4px_6px_-1px_rgba(0,0,0,0.06),0_16px_40px_-12px_rgba(29,78,216,0.45),inset_0_1px_0_rgba(255,255,255,0.12)]',
      'ring-1 ring-white/10 transition duration-300 ease-out',
      'before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:bg-[radial-gradient(120%_80%_at_10%_-20%,rgba(255,255,255,0.22),transparent_55%)] before:opacity-90 before:content-[""]',
      'hover:-translate-y-1.5 hover:border-white/30 hover:shadow-[0_8px_12px_-2px_rgba(0,0,0,0.08),0_24px_56px_-14px_rgba(37,99,235,0.55),inset_0_1px_0_rgba(255,255,255,0.18)]',
      'sm:min-h-0 sm:p-6',
      props.span === 2 ? 'lg:flex-row lg:items-stretch lg:gap-8 lg:p-7 lg:text-left xl:gap-10 xl:p-8' : '',
    ]
      .filter(Boolean)
      .join(' ')
  }

  return [
    'group relative flex min-h-[300px] min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-5 text-center',
    'shadow-[0_1px_0_rgba(15,23,42,0.04),0_2px_8px_-2px_rgba(15,23,42,0.06),0_12px_32px_-10px_rgba(15,23,42,0.08)]',
    'ring-1 ring-slate-900/[0.04] transition duration-300 ease-out',
    'before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-[1] before:h-[3px] before:rounded-t-2xl before:bg-gradient-to-r before:from-blue-500/0 before:via-blue-500/30 before:to-indigo-500/0 before:opacity-0 before:transition-opacity before:duration-300 before:content-[""]',
    'hover:-translate-y-1.5 hover:border-indigo-200/80 hover:shadow-[0_4px_12px_-2px_rgba(15,23,42,0.08),0_20px_48px_-16px_rgba(51,65,85,0.14)] hover:ring-indigo-500/[0.08] hover:before:opacity-100',
    'sm:min-h-0 sm:p-5',
    props.span === 2 ? 'lg:flex-row lg:items-stretch lg:gap-8 lg:p-6 lg:text-left xl:gap-10 xl:p-7' : '',
  ]
    .filter(Boolean)
    .join(' ')
})

const iconWrapClass = computed(() => {
  if (isPrimary.value) {
    return 'flex h-[4.75rem] w-[4.75rem] items-center justify-center rounded-2xl bg-white/15 shadow-inner shadow-black/10 ring-1 ring-white/30 backdrop-blur-sm'
  }
  return [
    'flex h-[4.75rem] w-[4.75rem] items-center justify-center rounded-2xl shadow-sm shadow-slate-900/[0.06] ring-1 ring-slate-900/[0.04]',
    'transition duration-300 group-hover:shadow-md group-hover:ring-blue-100/80',
    props.accent?.iconTint ?? '',
  ]
    .filter(Boolean)
    .join(' ')
})

const titleClass = computed(() =>
  isPrimary.value
    ? 'font-display text-base font-bold tracking-tight text-white sm:text-lg'
    : 'font-display text-base font-bold tracking-tight text-slate-900 sm:text-lg',
)

const barClass = computed(() =>
  isPrimary.value
    ? 'block h-0.5 w-10 rounded-full bg-amber-400/95 shadow-sm shadow-amber-900/20 mx-auto my-2.5'
    : ['mx-auto my-2.5 block h-0.5 w-10 rounded-full shadow-sm', props.accent?.headingBar ?? 'bg-blue-600'].join(' '),
)

const descClass = computed(() =>
  isPrimary.value
    ? 'mt-0.5 flex-1 text-sm leading-relaxed text-blue-50/95 sm:text-[15px]'
    : 'mt-0.5 flex-1 text-sm leading-relaxed text-slate-600 sm:text-[15px]',
)

const dividerClass = computed(() =>
  isPrimary.value
    ? 'mx-auto my-3 block h-px w-full max-w-[min(100%,20rem)] rounded-full bg-gradient-to-r from-transparent via-white/35 to-transparent lg:mx-0 lg:max-w-none'
    : 'mx-auto my-3 block h-px w-full max-w-[min(100%,20rem)] rounded-full bg-gradient-to-r from-transparent via-slate-200 to-transparent lg:mx-0 lg:max-w-none',
)

const featurePanelClass = computed(() =>
  isPrimary.value
    ? 'rounded-xl border border-white/10 bg-white/[0.08] px-3.5 py-3.5 backdrop-blur-[2px]'
    : 'rounded-xl border border-slate-100 bg-gradient-to-b from-slate-50/95 to-slate-50/50 px-3.5 py-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]',
)

const featureTextClass = computed(() =>
  isPrimary.value ? 'text-[14px] leading-snug text-white/95' : 'text-[14px] leading-snug text-slate-700',
)

const checkClass = computed(() =>
  isPrimary.value
    ? 'mt-[0.12em] grid size-[1.35em] min-h-[1.25rem] min-w-[1.25rem] shrink-0 place-items-center rounded-full bg-white text-blue-700 shadow-sm shadow-slate-900/10'
    : [
      'mt-[0.12em] grid size-[1.35em] min-h-[1.25rem] min-w-[1.25rem] shrink-0 place-items-center rounded-full text-white shadow-sm ring-1 ring-black/[0.06]',
      props.accent?.checkCircle ?? '',
    ].join(' '),
)

const linkClass = computed(() =>
  isPrimary.value
    ? 'mt-5 inline-flex items-center justify-center gap-1.5  px-3 py-2 text-sm font-semibold text-white  duration-200 group-hover:gap-2 group-hover:bg-white/18 hover:text-amber-100'
    : [
      'mt-5 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-semibold transition-[gap,background-color,box-shadow] duration-200',
      'group-hover:gap-2  ',
      props.accent?.link ?? '',
    ].join(' '),
)

const iconMdiClass = computed(() => (isPrimary.value ? 'text-white' : props.accent?.iconMdiClass ?? 'text-slate-600'))
</script>

<template>
  <a :href="href" :class="rootClass">
    <div
      :class="['mb-4 flex justify-center pt-0.5', span === 2 && 'lg:mb-0 lg:shrink-0 lg:justify-start lg:self-center']">
      <span :class="iconWrapClass" v-if="iconMdi || iconSrc">
        <Icon v-if="iconMdi" :icon="iconMdi" :class="['h-8 w-8 sm:h-9 sm:w-9', iconMdiClass]" aria-hidden="true" />
        <img v-else-if="iconSrc" :src="usePublicAsset(iconSrc)" :alt="`${title} service`" width="30" height="30"
          :class="['h-8 w-8 object-contain', isPrimary && 'brightness-0 invert']" loading="lazy" />
      </span>
    </div>

    <div :class="span === 2 ? 'flex min-h-0 flex-1 flex-col lg:min-w-0' : 'contents'">
      <h3 :class="[titleClass, span === 2 && 'text-center lg:text-left']">
        {{ title }}
      </h3>
      <span :class="[barClass, span === 2 && 'lg:mx-0']" />
      <p :class="[descClass, span === 2 && 'text-center lg:text-left']">
        {{ description }}
      </p>
      <span :class="[dividerClass, span === 2 && 'lg:mx-0']" />
      <div class="mt-1" :class="featurePanelClass">
        <ul class="space-y-2.5 text-left" :class="featureTextClass">
          <li v-for="feat in features" :key="feat" class="flex items-start gap-2">
            <span :class="checkClass" aria-hidden="true">
              <Icon icon="mdi:check"
                :class="isPrimary ? 'size-[1.08em] min-h-3.5 min-w-3.5 text-blue-700' : 'size-[1.08em] min-h-3.5 min-w-3.5 text-white'" />
            </span>
            <span>{{ feat }}</span>
          </li>
        </ul>
      </div>

      <span :class="[linkClass, span === 2 && 'lg:justify-start']">
        Know more
        <svg class="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24"
          fill="none" aria-hidden="true">
          <path d="M8 12h8" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          <path d="M13 7l5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </span>
    </div>
  </a>
</template>
