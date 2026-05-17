<script setup lang="ts">
import { ref } from 'vue'

const partners = [
  { id: 'cbse', name: 'CBSE', logo: '/assets/img/boards/cbse.png', fallback: 'CB' },
  { id: 'icse', name: 'ICSE', logo: '/assets/img/boards/icse.png', fallback: 'IC' },
  { id: 'ib', name: 'IB Schools', logo: '/assets/img/boards/Ib.png', fallback: 'IB' },
  { id: 'iit', name: 'IIT Coaching', logo: '/assets/img/boards/Jee.png', fallback: 'IIT' },
  { id: 'cambridge', name: 'Cambridge', logo: '/assets/img/boards/cambridge.png', fallback: 'C' },
  { id: 'state', name: 'State Boards', logo: '/assets/img/boards/state-boards.png', fallback: 'SB' },
  { id: 'neet', name: 'NEET Coaching', logo: '/assets/img/boards/neet.png', fallback: 'N' },
]

const failedLogos = ref<Record<string, boolean>>({})

function markLogoFailed(id: string) {
  failedLogos.value[id] = true
}
</script>

<template>
  <section class="relative border-y border-slate-200/70 bg-white/60 backdrop-blur-sm"
    aria-label="Curriculum and partner ecosystem">
    <div class="container-page py-5 text-center">
      <p class="text-xs font-semibold tracking-[0.18em] uppercase text-slate-500 shrink-0 text-center mb-5">
        Trusted by parents for boards across India
      </p>
      <div class="flex flex-col md:flex-row md:items-center gap-5 md:gap-10" v-motion :initial="{ opacity: 0, y: 12 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600 } }">

        <div class="relative flex-1 overflow-hidden">
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-2.5 sm:gap-3">
            <div v-for="(p, i) in partners" :key="p.id"
              class="flex items-center text-left gap-2.5 rounded-xl border border-slate-200 bg-white px-2.5 sm:px-3 py-2.5 hover:border-blue-200 hover:shadow-sm transition-all duration-300"
              v-motion :initial="{ opacity: 0, y: 8 }" :visibleOnce="{
                opacity: 1,
                y: 0,
                transition: { duration: 500, delay: i * 70 },
              }">
              <span class="grid h-11 w-11 place-items-center overflow-hidden shrink-0">
                <img v-if="!failedLogos[p.id]" :src="usePublicAsset(p.logo)" :alt="`${p.name} logo`" class="h-10 w-10 object-contain"
                  loading="lazy" @error="markLogoFailed(p.id)" />
                <span v-else class="text-[10px] font-bold text-slate-600">
                  {{ p.fallback }}
                </span>
              </span>
              <span class="text-xs sm:text-sm font-semibold text-slate-700 leading-tight">
                {{ p.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
