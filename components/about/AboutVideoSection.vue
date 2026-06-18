<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import CardHeader from '~/components/ui/cardheader.vue'

const isPlaying = ref(false)

const highlights = [
  { icon: 'mdi:shield-check', label: 'Verified mentors' },
  { icon: 'mdi:chart-timeline-variant', label: 'Progress reports' },
  { icon: 'mdi:account-group', label: 'Family alignment' },
  { icon: 'mdi:monitor-dashboard', label: 'Smart dashboard' },
]
</script>

<template>
  <section
    id="about-video"
    class="bg-cream-50 py-10 sm:py-12"
    aria-labelledby="about-video-heading"
  >
    <div class="container-page">
      <div
        class="grid items-center gap-8 overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white p-5 shadow-soft sm:p-8 lg:grid-cols-12 lg:gap-10"
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 550 } }"
      >
        <div class="lg:col-span-5">
          <CardHeader
            variant="section-left"
            heading-id="about-video-heading"
            content-class="!px-0 !py-0"
            badge="See how we work"
            title="Inside Indian Mentors"
            description="Two minutes on how we match mentors, track progress, and keep parents in the loop."
          />

          <ul class="mt-6 flex flex-wrap gap-2" aria-label="Platform features">
            <li
              v-for="h in highlights"
              :key="h.label"
              class="inline-flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700"
            >
              <Icon :icon="h.icon" class="h-4 w-4 text-blue-600" aria-hidden="true" />
              {{ h.label }}
            </li>
          </ul>
        </div>

        <div class="relative lg:col-span-7">
          <div
            class="overflow-hidden rounded-2xl bg-slate-900 shadow-[0_16px_48px_-12px_rgba(37,99,235,0.35)] ring-1 ring-slate-900/10"
          >
            <div class="relative aspect-video w-full">
              <iframe
                v-if="isPlaying"
                class="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/N78TDRRCqEo?autoplay=1&rel=0&modestbranding=1&playsinline=1"
                title="Indian Mentors overview video"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <button
                v-else
                type="button"
                class="group relative h-full w-full"
                aria-label="Play Indian Mentors overview video"
                @click="isPlaying = true"
              >
                <img
                  src="https://img.youtube.com/vi/N78TDRRCqEo/maxresdefault.jpg"
                  alt=""
                  class="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <span
                  class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/25 to-transparent"
                />
                <span class="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center">
                  <span
                    class="absolute h-full w-full animate-ping rounded-full bg-blue-400/30"
                    aria-hidden="true"
                  />
                  <span
                    class="relative flex h-14 w-14 items-center justify-center rounded-full bg-white text-blue-600 shadow-xl transition group-hover:scale-110"
                  >
                    <Icon icon="mdi:play" class="h-7 w-7 translate-x-0.5" aria-hidden="true" />
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
