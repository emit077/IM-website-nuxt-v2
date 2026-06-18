<script setup lang="ts">
import { computed } from 'vue'
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
      <CardHeader
        variant="section"
        :heading-id="headingId"
        content-class="!px-0 !py-0"
        badge="Branch Offices"
        :title="branchOffices.title"
        :description="branchOffices.intro"
      />

      <div class="mt-12">
        <h3 class="text-center text-lg font-semibold text-slate-700 sm:text-xl">
          Popular Cities
        </h3>

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

      <div v-if="showOtherCities" :id="otherCitiesId" class="scroll-mt-24 mt-14 sm:mt-16">
        <h3 class="text-center text-lg font-semibold text-slate-700 sm:text-xl">
          Other Cities
        </h3>
        <p class="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-slate-500">
          {{ alsoServing.intro }}
        </p>

        <div class="mx-auto mt-6 max-w-5xl overflow-hidden rounded-2xl border border-slate-200/80 bg-white">
          <div class="max-h-[280px] overflow-y-auto px-5 py-5 sm:px-8 sm:py-6" role="list"
            aria-label="Other cities served by Indian Mentors">
            <div class="columns-2 gap-x-8 sm:columns-3 md:columns-4 lg:columns-5">
              <span v-for="city in otherCities" :key="city" role="listitem"
                class="mb-2.5 block break-inside-avoid text-[13px] leading-snug text-slate-500 sm:text-sm">
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
