<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/cardheader.vue'
import { headOffice } from '~/data/contact'

const mapsQuery = encodeURIComponent(headOffice.address)
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`
const mapsEmbedUrl = `https://www.google.com/maps?q=${mapsQuery}&output=embed`
</script>

<template>
  <section id="head-office" class="scroll-mt-24 border-b border-slate-200/70 bg-white py-14 sm:py-16 lg:py-20"
    aria-labelledby="head-office-heading">
    <div class="container-page">
      <CardHeader
        variant="section"
        heading-id="head-office-heading"
        content-class="!px-0 !py-0"
        :badge="headOffice.subtitle"
        :title="headOffice.title"
        :description="headOffice.intro"
        v-motion
        :initial="{ opacity: 0, y: 12 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      />

      <div class="mt-10 grid grid-cols-1 gap-6 lg:mt-12 lg:grid-cols-12 lg:gap-8" v-motion
        :initial="{ opacity: 0, y: 16 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500, delay: 80 } }">
        <div
          class="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-100 shadow-soft lg:col-span-7 lg:min-h-[440px]">
          <iframe :src="mapsEmbedUrl" title="Indian Mentors headquarters location on Google Maps"
            class="absolute inset-0 h-full w-full border-0" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen />

          <div
            class="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent p-5 sm:p-6"
            aria-hidden="true">
            <div
              class="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-sm">
              <Icon icon="mdi:map-marker-radius" class="h-4 w-4 text-blue-600" />
              {{ headOffice.location }}
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-4 lg:col-span-5">
          <address class="not-italic">
            <div class="rounded-3xl border border-slate-200/80 bg-cream-50 p-6 shadow-soft">
              <p class="mt-3 text-[15px] font-semibold leading-relaxed text-slate-800 text-center">
                {{ headOffice.address }}
              </p>

              <a :href="mapsUrl" target="_blank" rel="noopener noreferrer"
                class="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700">
                <Icon icon="mdi:directions" class="h-4 w-4 shrink-0" aria-hidden="true" />
                {{ headOffice.mapsCta }}
              </a>
            </div>
          </address>

          <ul class="flex-1 space-y-2.5" role="list">
            <li v-for="(item, index) in headOffice.responsibilities" :key="item"
              class="flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-white px-4 py-3.5">
              <span class="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-blue-600 text-xs font-bold text-white"
                aria-hidden="true">
                {{ index + 1 }}
              </span>
              <span class="pt-1 text-sm leading-relaxed text-slate-700">{{ item }}</span>
            </li>
          </ul>

          <p
            class="rounded-2xl border border-blue-100 bg-blue-50/80 px-4 py-3.5 text-[13px] leading-relaxed text-blue-900/90">
            {{ headOffice.closing }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
