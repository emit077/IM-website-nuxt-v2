<script setup lang="ts">
import type { Component } from 'vue'
import { computed, onMounted, onUnmounted, useSlots } from 'vue'
import ActionBtn from '~/components/ui/btns/ActionBtn.vue'
import type { ActionBtnVariant } from '~/components/ui/btns/ActionBtn.vue'
import HeroTickerStrip from '~/components/ui/HeroTickerStrip.vue'

export type SecondaryHeroActionBtn = {
  label: string
  href?: string
  link?: string
  variant?: ActionBtnVariant
  icon?: Component | string
  showArrow?: boolean
  iconWrapperClass?: string
}

export type SecondaryHeroContent = {
  badge?: string
  title?: string
  subtitle?: string
  description?: string
  caption?: string
  actionBtns?: SecondaryHeroActionBtn[]
  ticker?: string[]
  headingId?: string
  tickerAriaLabel?: string
  patternId?: string
}

const props = defineProps<{
  heroContent: SecondaryHeroContent
}>()

const slots = useSlots()
const { activateSecondaryHeroTheme, deactivateSecondaryHeroTheme } = useSecondaryHeroTheme()

const headingId = computed(() => props.heroContent.headingId || 'secondary-hero-heading')
const patternId = computed(() => props.heroContent.patternId || `${headingId.value}-waves`)

const actionBtns = computed(() =>
  (props.heroContent.actionBtns ?? []).map((btn, index) => ({
    ...btn,
    href: btn.href || btn.link || '#',
    variant: btn.variant ?? (index === 0 ? 'theme-secondary' : 'secondary'),
    showArrow: btn.showArrow ?? index === 0,
  })),
)

const showTitle = computed(() => Boolean(slots.title || props.heroContent.title))

onMounted(() => {
  activateSecondaryHeroTheme()
})

onUnmounted(() => {
  deactivateSecondaryHeroTheme()
})
</script>

<template>
  <section class="secondary-hero relative overflow-x-clip" :aria-labelledby="showTitle ? headingId : undefined">
    <svg aria-hidden="true" class="pointer-events-none absolute inset-0 h-full w-full opacity-[0.14]"
      xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <defs>
        <pattern :id="patternId" width="120" height="60" patternUnits="userSpaceOnUse">
          <path d="M0 30 Q 30 0 60 30 T 120 30" fill="none" stroke="white" stroke-width="1.2" />
          <path d="M0 45 Q 30 20 60 45 T 120 45" fill="none" stroke="white" stroke-width="0.8" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" :fill="`url(#${patternId})`" />
    </svg>

    <div aria-hidden="true"
      class="pointer-events-none absolute -left-28 top-10 h-80 w-80 rounded-full bg-[#6b8cff]/25 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-24 bottom-24 h-96 w-96 rounded-full bg-[#1518b8]/35 blur-3xl" />

    <div class="container-page relative z-[1] pb-24 pt-12 sm:pb-28 lg:pb-32 lg:pt-16">
      <div class="mx-auto flex max-w-6xl flex-col items-center text-center">
        <slot name="badge">
          <p v-if="heroContent.badge"
            class="font-display text-[11px] font-bold tracking-[0.28em] text-white/75 sm:text-xs" v-motion
            :initial="{ opacity: 0, y: 10 }" :enter="{ opacity: 1, y: 0, transition: { duration: 450 } }"
            v-html="heroContent.badge" />
        </slot>

        <slot name="title">
          <h1 v-if="heroContent.title" :id="headingId"
            class="secondary-hero-title mt-5 text-balance font-display text-[2.6rem] font-black leading-[0.95] tracking-[-0.03em] text-white sm:text-5xl lg:text-[4.5rem] xl:text-[5rem]"
            v-motion :initial="{ opacity: 0, y: 16 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 60 } }" v-html="heroContent.title" />
        </slot>

        <slot name="subtitle">
          <p v-if="heroContent.subtitle"
            class="mt-4 max-w-5xl text-pretty text-base font-bold leading-relaxed text-white/80 sm:text-lg" v-motion
            :initial="{ opacity: 0, y: 12 }" :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 120 } }"
            v-html="heroContent.subtitle" />
        </slot>

        <slot name="description">
          <p v-if="heroContent.description"
            class="mt-6 max-w-5xl text-pretty text-[14px] font-medium leading-relaxed text-white/85 sm:mt-7 sm:text-[15px]"
            v-motion :initial="{ opacity: 0, y: 12 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 180 } }" v-html="heroContent.description" />
        </slot>

        <slot name="caption">
          <p v-if="heroContent.caption"
            class="mt-4 max-w-5xl text-pretty text-sm font-medium leading-relaxed text-white/65" v-motion
            :initial="{ opacity: 0, y: 10 }" :enter="{ opacity: 1, y: 0, transition: { duration: 450, delay: 220 } }"
            v-html="heroContent.caption" />
        </slot>

        <slot name="actions">
          <div v-if="actionBtns.length"
            class="mt-6 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center"
            v-motion :initial="{ opacity: 0, y: 12 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 280 } }">
            <ActionBtn v-for="(btn, index) in actionBtns" :key="`${btn.label}-${index}`" :variant="btn.variant"
              :label="btn.label" :href="btn.href" :icon="btn.icon" :show-arrow="btn.showArrow"
              :icon-wrapper-class="btn.iconWrapperClass" />
          </div>
        </slot>

        <slot />
      </div>
    </div>

    <slot name="ticker">
      <HeroTickerStrip
        :items="heroContent.ticker"
        :aria-label="heroContent.tickerAriaLabel || 'Highlights'"
      />
    </slot>
  </section>
</template>

<style scoped>
.secondary-hero {
  background: var(--theme-blue, #2a2fff);
}

.secondary-hero-title {
  text-shadow: 0 2px 0 rgba(0, 0, 0, 0.04);
}
</style>
