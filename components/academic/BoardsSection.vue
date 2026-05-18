<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { Icon } from '@iconify/vue'
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
const activeCountryId = ref(countriesByBoards[0]!.id)
const hoveredBoardId = ref<string | null>(null)

const filteredCountries = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()
  return countriesByBoards.filter((country) => {
    const regionMatch = activeRegion.value === 'all' || country.region === activeRegion.value
    if (!regionMatch) return false
    if (!q) return true
    if (country.country.toLowerCase().includes(q)) return true
    return country.boards.some(
      (b) =>
        b.abbr.toLowerCase().includes(q) ||
        b.name.toLowerCase().includes(q) ||
        (b.levels?.toLowerCase().includes(q) ?? false),
    )
  })
})

const activeCountry = computed<CountryBoards | undefined>(() =>
  filteredCountries.value.find((c) => c.id === activeCountryId.value),
)

const visibleBoardCount = computed(() =>
  filteredCountries.value.reduce((sum, c) => sum + c.boards.length, 0),
)

watch(filteredCountries, (list) => {
  if (!list.length) return
  if (!list.some((c) => c.id === activeCountryId.value)) {
    activeCountryId.value = list[0]!.id
  }
})

function selectCountry(id: string) {
  activeCountryId.value = id
}

function boardMatchesSearch(board: EducationBoard) {
  const q = searchQuery.value.trim().toLowerCase()
  if (!q) return true
  return (
    board.abbr.toLowerCase().includes(q) ||
    board.name.toLowerCase().includes(q) ||
    (board.levels?.toLowerCase().includes(q) ?? false)
  )
}
</script>

