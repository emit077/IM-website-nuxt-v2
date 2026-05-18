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
    /** Stagger index for icon entrance animation */
    animationIndex?: number
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
    'group-hover:shadow-md group-hover:ring-blue-100/80',
    props.accent?.iconTint ?? '',
  ]
    .filter(Boolean)
    .join(' ')
})

const iconMotionInitial = { opacity: 0, scale: 0.55, rotate: -14 }

const iconMotionVisible = computed(() => ({
  opacity: 1,
  scale: 1,
  rotate: 0,
  transition: {
    delay: 160 + (props.animationIndex ?? 0) * 70,
    duration: 520,
    type: 'spring',
    stiffness: 280,
    damping: 20,
  },
}))

const iconGlyphClass = computed(() => {
  const map: Record<string, string> = {
    'mdi:home': 'service-icon--home',
    'mdi:book-education': 'service-icon--book',
    'mdi:monitor': 'service-icon--web',
    'mdi:account-multiple': 'service-icon--people',
    'mdi:airplane': 'service-icon--plane',
    'mdi:home-account': 'service-icon--livein',
    'mdi:tune-variant': 'service-icon--tune',
  }
  return map[props.iconMdi ?? ''] ?? ''
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
      <span
        v-if="iconMdi || iconSrc"
        :class="['service-icon-wrap', iconWrapClass]"
        :style="{ '--icon-delay': String((animationIndex ?? 0) * 0.35) }"
        v-motion
        :initial="iconMotionInitial"
        :visibleOnce="iconMotionVisible"
      >
        <Icon
          v-if="iconMdi"
          :icon="iconMdi"
          :class="[
            'service-icon inline-block h-8 w-8 shrink-0 sm:h-9 sm:w-9',
            iconMdiClass,
            iconGlyphClass,
            iconGlyphClass ? 'service-icon--animated' : '',
          ]"
          aria-hidden="true"
        />
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

<style scoped>
.service-icon-wrap {
  transition:
    transform 0.35s cubic-bezier(0.34, 1.4, 0.64, 1),
    box-shadow 0.3s ease,
    background-color 0.3s ease;
  animation: service-icon-wrap-pulse 4s ease-in-out infinite;
  animation-delay: calc(var(--icon-delay, 0) * 1s);
}

.service-icon--animated {
  transform-origin: center;
  will-change: transform;
}

.service-icon--home {
  animation: service-icon-home-idle 2.8s ease-in-out infinite;
}

.service-icon--book {
  animation: service-icon-book-idle 3.2s ease-in-out infinite;
}

.service-icon--web {
  animation: service-icon-web-idle 3s ease-in-out infinite;
}

.service-icon--people {
  animation: service-icon-people-idle 2.6s ease-in-out infinite;
}

.service-icon--plane {
  animation: service-icon-plane-idle 3.4s ease-in-out infinite;
}

.service-icon--livein {
  animation: service-icon-livein-idle 2.9s ease-in-out infinite;
}

.service-icon--tune {
  animation: service-icon-tune-idle 4s ease-in-out infinite;
}

.service-icon--home,
.service-icon--book,
.service-icon--web,
.service-icon--people,
.service-icon--plane,
.service-icon--livein,
.service-icon--tune {
  animation-delay: calc(var(--icon-delay, 0) * 1s);
}

.group:hover .service-icon-wrap {
  animation: service-icon-wrap-bounce 0.5s cubic-bezier(0.34, 1.4, 0.64, 1) forwards;
}

.group:hover .service-icon--home {
  animation: service-icon-home-hover 0.6s ease-out forwards;
}

.group:hover .service-icon--book {
  animation: service-icon-book-hover 0.6s ease-out forwards;
}

.group:hover .service-icon--web {
  animation: service-icon-web-hover 0.6s ease-out forwards;
}

.group:hover .service-icon--people {
  animation: service-icon-people-hover 0.6s ease-out forwards;
}

.group:hover .service-icon--plane {
  animation: service-icon-plane-hover 0.65s ease-out forwards;
}

.group:hover .service-icon--livein {
  animation: service-icon-livein-hover 0.55s ease-out forwards;
}

.group:hover .service-icon--tune {
  animation: service-icon-tune-hover 0.7s ease-out forwards;
}

@keyframes service-icon-wrap-pulse {
  0%,
  100% {
    box-shadow: 0 1px 2px rgba(15, 23, 42, 0.06);
  }
  50% {
    box-shadow: 0 4px 14px -2px rgba(37, 99, 235, 0.18);
  }
}

@keyframes service-icon-wrap-bounce {
  0% {
    transform: translateY(-4px) scale(1.08);
  }
  40% {
    transform: translateY(-8px) scale(1.12);
  }
  100% {
    transform: translateY(-5px) scale(1.1);
  }
}

@keyframes service-icon-home-idle {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}

@keyframes service-icon-home-hover {
  0%,
  100% {
    transform: translateY(-4px) scale(1.08);
  }
  40% {
    transform: translateY(-8px) scale(1.12);
  }
}

@keyframes service-icon-book-idle {
  0%,
  100% {
    transform: rotate(-2deg);
  }
  50% {
    transform: rotate(4deg) scale(1.05);
  }
}

@keyframes service-icon-book-hover {
  0% {
    transform: rotate(-2deg);
  }
  45% {
    transform: rotate(-12deg) scale(1.1);
  }
  100% {
    transform: rotate(-6deg) scale(1.06);
  }
}

@keyframes service-icon-web-idle {
  0%,
  100% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(1.06) rotate(5deg);
  }
}

@keyframes service-icon-web-hover {
  0% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(1.14) rotate(12deg);
  }
  100% {
    transform: scale(1.08) rotate(6deg);
  }
}

@keyframes service-icon-people-idle {
  0%,
  100% {
    transform: translateX(0) scale(1);
  }
  33% {
    transform: translateX(-2px) scale(1.03);
  }
  66% {
    transform: translateX(2px) scale(1.03);
  }
}

@keyframes service-icon-people-hover {
  0% {
    transform: translateX(0);
  }
  40% {
    transform: translateX(-4px) scale(1.08);
  }
  100% {
    transform: translateX(3px) scale(1.06);
  }
}

@keyframes service-icon-plane-idle {
  0%,
  100% {
    transform: translate(0, 0) rotate(-2deg);
  }
  50% {
    transform: translate(4px, -3px) rotate(-8deg);
  }
}

@keyframes service-icon-plane-hover {
  0% {
    transform: translate(0, 0) rotate(-2deg);
  }
  45% {
    transform: translate(8px, -6px) rotate(-14deg) scale(1.08);
  }
  100% {
    transform: translate(6px, -3px) rotate(-10deg) scale(1.05);
  }
}

@keyframes service-icon-livein-idle {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.07);
  }
}

@keyframes service-icon-livein-hover {
  0%,
  100% {
    transform: scale(1.07);
  }
  50% {
    transform: scale(1.14);
  }
}

@keyframes service-icon-tune-idle {
  0%,
  100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(24deg);
  }
}

@keyframes service-icon-tune-hover {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(108deg) scale(1.08);
  }
  100% {
    transform: rotate(84deg) scale(1.05);
  }
}

@media (prefers-reduced-motion: reduce) {
  .service-icon-wrap,
  .service-icon {
    transition: none;
    animation: none !important;
  }

  .group:hover .service-icon-wrap {
    transform: none;
  }
}
</style>
