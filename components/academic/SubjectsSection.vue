<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { subjectsSection, type SubjectStream } from '~/data/academic-coverage'

type CategoryTile = {
  id: SubjectStream['id']
  title: string
  tagline: string
  subjects: string[]
  accent: SubjectStream['accent']
  iconMdi: string
  /** Tailwind col-span class for the 12-col desktop grid. */
  spanClass: string
}

/** Fixed pattern: 5-7 / 4-4-4 / 7-5 */
const SPAN_PATTERN = [5, 7, 4, 4, 4, 7, 5] as const

const SPAN_CLASS: Record<(typeof SPAN_PATTERN)[number], string> = {
  4: 'lg:col-span-4',
  5: 'lg:col-span-5',
  7: 'lg:col-span-7',
}

const streams = subjectsSection.streams
const searchQuery = ref('')
const selectedCategoryId = ref<SubjectStream['id'] | null>(streams[0]?.id ?? null)
const selectedSubject = ref<string | null>(null)

const query = computed(() => searchQuery.value.trim().toLowerCase())

const accentIdle: Record<SubjectStream['accent'], string> = {
  teal: 'border-teal-200/80 bg-teal-50/80 text-teal-950 hover:bg-teal-50',
  blue: 'border-blue-200/80 bg-blue-50/80 text-blue-950 hover:bg-blue-50',
  amber: 'border-amber-200/80 bg-amber-50/80 text-amber-950 hover:bg-amber-50',
  sky: 'border-sky-200/80 bg-sky-50/80 text-sky-950 hover:bg-sky-50',
  indigo: 'border-indigo-200/80 bg-indigo-50/80 text-indigo-950 hover:bg-indigo-50',
  rose: 'border-rose-200/80 bg-rose-50/80 text-rose-950 hover:bg-rose-50',
  slate: 'border-slate-200/90 bg-slate-50 text-slate-950 hover:bg-slate-100',
}

const accentSelected: Record<SubjectStream['accent'], string> = {
  teal: 'border-teal-500 bg-teal-600 text-white shadow-[0_14px_32px_-16px_rgba(13,148,136,0.7)]',
  blue: 'border-blue-500 bg-blue-600 text-white shadow-[0_14px_32px_-16px_rgba(37,99,235,0.7)]',
  amber: 'border-amber-500 bg-amber-500 text-white shadow-[0_14px_32px_-16px_rgba(245,158,11,0.65)]',
  sky: 'border-sky-500 bg-sky-600 text-white shadow-[0_14px_32px_-16px_rgba(2,132,199,0.7)]',
  indigo: 'border-indigo-500 bg-indigo-600 text-white shadow-[0_14px_32px_-16px_rgba(79,70,229,0.7)]',
  rose: 'border-rose-500 bg-rose-600 text-white shadow-[0_14px_32px_-16px_rgba(225,29,72,0.6)]',
  slate: 'border-slate-600 bg-slate-800 text-white shadow-[0_14px_32px_-16px_rgba(15,23,42,0.6)]',
}

const accentIconSoft: Record<SubjectStream['accent'], string> = {
  teal: 'bg-teal-600/10 text-teal-700',
  blue: 'bg-blue-600/10 text-blue-700',
  amber: 'bg-amber-500/15 text-amber-800',
  sky: 'bg-sky-600/10 text-sky-700',
  indigo: 'bg-indigo-600/10 text-indigo-700',
  rose: 'bg-rose-600/10 text-rose-700',
  slate: 'bg-slate-700/10 text-slate-700',
}

const accentIconOn: Record<SubjectStream['accent'], string> = {
  teal: 'bg-white/20 text-white',
  blue: 'bg-white/20 text-white',
  amber: 'bg-white/20 text-white',
  sky: 'bg-white/20 text-white',
  indigo: 'bg-white/20 text-white',
  rose: 'bg-white/20 text-white',
  slate: 'bg-white/20 text-white',
}

const accentChipInCard: Record<SubjectStream['accent'], { idle: string; on: string }> = {
  teal: {
    idle: 'border-teal-200/90 bg-white/80 text-teal-800 hover:border-teal-300',
    on: 'border-white/40 bg-white/20 text-white',
  },
  blue: {
    idle: 'border-blue-200/90 bg-white/80 text-blue-800 hover:border-blue-300',
    on: 'border-white/40 bg-white/20 text-white',
  },
  amber: {
    idle: 'border-amber-200/90 bg-white/80 text-amber-900 hover:border-amber-300',
    on: 'border-white/40 bg-white/20 text-white',
  },
  sky: {
    idle: 'border-sky-200/90 bg-white/80 text-sky-800 hover:border-sky-300',
    on: 'border-white/40 bg-white/20 text-white',
  },
  indigo: {
    idle: 'border-indigo-200/90 bg-white/80 text-indigo-800 hover:border-indigo-300',
    on: 'border-white/40 bg-white/20 text-white',
  },
  rose: {
    idle: 'border-rose-200/90 bg-white/80 text-rose-800 hover:border-rose-300',
    on: 'border-white/40 bg-white/20 text-white',
  },
  slate: {
    idle: 'border-slate-200/90 bg-white/80 text-slate-800 hover:border-slate-300',
    on: 'border-white/40 bg-white/20 text-white',
  },
}

