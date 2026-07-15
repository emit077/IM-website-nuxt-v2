<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { territorySection } from '~/data/channel-partner'

const territoryMapImage = usePublicAsset(territorySection.creativeImage)

const levels = computed(() =>
  territorySection.levels.map((level, i) => ({
    ...level,
    no: String(i + 1).padStart(2, '0'),
  })),
)
</script>

<template>
  <section id="territory-structure" class="relative scroll-mt-20 bg-white section-py"
    aria-labelledby="territory-structure-heading">
    <div class="container-page">
      <CardHeader heading-id="territory-structure-heading" :badge="territorySection.kicker"
        :title="territorySection.title" :description="territorySection.description"
        :classes="territorySection.classes" />

      <div class="relative mt-10 overflow-hidden rounded-[28px] border border-slate-200/90 bg-white shadow-soft"
        v-motion :initial="{ opacity: 0, y: 18 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 520 } }">
        <div aria-hidden="true" class="pointer-events-none absolute inset-0 opacity-[0.24]"
          style="background-image: radial-gradient(#cbd5e1 0.45px, transparent 0.45px); background-size: 22px 22px;" />
        <div aria-hidden="true"
          class="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

        <div class="relative grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <!-- Image creative -->
          <div class="border-b border-slate-100 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
            <div class="flex items-start justify-between gap-4">
              <div>
                <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-600">
                  {{ territorySection.structureLabel }}
                </p>
                <h3 class="mt-1 font-display text-xl font-bold text-slate-900 sm:text-2xl">
                  Broad coverage to precise delivery
                </h3>
              </div>
              <span
                class="shrink-0 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-blue-700">
                8 Levels
              </span>
            </div>

            <div class="relative mt-6 overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-blue-50/80 to-indigo-50/40 shadow-[0_12px_40px_-20px_rgba(37,99,235,0.35)]">
              <img :src="territoryMapImage" alt="India territory map showing national to pincode-level coverage"
                class="h-auto w-full object-cover" loading="lazy" decoding="async" />

              <!-- Overlay badges -->
              <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent"
                aria-hidden="true" />
              <div class="absolute left-4 top-4 flex flex-col gap-2 sm:left-5 sm:top-5">
                <span
                  class="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/90 px-3 py-1.5 text-[11px] font-bold text-slate-800 shadow-lg backdrop-blur-sm sm:text-xs">
                  <Icon icon="mdi:map-marker-radius" class="h-3.5 w-3.5 text-blue-600" aria-hidden="true" />
                  100+ Service Territories
                </span>
                <span
                  class="inline-flex w-fit items-center gap-1.5 rounded-full border border-white/20 bg-blue-600/90 px-3 py-1.5 text-[11px] font-bold text-white shadow-lg backdrop-blur-sm sm:text-xs">
                  <Icon icon="mdi:crosshairs-gps" class="h-3.5 w-3.5" aria-hidden="true" />
                  Pincode-level precision
                </span>
              </div>
            </div>

            <!-- City strip -->
            <div class="mt-4">
              <p class="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">Active across India</p>
              <div class="mt-2.5 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div v-for="city in territorySection.featuredCities" :key="city.image"
                  class="group relative h-14 w-20 shrink-0 overflow-hidden rounded-xl border border-slate-200/80 bg-slate-100 shadow-sm sm:h-16 sm:w-24">
                  <img :src="usePublicAsset(`assets/img/city-img/${city.image}.png`)" :alt="`${city.label} territory`"
                    class="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy" decoding="async" />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" aria-hidden="true" />
                  <span class="absolute bottom-1 left-1.5 text-[9px] font-bold text-white sm:text-[10px]">
                    {{ city.label }}
                  </span>
                </div>
              </div>
            </div>

            <ul class="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3" role="list">
              <li v-for="benefit in territorySection.benefits" :key="benefit.label"
                class="flex items-center gap-3 rounded-xl border border-[#e7eefb] bg-[#f6f8fd] px-4 py-3.5">
                <span class="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-blue-600 text-white shadow-sm"
                  aria-hidden="true">
                  <Icon :icon="benefit.iconMdi" class="h-4 w-4" />
                </span>
                <span class="text-[13px] font-semibold leading-snug text-slate-700">{{ benefit.label }}</span>
              </li>
            </ul>
          </div>

          <!-- Timeline -->
          <div class="bg-[#f8fafc]/80 p-6 sm:p-8 lg:p-10">
            <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">Division hierarchy</p>
            <p class="mt-1 text-sm text-slate-600">
              Each partner is mapped to a clearly defined territory level.
            </p>

            <ol class="relative mt-6 space-y-0" role="list">
              <li v-for="(level, i) in levels" :key="level.label" class="relative flex gap-4 pb-5 last:pb-0"
                v-motion :initial="{ opacity: 0, x: 12 }"
                :visibleOnce="{ opacity: 1, x: 0, transition: { delay: 70 + i * 45, duration: 400 } }">
                <div class="relative flex flex-col items-center">
                  <span
                    class="relative z-[1] grid h-9 w-9 shrink-0 place-items-center rounded-full bg-blue-600 text-[11px] font-extrabold text-white shadow-[0_4px_12px_-2px_rgba(37,99,235,0.45)] ring-4 ring-white">
                    {{ level.no }}
                  </span>
                  <span v-if="i < levels.length - 1"
                    class="absolute top-9 h-[calc(100%+4px)] w-px bg-gradient-to-b from-blue-200 to-slate-200"
                    aria-hidden="true" />
                </div>

                <article class="min-w-0 flex-1 pt-0.5">
                  <div class="flex items-center gap-2">
                    <Icon :icon="level.iconMdi" class="h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
                    <h4 class="font-display text-[15px] font-bold text-slate-900">{{ level.label }}</h4>
                  </div>
                  <p class="mt-1 text-[13px] leading-relaxed text-slate-500">{{ level.description }}</p>
                </article>
              </li>
            </ol>
          </div>
        </div>

        <div class="relative border-t border-slate-100 bg-[#f6f8fd]/60 px-6 py-4 sm:px-8">
          <p class="flex items-start gap-2.5 text-[13px] leading-relaxed text-slate-600 sm:items-center sm:text-sm">
            <span class="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-blue-100 text-blue-600"
              aria-hidden="true">
              <Icon icon="mdi:information-outline" class="h-4 w-4" />
            </span>
            {{ territorySection.note }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
