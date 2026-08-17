<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { externalLinks } from '~/data/external-links'

type BoardTone = 'violet' | 'amber' | 'teal' | 'rose' | 'sky' | 'indigo'

type BoardCard = {
  id: string
  name: string
  tagline: string
  logo: string
  fallback: string
  icon: string
  tone: BoardTone
  ctaLabel: string
  featured?: boolean
  featuredLabel?: string
}

const boards: BoardCard[] = [
  {
    id: 'cbse',
    name: 'CBSE',
    tagline:
      'Personalised mentoring for Classes 1–12 — concept clarity, homework support, and board exam preparation across all major subjects.',
    logo: 'assets/img/boards/cbse.png',
    fallback: 'CB',
    icon: 'solar:notebook-linear',
    tone: 'sky',
    ctaLabel: 'Find tutors',
    featured: true,
    // featuredLabel: 'Featured board',
  },
  {
    id: 'icse',
    name: 'ICSE / ISC',
    tagline: 'CISCE-aligned tutoring for Classes 1–10 and 11–12.',
    logo: 'assets/img/boards/icse.png',
    fallback: 'IC',
    icon: 'solar:book-linear',
    tone: 'violet',
    ctaLabel: 'View',
  },
  {
    id: 'ib',
    name: 'IB Schools',
    tagline: 'Expert support for PYP, MYP, and Diploma Programme.',
    logo: 'assets/img/boards/Ib.png',
    fallback: 'IB',
    icon: 'solar:global-linear',
    tone: 'amber',
    ctaLabel: 'View',
  },
  {
    id: 'cambridge',
    name: 'Cambridge',
    tagline: 'Structured guidance for IGCSE, AS, and A Levels.',
    logo: 'assets/img/boards/cambridge.png',
    fallback: 'CA',
    icon: 'solar:diploma-linear',
    tone: 'teal',
    ctaLabel: 'View',
  },
  {
    id: 'nios',
    name: 'NIOS',
    tagline: 'Flexible open-school learning with dedicated mentors.',
    logo: 'assets/img/boards/nios.png',
    fallback: 'N',
    icon: 'solar:document-linear',
    tone: 'rose',
    ctaLabel: 'View',
  },
  {
    id: 'state',
    name: 'State Boards',
    tagline: 'Regional board support across Maharashtra, UP, Karnataka & more.',
    logo: 'assets/img/boards/state-boards.png',
    fallback: 'SB',
    icon: 'solar:map-point-linear',
    tone: 'sky',
    ctaLabel: 'View',
  },
  {
    id: 'jee-neet',
    name: 'JEE / NEET',
    tagline: 'Targeted entrance prep with verified subject mentors.',
    logo: 'assets/img/boards/NTC.png',
    fallback: 'JN',
    icon: 'solar:atom-linear',
    tone: 'indigo',
    ctaLabel: 'View',
  },
]

const featuredBoard = computed(() => boards.find((b) => b.featured) ?? boards[0])
const gridBoards = computed(() => boards.filter((b) => !b.featured))