const accentBgIcon: Record<SubjectStream['accent'], string> = {
  teal: 'text-teal-600/10',
  blue: 'text-blue-600/10',
  amber: 'text-amber-500/15',
  sky: 'text-sky-600/10',
  indigo: 'text-indigo-600/10',
  rose: 'text-rose-600/10',
  slate: 'text-slate-700/10',
}

const accentBgIconOn: Record<SubjectStream['accent'], string> = {
  teal: 'text-white/15',
  blue: 'text-white/15',
  amber: 'text-white/20',
  sky: 'text-white/15',
  indigo: 'text-white/15',
  rose: 'text-white/15',
  slate: 'text-white/15',
}

const accentChipSelected: Record<SubjectStream['accent'], string> = {
  teal: 'border-teal-700 bg-teal-700 text-white',
  blue: 'border-blue-700 bg-blue-700 text-white',
  amber: 'border-amber-700 bg-amber-600 text-white',
  sky: 'border-sky-700 bg-sky-700 text-white',
  indigo: 'border-indigo-700 bg-indigo-700 text-white',
  rose: 'border-rose-700 bg-rose-700 text-white',
  slate: 'border-slate-900 bg-slate-900 text-white',
}

function spanForIndex(index: number, total: number) {
  // Keep the designed 5-7 / 4-4-4 / 7-5 rhythm when all 7 are visible.
  if (total === SPAN_PATTERN.length) {
    return SPAN_CLASS[SPAN_PATTERN[index]!]
  }
  // Filtered results: fill the row evenly (2→6/6, 3→4/4/4, else full).
  if (total === 1) return 'lg:col-span-12'
  if (total === 2) return 'lg:col-span-6'
  if (total === 3) return 'lg:col-span-4'
  return SPAN_CLASS[SPAN_PATTERN[index % SPAN_PATTERN.length]!]
}

const categoryTiles = computed<CategoryTile[]>(() => {
  const filtered = streams.filter((stream) => {
    if (!query.value) return true
    return (
      stream.title.toLowerCase().includes(query.value) ||
      stream.tagline.toLowerCase().includes(query.value) ||
      stream.subjects.some((s) => s.toLowerCase().includes(query.value))
    )
  })

  return filtered.map((stream, index) => ({
    id: stream.id,
    title: stream.title,
    tagline: stream.tagline,
    subjects: stream.subjects,
    accent: stream.accent,
    iconMdi: stream.iconMdi,
    spanClass: spanForIndex(index, filtered.length),
  }))
})

const selectedCategory = computed(
  () => categoryTiles.value.find((t) => t.id === selectedCategoryId.value) ?? categoryTiles.value[0] ?? null,
)

const ctaLabel = computed(() => {
  if (selectedSubject.value) {
    return `${subjectsSection.selectedCtaPrefix} ${selectedSubject.value}`
  }
  if (selectedCategory.value) {
    return `${subjectsSection.selectedCtaPrefix} ${selectedCategory.value.title}`
  }
  return subjectsSection.selectHint
})

function selectCategory(id: SubjectStream['id']) {
  if (selectedCategoryId.value !== id) {
    selectedCategoryId.value = id
    selectedSubject.value = null
  }
}

function selectSubject(subject: string, categoryId: SubjectStream['id']) {
  selectedCategoryId.value = categoryId
  selectedSubject.value = selectedSubject.value === subject ? null : subject
}

function resetFilters() {
  searchQuery.value = ''
  selectedCategoryId.value = streams[0]?.id ?? null
  selectedSubject.value = null
}

watch(categoryTiles, (tiles) => {
  if (!tiles.length) {
    selectedCategoryId.value = null
    selectedSubject.value = null
    return
  }
  if (!tiles.some((t) => t.id === selectedCategoryId.value)) {
    selectedCategoryId.value = tiles[0]!.id
    selectedSubject.value = null
  }
})
</script>

