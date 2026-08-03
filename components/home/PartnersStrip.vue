<script setup lang="ts">
import { computed, ref } from 'vue'

const partners = [
  { id: 'cbse', name: 'CBSE', logo: '/assets/img/boards/cbse.png', fallback: 'CB' },
  { id: 'icse', name: 'ICSE', logo: '/assets/img/boards/icse.png', fallback: 'IC' },
  { id: 'ib', name: 'IB Schools', logo: '/assets/img/boards/Ib.png', fallback: 'IB' },
  { id: 'cambridge', name: 'Cambridge', logo: '/assets/img/boards/cambridge.png', fallback: 'C' },
  { id: 'nios', name: 'NIOS', logo: '/assets/img/boards/nios.png', fallback: 'N' },
  { id: 'state', name: 'State Boards', logo: '/assets/img/boards/state-boards.png', fallback: 'SB' },
  { id: 'iit/neet', name: 'JEE / NEET', logo: '/assets/img/boards/NTC.png', fallback: 'NTC' },
]

const failedLogos = ref<Record<string, boolean>>({})
function markLogoFailed(id: string) {
  failedLogos.value[id] = true
}

const marqueeItems = computed(() => [...partners, ...partners])
</script>

<template>
  <section class="partners-strip relative overflow-hidden section-py-compact"
    aria-label="Curriculum and board coverage">
    <div aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-24 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-blue-100/40 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-20 top-0 h-40 w-40 rounded-full bg-amber-100/35 blur-3xl" />

    <div class=" relative">
      <div class="mx-auto flex max-w-3xl flex-col items-center text-center" v-motion :initial="{ opacity: 0, y: 14 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 550 } }">

        <h2
          class="mt-2.5 text-balance font-display text-[1.35rem] font-extrabold tracking-tight text-brand-ink sm:text-2xl">
          Trusted by parents for boards across India
        </h2>
        <p class="mt-2 max-w-xl text-pretty text-sm leading-relaxed text-slate-500 sm:text-[15px]">
          From CBSE and ICSE to IB, Cambridge, state boards, and competitive exams — mentors matched to your curriculum.
        </p>
      </div>

      <div class="group relative mt-8 w-full overflow-hidden sm:mt-10" v-motion :initial="{ opacity: 0, y: 12 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600, delay: 80 } }">
        <div
          class="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#FCFCFA] via-[#FCFCFA]/90 to-transparent sm:w-20" />
        <div
          class="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#FCFCFA] via-[#FCFCFA]/90 to-transparent sm:w-20" />

        <div
          class="flex w-max items-center gap-4 animate-marquee [animation-duration:42s] group-hover:[animation-play-state:paused] sm:gap-5 motion-reduce:w-full motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center">
          <div v-for="(p, i) in marqueeItems" :key="`${p.id}-${i}`"
            class="partners-card relative flex min-w-[11.5rem] shrink-0 items-center gap-4 overflow-hidden rounded-2xl border border-slate-200/80 bg-white px-5 py-4 shadow-[0_8px_24px_-16px_rgba(15,23,42,0.35)] transition duration-300 hover:border-blue-200 hover:shadow-[0_12px_28px_-14px_rgba(29,78,216,0.28)] sm:min-w-[13rem] sm:px-6 sm:py-5">
            <img v-if="!failedLogos[p.id]" aria-hidden="true" :src="usePublicAsset(p.logo)" alt=""
              class="pointer-events-none absolute -right-3 -bottom-4 h-24 w-24 object-contain opacity-[0.08] grayscale transition duration-300 group-hover:opacity-[0.18] sm:-right-2 sm:-bottom-3 sm:h-28 sm:w-28" />

            <span class="relative z-[1] grid h-14 w-14 shrink-0 place-items-center sm:h-16 sm:w-16">
              <img v-if="!failedLogos[p.id]" :src="usePublicAsset(p.logo)" :alt="`${p.name} logo`"
                class="h-full w-full object-contain" loading="lazy" @error="markLogoFailed(p.id)" />
              <span v-else class="text-xs font-bold tracking-wide text-slate-500">
                {{ p.fallback }}
              </span>
            </span>
            <span
              class="relative z-[1] whitespace-nowrap font-display text-base font-bold tracking-tight text-slate-700 sm:text-lg">
              {{ p.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.partners-strip {
  background:
    radial-gradient(ellipse 70% 80% at 50% 0%, rgba(219, 234, 254, 0.45), transparent 55%),
    linear-gradient(180deg, #ffffff 0%, #FCFCFA 100%);
}

.partners-card {
  background-image:
    linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.92) 100%);
}
</style>
