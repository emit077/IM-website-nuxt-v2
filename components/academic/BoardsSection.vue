<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/cardheader.vue'
import {
  boardRegions,
  countriesByBoards,
  totalBoardCount,
  totalCountryCount,
  type BoardRegion,
  type CountryBoards,
  type EducationBoard,
} from './boardsData'

const activeRegion = ref<BoardRegion>('all')
const searchQuery = ref('')

const query = computed(() => searchQuery.value.trim().toLowerCase())

function countryNameMatches(country: CountryBoards) {
  return country.country.toLowerCase().includes(query.value)
}

function boardMatchesSearch(board: EducationBoard) {
  if (!query.value) return true
  return (
    board.abbr.toLowerCase().includes(query.value) ||
    board.name.toLowerCase().includes(query.value) ||
    (board.levels?.toLowerCase().includes(query.value) ?? false)
  )
}

/** Boards to display for a country given the current search. */
function boardsFor(country: CountryBoards) {
  if (!query.value || countryNameMatches(country)) return country.boards
  return country.boards.filter(boardMatchesSearch)
}

const filteredCountries = computed(() =>
  countriesByBoards.filter((country) => {
    if (activeRegion.value !== 'all' && country.region !== activeRegion.value) return false
    if (!query.value) return true
    return countryNameMatches(country) || country.boards.some(boardMatchesSearch)
  }),
)

const visibleBoardCount = computed(() =>
  filteredCountries.value.reduce((sum, c) => sum + boardsFor(c).length, 0),
)

function resetFilters() {
  searchQuery.value = ''
  activeRegion.value = 'all'
}

const boardsDescription = computed(
  () =>
    `From Indian national boards to international programmes — explore the curricula we support across ${totalCountryCount} countries and ${totalBoardCount}+ examination systems.`,
)
</script>

<template>
  <section id="boards-covered" class="relative overflow-hidden bg-[#f0f4ff] py-14 sm:py-16 lg:py-24"
    aria-labelledby="boards-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 -top-32 mx-auto h-80 max-w-4xl bg-gradient-to-b from-blue-200/40 to-transparent blur-3xl" />

    <div class="container-page relative z-[1]">
      <CardHeader
        variant="section"
        heading-id="boards-heading"
        content-class="!px-0 !py-0"
        badge="Boards covered"
        title='Every major curriculum, <span class="text-gradient-brand">by country</span>'
        :description="boardsDescription"
      />

      <!-- Search + region filters -->
      <div class="mx-auto mt-8 max-w-4xl space-y-4">
        <div class="relative">
          <Icon icon="mdi:magnify"
            class="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
            aria-hidden="true" />
          <input v-model="searchQuery" type="search" placeholder="Search country or board (e.g. CBSE, IB, GCSE)…"
            class="w-full rounded-2xl border border-slate-200/90 bg-white py-3.5 pl-12 pr-4 text-sm text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
            aria-label="Search education boards" />
        </div>

        <div
          class="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="tablist" aria-label="Filter by region">
          <button v-for="region in boardRegions" :key="region.id" type="button" role="tab"
            :aria-selected="activeRegion === region.id" :class="[
              'inline-flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide transition',
              activeRegion === region.id
                ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/25'
                : 'border border-slate-200/90 bg-white text-slate-600 hover:border-blue-200 hover:text-blue-700',
            ]" @click="activeRegion = region.id">
            {{ region.label }}
          </button>
        </div>
      </div>

      <!-- Empty state -->
      <div v-if="!filteredCountries.length"
        class="mx-auto mt-10 max-w-md rounded-2xl border border-dashed border-slate-300 bg-white/80 px-6 py-14 text-center">
        <Icon icon="mdi:map-search-outline" class="mx-auto h-12 w-12 text-slate-300" aria-hidden="true" />
        <p class="mt-4 font-display text-lg font-bold text-slate-800">No boards match your search</p>
        <p class="mt-1 text-sm text-slate-500">Try another keyword or clear the region filter.</p>
        <button type="button" class="btn-secondary mt-6" @click="resetFilters">Reset filters</button>
      </div>

      <!-- Country grid -->
      <template v-else>
        <p class="mt-8 text-center text-xs font-medium text-slate-500">
          Showing {{ filteredCountries.length }} countries · {{ visibleBoardCount }} boards
        </p>

        <div class="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <article v-for="(country, i) in filteredCountries" :key="country.id"
            class="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_6px_20px_-12px_rgba(15,23,42,0.18)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_44px_-20px_rgba(37,99,235,0.3)]"
            v-motion :initial="{ opacity: 0, y: 12 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 30, duration: 360 } }">
            <div class="flex items-center gap-3">
              <span
                class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-slate-50 text-2xl ring-1 ring-slate-200"
                aria-hidden="true">
                {{ country.flag }}
              </span>
              <div class="min-w-0 flex-1">
                <h3 class="truncate font-display text-base font-bold text-slate-900">{{ country.country }}</h3>
                <p class="text-xs text-slate-500">{{ boardsFor(country).length }} boards &amp; exams</p>
              </div>
            </div>

            <ul class="mt-4 flex flex-wrap gap-1.5" role="list">
              <li v-for="board in boardsFor(country)" :key="board.id"
                :title="board.levels ? `${board.name} · ${board.levels}` : board.name"
                class="inline-flex cursor-default items-center rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700">
                {{ board.abbr }}
              </li>
            </ul>

            <a href="#book-demo"
              class="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition hover:text-blue-700">
              Find tutors
              <Icon icon="mdi:arrow-right" class="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true" />
            </a>
          </article>
        </div>
      </template>
    </div>
  </section>
</template>
