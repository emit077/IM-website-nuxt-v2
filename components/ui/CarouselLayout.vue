<script setup lang="ts" generic="T">
import { Icon } from '@iconify/vue'
import { computed, nextTick, ref, toRef, watch } from 'vue'
import { useIntervalFn, usePreferredReducedMotion } from '@vueuse/core'

const props = withDefaults(
    defineProps<{
        items: T[]
        interval?: number
        autoplay?: boolean
        showButtons?: boolean
        showDots?: boolean
        pauseOnHover?: boolean
        ariaLabel?: string
    }>(),
    {
        interval: 5000,
        autoplay: true,
        showButtons: true,
        showDots: false,
        pauseOnHover: true,
        ariaLabel: 'Carousel',
    },
)

const emit = defineEmits<{
    change: [index: number]
}>()

/** Returns 'reduce' | 'no-preference' — both are truthy, so compare explicitly. */
const preferredMotion = usePreferredReducedMotion()
const prefersReducedMotion = computed(() => preferredMotion.value === 'reduce')
const paused = ref(false)
/** Disable CSS transition while snapping off a clone (instant reposition). */
const noTransition = ref(false)
/** True while a slide animation is in progress — blocks overlapping advances. */
const isAnimating = ref(false)
/** Index into the extended track: [last, …slides, first]. */
const trackIndex = ref(0)

const count = computed(() => props.items.length)
const canNavigate = computed(() => count.value > 1)

type TrackSlide = { item: T; realIndex: number }

/** [last, …items, first] so wrap always moves one step — never reverse-scrolls. */
const extendedSlides = computed((): TrackSlide[] => {
    const items = props.items
    if (items.length < 2) {
        return items.map((item, realIndex) => ({ item, realIndex }))
    }
    const last = items[items.length - 1]!
    const first = items[0]!
    return [
        { item: last, realIndex: items.length - 1 },
        ...items.map((item, realIndex) => ({ item, realIndex })),
        { item: first, realIndex: 0 },
    ]
})

function syncTrackStart() {
    trackIndex.value = count.value >= 2 ? 1 : 0
    isAnimating.value = false
    noTransition.value = false
}

watch(count, syncTrackStart, { immediate: true })

/** Logical 0-based slide index (for dots + live region). */
const realActiveIndex = computed(() => {
    const len = count.value
    const t = trackIndex.value
    if (len < 2) return t
    if (t === 0) return len - 1
    if (t === len + 1) return 0
    return t - 1
})

const slideTransitionOn = computed(
    () => !noTransition.value && !prefersReducedMotion.value,
)

function isOnClone(t = trackIndex.value) {
    const len = count.value
    return len >= 2 && (t === 0 || t === len + 1)
}

/** Instantly move from a clone onto the matching real slide (no animation). */
function snapIfOnCloneSync() {
    if (!isOnClone()) return
    const len = count.value
    trackIndex.value = trackIndex.value === len + 1 ? 1 : len
}

async function snapIfOnCloneAfterTransition() {
    if (!isOnClone()) {
        isAnimating.value = false
        return
    }
    noTransition.value = true
    snapIfOnCloneSync()
    await nextTick()
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            noTransition.value = false
            isAnimating.value = false
        })
    })
}

function go(delta: number) {
    if (!canNavigate.value) return
    // Never stack advances — that overshoots clones and shows an empty frame.
    if (isAnimating.value) return
    // If a previous snap was interrupted, normalize first.
    if (isOnClone()) {
        noTransition.value = true
        snapIfOnCloneSync()
        noTransition.value = false
    }

    isAnimating.value = true
    trackIndex.value += delta

    if (prefersReducedMotion.value) {
        snapIfOnCloneSync()
        isAnimating.value = false
    }
}

function goTo(index: number) {
    if (index < 0 || index >= count.value) return
    if (isAnimating.value) return
    if (count.value < 2) {
        trackIndex.value = index
        return
    }
    if (index === realActiveIndex.value) return
    isAnimating.value = true
    trackIndex.value = index + 1
    if (prefersReducedMotion.value) {
        isAnimating.value = false
    }
}

function onTrackTransitionEnd(ev: TransitionEvent) {
    if (ev.propertyName !== 'transform') return
    if (ev.target !== ev.currentTarget) return
    if (prefersReducedMotion.value) return
    void snapIfOnCloneAfterTransition()
}

watch(realActiveIndex, (index) => emit('change', index))

const autoplayEnabled = computed(
    () => props.autoplay && canNavigate.value && !prefersReducedMotion.value,
)

const { pause, resume } = useIntervalFn(
    () => {
        if (!paused.value && autoplayEnabled.value && !isAnimating.value) go(1)
    },
    toRef(props, 'interval'),
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
    if (props.pauseOnHover) paused.value = true
}

function onLeave() {
    if (props.pauseOnHover) paused.value = false
}

defineExpose({
    active: realActiveIndex,
    go,
    goTo,
    next: () => go(1),
    prev: () => go(-1),
})
</script>

<template>
    <section class="relative w-full overflow-hidden" role="region" aria-roledescription="carousel"
        :aria-label="ariaLabel" @mouseenter="onEnter" @mouseleave="onLeave" @focusin="onEnter" @focusout="onLeave">
        <div class="relative w-full overflow-hidden">
            <div class="flex w-full duration-500 ease-linear motion-reduce:transition-none"
                :class="slideTransitionOn ? 'transition-transform' : 'transition-none'"
                :style="{ transform: `translateX(-${trackIndex * 100}%)` }" @transitionend="onTrackTransitionEnd">
                <div v-for="(slide, i) in extendedSlides" :key="`track-${i}-${slide.realIndex}`"
                    class="relative w-full min-w-full basis-full shrink-0" role="group" aria-roledescription="slide"
                    :aria-label="`Slide ${slide.realIndex + 1} of ${count}`" :aria-hidden="i !== trackIndex">
                    <slot :item="slide.item" :index="slide.realIndex" :active="i === trackIndex" />
                </div>
            </div>

            <template v-if="canNavigate && showButtons">
                <div class="pointer-events-none absolute inset-y-0 left-0 right-0 z-[2] hidden items-center justify-between px-2 sm:px-4 md:flex"
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

        <div v-if="canNavigate && showDots" class="mt-4 flex items-center justify-center gap-2" role="tablist"
            :aria-label="`${ariaLabel} slides`">
            <button v-for="(_, i) in items" :key="`dot-${i}`" type="button" role="tab"
                class="h-2.5 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                :class="i === realActiveIndex
                    ? 'w-6 bg-indigo-600'
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                    " :aria-label="`Go to slide ${i + 1}`" :aria-selected="i === realActiveIndex" @click="goTo(i)" />
        </div>

        <p class="sr-only" aria-live="polite">
            <template v-if="canNavigate">
                Slide {{ realActiveIndex + 1 }} of {{ count }}.
            </template>
        </p>
    </section>
</template>
