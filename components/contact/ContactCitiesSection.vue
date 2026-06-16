<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'
import CityLandmarkIcon from '~/components/contact/CityLandmarkIcon.vue'
import { alsoServing, branchOffices, popularCities } from '~/data/contact'

const selectedCityId = ref<string | null>(null)

const popularCityNames = new Set(
  popularCities.flatMap((city) => [city.label.toLowerCase(), city.id.toLowerCase()]),
)

const branchOfficeNames = branchOffices.offices.flatMap((office) => [
  office.city,
  office.label,
].filter(Boolean) as string[])

const otherCities = computed(() =>
  [...new Set([
    ...alsoServing.zones.flatMap((zone) => zone.cities),
    ...branchOfficeNames.filter((name) => !popularCityNames.has(name.toLowerCase())),
  ])]
    .filter((city) => !popularCityNames.has(city.toLowerCase()))
    .sort((a, b) => a.localeCompare(b)),
)

const selectedPopularCity = computed(() =>
  popularCities.find((city) => city.id === selectedCityId.value) ?? null,
)

const selectedOffice = computed(() => {
  const branchCity = selectedPopularCity.value?.branchCity
  if (!branchCity) return null
  return branchOffices.offices.find((office) => office.city === branchCity) ?? null
})

function toggleCity(cityId: string) {
  selectedCityId.value = selectedCityId.value === cityId ? null : cityId
}

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
      <div class="mx-auto max-w-3xl text-center">
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
      </div>

      <div class="mt-12">
        <h3 class="text-center text-lg font-semibold text-slate-700 sm:text-xl">
          Popular Cities
        </h3>

        <div
          class="mt-6 -mx-4 flex gap-2 overflow-x-auto px-4 pb-3 sm:mx-0 sm:flex-wrap sm:justify-center sm:gap-x-6 sm:gap-y-8 sm:overflow-visible sm:px-0"
          role="list"
        >
          <button
            v-for="city in popularCities"
            :key="city.id"
            type="button"
            role="listitem"
            :aria-pressed="selectedCityId === city.id"
            :class="[
              'group flex w-[88px] shrink-0 flex-col items-center gap-2.5 rounded-xl px-1 py-2 transition duration-200 sm:w-[96px]',
              selectedCityId === city.id
                ? 'bg-blue-50 ring-1 ring-blue-200'
                : 'hover:bg-slate-50',
            ]"
            @click="toggleCity(city.id)"
          >
            <CityLandmarkIcon :icon="city.icon" :label="city.label" />
            <span
              :class="[
                'text-center text-[12px] font-medium leading-tight sm:text-[13px]',
                selectedCityId === city.id ? 'text-blue-700' : 'text-slate-600 group-hover:text-slate-800',
              ]"
            >
              {{ city.label }}
            </span>
          </button>
        </div>

        <Transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2"
        >
          <div
            v-if="selectedOffice"
            class="mx-auto mt-2 max-w-2xl rounded-2xl border border-slate-200/80 bg-slate-50/60 px-5 py-4 text-center sm:px-6 sm:py-5"
          >
            <p class="text-sm font-semibold text-slate-900">
              {{ selectedOffice.label ?? selectedOffice.city }}
            </p>
            <address class="mt-2 not-italic text-[13px] leading-relaxed text-slate-600 sm:text-sm">
              {{ selectedOffice.address }}
            </address>
            <a
              :href="mapsUrl(selectedOffice.address)"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-blue-700 transition hover:text-blue-800"
            >
              <Icon icon="mdi:directions" class="h-4 w-4 shrink-0" aria-hidden="true" />
              View on map
            </a>
          </div>
        </Transition>
      </div>

      <div id="also-serving" class="scroll-mt-24 mt-14 sm:mt-16">
        <h3 class="text-center text-lg font-semibold text-slate-700 sm:text-xl">
          Other Cities
        </h3>
        <p class="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-slate-500">
          {{ alsoServing.intro }}
        </p>

        <div
          class="mx-auto mt-6 max-w-5xl overflow-hidden rounded-2xl border border-slate-200/80 bg-white"
        >
          <div
            class="max-h-[280px] overflow-y-auto px-5 py-5 sm:px-8 sm:py-6"
            role="list"
            aria-label="Other cities served by Indian Mentors"
          >
            <div class="columns-2 gap-x-8 sm:columns-3 md:columns-4 lg:columns-5">
              <span
                v-for="city in otherCities"
                :key="city"
                role="listitem"
                class="mb-2.5 block break-inside-avoid text-[13px] leading-snug text-slate-500 sm:text-sm"
              >
                {{ city }}
              </span>
            </div>
          </div>
        </div>

        <p class="mx-auto mt-4 max-w-2xl text-center text-xs leading-relaxed text-slate-400 sm:text-[13px]">
          {{ alsoServing.supporting }}
        </p>
      </div>
    </div>
  </section>
</template>
