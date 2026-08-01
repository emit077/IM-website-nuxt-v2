<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'

type BoardCard = {
  id: string
  name: string
  tagline: string
  logo: string
  fallback: string
  spanClass: string
}

/** Fixed pattern: 5-7 / 4-4-4 / 7-5 */
const boards: BoardCard[] = [
  {
    id: 'cbse',
    name: 'CBSE',
    tagline: 'Central Board of Secondary Education — Class 1 to 12',
    logo: 'assets/img/boards/cbse.png',
    fallback: 'CB',
    spanClass: 'lg:col-span-5',
  },
  {
    id: 'icse',
    name: 'ICSE / ISC',
    tagline: 'CISCE curriculum for Classes 1–10 and 11–12',
    logo: 'assets/img/boards/icse.png',
    fallback: 'IC',
    spanClass: 'lg:col-span-7',
  },
  {
    id: 'ib',
    name: 'IB Schools',
    tagline: 'International Baccalaureate — PYP, MYP & DP',
    logo: 'assets/img/boards/Ib.png',
    fallback: 'IB',
    spanClass: 'lg:col-span-4',
  },
  {
    id: 'cambridge',
    name: 'Cambridge',
    tagline: 'IGCSE, AS & A Level programmes',
    logo: 'assets/img/boards/cambridge.png',
    fallback: 'CA',
    spanClass: 'lg:col-span-4',
  },
  {
    id: 'nios',
    name: 'NIOS',
    tagline: 'National Institute of Open Schooling',
    logo: 'assets/img/boards/nios.png',
    fallback: 'N',
    spanClass: 'lg:col-span-4',
  },
  {
    id: 'state',
    name: 'State Boards',
    tagline: 'Maharashtra, UP, Karnataka, TN, WB & more',
    logo: 'assets/img/boards/state-boards.png',
    fallback: 'SB',
    spanClass: 'lg:col-span-7',
  },
  {
    id: 'jee-neet',
    name: 'JEE / NEET',
    tagline: 'Competitive entrance mentoring & prep',
    logo: 'assets/img/boards/NTC.png',
    fallback: 'JN',
    spanClass: 'lg:col-span-5',
  },
]

const header = {
  badge: 'Boards covered',
  title: 'Trusted curricula across <span class="text-gradient-brand">India & beyond</span>',
  description:
    'From national boards to international programmes — find verified mentors aligned to your curriculum.',
  classes: '!px-0 !py-0',
}

const failedLogos = ref<Record<string, boolean>>({})

function markLogoFailed(id: string) {
  failedLogos.value[id] = true
}
</script>

<template>
  <section id="boards-covered" class="relative scroll-mt-20 overflow-hidden bg-white section-py"
    aria-labelledby="boards-covered-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-24 top-8 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-sky-100/35 blur-3xl" />

    <div class="container-page relative z-[1]">
      <div class="mx-auto max-w-3xl text-center">
        <CardHeader heading-id="boards-covered-heading" :badge="header.badge" :title="header.title"
          :description="header.description" :classes="header.classes" />
      </div>

      <!-- 12-col grid: 5-7 / 4-4-4 / 7-5 -->
      <div class="mt-10 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-12"
        aria-label="Education boards grid">
        <article v-for="(board, i) in boards" :key="board.id" :class="[
          'group relative flex min-h-[150px] flex-col overflow-hidden rounded-[22px] border border-slate-200/80 bg-gradient-to-br from-slate-50 via-white to-white p-5 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-card sm:min-h-[160px] sm:p-6',
          board.spanClass,
        ]" v-motion :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40 + i * 45, duration: 420 } }">
          <!-- Background watermark logo -->
          <span aria-hidden="true"
            class="pointer-events-none absolute -bottom-4 -right-4 opacity-[0.08] transition duration-500 group-hover:scale-105 group-hover:opacity-[0.12] sm:-bottom-5 sm:-right-5">
            <img v-if="!failedLogos[board.id]" :src="usePublicAsset(board.logo)" alt=""
              class="h-28 w-28 object-contain sm:h-32 sm:w-32" loading="lazy" @error="markLogoFailed(board.id)" />
            <span v-else
              class="grid h-28 w-28 place-items-center font-display text-5xl font-black text-slate-900 sm:h-32 sm:w-32 sm:text-6xl">
              {{ board.fallback }}
            </span>
          </span>

          <div class="relative z-[1] flex flex-1 flex-col">
            <div class="flex items-start justify-between gap-3">
              <span
                class="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/80">
                <img v-if="!failedLogos[board.id]" :src="usePublicAsset(board.logo)" :alt="`${board.name} logo`"
                  class="h-10 w-10 object-contain transition duration-300 group-hover:scale-105" loading="lazy"
                  @error="markLogoFailed(board.id)" />
                <span v-else class="font-display text-sm font-bold text-slate-600">
                  {{ board.fallback }}
                </span>
              </span>
              <span
                class="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-blue-700 ring-1 ring-blue-100">
                Board
              </span>
            </div>

            <div class="mt-4 min-w-0">
              <h3 class="font-display text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                {{ board.name }}
              </h3>
              <p class="mt-1 text-[13px] leading-relaxed text-slate-500">
                {{ board.tagline }}
              </p>
            </div>

            <a href="#book-demo"
              class="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-blue-600 transition hover:text-blue-700">
              Find tutors
              <Icon icon="mdi:arrow-right"
                class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </div>
        </article>

        <!-- Catch-all: can't find your board -->
        <article
          class="group relative col-span-1 flex min-h-[150px] overflow-hidden rounded-[22px] border border-blue-200/70 bg-gradient-to-br from-blue-700 via-blue-600 to-sky-600 p-5 shadow-[0_18px_40px_-24px_rgba(37,99,235,0.55)] sm:col-span-2 sm:min-h-[160px] sm:p-6 lg:col-span-12"
          v-motion :initial="{ opacity: 0, y: 12 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 360, duration: 420 } }">
          <span aria-hidden="true"
            class="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          <span aria-hidden="true"
            class="pointer-events-none absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-sky-300/20 blur-2xl" />

          <div
            class="relative z-[1] flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <div class="flex min-w-0 items-start gap-4">
              <span class="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/15 text-white ring-1 ring-white/20"
                aria-hidden="true">
                <Icon icon="mdi:magnify-plus-outline" class="h-7 w-7" />
              </span>
              <div class="min-w-0">
                <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-100">
                  Need something else?
                </p>
                <h3 class="mt-1 font-display text-lg font-bold tracking-tight text-white sm:text-xl">
                  Not finding what you’re looking for?
                </h3>
                <p class="mt-1 max-w-xl text-[13px] leading-relaxed text-blue-100/90">
                  Tell us your board, curriculum, or exam — we’ll match you with a verified mentor for specialised and niche programmes too.
                </p>
              </div>
            </div>

            <a href="#book-demo" class="ac-btn-lime shrink-0">
              Talk to us
              <Icon icon="mdi:arrow-right"
                class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
