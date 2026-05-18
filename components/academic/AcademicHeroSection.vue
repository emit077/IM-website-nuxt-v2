<script setup lang="ts">
import IconArrowRight from '~/components/icons/IconArrowRight.vue'
import IconBook from '~/components/icons/IconBook.vue'
import IconCalendar from '~/components/icons/IconCalendar.vue'
import TrustIndicators from '~/components/home/TrustIndicators.vue'

function rippleHandler(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  target.style.setProperty('--x', `${e.clientX - rect.left}px`)
  target.style.setProperty('--y', `${e.clientY - rect.top}px`)
}

const coverageHighlights = [
  { value: '7', label: 'Curriculum stages', sub: 'Nursery to university' },
  { value: '6+', label: 'Boards covered', sub: 'CBSE, ICSE, IB & more' },
  { value: '250+', label: 'Subjects', sub: 'Across all streams' },
]

const heroSectionStyle = {
  // backgroundImage: `url('${usePublicAsset('/img/hero-bg/hero3.png')}')`,
}
</script>

<template>
  <section class="relative overflow-hidden bg-white bg-contain bg-center bg-no-repeat"
    aria-labelledby="academic-hero-heading" :style="heroSectionStyle">
    <div aria-hidden="true" class="absolute inset-0 -z-10 bg-mesh-light" />
    <div aria-hidden="true" class="absolute inset-0 -z-10 opacity-[0.04]"
      style="background-image: radial-gradient(#1E293B 0.8px, transparent 0.8px); background-size: 24px 24px;" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -top-20 -left-14 -z-10 h-72 w-72 rounded-full bg-indigo-300/25 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute top-28 -right-20 -z-10 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute bottom-12 right-[18%] -z-10 h-44 w-44 rounded-full border border-indigo-200/70 bg-white/25 backdrop-blur-[1px]" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[400px] w-[1100px] -translate-x-1/2 bg-gradient-to-b from-indigo-200/30 to-transparent blur-3xl" />

    <div class="container-page pb-12 pt-10 lg:pt-16 text-center">
      <div class="pb-5">
        <span class="badge-pill w-fit mb-5">
          <span class="grid h-5 w-5 place-items-center rounded-full bg-blue-600 text-white text-[10px] font-bold">
            📚
          </span>
          <span>Academic Coverage &amp; Courses</span>
        </span>

        <h1 id="academic-hero-heading "
          class="py-5 heading-display text-balance text-[2.35rem] leading-[1.06] sm:text-5xl lg:text-[3.5rem] xl:text-[3.85rem]"
          v-motion :initial="{ opacity: 0, y: 24 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 200, ease: [0.22, 1, 0.36, 1] } }">
          Complete Learning Support from
          <span class="text-gradient-brand">Nursery to University</span>
        </h1>
        <p class="text-pretty py-5  mx-auto" v-motion :initial="{ opacity: 0, y: 16 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 350 } }">
          Structured programs for every grade, board, and subject — including competitive exam prep.
          Home, online, shadow, travel, and live-in tutoring with verified mentors across India.
        </p>

        <div class="my-5" v-motion :initial="{ opacity: 0, y: 16 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 500 } }">
          <a href="#book-demo" class="btn-primary ripple group w-full sm:w-auto" @mousemove="rippleHandler">
            <IconCalendar class="h-4 w-4 shrink-0 opacity-95" />
            Book Free Demo
            <IconArrowRight
              class="hero-cta-arrow h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      <TrustIndicators class="mt-5" variant="hero-blue" />

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
</style>
