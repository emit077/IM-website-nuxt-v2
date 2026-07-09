<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { computed, nextTick, ref, shallowRef, watch } from 'vue'
import { useIntervalFn, usePreferredReducedMotion } from '@vueuse/core'
import type { Component } from 'vue'
import HeroScreen1 from './HeroScreen1.vue'
import HeroScreen2 from './HeroScreen2.vue'
import HeroScreen3 from './HeroScreen3.vue'
import HeroScreen4 from './HeroScreen4.vue'

const props = withDefaults(
  defineProps<{
    /** Auto-advance interval in ms */
    interval?: number
    autoplay?: boolean
  }>(),
  {
    interval: 6500,
    autoplay: true,
  },
)

const heroScreens = shallowRef<Component[]>([
  HeroScreen1,
  HeroScreen2,
  HeroScreen3,
  HeroScreen4,
])

const reduceMotion = usePreferredReducedMotion()
const paused = ref(false)
/** No CSS transition while snapping off a clone (same frame / instant reposition). */
const noTransition = ref(false)
const trackIndex = ref(0)

const count = computed(() => heroScreens.value.length)

/** [last, …slides, first] so we can always move one step in the track without reversing the wrap. */
const extendedScreens = computed((): Component[] => {
  const s = heroScreens.value
  if (s.length < 2) return [...s]
  const last = s[s.length - 1]!
  const first = s[0]!
  return [last, ...s, first]
})

function syncTrackStart() {
  if (count.value >= 2) trackIndex.value = 1
  else trackIndex.value = 0
}

watch(count, syncTrackStart, { immediate: true })

/** 0-based index of the “logical” slide shown (for copy + live region). */
const realActiveIndex = computed(() => {
  const len = count.value
  const t = trackIndex.value
  if (len < 2) return t
  if (t === 0) return len - 1
  if (t === len + 1) return 0
  return t - 1
})

const slideTransitionOn = computed(
  () => !noTransition.value && !reduceMotion.value,
)

/** Instant wrap when motion is reduced (no transitionend, no clone frame). */
function snapIfOnCloneSync() {
  const len = count.value
  const t = trackIndex.value
  if (len < 2) return
  if (t === len + 1) trackIndex.value = 1
  else if (t === 0) trackIndex.value = len
}

/** After a linear slide onto a clone, jump to the matching real panel without animating back. */
async function snapIfOnCloneAfterTransition() {
  const len = count.value
  const t = trackIndex.value
  if (len < 2) return
  if (t === len + 1) {
    noTransition.value = true
    trackIndex.value = 1
    await nextTick()
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        noTransition.value = false
      })
    })
  } else if (t === 0) {
    noTransition.value = true
    trackIndex.value = len
    await nextTick()
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        noTransition.value = false
      })
    })
  }
}

function go(delta: number) {
  if (count.value < 2) return
  trackIndex.value += delta
  if (reduceMotion.value) snapIfOnCloneSync()
}

function onTrackTransitionEnd(ev: TransitionEvent) {
  if (ev.propertyName !== 'transform') return
  if (ev.target !== ev.currentTarget) return
  if (reduceMotion.value) return
  void snapIfOnCloneAfterTransition()
}

const autoplayEnabled = computed(
  () => props.autoplay && count.value > 1 && !reduceMotion.value,
)

const { pause, resume } = useIntervalFn(
  () => {
    if (!paused.value && autoplayEnabled.value) go(1)
  },
  props.interval,
  { immediate: false },
)

watch(
  autoplayEnabled,
  (on) => {
    if (on) resume()
    else pause()
  },
  { immediate: true },
)

function onEnter() {
  paused.value = true
}

function onLeave() {
  paused.value = false
}

function onFocusIn() {
  paused.value = true
}

function onFocusOut() {
  paused.value = false
}
</script>

<template>
  <section class="relative w-full overflow-hidden" role="region" aria-roledescription="carousel"
    aria-label="Featured highlights" @mouseenter="onEnter" @mouseleave="onLeave" @focusin="onFocusIn"
    @focusout="onFocusOut">
    <div class="relative">
      <div class="flex w-full duration-500 ease-linear motion-reduce:transition-none"
        :class="slideTransitionOn ? 'transition-transform' : 'transition-none'"
        :style="{ transform: `translateX(-${trackIndex * 100}%)` }" @transitionend="onTrackTransitionEnd">
        <div v-for="(Screen, i) in extendedScreens" :key="`track-${i}`" class="relative w-full shrink-0"
          :aria-hidden="i !== trackIndex">
          <component :is="Screen" />
        </div>
      </div>

      <template v-if="count > 1">
        <div
          class="pointer-events-none absolute inset-y-0 left-0 right-0 z-[2] flex items-center justify-between px-2 sm:px-4"
          aria-hidden="true">
          <button type="button"
            class="pointer-events-auto grid h-10 w-10 place-items-center rounded-full border border-indigo-100/90 bg-white/95 text-indigo-600 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.2)] backdrop-blur-md transition hover:border-indigo-200 hover:bg-white hover:text-indigo-700 hover:shadow-lg active:scale-[0.96] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 sm:h-11 sm:w-11"
            aria-label="Previous slide" @click="go(-1)">
            <Icon icon="mdi:chevron-left" class="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
          </button>
          <button type="button"
            class="pointer-events-auto grid h-10 w-10 place-items-center rounded-full border border-indigo-100/90 bg-white/95 text-indigo-600 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.2)] backdrop-blur-md transition hover:border-indigo-200 hover:bg-white hover:text-indigo-700 hover:shadow-lg active:scale-[0.96] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 sm:h-11 sm:w-11"
            aria-label="Next slide" @click="go(1)">
            <Icon icon="mdi:chevron-right" class="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
          </button>
        </div>
      </template>
    </div>

    <p class="sr-only" aria-live="polite">
      <template v-if="count > 1">
        Slide {{ realActiveIndex + 1 }} of {{ count }}.
      </template>
    </p>
  </section>
</template>
