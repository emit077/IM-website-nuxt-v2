<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, ref } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/cardheader.vue'
import { aboutStory, type StoryMilestone } from '~/data/about'

type Accent = StoryMilestone['accent']

const accentClasses: Record<
  Accent,
  { node: string; ring: string; chip: string; line: string; glow: string; text: string; metric: string }
> = {
  blue: {
    node: 'bg-gradient-to-br from-blue-500 to-indigo-600',
    ring: 'ring-blue-200/70',
    chip: 'bg-blue-50 text-blue-700 ring-blue-100',
    line: 'from-blue-400 to-indigo-400',
    glow: 'bg-blue-400/20',
    text: 'text-blue-600',
    metric: 'text-blue-700',
  },
  indigo: {
    node: 'bg-gradient-to-br from-indigo-500 to-violet-600',
    ring: 'ring-indigo-200/70',
    chip: 'bg-indigo-50 text-indigo-700 ring-indigo-100',
    line: 'from-indigo-400 to-violet-400',
    glow: 'bg-indigo-400/20',
    text: 'text-indigo-600',
    metric: 'text-indigo-700',
  },
  violet: {
    node: 'bg-gradient-to-br from-violet-500 to-fuchsia-600',
    ring: 'ring-violet-200/70',
    chip: 'bg-violet-50 text-violet-700 ring-violet-100',
    line: 'from-violet-400 to-fuchsia-400',
    glow: 'bg-violet-400/20',
    text: 'text-violet-600',
    metric: 'text-violet-700',
  },
  emerald: {
    node: 'bg-gradient-to-br from-emerald-500 to-teal-600',
    ring: 'ring-emerald-200/70',
    chip: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
    line: 'from-emerald-400 to-teal-400',
    glow: 'bg-emerald-400/20',
    text: 'text-emerald-600',
    metric: 'text-emerald-700',
  },
  amber: {
    node: 'bg-gradient-to-br from-amber-500 to-orange-600',
    ring: 'ring-amber-200/70',
    chip: 'bg-amber-50 text-amber-700 ring-amber-100',
    line: 'from-amber-400 to-orange-400',
    glow: 'bg-amber-400/20',
    text: 'text-amber-600',
    metric: 'text-amber-700',
  },
  rose: {
    node: 'bg-gradient-to-br from-rose-500 to-pink-600',
    ring: 'ring-rose-200/70',
    chip: 'bg-rose-50 text-rose-700 ring-rose-100',
    line: 'from-rose-400 to-pink-400',
    glow: 'bg-rose-400/20',
    text: 'text-rose-600',
    metric: 'text-rose-700',
  },
}

const headerTitle = computed(
  () =>
    `${aboutStory.title} <span class="text-gradient-brand">${aboutStory.titleHighlight}</span> ${aboutStory.titleSuffix}`,
)

const scroller = ref<HTMLElement | null>(null)
const canScrollPrev = ref(false)
const canScrollNext = ref(true)

function updateScrollState() {
  const el = scroller.value
  if (!el) return
  canScrollPrev.value = el.scrollLeft > 4
  canScrollNext.value = el.scrollLeft + el.clientWidth < el.scrollWidth - 4
}

function scrollByCards(direction: 1 | -1) {
  const el = scroller.value
  if (!el) return
  const card = el.querySelector<HTMLElement>('[data-story-card]')
  const amount = card ? card.offsetWidth + 24 : el.clientWidth * 0.8
  el.scrollBy({ left: amount * direction, behavior: 'smooth' })
}

onMounted(() => {
  updateScrollState()
  scroller.value?.addEventListener('scroll', updateScrollState, { passive: true })
  window.addEventListener('resize', updateScrollState)
})

onBeforeUnmount(() => {
  scroller.value?.removeEventListener('scroll', updateScrollState)
  window.removeEventListener('resize', updateScrollState)
})
</script>

<template>
  <section id="our-story" class="relative overflow-hidden bg-[#f8fafc] py-14 sm:py-16 lg:py-20"
    aria-labelledby="our-story-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-violet-100/50 blur-3xl" />

    <div class="container-page relative">
      <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <CardHeader variant="section-left" heading-id="our-story-heading" content-class="!px-0 !py-0"
          :badge="aboutStory.badge" :title="headerTitle" :description="aboutStory.subtitle" />

        <!-- Slider controls -->
        <div class="hidden shrink-0 items-center gap-2 sm:flex">
          <button type="button" :disabled="!canScrollPrev" aria-label="Previous milestone"
            class="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-blue-300 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-700"
            @click="scrollByCards(-1)">
            <Icon icon="mdi:arrow-left" class="h-5 w-5" aria-hidden="true" />
          </button>
          <button type="button" :disabled="!canScrollNext" aria-label="Next milestone"
            class="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-blue-300 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-700"
            @click="scrollByCards(1)">
            <Icon icon="mdi:arrow-right" class="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <!-- Horizontal connected slider -->
      <div class="relative mt-10">
        <!-- Edge fades -->
        <div aria-hidden="true"
          class="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#f8fafc] to-transparent sm:w-12" />
        <div aria-hidden="true"
          class="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#f8fafc] to-transparent sm:w-12" />

        <ol ref="scroller"
          class="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 pt-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="list">
          <li v-for="(item, i) in aboutStory.milestones" :key="item.id" data-story-card
            class="relative w-[280px] shrink-0 snap-start sm:w-[320px]" v-motion :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 460, delay: 60 + i * 80 } }">
            <!-- Card -->
            <article :class="[
              'group relative mt-5 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_1px_3px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(15,23,42,0.12)] sm:p-6',
            ]">
              <span :class="[
                'pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full blur-2xl',
                accentClasses[item.accent].glow,
              ]" aria-hidden="true" />

              <div class="relative flex items-center justify-between gap-3">
                <span :class="[
                  'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ring-1 ring-inset',
                  accentClasses[item.accent].chip,
                ]">
                  {{ item.year }}
                </span>
                <span :class="[
                  'font-display text-3xl font-extrabold leading-none opacity-20',
                  accentClasses[item.accent].text,
                ]">
                  {{ item.step }}
                </span>
              </div>

              <h3 class="font-display relative mt-4 text-lg font-extrabold tracking-tight text-slate-900">
                {{ item.title }}
              </h3>
              <p class="relative mt-2 text-sm leading-relaxed text-slate-600">
                {{ item.description }}
              </p>

              <div v-if="item.metric" class="relative mt-5 flex items-center gap-2 border-t border-slate-100 pt-4">
                <Icon icon="mdi:trophy-variant-outline" :class="['h-5 w-5 shrink-0', accentClasses[item.accent].text]"
                  aria-hidden="true" />
                <span :class="['font-display text-base font-extrabold', accentClasses[item.accent].metric]">
                  {{ item.metric.value }}
                </span>
                <span class="text-xs font-medium text-slate-500">{{ item.metric.label }}</span>
              </div>
            </article>
          </li>
        </ol>
      </div>

      <!-- Mobile hint -->
      <p class="mt-2 flex items-center gap-1.5 text-xs font-medium text-slate-400 sm:hidden">
        <Icon icon="mdi:gesture-swipe-horizontal" class="h-4 w-4" aria-hidden="true" />
        Swipe to explore the journey
      </p>
    </div>
  </section>
</template>
