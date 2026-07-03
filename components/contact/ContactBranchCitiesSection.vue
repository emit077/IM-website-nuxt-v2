<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/cardheader.vue'
import { alsoServing, branchOffices, popularCities, popularCityImages } from '~/data/contact'

const props = withDefaults(
  defineProps<{
    variant: 'icons' | 'images'
    sectionId: string
    headingId: string
    otherCitiesId?: string
    bgClass?: string
    showOtherCities?: boolean
  }>(),
  {
    otherCitiesId: 'also-serving',
    bgClass: 'bg-white',
    showOtherCities: true,
  },
)

const cities = computed(() => (props.variant === 'icons' ? popularCities : popularCityImages))

const popularCityNames = computed(() =>
  new Set(cities.value.flatMap((city) => [city.label.toLowerCase(), city.id.toLowerCase()])),
)

const branchOfficeNames = branchOffices.offices.flatMap((office) => [
  office.city,
  office.label,
].filter(Boolean) as string[])

const otherCities = computed(() =>
  [...new Set([
    ...alsoServing.zones.flatMap((zone) => zone.cities),
    ...branchOfficeNames.filter((name) => !popularCityNames.value.has(name.toLowerCase())),
  ])]
    .filter((city) => !popularCityNames.value.has(city.toLowerCase()))
    .sort((a, b) => a.localeCompare(b)),
)

const citySearch = ref('')
const showAll = ref(false)

const isSearching = computed(() => citySearch.value.trim().length > 0)

const filteredCities = computed(() => {
  const term = citySearch.value.trim().toLowerCase()
  if (!term) return otherCities.value
  return otherCities.value.filter((city) => city.toLowerCase().includes(term))
})

const displayedCities = computed(() => {
  if (isSearching.value || showAll.value) return filteredCities.value
  return filteredCities.value.slice(0, alsoServing.previewLimit)
})

const canExpand = computed(() => !isSearching.value && otherCities.value.length > alsoServing.previewLimit)

const viewAllLabel = computed(() =>
  alsoServing.viewAllLabel.replace('{count}', String(otherCities.value.length)),
)

const statusLabel = computed(() => {
  if (isSearching.value) {
    const n = filteredCities.value.length
    return `${n} ${n === 1 ? 'city' : 'cities'} found`
  }
  if (showAll.value) return `All ${otherCities.value.length} cities`
  return `${displayedCities.value.length} of ${otherCities.value.length} cities`
})

function clearSearch() {
  citySearch.value = ''
  showAll.value = false
}

const cityItemClass = computed(() =>
  props.variant === 'icons'
    ? 'flex w-[88px] shrink-0 flex-col items-center gap-2.5 px-1 py-2 sm:w-[96px]'
    : 'flex w-[92px] shrink-0 flex-col items-center gap-2.5 px-1 py-2 sm:w-[100px]',
)

function cityAsset(city: (typeof popularCities)[number] | (typeof popularCityImages)[number]) {
  if (props.variant === 'icons' && 'icon' in city) {
    return usePublicAsset(`/assets/img/city-icons/${city.icon}.png`)
  }
  if ('image' in city) {
    return usePublicAsset(`/assets/img/city-img/${city.image}.png`)
  }
  return ''
}

function cityImageClass() {
  return props.variant === 'icons'
    ? 'h-12 w-12 rounded-xl object-cover sm:h-[72px] sm:w-[72px]'
    : 'h-16 w-16 rounded-xl object-cover sm:h-[72px] sm:w-[72px]'
}
</script>

<template>
  <section :id="sectionId" class="scroll-mt-24 border-b border-slate-200/70 py-14 sm:py-16 lg:py-20" :class="bgClass"
    :aria-labelledby="headingId">
    <div class="container-page">
      <CardHeader :heading-id="headingId" content-class="!px-0 !py-0" badge="Branch Offices"
        :title="branchOffices.title" :description="branchOffices.intro" />

      <!-- Popular Cities -->
      <div class="mt-12">
        <div
          class="mt-6 -mx-4 flex gap-2 overflow-x-auto px-4 pb-3 sm:mx-0 sm:flex-wrap sm:justify-center sm:gap-x-6 sm:gap-y-8 sm:overflow-visible sm:px-0"
          :class="variant === 'images' ? 'gap-3' : ''" role="list">
          <div v-for="city in cities" :key="city.id" role="listitem" :class="cityItemClass">
            <img :src="cityAsset(city)" :alt="`${city.label} city`" :class="cityImageClass()" loading="lazy"
              decoding="async" />
            <span class="text-center text-[12px] font-medium leading-tight text-slate-600 sm:text-[13px]">
              {{ city.label }}
            </span>
          </div>
        </div>
      </div>

      <!-- Other Cities -->
      <div v-if="showOtherCities" :id="otherCitiesId" class="scroll-mt-24 mt-14 sm:mt-16">
        <CardHeader :heading-id="`${otherCitiesId}-heading`" content-class="!px-0 !py-0" badge="Also Serving"
          title="Other Cities" :description="alsoServing.intro" />

        <div class="mx-auto mt-8 overflow-hidden " v-motion :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450 } }">
          <!-- Search -->
          <div class="border-b border-slate-100 px-5 py-5 sm:px-7">
            <div class="relative">
              <Icon icon="mdi:magnify"
                class="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                aria-hidden="true" />
              <input v-model="citySearch" type="search" :placeholder="alsoServing.searchPlaceholder"
                class="w-full rounded-2xl border border-slate-200/90 bg-cream-50 py-3 pl-12 pr-10 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                aria-label="Search other cities" />
              <button v-if="citySearch" type="button" aria-label="Clear search" @click="clearSearch"
                class="absolute right-3 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-600">
                <Icon icon="mdi:close" class="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
            <p class="mt-3 text-center text-xs font-medium text-slate-500" aria-live="polite">{{ statusLabel }}</p>
          </div>

          <!-- City list -->
          <div v-if="displayedCities.length" class="px-5 py-6 sm:px-7 sm:py-7">
            <div class="flex flex-wrap justify-center gap-2" role="list" aria-label="Other cities">
              <span v-for="city in displayedCities" :key="city" role="listitem"
                class="inline-flex items-center rounded-xl border border-slate-200/60 bg-cream-50 px-3.5 py-2 text-[13px] font-semibold text-slate-700 transition duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-800 sm:text-sm">
                {{ city }}
              </span>
            </div>

            <div v-if="canExpand" class="mt-6 text-center">
              <button type="button"
                class="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 transition hover:text-blue-800"
                @click="showAll = !showAll">
                <Icon :icon="showAll ? 'mdi:chevron-up' : 'mdi:chevron-down'" class="h-4 w-4" aria-hidden="true" />
                {{ showAll ? alsoServing.viewLessLabel : viewAllLabel }}
              </button>
            </div>
          </div>

          <!-- Empty -->
          <div v-else class="px-5 py-12 text-center sm:px-7">
            <Icon icon="mdi:map-marker-question-outline" class="mx-auto h-8 w-8 text-slate-300" aria-hidden="true" />
            <p class="mt-3 text-sm text-slate-500">{{ alsoServing.emptyState }}</p>
          </div>
        </div>

        <p class="mx-auto mt-5 max-w-2xl text-center text-xs leading-relaxed text-slate-400 sm:text-[13px]">
          {{ alsoServing.supporting }}
        </p>
      </div>
    </div>
  </section>
</template>
