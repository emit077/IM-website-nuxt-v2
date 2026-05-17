<script setup lang="ts">
import TrustIndicators from './TrustIndicators.vue'
import IconArrowRight from './IconArrowRight.vue'
import IconBook from './IconBook.vue'
import IconCalendar from './IconCalendar.vue'
import IconCheck from './IconCheck.vue'

function rippleHandler(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  target.style.setProperty('--x', `${e.clientX - rect.left}px`)
  target.style.setProperty('--y', `${e.clientY - rect.top}px`)
}
const reviewerAvatars = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
]

const heroSectionStyle = {
  backgroundImage: `url('${usePublicAsset('/img/hero-bg/hero2.png')}')`,
}
</script>

<template>
  <section class="relative overflow-hidden bg-white bg-contain bg-center bg-no-repeat" aria-labelledby="hero-heading"
    :style="heroSectionStyle">
    <div aria-hidden="true" class="absolute inset-0 -z-10 bg-mesh-light"></div>
    <div aria-hidden="true" class="absolute inset-0 -z-10 opacity-[0.04]"
      style="background-image: radial-gradient(#1e293b 0.8px, transparent 0.8px); background-size: 24px 24px"></div>
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-14 -top-20 -z-10 h-72 w-72 rounded-full bg-indigo-300/25 blur-3xl">
    </div>
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-20 top-28 -z-10 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl"></div>
    <div aria-hidden="true"
      class="pointer-events-none absolute bottom-12 right-[18%] -z-10 h-44 w-44 rounded-full border border-indigo-200/70 bg-white/25 backdrop-blur-[1px]">
    </div>
    <div aria-hidden="true"
      class="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[400px] w-[1100px] -translate-x-1/2 bg-gradient-to-b from-indigo-200/30 to-transparent blur-3xl">
    </div>

    <div class="container-page pb-12 pt-10 lg:pt-16">
      <div class="flex max-w-2xl flex-col gap-7 lg:max-w-[46rem] lg:gap-8">
        <span class="badge-pill w-fit">
          <span class="grid h-5 w-5 place-items-center rounded-full bg-emerald-500 text-white">
            <IconCheck class="h-3 w-3" />
          </span>
          <span>#1 India's Verified Tutor Platform</span>
        </span>

        <h1 id="hero-heading"
          class="heading-display text-balance text-[2.4rem] leading-[1.06] sm:text-5xl lg:text-[3.7rem] xl:text-[4rem]"
          v-motion :initial="{ opacity: 0, y: 24 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 200, ease: [0.22, 1, 0.36, 1] } }">
          Personalised
          <span class="text-gradient-brand">Learning for</span>
          <br class="hidden sm:block" />
          Your Success
        </h1>

        <p class="max-w-xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg" v-motion
          :initial="{ opacity: 0, y: 16 }" :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 350 } }">
          Guiding Every Student Towards Academic Excellence.
          <br />
          Providing structured tutoring services and reliable teacher recruitment solutions across India.
        </p>

        <div class="flex flex-col gap-3 sm:flex-row sm:gap-4" v-motion :initial="{ opacity: 0, y: 16 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 500 } }">
          <a href="#book-demo" class="btn-primary ripple group w-full sm:w-auto" @mousemove="rippleHandler">
            <IconCalendar class="h-4 w-4 shrink-0 opacity-95" />
            Book Free Demo
            <IconArrowRight
              class="hero-cta-arrow h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a href="#tutors" class="btn-secondary group w-full sm:w-auto">
            <span
              class="grid h-6 w-6 place-items-center rounded-full bg-blue-100 text-blue-700 transition-colors duration-200 group-hover:bg-blue-600 group-hover:text-white">
              <IconBook class="h-3.5 w-3.5" />
            </span>
            Browse Tutors
          </a>
        </div>

        <div class=" w-full flex-wrap items-center justify-between gap-4">
          <div class="flex -space-x-2">
            <img v-for="(avatar, i) in reviewerAvatars" :key="`reviewer-${i}`" :src="avatar"
              :alt="`Parent reviewer ${i + 1}`" class="h-8 w-8 rounded-full border-2 border-white object-cover"
              loading="lazy" />
          </div>
          <div class="text-sm leading-tight">
            <div class="tracking-[1px] text-amber-500">★★★★★</div>
            <p class="text-slate-700">
              Rated <span class="font-semibold text-slate-900">4.9</span> by
              <span class="font-semibold text-slate-900">14k+</span> parents
            </p>
          </div>
        </div>

        <div class="mt-2 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" v-motion
          :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 1000, duration: 600 } }" />
      </div>
      <TrustIndicators class="pt-1" variant="hero-blue" />
      <div aria-hidden="true"
        class="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-cream-50">
      </div>
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
</style>
