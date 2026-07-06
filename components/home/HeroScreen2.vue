<script setup lang="ts">
import TrustIndicators from '../shared/TrustIndicators.vue'
import { trustItems } from '~/data/trust'
import CardHeader from '~/components/ui/cardheader.vue'
import IconArrowRight from '~/components/icons/IconArrowRight.vue'
import IconBook from '~/components/icons/IconBook.vue'
import IconCalendar from '~/components/icons/IconCalendar.vue'

const heroTitle = 'Personalised <span class="text-gradient-brand"> </span> Learning for <span class="text-gradient-brand"> Your Success</span>'

const heroTagline = '<span class="text-gradient-brand">Indian Mentors</span> - Guiding Every Student Towards Academic Excellence'

const heroDescription =
  'Providing structured tutoring services and reliable teacher recruitment solutions across India.'

function rippleHandler(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  target.style.setProperty('--x', `${e.clientX - rect.left}px`)
  target.style.setProperty('--y', `${e.clientY - rect.top}px`)
}

const heroSectionStyle = {
  backgroundImage: `url('${usePublicAsset('assets/img/hero/hero-2.png')}')`,
}
</script>

<template>
  <section class="relative overflow-hidden bg-white  bg-right bg-no-repeat" aria-labelledby="hero-screen-2-heading"
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
      <CardHeader variant="hero" heading-id="hero-screen-2-heading"
        content-class="!px-0 !py-0 max-w-2xl lg:max-w-[46rem]"
        badge="Stronger Concepts. Better Grades. Brighter Future." :title="heroTitle" :tagline="heroTagline"
        :description="heroDescription">
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


        <div class="mt-2 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" v-motion
          :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 1000, duration: 600 } }" />
      </CardHeader>

      <div aria-hidden="true"
        class="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-cream-50">
      </div>
      <TrustIndicators class="pt-1" :stats="trustItems.slice(0, 4)" />

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