const header = {
  badge: 'Boards covered',
  title: 'Trusted curricula. <span class="text-gradient-brand">India & beyond.</span>',
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

      <!-- Featured (row-span 2) + 3×2 grid -->
      <div class="boards-bento mt-10 sm:mt-12" aria-label="Education boards grid">
        <!-- Featured -->
        <article v-if="featuredBoard" class="board-card board-card--featured group" v-motion
          :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 40, duration: 420 } }">
          <span aria-hidden="true" class="board-card__glow" />

          <!-- Background watermark logo -->
          <div class="relative z-[1] flex h-full flex-col">
            <span class="rounded-2xl w-fit bg-white p-2">
              <img v-if="!failedLogos[featuredBoard.id]" :src="usePublicAsset(featuredBoard.logo)"
                :alt="`${featuredBoard.name} logo`" class="h-32 w-32 object-contain rounded-2xl" loading="lazy"
                @error="markLogoFailed(featuredBoard.id)" />
              <span v-else class="font-display text-sm font-bold text-white">
                {{ featuredBoard.fallback }}
              </span>
            </span>

            <p class="mt-5 text-[11px] font-bold uppercase tracking-[0.14em] text-blue-100">
              {{ featuredBoard.featuredLabel }}
            </p>
            <h3 class="mt-2 font-display text-3xl font-bold  text-white sm:text-[2.8rem]">
              {{ featuredBoard.name }}
            </h3>
            <p class="mt-3 max-w-sm text-sm leading-relaxed text-blue-50/90">
              {{ featuredBoard.tagline }}
            </p>
          </div>
        </article>

        <!-- Other boards: 3 + 3 -->
        <article v-for="(board, i) in gridBoards" :key="board.id" class="board-card board-card--grid group"
          :class="`board-card--${board.tone}`" v-motion :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 80 + i * 40, duration: 400 } }">
          <span class="board-card__icon" aria-hidden="true">
            <img v-if="!failedLogos[board.id]" :src="usePublicAsset(board.logo)" :alt="`${board.name} logo`"
              class="h-7 w-7 object-contain mix-blend-multiply" loading="lazy" @error="markLogoFailed(board.id)" />
            <Icon v-else :icon="board.icon" class="h-5 w-5" />
          </span>

          <h3 class="board-card__title font-display">
            {{ board.name }}
          </h3>
          <p class="board-card__desc">
            {{ board.tagline }}
          </p>
        </article>
      </div>

      <!-- Catch-all -->
      <article
        class="group relative mt-3.5 overflow-hidden rounded-[22px] border border-slate-200/80 bg-slate-50 p-5 sm:mt-4 sm:p-6"
        v-motion :initial="{ opacity: 0, y: 12 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 360, duration: 420 } }">
        <div class="relative z-[1] flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <div class="flex min-w-0 items-start gap-4">
            <span
              class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100"
              aria-hidden="true">
              <Icon icon="solar:magnifer-linear" class="h-6 w-6" />
            </span>
            <div class="min-w-0">
              <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
                Need something else?
              </p>
              <h3 class="mt-1 font-display text-lg font-bold tracking-tight text-slate-900">
                Not finding what you’re looking for?
              </h3>
              <p class="mt-1 max-w-xl text-[13px] leading-relaxed text-slate-500">
                Tell us your board, curriculum, or exam — we’ll match you with a verified mentor for specialised and
                niche programmes too.
              </p>
            </div>
          </div>

          <a :href="externalLinks.studentSignup" class="btn-primary ripple shrink-0 !px-6 !py-3 text-sm">
            Talk to us
            <Icon icon="solar:arrow-right-linear"
              class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.boards-bento {
  display: grid;
  gap: 0.875rem;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .boards-bento {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1100px) {
  .boards-bento {
    grid-template-columns: 1.15fr repeat(3, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(11.5rem, auto));
    gap: 1rem;
  }

  .board-card--featured {
    grid-column: 1;
    grid-row: 1 / span 2;
  }
}

.board-card {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 1.4rem;
  transition:
    transform 0.28s ease,
    box-shadow 0.28s ease,
    border-color 0.28s ease;
}

.board-card:hover {
  transform: translateY(-2px);
}

.board-card--featured {
  min-height: 18rem;
  padding: 1.5rem 1.45rem 1.5rem;
  background: linear-gradient(155deg, #2563eb 0%, #3b82f6 48%, #38bdf8 100%);
  border: 1px solid rgba(191, 219, 254, 0.35);
  box-shadow: 0 18px 40px -22px rgba(37, 99, 235, 0.55);
  color: #fff;
}

.board-card--featured:hover {
  box-shadow: 0 22px 44px -20px rgba(37, 99, 235, 0.6);
}

.board-card__glow {
  pointer-events: none;
  position: absolute;
  right: -3rem;
  bottom: -3rem;
  height: 12rem;
  width: 12rem;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.16);
  filter: blur(28px);
}

.board-card--grid {
  min-height: 11.5rem;
  padding: 1.2rem 1.15rem 1.2rem;
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.06);
  box-shadow: 0 8px 24px -16px rgba(15, 23, 42, 0.2);
}

.board-card--grid:hover {
  border-color: rgba(37, 99, 235, 0.16);
  box-shadow: 0 14px 28px -16px rgba(15, 23, 42, 0.22);
}

.board-card__icon {
  display: grid;
  height: 2.75rem;
  width: 2.75rem;
  place-items: center;
  border-radius: 0.9rem;
  transition:
    transform 0.28s ease,
    background-color 0.28s ease;
}

.board-card:hover .board-card__icon {
  transform: scale(1.05);
}

.board-card__icon--featured {
  background: #ffffff;
  color: #2563eb;
  border: 1px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 8px 18px -10px rgba(15, 23, 42, 0.35);
}

.board-card--violet .board-card__icon {
  background: #f3e8ff;
  color: #7c3aed;
}

.board-card--amber .board-card__icon {
  background: #fff7ed;
  color: #ea580c;
}

.board-card--teal .board-card__icon {
  background: #e7f8f2;
  color: #0d9488;
}

.board-card--rose .board-card__icon {
  background: #fce7f3;
  color: #db2777;
}

.board-card--sky .board-card__icon {
  background: #e0f2fe;
  color: #0284c7;
}

.board-card--indigo .board-card__icon {
  background: #e0e7ff;
  color: #4f46e5;
}

.board-card__title {
  margin-top: 1rem;
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.25;
  color: #0f172a;
}

.board-card__desc {
  margin-top: 0.4rem;
  font-size: 0.8rem;
  line-height: 1.45;
  color: #64748b;
}

.board-card__cta {
  margin-top: auto;
  padding-top: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.84rem;
  font-weight: 700;
  color: #2563eb;
  transition: gap 0.25s ease;
}

.board-card:hover .board-card__cta {
  gap: 0.5rem;
}

.board-card__cta--featured {
  color: #ffffff;
  font-size: 0.9rem;
}
</style>
