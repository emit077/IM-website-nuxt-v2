<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import { aboutSection } from '~/data/channel-partner'

const primaryImage = usePublicAsset(aboutSection.images.primary)
const secondaryImage = usePublicAsset(aboutSection.images.secondary)
</script>

<template>
  <section id="about-partnership" class="relative scroll-mt-20 overflow-hidden section-surface-muted section-py"
    aria-labelledby="about-partnership-heading">
    <div aria-hidden="true"
      class="pointer-events-none absolute -left-28 top-10 h-72 w-72 rounded-full bg-blue-200/35 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl" />
    <div aria-hidden="true"
      class="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:radial-gradient(#94a3b8_0.7px,transparent_0.7px)] [background-size:22px_22px]" />

    <div class="container-page relative">
      <div class="mx-auto max-w-3xl">
        <CardHeader heading-id="about-partnership-heading" :badge="aboutSection.kicker" :title="aboutSection.title"
          :description="aboutSection.description" :classes="aboutSection.classes" />
      </div>

      <div class="mt-10 grid items-center gap-8 lg:mt-12 lg:grid-cols-12 lg:gap-10">
        <!-- Visual collage -->
        <div class="relative lg:col-span-5" v-motion :initial="{ opacity: 0, y: 18 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 550 } }">
          <div aria-hidden="true"
            class="pointer-events-none absolute -inset-3 -z-10 rounded-[2.5rem] bg-gradient-to-br from-blue-200/45 via-sky-100/40 to-transparent blur-2xl" />

          <div class="relative pb-8 sm:pb-6">
            <div
              class="overflow-hidden rounded-[1.75rem] border border-white/80 bg-white shadow-[0_24px_60px_-28px_rgba(37,99,235,0.45)] ring-1 ring-slate-200/70">
              <img :src="primaryImage" alt="Indian Mentors team celebrating partnership and growth together"
                class="aspect-[4/3] w-full object-cover" loading="lazy" decoding="async" />
            </div>

            <div
              class="absolute -bottom-1 right-2 w-[44%] overflow-hidden rounded-2xl border-4 border-white bg-white shadow-[0_18px_40px_-18px_rgba(15,23,42,0.4)] sm:-bottom-2 sm:right-0 sm:w-[40%]"
              v-motion :initial="{ opacity: 0, scale: 0.92, y: 12 }"
              :visibleOnce="{ opacity: 1, scale: 1, y: 0, transition: { delay: 220, duration: 480 } }">
              <img :src="secondaryImage" alt="Partner guidance session with students and parents"
                class="aspect-[4/5] w-full object-cover" loading="lazy" decoding="async" />
            </div>

            <div v-for="(stat, i) in aboutSection.stats" :key="stat.label" :class="[
              'about-chip absolute z-10 flex max-w-[11.5rem] items-center gap-2.5 rounded-2xl border border-white/80 bg-white/95 px-3 py-2.5 shadow-[0_14px_32px_-14px_rgba(30,58,138,0.4)] backdrop-blur-sm',
              i === 0 ? 'left-3 top-4 sm:-left-3 sm:top-6' : 'bottom-10 left-2 sm:bottom-16 sm:-left-4',
            ]" :style="{ animationDelay: `${i * 1.2}s` }" v-motion :initial="{ opacity: 0, scale: 0.88 }"
              :visibleOnce="{ opacity: 1, scale: 1, transition: { delay: 320 + i * 140, duration: 420 } }">
              <span class="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-blue-600 text-white shadow-sm"
                aria-hidden="true">
                <Icon :icon="stat.iconMdi" class="h-[18px] w-[18px]" />
              </span>
              <div class="min-w-0 leading-tight">
                <p class="font-display text-sm font-bold text-slate-900">{{ stat.value }}</p>
                <p class="text-[11px] font-medium text-slate-500">{{ stat.label }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Feature points -->
        <ul class="space-y-3.5 lg:col-span-7 lg:pl-2" role="list">
          <li v-for="(point, i) in aboutSection.points" :key="point.title" v-motion :initial="{ opacity: 0, y: 14 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 80 + i * 70, duration: 450 } }">
            <article
              class="group relative flex gap-4 overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-card sm:gap-5 sm:p-5">
              <span aria-hidden="true"
                class="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-blue-400/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span
                class="relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:ring-blue-600"
                aria-hidden="true">
                <Icon :icon="point.iconMdi" class="h-6 w-6" />
              </span>
              <div class="relative min-w-0">
                <div class="flex items-center gap-2.5">
                  <span class="font-display text-[11px] font-bold tabular-nums text-blue-500/70">
                    {{ String(i + 1).padStart(2, '0') }}
                  </span>
                  <h3 class="font-display text-[15px] font-bold text-slate-900 sm:text-base">{{ point.title }}</h3>
                </div>
                <p class="mt-1.5 text-[13px] leading-relaxed text-slate-600 sm:text-[13.5px]">
                  {{ point.description }}
                </p>
              </div>
            </article>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-chip {
  animation: about-float 4.8s ease-in-out infinite;
}

@keyframes about-float {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-6px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .about-chip {
    animation: none;
  }
}
</style>
