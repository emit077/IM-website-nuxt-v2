<script setup lang="ts">
import { ref } from 'vue'

const partners = [
  { id: 'aws', name: 'AWS', logo: '/assets/img/partners/aws.png' },
  { id: 'google', name: 'Google', logo: '/assets/img/partners/google.png' },
  { id: 'msme', name: 'MSME', logo: '/assets/img/partners/msme.png' },
  { id: 'godaddy', name: 'GoDaddy', logo: '/assets/img/partners/godaddy.png' },
  { id: 'startup-india', name: 'Startup India', logo: '/assets/img/partners/startup-india.png' },
  { id: 'mca', name: 'MCA', logo: '/assets/img/partners/mca.png' },
  { id: 'justdial', name: 'Just Dial', logo: '/assets/img/partners/justdial.png' },
  { id: 'sulekha', name: 'Sulekha', logo: '/assets/img/partners/sulekha.png' },
  { id: 'indiamart', name: 'IndiaMART', logo: '/assets/img/partners/indiamart.png' },
  { id: 'razorpay', name: 'Razorpay', logo: '/assets/img/partners/razorpay.png' },
]

const failedLogos = ref<Record<string, boolean>>({})
function markLogoFailed(id: string) {
  failedLogos.value[id] = true
}
</script>

<template>
  <section class="relative border-slate-200/70 bg-white section-py-compact"
    aria-label="Partner and recognition ecosystem">
    <div class="container-page text-center">
      <p class="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
        Recognised &amp; Partnered With
      </p>

      <div class="group relative w-full overflow-hidden" v-motion :initial="{ opacity: 0, y: 12 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600 } }">
        <div class="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent">
        </div>
        <div
          class="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent">
        </div>
        <div
          class="flex w-max items-center gap-12 animate-marquee group-hover:[animation-play-state:paused] sm:gap-14 motion-reduce:w-full motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center">
          <div v-for="(p, i) in [...partners, ...partners]" :key="`${p.id}-${i}`"
            class="flex h-10 shrink-0 items-center justify-center sm:h-12">
            <img v-if="!failedLogos[p.id]" :src="usePublicAsset(p.logo)" :alt="`${p.name} logo`"
              class="h-full w-auto max-w-[140px] object-contain opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
              loading="lazy" @error="markLogoFailed(p.id)" />
            <span v-else
              class="whitespace-nowrap text-base font-bold tracking-tight text-slate-400 transition-colors duration-300 hover:text-slate-700 sm:text-lg">
              {{ p.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