<template>
  <section
    id="boards-covered"
    class="relative overflow-hidden bg-[#f0f4ff] py-12 sm:py-14 lg:py-20"
    aria-labelledby="boards-heading"
  >
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 bg-mesh-light opacity-70"
    />
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl"
    />
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-indigo-300/25 blur-3xl"
    />

    <div class="container-page relative z-[1]">
      <!-- Header -->
      <div class="mx-auto max-w-3xl text-center">
        <span class="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">Boards covered</span>
        <h2
          id="boards-heading"
          class="font-display mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
        >
          Every major curriculum,
          <span class="text-gradient-brand">by country</span>
        </h2>
        <p class="mt-4 text-pretty text-sm leading-relaxed text-slate-600 sm:text-base">
          From Indian national boards to international programmes — explore curricula we support across
          {{ totalCountryCount }} countries and {{ totalBoardCount }}+ examination systems.
        </p>
      </div>

      <!-- Stats strip -->
      <ul
        class="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-3 sm:gap-4"
        role="list"
      >
        <li
          v-for="stat in [
            { icon: 'mdi:earth', value: String(totalCountryCount), label: 'Countries' },
            { icon: 'mdi:school-outline', value: `${totalBoardCount}+`, label: 'Boards & exams' },
            { icon: 'mdi:translate', value: '15+', label: 'Languages supported' },
          ]"
          :key="stat.label"
          class="flex items-center gap-2 rounded-full border border-white/80 bg-white/90 px-4 py-2 shadow-sm backdrop-blur-sm"
        >
          <span class="grid h-8 w-8 place-items-center rounded-full bg-blue-100 text-blue-700">
            <Icon :icon="stat.icon" class="h-4 w-4" aria-hidden="true" />
          </span>
          <span>
            <span class="block font-display text-lg font-extrabold leading-none text-slate-900">
              {{ stat.value }}
            </span>
            <span class="text-xs font-medium text-slate-500">{{ stat.label }}</span>
          </span>
        </li>
      </ul>

      <!-- Search + region filters -->
      <div class="mt-8 space-y-4">
        <div class="relative mx-auto max-w-xl">
          <Icon
            icon="mdi:magnify"
            class="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
            aria-hidden="true"
          />
          <input
            v-model="searchQuery"
            type="search"
            placeholder="Search country or board (e.g. CBSE, IB, GCSE)…"
            class="w-full rounded-2xl border border-slate-200/90 bg-white py-3.5 pl-12 pr-4 text-sm text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
            aria-label="Search education boards"
          />
        </div>

        <div
          class="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label="Filter by region"
        >
          <button
            v-for="region in boardRegions"
            :key="region.id"
            type="button"
            role="tab"
            :aria-selected="activeRegion === region.id"
            :class="[
              'inline-flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide transition',
              activeRegion === region.id
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                : 'border border-slate-200/90 bg-white text-slate-600 hover:border-blue-200 hover:text-blue-700',
            ]"
            @click="activeRegion = region.id"
          >
            <Icon :icon="region.icon" class="h-3.5 w-3.5" aria-hidden="true" />
            {{ region.label }}
          </button>
        </div>
      </div>

      <!-- Empty state -->
      <div
        v-if="!filteredCountries.length"
        class="mt-10 rounded-2xl border border-dashed border-slate-300 bg-white/80 px-6 py-14 text-center"
      >
        <Icon icon="mdi:map-search-outline" class="mx-auto h-12 w-12 text-slate-300" aria-hidden="true" />
        <p class="mt-4 font-display text-lg font-bold text-slate-800">No boards match your search</p>
        <p class="mt-1 text-sm text-slate-500">Try another keyword or clear the region filter.</p>
        <button
          type="button"
          class="btn-secondary mt-6"
          @click="
            searchQuery = '';
            activeRegion = 'all';
          "
        >
          Reset filters
        </button>
      </div>

      <!-- Explorer layout -->
      <div
        v-else
        class="mt-8 grid gap-5 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-6"
      >
        <!-- Country sidebar -->
        <div
          class="flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-soft lg:max-h-[520px]"
        >
          <div class="border-b border-slate-100 px-4 py-3">
            <p class="text-xs font-bold uppercase tracking-wider text-slate-500">
              {{ filteredCountries.length }} countries · {{ visibleBoardCount }} boards
            </p>
          </div>
          <ul
            class="flex gap-2 overflow-x-auto p-3 lg:flex-col lg:overflow-y-auto lg:overflow-x-hidden lg:p-2"
            role="list"
          >
            <li v-for="country in filteredCountries" :key="country.id" class="shrink-0 lg:shrink">
              <button
                type="button"
                :class="[
                  'flex w-full min-w-[200px] items-center gap-3 rounded-xl px-3 py-2.5 text-left transition lg:min-w-0',
                  activeCountryId === country.id
                    ? 'bg-blue-50 ring-2 ring-blue-500/30'
                    : 'hover:bg-slate-50',
                ]"
                :aria-current="activeCountryId === country.id ? 'true' : undefined"
                @click="selectCountry(country.id)"
              >
                <span
                  :class="[
                    'grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br text-lg shadow-sm ring-2',
                    country.accent,
                    country.ring,
                  ]"
                  aria-hidden="true"
                >
                  {{ country.flag }}
                </span>
                <span class="min-w-0 flex-1">
                  <span class="block truncate font-display text-sm font-bold text-slate-900">
                    {{ country.country }}
                  </span>
                  <span class="text-xs text-slate-500">{{ country.boards.length }} boards</span>
                </span>
                <Icon
                  :icon="activeCountryId === country.id ? 'mdi:chevron-right' : 'mdi:chevron-down'"
                  class="h-5 w-5 shrink-0 text-slate-400 lg:hidden"
                  aria-hidden="true"
                />
              </button>
            </li>
          </ul>
        </div>

        <!-- Board detail panel -->
        <div
          v-if="activeCountry"
          class="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-soft"
        >
          <!-- Country header -->
          <div
            :class="[
              'relative overflow-hidden px-5 py-6 sm:px-7 sm:py-7',
              'bg-gradient-to-br text-white',
              activeCountry.accent,
            ]"
          >
            <div
              class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.2),transparent_50%)]"
              aria-hidden="true"
            />
            <div class="relative flex flex-wrap items-center justify-between gap-4">
              <div class="flex items-center gap-4">
                <span class="text-4xl drop-shadow-md" aria-hidden="true">{{ activeCountry.flag }}</span>
                <div>
                  <h3 class="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
                    {{ activeCountry.country }}
                  </h3>
                  <p class="mt-1 text-sm text-white/85">
                    {{ activeCountry.boards.length }} examination systems supported
                  </p>
                </div>
              </div>
              <a
                href="#book-demo"
                class="inline-flex items-center gap-2 rounded-xl bg-white/20 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/40 backdrop-blur-sm transition hover:bg-white/30"
              >
                Find tutors
                <Icon icon="mdi:arrow-right" class="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <!-- Board cards grid -->
          <div class="grid gap-3 p-4 sm:grid-cols-2 sm:p-5 lg:grid-cols-2 xl:grid-cols-3">
            <a
              v-for="(board, i) in activeCountry.boards.filter(boardMatchesSearch)"
              :key="board.id"
              href="#book-demo"
              :class="[
                'group relative flex flex-col rounded-xl border border-slate-200/80 p-4 transition duration-300',
                'hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_12px_32px_-12px_rgba(37,99,235,0.25)]',
                hoveredBoardId === board.id ? 'border-blue-300 bg-blue-50/40' : 'bg-slate-50/50',
              ]"
              v-motion
              :initial="{ opacity: 0, y: 10 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 35, duration: 400 } }"
              @mouseenter="hoveredBoardId = board.id"
              @mouseleave="hoveredBoardId = null"
              @focus="hoveredBoardId = board.id"
              @blur="hoveredBoardId = null"
            >
              <div class="flex items-start justify-between gap-2">
                <span
                  :class="[
                    'inline-flex rounded-lg px-2.5 py-1 font-display text-sm font-extrabold ring-1',
                    activeCountry.chipBg,
                  ]"
                >
                  {{ board.abbr }}
                </span>
                <Icon
                  icon="mdi:arrow-top-right"
                  class="h-4 w-4 shrink-0 text-slate-300 transition group-hover:text-blue-600"
                  aria-hidden="true"
                />
              </div>
              <p class="mt-3 text-sm font-semibold leading-snug text-slate-800">
                {{ board.name }}
              </p>
              <p v-if="board.levels" class="mt-2 text-xs font-medium text-slate-500">
                <Icon icon="mdi:stairs" class="mr-0.5 inline h-3.5 w-3.5 -translate-y-px" aria-hidden="true" />
                {{ board.levels }}
              </p>
              <p v-if="board.note" class="mt-1 text-xs text-slate-400">{{ board.note }}</p>

              <span
                class="mt-4 inline-flex items-center gap-1 text-xs font-bold text-blue-600 opacity-0 transition group-hover:opacity-100"
              >
                Book a tutor
                <Icon icon="mdi:chevron-right" class="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </a>
          </div>

          <p
            v-if="!activeCountry.boards.filter(boardMatchesSearch).length"
            class="px-5 pb-6 text-center text-sm text-slate-500"
          >
            No boards in this country match your search.
          </p>
        </div>
      </div>

      <!-- Global marquee strip -->
      <div
        v-if="filteredCountries.length"
        class="mt-10 overflow-hidden rounded-2xl border border-slate-200/60 bg-white/60 py-3"
        aria-hidden="true"
      >
        <div class="boards-marquee flex w-max gap-3">
          <template v-for="pass in [0, 1]" :key="pass">
            <span
              v-for="country in countriesByBoards"
              :key="`${pass}-${country.id}`"
              class="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-200/80 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm"
            >
              <span>{{ country.flag }}</span>
              {{ country.country }}
              <span class="text-slate-400">·</span>
              <span class="text-blue-600">{{ country.boards.length }} boards</span>
            </span>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.boards-marquee {
  animation: boards-scroll 45s linear infinite;
}

@keyframes boards-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
