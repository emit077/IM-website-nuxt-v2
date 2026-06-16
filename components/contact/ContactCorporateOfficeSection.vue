<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { corporateOffice } from '~/data/contact'

const mapsQuery = encodeURIComponent(corporateOffice.address)
</script>

<template>
  <section
    id="corporate-office"
    class="scroll-mt-24 border-b border-slate-200/70 bg-cream-50 py-14 sm:py-16 lg:py-20"
    aria-labelledby="corporate-office-heading"
  >
    <div class="container-page">
      <div
        class="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-soft"
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      >
        <div class="grid grid-cols-1 lg:grid-cols-5">
          <div
            class="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-indigo-600 to-blue-700 p-7 text-white sm:p-8 lg:col-span-2"
          >
            <span
              aria-hidden="true"
              class="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10 blur-2xl"
            />
            <span
              class="relative grid h-11 w-11 place-items-center rounded-xl bg-white/15 ring-1 ring-white/25"
              aria-hidden="true"
            >
              <Icon icon="mdi:domain" class="h-5 w-5" />
            </span>
            <p class="relative mt-4 text-[11px] font-bold uppercase tracking-[0.16em] text-indigo-100/90">
              {{ corporateOffice.title }}
            </p>
            <h2
              id="corporate-office-heading"
              class="relative font-display mt-2 text-xl font-bold leading-snug sm:text-2xl"
            >
              {{ corporateOffice.subtitle }}
            </h2>
          </div>

          <div class="p-7 sm:p-8 lg:col-span-3">
            <address class="not-italic">
              <p class="text-[15px] font-semibold leading-relaxed text-slate-800 sm:text-base">
                {{ corporateOffice.address }}
              </p>
            </address>

            <a
              :href="`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-indigo-700 underline-offset-4 transition hover:text-indigo-800 hover:underline"
            >
              <Icon icon="mdi:directions" class="h-4 w-4 shrink-0" aria-hidden="true" />
              Get directions on Google Maps
            </a>

            <div class="mt-6 space-y-3 border-t border-slate-100 pt-6">
              <p
                v-for="(paragraph, i) in corporateOffice.description"
                :key="i"
                class="text-sm leading-relaxed text-slate-600"
              >
                {{ paragraph }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
