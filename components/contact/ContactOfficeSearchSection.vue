<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/cardheader.vue'
import { branchOffices, officeLocator } from '~/data/contact'

const query = ref('')

const sortedOffices = [...branchOffices.offices].sort((a, b) =>
  (a.label ?? a.city).localeCompare(b.label ?? b.city),
)

const filteredOffices = computed(() => {
  const term = query.value.trim().toLowerCase()
  if (!term) return sortedOffices
  return sortedOffices.filter((office) => {
    const haystack = `${office.city} ${office.label ?? ''} ${office.address}`.toLowerCase()
    return haystack.includes(term)
  })
})

function mapsUrl(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
}
</script>

<template>
  <section id="office-locator" class="scroll-mt-24 border-b border-slate-200/70 bg-cream-50 py-14 sm:py-16 lg:py-20"
    aria-labelledby="office-locator-heading">
    <div class="container-page">
      <CardHeader heading-id="office-locator-heading" content-class="!px-0 !py-0" :badge="officeLocator.badge"
        :title="officeLocator.title" :description="officeLocator.description" />

      <!-- Search -->
      <div class="mx-auto mt-8 max-w-2xl" v-motion :initial="{ opacity: 0, y: 12 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450 } }">
        <div class="relative">
          <Icon icon="mdi:magnify"
            class="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
            aria-hidden="true" />
          <input v-model="query" type="search" :placeholder="officeLocator.searchPlaceholder"
            class="w-full rounded-2xl border border-slate-200/90 bg-white py-3.5 pl-12 pr-11 text-sm text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
            aria-label="Search operational office locations" />
          <button v-if="query" type="button" aria-label="Clear search" @click="query = ''"
            class="absolute right-3 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-600">
            <Icon icon="mdi:close" class="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
        <p class="mt-3 text-center text-xs font-medium text-slate-500" aria-live="polite">
          Showing <span class="font-bold text-slate-700">{{ filteredOffices.length }}</span>
          of {{ sortedOffices.length }} operational offices
        </p>
      </div>

      <!-- Results -->
      <div v-if="filteredOffices.length" class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="office in filteredOffices" :key="office.city"
          class="flex flex-col rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
          <div class="flex items-start gap-3">
            <span
              class="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100"
              aria-hidden="true">
              <Icon icon="mdi:office-building-marker-outline" class="h-5 w-5" />
            </span>
            <div class="min-w-0">
              <h3 class="text-base font-bold text-slate-900">{{ office.label ?? office.city }}</h3>
              <p class="mt-1.5 text-[13px] leading-relaxed text-slate-500">{{ office.address }}</p>
            </div>
          </div>
          <a :href="mapsUrl(office.address)" target="_blank" rel="noopener noreferrer"
            class="mt-4 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-blue-700 transition hover:gap-2.5">
            <Icon icon="mdi:directions" class="h-4 w-4" aria-hidden="true" />
            Get Directions
          </a>
        </div>
      </div>

      <!-- Empty state -->
      <div v-else
        class="mx-auto mt-8 max-w-lg rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-10 text-center">
        <span class="mx-auto grid h-12 w-12 place-items-center rounded-full bg-slate-100 text-slate-400"
          aria-hidden="true">
          <Icon icon="mdi:map-marker-question-outline" class="h-6 w-6" />
        </span>
        <p class="mt-4 text-sm leading-relaxed text-slate-600">{{ officeLocator.emptyState }}</p>
      </div>
    </div>
  </section>
</template>
