<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { territoryModelSection } from '~/data/channel-partner-investment'

const levels = territoryModelSection.levels
const activeIndex = ref(0)

function selectLevel(index: number) {
  activeIndex.value = index
}

function onTabKeydown(event: KeyboardEvent, index: number) {
  const last = levels.length - 1
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

  selectLevel(next)
  document.getElementById(`territory-model-tab-${levels[next]!.id}`)?.focus()
}
</script>

<template>
  <section id="territory-model" class="relative scroll-mt-20 bg-white section-py"
    aria-labelledby="territory-model-heading">
    <div class="container-page">
      <CardHeader heading-id="territory-model-heading" :badge="territoryModelSection.kicker"
        :title="territoryModelSection.title" :description="territoryModelSection.description"
        :classes="territoryModelSection.classes" />

      <!-- Mobile accordion -->
      <ol class="mt-10 space-y-3 lg:hidden" role="list" aria-label="Territory levels">
        <li v-for="(level, i) in levels" :key="level.id">
          <div :class="[
            'overflow-hidden rounded-2xl border transition duration-200',
            activeIndex === i
              ? 'border-blue-200 bg-white shadow-soft'
              : 'border-slate-200/80 bg-white/80',
          ]">
            <button type="button"
              class="flex w-full items-center gap-3 px-4 py-3.5 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-blue-300/60"
              :aria-expanded="activeIndex === i" :aria-controls="`territory-model-mobile-panel-${level.id}`"
              @click="selectLevel(i)">
              <span :class="[
                'grid h-10 w-10 shrink-0 place-items-center rounded-xl',
                activeIndex === i ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500',
              ]" aria-hidden="true">
                <Icon :icon="level.iconMdi" class="h-5 w-5" />
              </span>
              <span class="min-w-0 flex-1">
                <span class="block font-display text-[15px] font-bold leading-snug text-slate-900">
                  {{ level.label }}
                </span>
                <span class="mt-0.5 block text-[12px] font-medium text-blue-600">
                  {{ level.subtitle }}
                </span>
              </span>
              <Icon :icon="activeIndex === i ? 'mdi:chevron-up' : 'mdi:chevron-down'"
                class="h-5 w-5 shrink-0 text-slate-400" aria-hidden="true" />
            </button>

            <div :id="`territory-model-mobile-panel-${level.id}`" :hidden="activeIndex !== i"
              class="border-t border-slate-100 px-4 pb-5 pt-4">
              <p class="text-[14px] leading-relaxed text-slate-600">{{ level.description }}</p>

              <div v-if="level.majorZones?.length" class="mt-5 border-t border-slate-100 pt-5">
                <p class="text-[13px] font-bold text-slate-800">{{ level.majorZonesTitle }}</p>
                <ul class="mt-3 grid grid-cols-2 gap-2" role="list">
                  <li v-for="zone in level.majorZones" :key="zone"
                    class="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-[13px] font-medium text-slate-700">
                    {{ zone }}
                  </li>
                </ul>
                <p v-if="level.closing" class="mt-3 text-[13px] leading-relaxed text-slate-600">
                  {{ level.closing }}
                </p>
              </div>

              <div v-if="level.connects?.length" class="mt-5 border-t border-slate-100 pt-5">
                <p class="text-[13px] font-bold text-slate-800">{{ level.connectsTitle }}</p>
                <ul class="mt-3 space-y-2.5" role="list">
                  <li v-for="item in level.connects" :key="item"
                    class="flex items-start gap-2.5 text-[13.5px] leading-snug text-slate-700">
                    <span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-700"
                      aria-hidden="true">
                      <IconCheck class="h-3 w-3" />
                    </span>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>

              <div v-if="level.responsibilities?.length" class="mt-5 border-t border-slate-100 pt-5">
                <p class="flex items-center gap-2 text-[13px] font-bold text-slate-800">
                  <Icon icon="mdi:briefcase-outline" class="h-4 w-4 text-blue-600" aria-hidden="true" />
                  {{ level.responsibilitiesTitle }}
                </p>
                <ul class="mt-3 space-y-2.5" role="list">
                  <li v-for="item in level.responsibilities" :key="item"
                    class="flex items-start gap-2.5 text-[13.5px] leading-snug text-slate-700">
                    <span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-700"
                      aria-hidden="true">
                      <IconCheck class="h-3 w-3" />
                    </span>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>

              <div v-if="level.example"
                class="mt-5 rounded-xl bg-blue-50 px-4 py-2.5 text-sm font-semibold text-blue-800">
                Example: {{ level.example }}
              </div>
            </div>
          </div>
        </li>
      </ol>

      <!-- Desktop: sidebar + detail -->
      <div
        class="relative mt-10 hidden overflow-hidden rounded-[28px] border border-slate-200/90 bg-white shadow-soft lg:block"
        v-motion :initial="{ opacity: 0, y: 18 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 520 } }">
        <div class="grid lg:grid-cols-[minmax(260px,0.9fr)_1.35fr]">
          <aside class="border-b border-slate-100 bg-[#f8fafc] p-4 lg:border-b-0 lg:border-r lg:p-5" role="tablist"
            aria-label="Territory levels" aria-orientation="vertical">
            <button v-for="(level, i) in levels" :id="`territory-model-tab-${level.id}`" :key="level.id" type="button"
              role="tab" :aria-selected="activeIndex === i" :aria-controls="`territory-model-panel-${level.id}`"
              :tabindex="activeIndex === i ? 0 : -1"
              class="flex w-full items-center gap-3 rounded-2xl px-3.5 py-3 text-left transition duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300/70"
              :class="activeIndex === i
                ? 'bg-white shadow-[0_8px_24px_-12px_rgba(37,99,235,0.45)] ring-1 ring-blue-100'
                : 'hover:bg-white/70'" @click="selectLevel(i)" @keydown="onTabKeydown($event, i)">
              <span :class="[
                'grid h-10 w-10 shrink-0 place-items-center rounded-xl transition',
                activeIndex === i ? 'bg-blue-600 text-white' : 'bg-white text-slate-500 ring-1 ring-slate-200',
              ]" aria-hidden="true">
                <Icon :icon="level.iconMdi" class="h-5 w-5" />
              </span>
              <span class="min-w-0">
                <span class="block font-display text-[15px] font-bold text-slate-900">{{ level.label }}</span>
                <span class="mt-0.5 block text-[12px] font-medium text-slate-500">{{ level.subtitle }}</span>
              </span>
            </button>
          </aside>

          <div class="p-6 sm:p-8 lg:p-10">
            <div v-for="(level, i) in levels" :id="`territory-model-panel-${level.id}`" :key="level.id" role="tabpanel"
              :aria-labelledby="`territory-model-tab-${level.id}`" :hidden="activeIndex !== i">
              <div class="flex items-start gap-5">
                <span
                  class="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-blue-600 text-white shadow-[0_10px_24px_-10px_rgba(37,99,235,0.7)]"
                  aria-hidden="true">
                  <Icon :icon="level.iconMdi" class="h-7 w-7" />
                </span>
                <div class="min-w-0">
                  <h3 class="font-display text-2xl font-bold tracking-tight text-slate-900">
                    {{ level.label }}
                  </h3>
                  <p class="mt-1 text-[15px] font-semibold text-blue-600">{{ level.subtitle }}</p>
                </div>
              </div>

              <p class="mt-5 max-w-2xl text-[15px] leading-relaxed text-slate-600">
                {{ level.description }}
              </p>

              <div v-if="level.majorZones?.length" class="mt-6 border-t border-slate-100 pt-6">
                <p class="text-sm font-bold text-slate-800">{{ level.majorZonesTitle }}</p>
                <ul class="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3" role="list">
                  <li v-for="zone in level.majorZones" :key="zone"
                    class="rounded-xl border border-slate-100 bg-slate-50 px-3.5 py-2.5 text-[13px] font-semibold text-slate-700">
                    {{ zone }}
                  </li>
                </ul>
                <p v-if="level.closing" class="mt-4 text-[14px] leading-relaxed text-slate-600">
                  {{ level.closing }}
                </p>
              </div>

              <div v-if="level.connects?.length" class="mt-6 border-t border-slate-100 pt-6">
                <p class="text-sm font-bold text-slate-800">{{ level.connectsTitle }}</p>
                <ul class="mt-4 grid grid-cols-2 gap-3" role="list">
                  <li v-for="item in level.connects" :key="item"
                    class="flex items-center gap-3 text-[14px] leading-snug text-slate-700">
                    <span class="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-700"
                      aria-hidden="true">
                      <IconCheck class="h-3 w-3" />
                    </span>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>

              <div v-if="level.responsibilities?.length" class="mt-6 border-t border-slate-100 pt-6">
                <p class="flex items-center gap-2 text-sm font-bold text-slate-800">
                  <Icon icon="mdi:briefcase-outline" class="h-4 w-4 text-blue-600" aria-hidden="true" />
                  {{ level.responsibilitiesTitle }}
                </p>
                <ul class="mt-4 space-y-3" role="list">
                  <li v-for="item in level.responsibilities" :key="item"
                    class="flex items-start gap-3 text-[14px] leading-snug text-slate-700">
                    <span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-700"
                      aria-hidden="true">
                      <IconCheck class="h-3 w-3" />
                    </span>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>

              <div v-if="level.example"
                class="mt-6 inline-flex rounded-xl bg-blue-50 px-4 py-2.5 text-sm font-semibold text-blue-800">
                Example: {{ level.example }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
