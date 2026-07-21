<script setup lang="ts">
import { ref } from 'vue'

const partners = [
  { id: 'cbse', name: 'CBSE', logo: '/assets/img/boards/cbse.png', fallback: 'CB' },
  { id: 'icse', name: 'ICSE', logo: '/assets/img/boards/icse.png', fallback: 'IC' },
  { id: 'ib', name: 'IB Schools', logo: '/assets/img/boards/Ib.png', fallback: 'IB' },
  { id: 'cambridge', name: 'Cambridge', logo: '/assets/img/boards/cambridge.png', fallback: 'C' },
  { id: 'nios', name: 'NIOS', logo: '/assets/img/boards/nios.png', fallback: 'N' },
  { id: 'state', name: 'State Boards', logo: '/assets/img/boards/state-boards.png', fallback: 'SB' },
  { id: 'iit/neet', name: 'JEE/NEET', logo: '/assets/img/boards/NTC.png', fallback: 'NTC' },
]
const failedLogos = ref<Record<string, boolean>>({})
function markLogoFailed(id: string) {
  failedLogos.value[id] = true
}
</script>

<template>
  <section class="relative bg-white/60 backdrop-blur-sm section-py-compact"
    aria-label="Curriculum and partner ecosystem">
    <div class="container-page text-center">
      <p class="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
        Trusted by parents for boards across India
      </p>

      <div class="group relative w-full overflow-hidden" v-motion :initial="{ opacity: 0, y: 12 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600 } }">
        <div class="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent">
        </div>
        <div
          class="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent">
        </div>
        <div
          class="flex w-max items-center gap-4 animate-marquee group-hover:[animation-play-state:paused] sm:gap-5 motion-reduce:w-full motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center">
          <div v-for="(p, i) in [...partners, ...partners]" :key="`${p.id}-${i}`"
            class="flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-xl border border-slate-200 bg-white px-3 py-2.5 transition-all duration-300 hover:border-blue-200 hover:shadow-sm">
            <span class="grid h-10 w-10 shrink-0 place-items-center overflow-hidden">
              <img v-if="!failedLogos[p.id]" :src="usePublicAsset(p.logo)" :alt="`${p.name} logo`"
                class="h-9 w-9 object-contain" loading="lazy" @error="markLogoFailed(p.id)" />
              <span v-else class="text-[10px] font-bold text-slate-600">
                {{ p.fallback }}
              </span>
            </span>
            <span class="text-sm font-semibold leading-none text-slate-700">
              {{ p.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
