<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { platformAccessSection } from '~/data/channel-partner-investment'

withDefaults(
  defineProps<{
    /** Compact mode when nested inside another section */
    embedded?: boolean
  }>(),
  { embedded: false },
)

const features = computed(() =>
  [...platformAccessSection.features].sort(
    (a, b) => a.title.length - b.title.length || a.title.localeCompare(b.title),
  ),
)

const activeIndex = ref(0)
const activeFeature = computed(() => features.value[activeIndex.value]!)

function selectFeature(index: number) {
  activeIndex.value = index
  const id = features.value[index]?.id
  if (id && import.meta.client) {
    history.replaceState(null, '', `#${id}`)
  }
}

function step(delta: number) {
  const last = features.value.length - 1
  const next = (activeIndex.value + delta + last + 1) % (last + 1)
  selectFeature(next)
}

function onTabKeydown(event: KeyboardEvent, index: number) {
  const last = features.value.length - 1
  let next = index

  if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
    event.preventDefault()
    next = index === last ? 0 : index + 1
  } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
    event.preventDefault()
    next = index === 0 ? last : index - 1
  } else if (event.key === 'Home') {
    event.preventDefault()
    next = 0
  } else if (event.key === 'End') {
    event.preventDefault()
    next = last
  } else {
    return
  }

  selectFeature(next)
  document.getElementById(`platform-feature-tab-${features.value[next]!.id}`)?.focus()
}

function syncFromHash() {
  if (!import.meta.client) return
  const hash = window.location.hash.replace(/^#/, '')
  if (!hash) return
  const index = features.value.findIndex((f) => f.id === hash)
  if (index >= 0) activeIndex.value = index
}

onMounted(() => {
  syncFromHash()
  window.addEventListener('hashchange', syncFromHash)
})

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('hashchange', syncFromHash)
  }
})
</script>

