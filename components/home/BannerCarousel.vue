<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useIntervalFn, usePreferredReducedMotion } from '@vueuse/core'
import CardHeader from '~/components/ui/CardHeader.vue'

export interface BannerSlide {
  /** Public URL, e.g. `/img/banner/banner-1.jpg` */
  image: string
  /** Internal path (`/about`, `/#section`) or external URL (`https://…`). Omit for a non-clickable slide. */
  link?: string
  /** Accessible name when the slide is a link (recommended for SEO and screen readers). */
  label?: string
}

const props = withDefaults(
  defineProps<{
    slides?: BannerSlide[]
    /** Auto-advance interval in ms */
    interval?: number
    autoplay?: boolean
    /** Section badge (CardHeader) */
    badge?: string
    /** Section title (CardHeader) */
    title?: string
    /** Short supporting copy under the title */
    description?: string
  }>(),
  {
    badge: 'Featured',
    title: 'Programs, offers & next steps',
    description:
      'Seasonal campaigns, partner highlights, and quick links for families — tap a slide to book a demo, explore a program, or jump straight to sign-up.',
    slides: () => [
      {
        image: '/assets/img/banner/banner-1.png',
        link: '/#book-demo',
        label: 'Book a free demo — verified tutors',
      },
      {
        image: '/assets/img/banner/banner-1.png',
        link: '/home',
        label: 'Explore the home experience',
      },
      {
        image: '/assets/img/banner/banner-1.png',
        link: '/#join',
        label: 'Join as a parent or tutor',
      },
    ],
    interval: 6500,
    autoplay: true,
  },
)

const headerContent = computed(() => ({
  badge: props.badge,
  title: props.title,
  description: props.description,
  classes: 'mb-3 sm:mb-4 !px-0 !py-0 max-w-3xl mx-auto',
}))

const reduceMotion = usePreferredReducedMotion()
const active = ref(0)
const paused = ref(false)

const list = computed(() => props.slides.filter((s) => s.image))
const count = computed(() => list.value.length)

function isExternal(url: string) {
  return /^https?:\/\//i.test(url) || url.startsWith('mailto:') || url.startsWith('tel:')
}

function wrapTag(slide: BannerSlide) {
  if (!slide.link) return 'div'
  return isExternal(slide.link) ? 'a' : 'NuxtLink'
}

function wrapBind(slide: BannerSlide): Record<string, string> | { to: string } {
  if (!slide.link) return {}
  if (isExternal(slide.link)) {
    return { href: slide.link, target: '_blank', rel: 'noopener noreferrer' }
  }
  return { to: slide.link }
}

function go(delta: number) {
  if (count.value < 1) return
  active.value = (active.value + delta + count.value) % count.value
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
</script>

<template>
  <section v-if="count > 0" class="container-page pt-6 pb-2 sm:pt-8 sm:pb-3" aria-roledescription="carousel"
    :aria-label="`${props.title}. Promotional image carousel.`" @mouseenter="onEnter" @mouseleave="onLeave"
    @focusin="onEnter" @focusout="onLeave">
    <CardHeader theme="light" :badge="headerContent.badge" :title="headerContent.title"
      :description="headerContent.description" :classes="headerContent.classes" />
    <div
      class="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-sm ring-1 ring-black/5">
      <div class="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
        :style="{ transform: `translateX(-${active * 100}%)` }">
        <div v-for="(slide, i) in list" :key="`${slide.image}-${i}`" class="relative w-full shrink-0"
          :aria-hidden="i !== active">
          <component :is="wrapTag(slide)" v-bind="wrapBind(slide)"
            class="block aspect-[21/5] min-h-[140px] w-full max-sm:aspect-[4/3] sm:min-h-[160px] lg:min-h-[200px] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50"
            :aria-label="slide.link ? slide.label : undefined">
            <img :src="usePublicAsset(slide.image)" :alt="slide.label ?? 'Banner'" class="h-full w-full object-cover"
              loading="lazy" decoding="async" />
          </component>
        </div>
      </div>

      <template v-if="count > 1">
        <div
          class="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 sm:px-3"
          aria-hidden="true">
          <button type="button"
            class="pointer-events-auto grid h-9 w-9 place-items-center rounded-full border border-white/80 bg-white/90 text-slate-800 shadow-md backdrop-blur-sm transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 sm:h-10 sm:w-10"
            aria-label="Previous banner" @click="go(-1)">
            <span class="text-lg leading-none" aria-hidden="true">‹</span>
          </button>
          <button type="button"
            class="pointer-events-auto grid h-9 w-9 place-items-center rounded-full border border-white/80 bg-white/90 text-slate-800 shadow-md backdrop-blur-sm transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 sm:h-10 sm:w-10"
            aria-label="Next banner" @click="go(1)">
            <span class="text-lg leading-none" aria-hidden="true">›</span>
          </button>
        </div>
      </template>
    </div>

    <p class="sr-only" aria-live="polite">
      <template v-if="count > 1">Promotional banner {{ active + 1 }} of {{ count }}.</template>
    </p>
  </section>
</template>
