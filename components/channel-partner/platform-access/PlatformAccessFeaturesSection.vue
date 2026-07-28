<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { platformAccessSection } from '~/data/channel-partner-investment'

const features = platformAccessSection.features
const activeIndex = ref(0)

function selectFeature(index: number) {
  activeIndex.value = index
  const id = features[index]?.id
  if (id && import.meta.client) {
    history.replaceState(null, '', `#${id}`)
  }
}

function onTabKeydown(event: KeyboardEvent, index: number) {
  const last = features.length - 1
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
  document.getElementById(`platform-feature-tab-${features[next]!.id}`)?.focus()
}

function syncFromHash() {
  if (!import.meta.client) return
  const hash = window.location.hash.replace(/^#/, '')
  if (!hash) return
  const index = features.findIndex((f) => f.id === hash)
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
  <section id="platform-features" class="relative scroll-mt-20 bg-white " aria-labelledby="platform-features-heading">
    <div>
      <!-- Mobile accordion -->
      <ol class="mt-10 space-y-3 lg:hidden" role="list" aria-label="Platform access modules">
        <li v-for="(feature, i) in features" :id="feature.id" :key="feature.id" class="scroll-mt-24">
          <div :class="[
            'overflow-hidden rounded-2xl border transition duration-200',
            activeIndex === i
              ? 'border-blue-200 bg-white shadow-soft'
              : 'border-slate-200/80 bg-white/80',
          ]">
            <button type="button"
              class="flex w-full items-center gap-3 px-4 py-3.5 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-blue-300/60"
              :aria-expanded="activeIndex === i" :aria-controls="`platform-feature-mobile-${feature.id}`"
              @click="selectFeature(i)">
              <span :class="[
                'grid h-10 w-10 shrink-0 place-items-center rounded-xl',
                activeIndex === i ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500',
              ]" aria-hidden="true">
                <Icon :icon="feature.iconMdi" class="h-5 w-5" />
              </span>
              <span class="min-w-0 flex-1">
                <span class="block font-display text-[15px] font-bold leading-snug text-slate-900">
                  {{ feature.title }}
                </span>
              </span>
              <Icon :icon="activeIndex === i ? 'mdi:chevron-up' : 'mdi:chevron-down'"
                class="h-5 w-5 shrink-0 text-slate-400" aria-hidden="true" />
            </button>

            <div :id="`platform-feature-mobile-${feature.id}`" :hidden="activeIndex !== i"
              class="border-t border-slate-100 px-4 pb-5 pt-4">
              <div class="flex items-start gap-3">
                <span class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-700"
                  aria-hidden="true">
                  <Icon :icon="feature.iconMdi" class="h-5 w-5" />
                </span>
                <p class="text-[14px] leading-relaxed text-slate-600">{{ feature.description }}</p>
              </div>
              <ul class="mt-4 space-y-2.5" role="list">
                <li v-for="point in feature.points" :key="point"
                  class="flex items-start gap-2.5 text-[13.5px] leading-snug text-slate-700">
                  <span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-700"
                    aria-hidden="true">
                    <IconCheck class="h-3 w-3" />
                  </span>
                  <span>{{ point }}</span>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ol>

      <!-- Desktop: sidebar + detail -->
      <div class="relative mt-10 hidden overflow-hidden rounded-[28px] lg:block" v-motion
        :initial="{ opacity: 0, y: 18 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 520 } }">
        <div class="grid lg:grid-cols-[minmax(280px,0.95fr)_1.35fr]">
          <aside class="border-b border-slate-100 bg-[#f8fafc] p-4 lg:border-b-0 lg:border-r lg:p-5" role="tablist"
            aria-label="Platform modules" aria-orientation="vertical">
            <button v-for="(feature, i) in features" :id="`platform-feature-tab-${feature.id}`" :key="feature.id"
              type="button" role="tab" :aria-selected="activeIndex === i"
              :aria-controls="`platform-feature-panel-${feature.id}`" :tabindex="activeIndex === i ? 0 : -1"
              class="flex w-full items-center gap-3 rounded-2xl px-3.5 py-3 text-left transition duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300/70"
              :class="activeIndex === i
                ? 'bg-white border border-blue-400'
                : 'hover:bg-white/70'" @click="selectFeature(i)" @keydown="onTabKeydown($event, i)">
              <span :class="[
                'grid h-10 w-10 shrink-0 place-items-center rounded-xl transition',
                activeIndex === i
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-slate-500 ring-1 ring-slate-200',
              ]" aria-hidden="true">
                <Icon :icon="feature.iconMdi" class="h-5 w-5" />
              </span>
              <span class="min-w-0">
                <span class="block font-display text-[14px] font-bold leading-snug text-slate-900">
                  {{ feature.title }}
                </span>
              </span>
            </button>
          </aside>

          <div class="p-6 sm:p-8 lg:p-10">
            <div v-for="(feature, i) in features" :id="`platform-feature-panel-${feature.id}`" :key="feature.id"
              role="tabpanel" :aria-labelledby="`platform-feature-tab-${feature.id}`" :hidden="activeIndex !== i">
              <div class="flex items-start gap-5">
                <span
                  class="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-blue-600 text-white shadow-[0_10px_24px_-10px_rgba(37,99,235,0.7)]"
                  aria-hidden="true">
                  <Icon :icon="feature.iconMdi" class="h-7 w-7" />
                </span>
                <div class="min-w-0">
                  <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700">
                    Module {{ feature.no }}
                  </p>
                  <h3 class="mt-1 font-display text-2xl font-bold tracking-tight text-slate-900">
                    {{ feature.title }}
                  </h3>
                </div>
              </div>

              <p class="mt-5 max-w-2xl text-[15px] leading-relaxed text-slate-600">
                {{ feature.description }}
              </p>

              <div class="mt-6 border-t border-slate-100 pt-6">
                <p class="text-sm font-bold text-slate-800">What's included</p>
                <ul class="mt-4 space-y-3" role="list">
                  <li v-for="point in feature.points" :key="point"
                    class="flex items-start gap-3 text-[14px] leading-snug text-slate-700">
                    <span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-700"
                      aria-hidden="true">
                      <IconCheck class="h-3 w-3" />
                    </span>
                    <span>{{ point }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
