<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import IconArrowRight from '~/components/icons/IconArrowRight.vue'
import IconCalendar from '~/components/icons/IconCalendar.vue'
import TrustIndicators from '~/components/home/TrustIndicators.vue'

const isPlaying = ref(false)

const highlights = [
  { value: '50K+', label: 'Active learners', sub: 'Students & families nationwide' },
  { value: '5L+', label: 'Verified tutors', sub: 'Screened before they teach' },
  { value: '98%', label: 'Satisfaction rate', sub: 'From verified parent reviews' },
]

function rippleHandler(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  target.style.setProperty('--x', `${e.clientX - rect.left}px`)
  target.style.setProperty('--y', `${e.clientY - rect.top}px`)
}

const heroSectionStyle = {
  // backgroundImage: `url('${usePublicAsset('/img/hero-bg/hero2.png')}')`,
}
</script>

<template>
  <section class="relative overflow-hidden bg-white bg-contain bg-center bg-no-repeat"
    aria-labelledby="about-hero-heading" :style="heroSectionStyle">
    <div aria-hidden="true" class="absolute inset-0 -z-10 bg-mesh-light" />
    <div aria-hidden="true" class="absolute inset-0 -z-10 opacity-[0.04]" style="
        background-image: radial-gradient(#1e293b 0.8px, transparent 0.8px);
        background-size: 24px 24px;
      " />
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-14 -top-20 -z-10 h-72 w-72 rounded-full bg-indigo-300/25 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-20 top-28 -z-10 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute bottom-12 right-[18%] -z-10 h-44 w-44 rounded-full border border-indigo-200/70 bg-white/25 backdrop-blur-[1px]" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[400px] w-[1100px] -translate-x-1/2 bg-gradient-to-b from-indigo-200/30 to-transparent blur-3xl" />

    <div class="container-page pb-12 pt-10 text-center lg:pt-16">
      <div class="pb-5">
        <span class="badge-pill mx-auto mb-5 w-fit">
          <span class="grid h-5 w-5 place-items-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
            ✦
          </span>
          <span>About Indian Mentors</span>
        </span>

        <h1 id="about-hero-heading"
          class="heading-display text-balance py-5 text-[2.35rem] leading-[1.06] sm:text-5xl lg:text-[3.5rem] xl:text-[3.85rem]"
          v-motion :initial="{ opacity: 0, y: 24 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 200, ease: [0.22, 1, 0.36, 1] } }">
          Building futures through
          <span class="text-gradient-brand">personalised education</span>
        </h1>

        <p class="mx-auto max-w-4xl text-pretty py-3 text-base leading-relaxed text-slate-600 sm:text-lg" v-motion
          :initial="{ opacity: 0, y: 16 }" :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 350 } }">
          India's trusted tutoring ecosystem — connecting students, parents, tutors, and
          institutions with verified mentors, transparent progress tracking, and technology-backed
          reporting you can rely on.
        </p>
      </div>
      <div
        class="relative mx-auto aspect-video w-full max-w-3xl overflow-hidden rounded-2xl shadow-[0_20px_50px_-12px_rgba(37,99,235,0.35)] ring-1 ring-slate-200/80"
        v-motion :initial="{ opacity: 0, y: 20 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }">
        <iframe v-if="isPlaying" class="absolute inset-0 h-full w-full"
          src="https://www.youtube.com/embed/N78TDRRCqEo?autoplay=1&rel=0&modestbranding=1&playsinline=1"
          title="Indian Mentors overview video" loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen />
        <button v-else type="button" class="group relative h-full w-full"
          aria-label="Play Indian Mentors overview video" @click="isPlaying = true">
          <img src="https://img.youtube.com/vi/N78TDRRCqEo/maxresdefault.jpg" alt=""
            class="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
            loading="lazy" />
          <span class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/25 to-transparent" />
          <span class="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center">
            <span class="absolute h-full w-full animate-ping rounded-full bg-blue-400/30" aria-hidden="true" />
            <span
              class="relative flex h-14 w-14 items-center justify-center rounded-full bg-white text-blue-600 shadow-xl transition group-hover:scale-110">
              <Icon icon="mdi:play" class="h-7 w-7 translate-x-0.5" aria-hidden="true" />
            </span>
          </span>
        </button>
      </div>

      <TrustIndicators class="mt-8" variant="hero-blue" />

      <div aria-hidden="true"
        class="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-cream-50" />
    </div>
  </section>
</template>

<style scoped>
.hero-cta-arrow {
  animation: hero-arrow-loop 0.95s ease-in-out infinite;
}

@keyframes hero-arrow-loop {

  0%,
  100% {
    transform: translateX(0);
    opacity: 1;
  }

  50% {
    transform: translateX(4px);
    opacity: 0.7;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-cta-arrow {
    animation: none;
  }
}
</style>
