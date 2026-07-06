<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/cardheader.vue'
import {
  alsoServing,
  branchOffices,
  popularCities,
  popularCityImages,
  type BranchOffice,
} from '~/data/contact'

type CityCard = {
  id: string
  label: string
  image: string
  subtitle: string
  address: string
  hasOffice: boolean
}

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

const officeLookup = computed(() => {
  const map = new Map<string, BranchOffice>()
  for (const office of branchOffices.offices) {
    map.set(office.city.toLowerCase(), office)
    if (office.label) map.set(office.label.toLowerCase(), office)
  }
  const alias = (key: string, predicate: (office: BranchOffice) => boolean) => {
    const office = branchOffices.offices.find(predicate)
    if (office) map.set(key, office)
  }
  alias('bengaluru', (o) => o.city === 'Bengaluru')
  alias('delhi-ncr', (o) => o.city === 'Delhi')
  alias('hydrabad', (o) => o.city === 'Hyderabad')
  alias('hyderabad', (o) => o.city === 'Hyderabad')
  alias('vizag', (o) => o.city === 'Visakhapatnam' || o.label === 'Visakhapatnam')
  alias('visakhapatnam', (o) => o.city === 'Visakhapatnam' || o.label === 'Visakhapatnam')
  return map
})

function getOfficeForCity(city: { id: string; label: string }) {
  return officeLookup.value.get(city.label.toLowerCase()) ?? officeLookup.value.get(city.id.toLowerCase())
}

function officeDisplayName(office: BranchOffice) {
  return office.label ?? office.city
}

function mapsUrl(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
}

function cityAsset(city: (typeof popularCities)[number] | (typeof popularCityImages)[number]) {
  if (props.variant === 'icons' && 'icon' in city) {
    return usePublicAsset(`/assets/img/city-icons/${city.icon}.png`)
  }
  if ('image' in city) {
    return usePublicAsset(`/assets/img/city-img/${city.image}.png`)
  }
  return ''
}

function cityImageForOffice(office: BranchOffice) {
  const name = officeDisplayName(office).toLowerCase()
  const match = cities.value.find(
    (city) => city.label.toLowerCase() === name || city.id.toLowerCase() === office.city.toLowerCase(),
  )
  return match ? cityAsset(match) : ''
}

function toCityCard(
  city: (typeof popularCities)[number] | (typeof popularCityImages)[number],
): CityCard {
  const office = getOfficeForCity(city)
  return {
    id: city.id,
    label: city.label,
    image: cityAsset(city),
    subtitle: office ? 'Branch Office' : 'Service Area',
    address: office
      ? office.address
      : `Home tutoring and online support available across ${city.label}. Contact us to connect with a verified mentor.`,
    hasOffice: Boolean(office),
  }
}

function officeToCard(office: BranchOffice): CityCard {
  return {
    id: `${office.city}-${office.address}`,
    label: officeDisplayName(office),
    image: cityImageForOffice(office),
    subtitle: 'Branch Office',
    address: office.address,
    hasOffice: true,
  }
}

const popularCityNames = computed(() =>
  new Set(cities.value.flatMap((city) => [city.label.toLowerCase(), city.id.toLowerCase()])),
)

const branchOfficeNames = branchOffices.offices.flatMap((office) =>
  [office.city, office.label].filter(Boolean) as string[],
)

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

const searchTerm = computed(() => citySearch.value.trim().toLowerCase())

function matchesSearch(text: string) {
  if (!searchTerm.value) return true
  return text.toLowerCase().includes(searchTerm.value)
}

const filteredPopularCities = computed(() =>
  cities.value.filter((city) => {
    const office = getOfficeForCity(city)
    const haystack = `${city.label} ${city.id} ${office?.address ?? ''}`
    return matchesSearch(haystack)
  }),
)

const matchingOffices = computed(() => {
  if (!searchTerm.value) return []
  return branchOffices.offices.filter((office) => {
    const haystack = `${office.city} ${office.label ?? ''} ${office.address}`
    return matchesSearch(haystack)
  })
})

const additionalMatchingOffices = computed(() => {
  if (!searchTerm.value) return []
  const coveredAddresses = new Set(
    filteredPopularCities.value
      .map((city) => getOfficeForCity(city)?.address)
      .filter(Boolean),
  )
  return matchingOffices.value.filter((office) => !coveredAddresses.has(office.address))
})

const displayCards = computed(() => [
  ...filteredPopularCities.value.map(toCityCard),
  ...additionalMatchingOffices.value.map(officeToCard),
])

