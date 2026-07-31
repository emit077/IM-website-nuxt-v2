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
        v-motion :initial="{ opacity: 0, y: 18 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 520 } }">
        <div aria-hidden="true" class="pointer-events-none absolute inset-0 opacity-[0.24]"
          style="background-image: radial-gradient(#cbd5e1 0.45px, transparent 0.45px); background-size: 22px 22px;" />
        <div aria-hidden="true"
          class="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

        <div class="relative grid gap-0 lg:grid-cols-[1.05fr_0.95fr]  bg-white ">
          <!-- Image creative -->
          <div class="border-b relative border-slate-100 p-6 pb-0  lg:border-b-0 lg:border-r ">
            <img :src="territoryMapImage" alt="India territory map showing national to pincode-level coverage"
              class="h-auto w-full object-cover" loading="lazy" decoding="async" />

            <!-- Overlay badges -->
            <div class="absolute right-4 top-4 flex flex-col gap-2 sm:right-5 sm:top-5">
              <span
                class="inline-flex w-fit items-center gap-1.5 rounded-full border border-white/20 bg-blue-600/90 px-3 py-1.5 text-[11px] font-bold text-white shadow-lg backdrop-blur-sm sm:text-xs">
                <Icon icon="mdi:crosshairs-gps" class="h-3.5 w-3.5" aria-hidden="true" />
                Pincode-level precision
              </span>
            </div>
          </div>
          <!-- Timeline -->
          <div class="bg-[#f8fafc]/80 p-6 sm:p-8 lg:p-10">
            <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">Division hierarchy</p>
            <p class="mt-1 text-sm text-slate-600">
              Each partner is mapped to a clearly defined territory level.
            </p>

            <ol class="relative mt-6 space-y-0" role="list">
              <li v-for="(level, i) in levels" :key="level.label" class="relative flex gap-4 pb-5 last:pb-0" v-motion
                :initial="{ opacity: 0, x: 12 }"
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
            <Icon icon="mdi:information-outline" class="h-4 w-4" />
            {{ territorySection.note }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
