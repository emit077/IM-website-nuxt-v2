<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/cardheader.vue'
import { findUs, phoneSupport } from '~/data/contact'

function mapsUrl(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
}
</script>

<template>
  <section id="find-us" class="scroll-mt-24 border-b border-slate-200/70 bg-white py-14 sm:py-16 lg:py-20"
    aria-labelledby="find-us-heading">
    <div class="container-page">
      <CardHeader heading-id="find-us-heading" content-class="!px-0 !py-0" :badge="findUs.badge" :title="findUs.title"
        :description="findUs.description" v-motion :initial="{ opacity: 0, y: 12 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }" />

      <div class="mt-10 flex flex-col gap-6 lg:mt-12 lg:gap-8">
        <article v-for="(office, index) in findUs.offices" :key="office.id"
          class="grid grid-cols-1 overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-soft"
          :class="index % 2 === 0 ? 'lg:grid-cols-[2fr_3fr]' : 'lg:grid-cols-[3fr_2fr]'" v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 80 } }">
          <!-- Image -->
          <div class="relative min-h-[240px] overflow-hidden bg-slate-200 lg:min-h-[340px]"
            :class="index % 2 === 1 ? 'lg:order-2' : ''">
            <img :src="usePublicAsset(`/assets/img/${office.image}.png`)" :alt="`${office.kind} — ${office.name}`"
              class="absolute inset-0 h-full w-full object-cover" loading="lazy" decoding="async" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/25 to-transparent"
              aria-hidden="true" />
            <span
              class="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
              <Icon icon="mdi:map-marker" class="h-3.5 w-3.5" aria-hidden="true" />
              {{ office.imageLabel }}
            </span>
          </div>

          <!-- Details -->
          <div class="flex flex-col p-6 sm:p-8">
            <div class="flex items-center gap-2.5">
              <span class="grid h-9 w-9 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100"
                aria-hidden="true">
                <Icon :icon="office.iconMdi" class="h-5 w-5" />
              </span>
              <h3 class="font-display text-xl font-bold tracking-tight text-slate-900">{{ office.kind }}</h3>
            </div>

            <p class="mt-4 text-[15px] font-semibold text-blue-800">{{ office.name }}</p>
            <address class="mt-2 not-italic text-sm font-medium leading-relaxed text-slate-700">
              {{ office.address }}
            </address>
            <p class="mt-4 text-sm leading-relaxed text-slate-500">{{ office.description }}</p>

            <div class="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
              <a :href="mapsUrl(office.address)" target="_blank" rel="noopener noreferrer"
                class="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-brand-ink px-5 py-3 text-sm font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800">
                <Icon icon="mdi:directions" class="h-4 w-4 shrink-0" aria-hidden="true" />
                Get Directions
              </a>
              <a :href="`tel:${phoneSupport.number.tel}`"
                class="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700">
                <Icon icon="mdi:phone-outline" class="h-4 w-4 shrink-0" aria-hidden="true" />
                Contact This Office
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
