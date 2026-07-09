<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeader.vue'
import { aboutMission, aboutVision, aboutMissionQuote } from '~/data/about'

const stepNumber = (i: number) => String(i + 1).padStart(2, '0')
</script>

<template>
  <section id="mission" class="relative overflow-hidden bg-[#f6f8fc] py-16 sm:py-20 lg:py-24"
    aria-labelledby="mission-section-heading">
    <h2 id="mission-section-heading" class="sr-only">Mission &amp; Vision</h2>
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-blue-200/25 blur-3xl" />
    <div aria-hidden="true" class="pointer-events-none absolute right-8 top-40 hidden opacity-[0.5] lg:block"
      style="width: 120px; height: 120px; background-image: radial-gradient(#3b82f6 1.4px, transparent 1.4px); background-size: 16px 16px" />

    <div class="container-page relative">
      <figure class="mx-auto max-w-3xl text-center" v-motion :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }">
        <Icon icon="mdi:format-quote-open" class="mx-auto h-9 w-9 text-blue-300" aria-hidden="true" />
        <blockquote class="font-display -mt-2 text-balance italic text-xl   text-slate-500 sm:text-xl">
          {{ aboutMissionQuote }}
        </blockquote>
        <span aria-hidden="true" class="mx-auto mt-5 block h-1 w-16 rounded-full bg-blue-600" />
      </figure>
      <div class="mt-16 grid items-center gap-10 lg:mt-20 lg:grid-cols-2 lg:gap-14">
        <div v-motion :initial="{ opacity: 0, x: -20 }"
          :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 560, delay: 100 } }">
          <CardHeader align="left" heading-id="mission-heading" classes="!px-0 !py-0 "
            :badge="aboutMission.badge"
            title="Empowering Every Learner Through  <span class='text-gradient-brand pt-2'>Structured Mentorship</span>">
            <div class=" mt-6 space-y-4">
              <p v-for="(para, i) in aboutMission.intro" :key="i" class="leading-relaxed text-slate-600">
                {{ para }}
              </p>
            </div>
          </CardHeader>
        </div>
        <div class="relative flex items-center justify-center gap-3 sm:gap-6 lg:justify-start" v-motion
          :initial="{ opacity: 0, scale: 0.94 }"
          :visibleOnce="{ opacity: 1, scale: 1, transition: { duration: 620, delay: 180 } }">
          <div class="relative h-56 w-56 shrink-0 sm:h-64 sm:w-64">
            <span aria-hidden="true"
              class="mv-pulse absolute inset-0 rounded-full bg-blue-500/[0.06] ring-1 ring-blue-200/60" />
            <span aria-hidden="true" class="absolute inset-6 rounded-full bg-blue-500/[0.05] ring-1 ring-blue-200/50" />
            <span aria-hidden="true"
              class="absolute inset-12 rounded-full bg-blue-500/[0.06] ring-1 ring-blue-200/60" />
            <span
              class="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white shadow-[0_20px_45px_-18px_rgba(37,99,235,0.6)] ring-1 ring-blue-100 sm:h-28 sm:w-28">
              <Icon icon="mdi:bullseye-arrow" class="h-11 w-11 text-blue-600 sm:h-12 sm:w-12" aria-hidden="true" />
            </span>
          </div>

          <ol class="relative z-10 flex-1 space-y-4 sm:space-y-5" role="list">
            <li v-for="(item, i) in aboutMission.commitments" :key="item.title" class="flex items-center gap-3" v-motion
              :initial="{ opacity: 0, x: 14 }"
              :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 420, delay: 260 + i * 80 } }">
              <span aria-hidden="true"
                class="hidden h-px w-6 shrink-0 border-t border-dashed border-blue-300 lg:block" />
              <span
                class="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blue-600 text-[11px] font-bold text-white shadow-sm">
                {{ stepNumber(i) }}
              </span>
              <p class="text-sm font-semibold leading-snug text-slate-700">{{ item.title }}</p>
            </li>
          </ol>
        </div>
      </div>
      <div class="relative mt-14 overflow-hidden lg:mt-20" v-motion :initial="{ opacity: 0, y: 26 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 560, delay: 120 } }">
        <div aria-hidden="true" class="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full " />

        <div class="relative  items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <CardHeader heading-id="vision-heading" classes="!px-0 !py-0 " :badge="aboutVision.badge"
            title="Building India's Most Trusted  <span class='text-gradient-brand pt-2'>Personalised Tutoring Ecosystem</span>"
            :description="aboutVision.intro" />
        </div>
        <div class="relative mt-8 border-t border-slate-100 pt-8">
          <div class="flex items-center justify-center gap-4">
            <p class="text-center text-xs font-bold uppercase tracking-[0.22em] text-slate-600 sm:text-sm">
              {{ aboutVision.futureLabel }}
            </p>
          </div>

          <ul class="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" role="list">
            <li v-for="(point, i) in aboutVision.points" :key="point.text"
              class="group relative flex flex-col items-center gap-4 overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-6 text-center transition duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-[0_26px_55px_-32px_rgba(37,99,235,0.55)]"
              v-motion :initial="{ opacity: 0, y: 18 }"
              :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 420, delay: 200 + i * 90 } }">
              <span aria-hidden="true"
                class="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-blue-500 to-indigo-600 transition-transform duration-300 group-hover:scale-x-100" />
              <span aria-hidden="true"
                class="font-display pointer-events-none absolute -right-1 -top-2 text-5xl font-black text-blue-500/[0.06] transition-colors duration-300 group-hover:text-blue-500/10">
                #
              </span>
              <span
                class="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-600/25 ring-1 ring-white/20 transition duration-300 group-hover:scale-110 group-hover:shadow-blue-600/40">
                <Icon :icon="point.icon" class="h-7 w-7" aria-hidden="true" />
              </span>
              <p class="relative text-xs font-medium leading-relaxed text-slate-600 sm:text-sm">{{ point.text }}</p>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="relative mt-8 flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.4)] sm:gap-5 sm:p-6"
        v-motion :initial="{ opacity: 0, y: 18 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500, delay: 160 } }">
        <span
          class="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/30 sm:h-14 sm:w-14">
          <Icon icon="mdi:star" class="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
        </span>
        <p class="text-sm font-medium leading-relaxed text-slate-700 sm:text-[0.95rem]">
          {{ aboutVision.closing }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mv-pulse {
  animation: mv-pulse 4s ease-in-out infinite;
}

@keyframes mv-pulse {

  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    transform: scale(1.04);
    opacity: 0.7;
  }
}

.mv-spin {
  animation: mv-spin 24s linear infinite;
}

@keyframes mv-spin {
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {

  .mv-pulse,
  .mv-spin {
    animation: none;
  }
}
</style>