<template>
  <component :is="embedded ? 'div' : 'section'" id="platform-features" :class="embedded
    ? 'relative mt-4'
    : 'relative scroll-mt-20 overflow-hidden bg-white section-py'
    " :aria-labelledby="embedded ? undefined : 'platform-features-heading'"
    :aria-label="embedded ? 'Platform access modules' : undefined">
    <template v-if="!embedded">
      <div aria-hidden="true"
        class="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />
      <div aria-hidden="true"
        class="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-sky-100/40 blur-3xl" />
    </template>

    <div :class="embedded ? '' : 'container-page relative'">
      <div v-if="!embedded" class="mx-auto max-w-3xl text-center">
        <CardHeader heading-id="platform-features-heading" :badge="platformAccessSection.kicker"
          :title="platformAccessSection.title" :description="platformAccessSection.description"
          :classes="platformAccessSection.classes" />
      </div>

      <!-- Journey timeline -->
      <div :class="[
        'relative overflow-hidden  bg-white ',
        embedded ? 'mt-0' : 'mt-12',
      ]" v-motion :initial="{ opacity: 0, y: 16 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 520 } }">
        <div aria-hidden="true" class="pointer-events-none absolute inset-x-0 top-0 h-36 " />

        <div class="relative grid lg:grid-cols-[minmax(260px,0.9fr)_1.2fr]">
          <!-- Left: module list -->
          <aside class="relative border-b border-slate-100 p-4 sm:p-5 lg:border-b-0 lg:border-r lg:p-6" role="tablist"
            aria-label="Platform modules" aria-orientation="vertical">
            <ul class="space-y-1" role="list">
              <li v-for="(feature, i) in features" :key="feature.id">
                <button :id="`platform-feature-tab-${feature.id}`" type="button" role="tab"
                  :aria-selected="activeIndex === i" :aria-controls="`platform-feature-panel-${feature.id}`"
                  :tabindex="activeIndex === i ? 0 : -1"
                  class="group relative flex w-full items-center gap-3 rounded-2xl px-2.5 py-2.5 text-left transition duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300/60"
                  :class="activeIndex === i
                    ? 'bg-blue-600 text-white shadow-[0_14px_32px_-16px_rgba(37,99,235,0.7)]'
                    : 'hover:bg-slate-50'
                    " @click="selectFeature(i)" @keydown="onTabKeydown($event, i)">
                  <span :class="[
                    'grid h-9 w-9 shrink-0 place-items-center rounded-xl transition',
                    activeIndex === i
                      ? 'bg-white/15 text-white'
                      : 'bg-blue-50 text-blue-600 ring-1 ring-blue-100 group-hover:bg-blue-100',
                  ]" aria-hidden="true">
                    <Icon :icon="feature.iconMdi" class="h-[18px] w-[18px]" />
                  </span>

                  <span class="min-w-0 flex-1">
                    <span :class="[
                      'block font-display text-[13px] font-bold leading-snug',
                      activeIndex === i ? 'text-white' : 'text-slate-900',
                    ]">
                      {{ feature.title }}
                    </span>
                  </span>

                  <Icon icon="mdi:chevron-right" :class="[
                    'h-4 w-4 shrink-0 transition',
                    activeIndex === i ? 'text-white/80' : 'text-slate-300 group-hover:text-blue-500',
                  ]" aria-hidden="true" />
                </button>
              </li>
            </ul>
          </aside>

          <!-- Right: active detail -->
          <div :id="`platform-feature-panel-${activeFeature.id}`" :key="activeFeature.id" role="tabpanel"
            :aria-labelledby="`platform-feature-tab-${activeFeature.id}`" class="relative px-5 py-6 sm:px-7 sm:py-8">

            <div class="relative">
              <div class="flex flex-wrap items-start gap-4">
                <span
                  class="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-[0_14px_32px_-14px_rgba(37,99,235,0.75)]"
                  aria-hidden="true">
                  <Icon :icon="activeFeature.iconMdi" class="h-7 w-7" />
                </span>
                <div class="min-w-0 flex-1">
                  <h3 class="mt-1 font-display text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                    {{ activeFeature.title }}
                  </h3>
                  <p class="mt-3 max-w-xl text-sm leading-relaxed text-slate-600">
                    {{ activeFeature.description }}
                  </p>
                </div>
              </div>


              <p class="mt-6 text-sm  font-bold   text-slate-500">
                What's included
              </p>
              <ul class="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2" role="list">
                <li v-for="(point, pi) in activeFeature.points" :key="point" v-motion :initial="{ opacity: 0, y: 8 }"
                  :visibleOnce="{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 40 + pi * 40, duration: 360 },
                  }">
                  <div
                    class="flex h-full gap-2.5 rounded-2xl border border-slate-100 bg-slate-50/70 px-3.5 py-3 transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white hover:shadow-soft">
                    <span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-600"
                      aria-hidden="true">
                      <Icon icon="mdi:arrow-right" class="h-3.5 w-3.5" />
                    </span>
                    <span class="text-[13px] font-medium leading-snug text-slate-700">
                      {{ point }}
                    </span>
                  </div>
                </li>
              </ul>

              <div class="mt-7 flex items-center justify-between gap-3 border-t border-slate-100 pt-5">
                <button type="button"
                  class="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-600 transition hover:border-blue-200 hover:text-blue-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300/60"
                  :disabled="activeIndex === 0" :class="activeIndex === 0 ? 'cursor-not-allowed opacity-40' : ''"
                  @click="step(-1)">
                  <Icon icon="mdi:arrow-left" class="h-4 w-4" />
                  Previous
                </button>
                <button type="button"
                  class="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-3.5 py-2 text-xs font-bold text-white shadow-[0_10px_24px_-12px_rgba(37,99,235,0.7)] transition hover:bg-blue-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300/60"
                  @click="step(1)">
                  {{ activeIndex === features.length - 1 ? 'Back to start' : 'Next module' }}
                  <Icon :icon="activeIndex === features.length - 1 ? 'mdi:refresh' : 'mdi:arrow-right'"
                    class="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </component>
</template>