const filteredCities = computed(() => {
  if (!searchTerm.value) return otherCities.value
  return otherCities.value.filter((city) => matchesSearch(city))
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
    const parts: string[] = []
    if (displayCards.value.length) {
      parts.push(`${displayCards.value.length} location${displayCards.value.length === 1 ? '' : 's'}`)
    }
    if (filteredCities.value.length) {
      parts.push(`${filteredCities.value.length} service area${filteredCities.value.length === 1 ? '' : 's'}`)
    }
    if (!parts.length) return 'No matches found'
    return parts.join(' · ')
  }
  if (showAll.value) return `All ${otherCities.value.length} cities`
  return `${displayedCities.value.length} of ${otherCities.value.length} cities`
})

function clearSearch() {
  citySearch.value = ''
  showAll.value = false
}
</script>

<template>
  <section :id="sectionId" class="scroll-mt-24 border-b border-slate-200/70 py-14 sm:py-16 lg:py-20" :class="bgClass"
    :aria-labelledby="headingId">
    <div class="container-page">
      <CardHeader :heading-id="headingId" content-class="!px-0 !py-0" badge="Branch Offices"
        title="Major Cities with <span class='text-gradient-brand'>Operational Presence</span>"
        :description="branchOffices.intro" />

      <!-- Search -->
      <div class="mx-auto mt-10 max-w-3xl" v-motion :initial="{ opacity: 0, y: 12 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450 } }">
        <div
          class="overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-[0_12px_40px_-24px_rgba(15,23,42,0.28)]">
          <div class="relative border-b border-slate-100 px-5 py-4 sm:px-6">
            <Icon icon="mdi:magnify"
              class="pointer-events-none absolute left-8 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-500 sm:left-9"
              aria-hidden="true" />
            <input v-model="citySearch" type="search" :placeholder="alsoServing.searchPlaceholder"
              class="w-full rounded-2xl border border-slate-200/90 bg-cream-50/80 py-3.5 pl-12 pr-11 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
              aria-label="Search cities and office locations" />
            <button v-if="citySearch" type="button" aria-label="Clear search" @click="clearSearch"
              class="absolute right-8 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200 hover:text-slate-700 sm:right-9">
              <Icon icon="mdi:close" class="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
          <div
            class="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 px-5 py-3 text-xs font-medium text-slate-500 sm:px-6">
            <span class="inline-flex items-center gap-1.5" aria-live="polite">
              <Icon icon="mdi:map-search-outline" class="h-4 w-4 text-blue-500" aria-hidden="true" />
              {{ statusLabel }}
            </span>
            <span class="hidden h-3 w-px bg-slate-200 sm:block" aria-hidden="true" />
            <span class="hidden items-center gap-1.5 sm:inline-flex">
              <Icon icon="mdi:office-building-outline" class="h-4 w-4 text-slate-400" aria-hidden="true" />
              {{ branchOffices.offices.length }} branch offices
            </span>
          </div>
        </div>
      </div>

      <!-- City cards carousel -->
      <div class="mt-12">
        <div class="flex flex-wrap items-end justify-between gap-4 px-1">
          <div>
            <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-600">
              {{ isSearching ? 'Search Results' : 'Popular Cities' }}
            </p>
            <h3 class="mt-1 font-display text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              {{ isSearching ? 'Matching Locations' : 'Explore Our Branch Offices' }}
            </h3>
          </div>
          <p v-if="displayCards.length > 1"
            class="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-semibold text-slate-500">
            <Icon icon="mdi:gesture-swipe-horizontal" class="h-4 w-4" aria-hidden="true" />
            Scroll to explore
          </p>
        </div>

        <div v-if="displayCards.length" class="relative mt-6">
          <div
            class="-mx-4 flex snap-x snap-mandatory items-stretch gap-5 overflow-x-auto px-4 pb-4 pt-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="list" aria-label="City office locations">
            <article v-for="(card, index) in displayCards" :key="card.id"
              class="group flex h-full w-[280px] shrink-0 snap-start flex-col overflow-hidden rounded-[1.35rem] border border-slate-200/80 bg-white shadow-[0_10px_30px_-24px_rgba(15,23,42,0.55)] transition duration-500 hover:-translate-y-1.5 hover:border-blue-200/80 hover:shadow-[0_22px_48px_-28px_rgba(37,99,235,0.35)] sm:w-[300px]"
              role="listitem" v-motion :initial="{ opacity: 0, y: 18 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 480, delay: 60 + index * 70 } }">
              <!-- Image -->
              <div class="relative aspect-[5/4] overflow-hidden bg-slate-200">
                <img v-if="card.image" :src="card.image" :alt="`${card.label} city`"
                  class="h-full w-full object-cover grayscale-[25%] transition duration-700 ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
                  loading="lazy" decoding="async" />
                <div v-else
                  class="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-800 via-slate-700 to-blue-900">
                  <Icon icon="mdi:office-building-marker-outline" class="h-14 w-14 text-white/30" aria-hidden="true" />
                </div>
                <div aria-hidden="true"
                  class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/25 to-slate-900/5" />

                <span
                  class="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] backdrop-blur-md"
                  :class="card.hasOffice ? 'bg-emerald-500/90 text-white' : 'bg-white/20 text-white ring-1 ring-white/25'">

                  {{ card.subtitle }}
                </span>

                <div class="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <h3 class="font-display text-lg font-bold tracking-tight text-white">
                    {{ card.label }}
                  </h3>
                </div>
              </div>

              <!-- Address -->
              <div class="flex min-h-[140px] flex-1 flex-col p-5">
                <address class="flex-1 not-italic text-[13px] leading-relaxed text-slate-600">
                  {{ card.address }}
                </address>

                <div class="mt-auto border-t border-slate-100 pt-4">
                  <a v-if="card.hasOffice" :href="mapsUrl(card.address)" target="_blank" rel="noopener noreferrer"
                    class="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 transition hover:gap-2.5 hover:text-blue-800">
                    <Icon icon="mdi:directions" class="h-4 w-4 shrink-0" aria-hidden="true" />
                    Get Directions
                  </a>
                  <a v-else href="#inquiry"
                    class="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 transition hover:gap-2.5 hover:text-blue-800">
                    <Icon icon="mdi:message-text-outline" class="h-4 w-4 shrink-0" aria-hidden="true" />
                    Enquire for This City
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div v-else
          class="mx-auto mt-8 max-w-md rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-10 text-center">
          <span class="mx-auto grid h-12 w-12 place-items-center rounded-full bg-slate-100 text-slate-400"
            aria-hidden="true">
            <Icon icon="mdi:map-marker-question-outline" class="h-6 w-6" />
          </span>
          <p class="mt-4 text-sm leading-relaxed text-slate-600">{{ alsoServing.emptyState }}</p>
        </div>
      </div>

      <!-- Other Cities -->
      <div v-if="showOtherCities" :id="otherCitiesId" class="scroll-mt-24 mt-16 sm:mt-20">
        <CardHeader :heading-id="`${otherCitiesId}-heading`" content-class="!px-0 !py-0" badge="Also Serving"
          title="Other <span class='text-gradient-brand'>Cities</span>" :description="alsoServing.intro" />

        <div v-if="displayedCities.length"
          class="mt-8 overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white p-5 shadow-[0_10px_30px_-24px_rgba(15,23,42,0.2)] sm:p-7">
          <div class="flex flex-wrap gap-2.5" role="list" aria-label="Other cities">
            <span v-for="city in displayedCities" :key="city" role="listitem"
              class="inline-flex items-center gap-1.5 rounded-full border border-slate-200/70 bg-cream-50/80 px-3.5 py-2 text-[13px] font-semibold text-slate-700 transition duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-800 sm:text-sm">
              <Icon icon="mdi:map-marker-radius-outline" class="h-3.5 w-3.5 text-blue-500/70" aria-hidden="true" />
              {{ city }}
            </span>
          </div>

          <div v-if="canExpand" class="mt-6 border-t border-slate-100 pt-5 text-center">
            <button type="button"
              class="inline-flex items-center gap-2 rounded-full bg-blue-50 px-5 py-2.5 text-sm font-semibold text-blue-700 ring-1 ring-blue-100 transition hover:bg-blue-100"
              @click="showAll = !showAll">
              <Icon :icon="showAll ? 'mdi:chevron-up' : 'mdi:chevron-down'" class="h-4 w-4" aria-hidden="true" />
              {{ showAll ? alsoServing.viewLessLabel : viewAllLabel }}
            </button>
          </div>
        </div>

        <div v-else-if="isSearching"
          class="mx-auto mt-8 max-w-md rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-10 text-center">
          <Icon icon="mdi:map-marker-question-outline" class="mx-auto h-8 w-8 text-slate-300" aria-hidden="true" />
          <p class="mt-3 text-sm text-slate-500">{{ alsoServing.emptyState }}</p>
        </div>

        <p class="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-slate-400 sm:text-[13px]">
          {{ alsoServing.supporting }}
        </p>
      </div>
    </div>
  </section>
</template>