<template>
  <section id="subjects-offered" class="relative scroll-mt-20 overflow-hidden section-surface-muted section-py"
    aria-labelledby="subjects-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-28 top-10 h-80 w-80 rounded-full bg-blue-200/25 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-sky-200/20 blur-3xl" />

    <div class="container-page relative">
      <div class="mx-auto max-w-3xl text-center">
        <CardHeader heading-id="subjects-heading" :badge="subjectsSection.kicker" :title="subjectsSection.title"
          :description="subjectsSection.description" :classes="subjectsSection.classes" />
      </div>


      <div v-if="!categoryTiles.length"
        class="mx-auto mt-10 max-w-md rounded-[28px] border border-dashed border-slate-300 bg-white/80 px-6 py-14 text-center">
        <Icon icon="mdi:book-search-outline" class="mx-auto h-12 w-12 text-slate-300" aria-hidden="true" />
        <p class="mt-4 font-display text-lg font-bold text-slate-800">{{ subjectsSection.emptyTitle }}</p>
        <p class="mt-1 text-sm text-slate-500">{{ subjectsSection.emptyDescription }}</p>
        <button type="button" class="btn-secondary mt-6" @click="resetFilters">
          {{ subjectsSection.resetLabel }}
        </button>
      </div>

      <!-- 12-col grid: 5-7 / 4-4-4 / 7-5 -->
      <div v-else class="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-12"
        aria-label="Subject categories grid">
        <article v-for="(tile, i) in categoryTiles" :key="tile.id" :class="[
          'group relative flex min-h-[220px] cursor-pointer flex-col overflow-hidden rounded-2xl border px-4 py-3.5 text-left transition duration-200 focus-within:ring-4 focus-within:ring-blue-300/60 sm:min-h-[240px] sm:px-5 sm:py-4',
          tile.spanClass,
          selectedCategoryId === tile.id
            ? accentSelected[tile.accent]
            : accentIdle[tile.accent],
        ]" :aria-pressed="selectedCategoryId === tile.id" v-motion :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 40, duration: 400 } }"
          @click="selectCategory(tile.id)">
          <!-- Background watermark icon -->
          <span aria-hidden="true" :class="[
            'pointer-events-none absolute -bottom-3 -right-3 transition duration-300 group-hover:scale-105 sm:-bottom-4 sm:-right-4',
            selectedCategoryId === tile.id
              ? accentBgIconOn[tile.accent]
              : accentBgIcon[tile.accent],
          ]">
            <Icon :icon="tile.iconMdi" class="h-24 w-24 sm:h-28 sm:w-28" />
          </span>

          <div class="relative z-[1] flex min-h-0 flex-1 flex-col">
            <div class="flex items-start justify-between gap-2">
              <span :class="[
                'grid h-9 w-9 shrink-0 place-items-center rounded-xl transition',
                selectedCategoryId === tile.id
                  ? accentIconOn[tile.accent]
                  : accentIconSoft[tile.accent],
              ]" aria-hidden="true">
                <Icon :icon="tile.iconMdi" class="h-[18px] w-[18px]" />
              </span>
              <span :class="[
                'rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide',
                selectedCategoryId === tile.id
                  ? 'bg-white/15 text-white/90'
                  : 'bg-white/80 text-slate-500 ring-1 ring-black/5',
              ]">
                {{ tile.subjects.length }} subjects
              </span>
            </div>

            <div class="mt-2.5 min-w-0">
              <p class="truncate font-display text-lg font-bold leading-tight tracking-tight sm:text-xl">
                {{ tile.title }}
              </p>
              <p :class="[
                'mt-0.5 truncate text-[12px] leading-snug',
                selectedCategoryId === tile.id ? 'text-white/75' : 'text-slate-500',
              ]">
                {{ tile.tagline }}
              </p>
            </div>

            <ul class="relative mt-3 flex min-h-0 flex-1 flex-wrap content-start gap-1.5 overflow-hidden" role="list">
              <li v-for="subject in tile.subjects" :key="subject">
                <button type="button" :class="[
                  'inline-flex max-w-full truncate rounded-lg border px-2 py-1 text-[11px] font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/70 sm:text-[12px]',
                  selectedCategoryId === tile.id && selectedSubject === subject
                    ? accentChipSelected[tile.accent]
                    : selectedCategoryId === tile.id
                      ? accentChipInCard[tile.accent].on
                      : accentChipInCard[tile.accent].idle,
                ]" :aria-pressed="selectedCategoryId === tile.id && selectedSubject === subject"
                  @click.stop="selectSubject(subject, tile.id)">
                  {{ subject }}
                </button>
              </li>
            </ul>
          </div>
        </article>
      </div>

      <div
        class="mt-8 overflow-hidden rounded-[24px] border border-blue-200/70 bg-gradient-to-br from-blue-700 via-blue-600 to-sky-600 px-5 py-5 shadow-[0_18px_40px_-24px_rgba(37,99,235,0.55)] sm:px-7 sm:py-6"
        v-motion :initial="{ opacity: 0, y: 12 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 480 } }">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div class="min-w-0">
            <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-100">
              {{ selectedCategory?.title ?? 'Ready to match' }}
            </p>
            <p class="mt-1 font-display text-lg font-bold text-white sm:text-xl">
              {{ ctaLabel }}
            </p>
            <p class="mt-1 text-sm text-blue-100/85">{{ subjectsSection.footerNote }}</p>
          </div>
          <a href="#book-demo" class="ac-btn-lime shrink-0">
            {{ subjectsSection.detailCta }}
            <Icon icon="mdi:arrow-right" class="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
