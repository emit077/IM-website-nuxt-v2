<script setup lang="ts">
import CardHeader from '~/components/ui/cardheader.vue'
import IconArrowRight from '~/components/icons/IconArrowRight.vue'
import IconCalendar from '~/components/icons/IconCalendar.vue'
import IconBook from '~/components/icons/IconBook.vue'

const heroStats = [
  { value: '50K', suffix: '+', label: 'Active students learning every month' },
  { value: '5', suffix: '+ lakh', label: 'Verified tutors across every subject' },
  { value: '50', suffix: '+ lakh', label: 'Sessions delivered to date' },
  { value: '98', suffix: '%', label: 'Satisfaction rate from verified reviews' },
]

const heroTitle =
  'Building futures through <span class="text-gradient-brand">personalised education</span>'

const heroTagline =
  '<span class="text-gradient-brand">Indian Mentors</span> — India\'s trusted tutoring ecosystem'

const heroDescription =
  'Connecting students, parents, tutors, and institutions with verified mentors, transparent progress tracking, and technology-backed reporting you can rely on.'

function rippleHandler(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  target.style.setProperty('--x', `${e.clientX - rect.left}px`)
  target.style.setProperty('--y', `${e.clientY - rect.top}px`)
}

const heroSectionStyle = {
  backgroundImage: `url('${usePublicAsset('assets/img/hero/hero-3.png')}')`,
}
</script>

<template>
  <section class="relative overflow-hidden bg-white bg-contain bg-center bg-no-repeat"
    aria-labelledby="about-hero-heading" :style="heroSectionStyle">
    <div aria-hidden="true" class="absolute inset-0 -z-10 bg-mesh-light" />
    <div aria-hidden="true" class="absolute inset-0 -z-10 opacity-[0.04]"
      style="background-image: radial-gradient(#1e293b 0.8px, transparent 0.8px); background-size: 24px 24px" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-14 -top-20 -z-10 h-72 w-72 rounded-full bg-indigo-300/25 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -right-20 top-28 -z-10 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute bottom-12 right-[18%] -z-10 h-44 w-44 rounded-full border border-indigo-200/70 bg-white/25 backdrop-blur-[1px]" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[400px] w-[1100px] -translate-x-1/2 bg-gradient-to-b from-indigo-200/30 to-transparent blur-3xl" />

    <div class="container-page pb-12 pt-10 lg:pt-16">
      <CardHeader variant="hero" heading-id="about-hero-heading" content-class="!px-0 !py-0 max-w-2xl lg:max-w-[46rem]"
        badge="About Indian Mentors" :title="heroTitle" :tagline="heroTagline" :description="heroDescription">
        <div class="flex flex-col gap-3 sm:flex-row sm:gap-4" v-motion :initial="{ opacity: 0, y: 16 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 500 } }">
          <a href="#mission" class="btn-secondary group w-full sm:w-auto">
            <span
              class="grid h-6 w-6 place-items-center rounded-full bg-blue-100 text-blue-700 transition-colors duration-200 group-hover:bg-blue-600 group-hover:text-white">
              <IconBook class="h-3.5 w-3.5" />
            </span>
            Our Mission
          </a>
        </div>

        <div class="mt-2 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" v-motion
          :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 1000, duration: 600 } }" />
      </CardHeader>

      <div
        class="rounded-2xl border border-indigo-300/35 bg-gradient-to-br from-indigo-900 via-indigo-700 to-indigo-500 p-4 shadow-[0_24px_55px_-30px_rgba(37,99,235,0.85)] backdrop-blur-sm sm:p-5"
        aria-label="Platform statistics">
        <ul class="grid grid-cols-2 gap-y-5 lg:flex lg:items-stretch" role="list">
          <li v-for="(stat, i) in heroStats" :key="stat.label" v-motion :initial="{ opacity: 0, y: 10 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 480, delay: 300 + i * 80, ease: 'easeOut' } }"
            class="flex min-w-0 flex-1 items-center gap-4 px-3 sm:px-5">
            <div class="min-w-0">
              <p class="font-display text-2xl font-extrabold leading-none tracking-tight text-white sm:text-[1.75rem]">
                {{ stat.value }}<span class="text-sky-300">{{ stat.suffix }}</span>
              </p>
              <p class="mt-2 text-xs leading-snug text-indigo-100/90 sm:text-[13px]">
                {{ stat.label }}
              </p>
            </div>
            <span v-if="i < heroStats.length - 1" class="ml-auto hidden w-px self-stretch bg-white/20 lg:block"
              aria-hidden="true" />
          </li>
        </ul>
      </div>

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
