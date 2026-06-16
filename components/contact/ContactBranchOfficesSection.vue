<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { branchOffices } from '~/data/contact'

function mapsUrl(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
}
</script>

<template>
  <section
    id="branch-offices"
    class="scroll-mt-24 border-b border-slate-200/70 bg-white py-14 sm:py-16 lg:py-20"
    aria-labelledby="branch-offices-heading"
  >
    <div class="container-page">
      <div class="mx-auto max-w-2xl text-center">
        <span class="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">Branch Offices</span>
        <h2
          id="branch-offices-heading"
          class="font-display mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          {{ branchOffices.title }}
        </h2>
        <p class="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
          {{ branchOffices.intro }}
        </p>
        <p class="mt-2 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
          {{ branchOffices.sectionLabel }}
        </p>
      </div>

      <!-- Mobile: horizontal scroll -->
      <div
        class="mt-10 -mx-4 flex gap-3 overflow-x-auto px-4 pb-2 sm:hidden"
        role="list"
      >
        <article
          v-for="office in branchOffices.offices"
          :key="`${office.city}-mobile`"
          role="listitem"
          class="w-[min(85vw,320px)] shrink-0"
        >
          <div
            class="group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-4 shadow-soft"
          >
            <div class="flex items-start gap-3">
              <span
                class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100"
                aria-hidden="true"
              >
                <Icon icon="mdi:map-marker-outline" class="h-5 w-5" />
              </span>
              <div class="min-w-0 flex-1">
                <h3 class="font-display text-base font-bold text-slate-900">
                  {{ office.city }}
                </h3>
                <address class="mt-2 not-italic text-[13px] leading-relaxed text-slate-600">
                  {{ office.address }}
                </address>
              </div>
            </div>

            <a
              :href="mapsUrl(office.address)"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-blue-700"
            >
              <Icon icon="mdi:directions" class="h-4 w-4 shrink-0" aria-hidden="true" />
              View on map
            </a>
          </div>
        </article>
      </div>

      <!-- Desktop: grid -->
      <div
        class="mt-10 hidden grid-cols-2 gap-4 sm:grid lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
        role="list"
      >
        <article
          v-for="(office, i) in branchOffices.offices"
          :key="office.city"
          role="listitem"
          v-motion
          :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 30 + (i % 5) * 40, duration: 400 } }"
        >
          <div
            class="group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-4 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_48px_-18px_rgba(37,99,235,0.18)] sm:p-5"
          >
            <div class="flex items-start gap-3">
              <span
                class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white"
                aria-hidden="true"
              >
                <Icon icon="mdi:map-marker-outline" class="h-5 w-5" />
              </span>
              <div class="min-w-0 flex-1">
                <h3 class="font-display text-base font-bold text-slate-900 sm:text-lg">
                  {{ office.city }}
                </h3>
                <address class="mt-2 not-italic text-[13px] leading-relaxed text-slate-600">
                  {{ office.address }}
                </address>
              </div>
            </div>

            <a
              :href="mapsUrl(office.address)"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-blue-700 transition hover:text-blue-800"
            >
              <Icon icon="mdi:directions" class="h-4 w-4 shrink-0" aria-hidden="true" />
              View on map
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
