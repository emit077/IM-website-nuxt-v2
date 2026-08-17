<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import {
  alsoServing,
  branchOffices,
  popularCities,
  popularCityImages,
  type BranchOffice,
} from '~/data/contact'
import type { UiCityCard } from '~/composables/useWebsiteContent'

type CityCard = {
  id: string
  label: string
  image: string
  subtitle: string
  address: string
  hasOffice: boolean
  directionLink?: string
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

const { data: apiCities } = await useWebsiteCities()
const hasApiCities = computed(() => Boolean(apiCities.value?.length))

const staticCities = computed(() => (props.variant === 'icons' ? popularCities : popularCityImages))

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

function mapsUrl(address: string, directionLink?: string) {
  if (directionLink) return directionLink
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
  const match = staticCities.value.find(
    (city) => city.label.toLowerCase() === name || city.id.toLowerCase() === office.city.toLowerCase(),
  )
  return match ? cityAsset(match) : ''
}

function toStaticCityCard(
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

function fromApiCity(city: UiCityCard): CityCard {
  return {
    id: city.id,
    label: city.label,
    image: city.image,
    subtitle: city.subtitle,
    address: city.address,
    hasOffice: city.hasOffice,
    directionLink: city.directionLink,
  }
}

const popularCityNames = computed(() => {
  if (hasApiCities.value) {
    return new Set(
      (apiCities.value ?? [])
        .filter((city) => city.isPopular)
        .map((city) => city.label.toLowerCase()),
    )
  }
  return new Set(staticCities.value.flatMap((city) => [city.label.toLowerCase(), city.id.toLowerCase()]))
})

const branchOfficeNames = branchOffices.offices.flatMap((office) =>
  [office.city, office.label].filter(Boolean) as string[],
)

const otherCities = computed(() => {
  if (hasApiCities.value) {
    return (apiCities.value ?? [])
      .filter((city) => !city.isPopular)
      .map((city) => city.label)
      .sort((a, b) => a.localeCompare(b))
  }

  return [...new Set([
    ...alsoServing.zones.flatMap((zone) => zone.cities),
    ...branchOfficeNames.filter((name) => !popularCityNames.value.has(name.toLowerCase())),
  ])]
    .filter((city) => !popularCityNames.value.has(city.toLowerCase()))
    .sort((a, b) => a.localeCompare(b))
})

const citySearch = ref('')
const showAll = ref(false)

const isSearching = computed(() => citySearch.value.trim().length > 0)

const searchTerm = computed(() => citySearch.value.trim().toLowerCase())

function matchesSearch(text: string) {
  if (!searchTerm.value) return true
  return text.toLowerCase().includes(searchTerm.value)
}

const displayCards = computed(() => {
  if (hasApiCities.value) {
    const source = (apiCities.value ?? []).filter((city) => city.isPopular)
    const cards = (source.length ? source : (apiCities.value ?? [])).map(fromApiCity)
    return cards.filter((card) => matchesSearch(`${card.label} ${card.address} ${card.subtitle}`))
  }

  const filteredPopularCities = staticCities.value.filter((city) => {
    const office = getOfficeForCity(city)
    const haystack = `${city.label} ${city.id} ${office?.address ?? ''}`
    return matchesSearch(haystack)
  })

  const matchingOffices = searchTerm.value
    ? branchOffices.offices.filter((office) => {
        const haystack = `${office.city} ${office.label ?? ''} ${office.address}`
        return matchesSearch(haystack)
      })
    : []

  const coveredAddresses = new Set(
    filteredPopularCities
      .map((city) => getOfficeForCity(city)?.address)
      .filter(Boolean),
  )

  const additionalMatchingOffices = matchingOffices.filter(
    (office) => !coveredAddresses.has(office.address),
  )

  return [
    ...filteredPopularCities.map(toStaticCityCard),
    ...additionalMatchingOffices.map(officeToCard),
  ]
})

const useMarquee = computed(() => !isSearching.value && displayCards.value.length > 1)

const marqueeCards = computed(() =>
  useMarquee.value ? [...displayCards.value, ...displayCards.value] : displayCards.value,
)

const filteredCities = computed(() => {
  if (!searchTerm.value) return otherCities.value
  return otherCities.value.filter((city) => matchesSearch(city))
})
const displayedCities = computed(() => {
  return filteredCities.value
})

const CITY_TABLE_COLS = 5

const cityTableRows = computed(() => {
  const cities = displayedCities.value
  const rows: string[][] = []
  for (let i = 0; i < cities.length; i += CITY_TABLE_COLS) {
    rows.push(cities.slice(i, i + CITY_TABLE_COLS))
  }
  return rows
})

const canExpand = computed(() => !isSearching.value && otherCities.value.length > alsoServing.previewLimit)

function clearSearch() {
  citySearch.value = ''
  showAll.value = false
}
</script>

<template>
  <section :id="sectionId" class="scroll-mt-24 border-b border-slate-200/70 section-py" :class="bgClass"
    :aria-labelledby="headingId">
    <div class="container-page">
      <CardHeader :heading-id="headingId" :badge="branchOffices.kicker" :title="branchOffices.title"
        :description="branchOffices.intro" :classes="branchOffices.classes" />
      <div class="mx-auto mt-10 " v-motion :initial="{ opacity: 0, y: 12 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450 } }">
        <div class="relative border-b border-slate-100 px-5 py-4 sm:px-6 mx-auto max-w-4xl">
          <Icon icon="mdi:magnify"
            class="pointer-events-none absolute left-8 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-500 sm:left-9"
            aria-hidden="true" />
          <input v-model="citySearch" type="search" :placeholder="alsoServing.searchPlaceholder"
            class="w-full bg-white rounded-2xl border border-slate-200/90 bg-cream-50/80 py-3.5 pl-12 pr-11 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
            aria-label="Search cities and office locations" />
          <button v-if="citySearch" type="button" aria-label="Clear search" @click="clearSearch"
            class="absolute right-8 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200 hover:text-slate-700 sm:right-9">
            <Icon icon="mdi:close" class="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <div v-if="displayCards.length" class="group/rail relative mt-6 min-h-[400px] overflow-hidden sm:min-h-[420px]">
        <div class="flex h-full items-center py-6 sm:py-8">
          <div :class="[
            'flex w-max items-center gap-5 px-4',
            useMarquee
              ? 'animate-marquee [animation-duration:50s] group-hover/rail:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center'
              : '-mx-4 snap-x snap-mandatory overflow-x-auto pb-1 pt-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          ]" role="list" aria-label="City office locations">
            <div v-for="(card, index) in marqueeCards" :key="`${card.id}-${index}`"
              class="city-card-slot relative z-10 flex w-[280px] shrink-0 items-center justify-center sm:w-[300px]"
              :class="useMarquee ? '' : 'snap-start'" role="listitem">
              <article
                class="city-card group/card relative flex w-full flex-col overflow-hidden rounded-[1.35rem] border border-slate-200/80 bg-white shadow-[0_10px_30px_-24px_rgba(15,23,42,0.55)]"
                v-motion="!useMarquee && { initial: { opacity: 0, y: 18 }, visibleOnce: { opacity: 1, y: 0, transition: { duration: 480, delay: 60 + index * 70 } } }">
                <div class="relative aspect-[5/4] overflow-hidden bg-slate-200">
                  <img v-if="card.image" :src="card.image" :alt="`${card.label} city`"
                    class="h-full w-full object-cover grayscale-[30%] transition-[transform,filter] duration-500 ease-out group-hover/card:scale-105 group-hover/card:grayscale-0"
                    loading="lazy" decoding="async" />
                  <div v-else
                    class="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-800 via-slate-700 to-blue-900">
                    <Icon icon="mdi:office-building-marker-outline" class="h-14 w-14 text-white/30"
                      aria-hidden="true" />
                  </div>
                  <div aria-hidden="true"
                    class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/25 to-slate-900/5 transition-opacity duration-500 group-hover/card:opacity-95" />

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
                <div class="flex min-h-[140px] flex-1 flex-col p-5">
                  <address
                    class="flex-1 not-italic text-[13px] leading-relaxed text-slate-600 transition-colors duration-500 group-hover/card:text-slate-800">
                    {{ card.address }}
                  </address>

                  <div class="mt-auto border-t border-slate-100 pt-4">
                    <a v-if="card.hasOffice" :href="mapsUrl(card.address, card.directionLink)" target="_blank" rel="noopener noreferrer"
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
        </div>
      </div>
    </div>
    <div class="container-page">
      <div v-if="showOtherCities" :id="otherCitiesId" class="mt-10 sm:mt-10">
        <div v-if="displayedCities.length" class="overflow-hidden">
          <div v-if="showAll || isSearching"
            class="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-soft">
            <div class="overflow-x-auto">
              <table class="w-full min-w-[640px] border-collapse text-left text-sm" aria-label="Other cities">
                <tbody>
                  <tr v-for="(row, rowIndex) in cityTableRows" :key="rowIndex"
                    class="border-b border-slate-100 last:border-0">
                    <td v-for="city in row" :key="city"
                      class="w-1/5 border-r border-slate-100 px-3.5 py-2.5 last:border-r-0 sm:px-4 sm:py-3"
                      :class="rowIndex % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'">
                      <span
                        class="inline-flex items-center gap-1.5 text-[13px] font-semibold text-slate-600 transition hover:text-blue-600 sm:text-sm">
                        <Icon icon="mdi:map-marker-radius-outline"
                          class="h-3.5 w-3.5 shrink-0 text-slate-400" aria-hidden="true" />
                        {{ city }}
                      </span>
                    </td>
                    <td v-for="pad in CITY_TABLE_COLS - row.length" :key="`pad-${rowIndex}-${pad}`"
                      class="w-1/5 border-r border-slate-100 px-3.5 py-2.5 last:border-r-0 sm:px-4 sm:py-3"
                      :class="rowIndex % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'" />
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div v-if="canExpand" class="mt-4 text-center">
            <button type="button"
              class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-blue-700 transition"
              @click="showAll = !showAll">
              {{ showAll ? "Hide Cities" : 'View All Cities' }}
            </button>
          </div>
        </div>
        <div v-else-if="isSearching"
          class="mx-auto mt-8 max-w-md rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-10 text-center">
          <p class="text-sm text-slate-500">{{ alsoServing.emptyState }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.city-card-slot {
  transition: opacity 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}

.city-card {
  transform: translate3d(0, 0, 0) scale(1);
  transform-origin: center center;
  transition:
    transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.45s cubic-bezier(0.22, 1, 0.36, 1);
  backface-visibility: hidden;
  will-change: transform;
}

.city-card-slot:hover {
  z-index: 50;
}

.city-card-slot:hover .city-card {
  transform: translate3d(0, -12px, 0) scale(1.07);
  border-color: rgb(147 197 253);
  box-shadow:
    0 0 0 4px rgb(219 234 254 / 0.85),
    0 32px 64px -20px rgb(37 99 235 / 0.38);
}



@media (prefers-reduced-motion: reduce) {
  .city-card {
    will-change: auto;
  }

  .city-card,
  .city-card-slot {
    transition: none;
  }

  .city-card-slot:hover .city-card {
    transform: none;
    box-shadow: 0 10px 30px -24px rgb(15 23 42 / 0.55);
  }
}
</style>
