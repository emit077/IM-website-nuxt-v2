<script setup lang="ts">
import CardHeader from '~/components/ui/CardHeaderLayout.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import { aboutSection } from '~/data/channel-partner'

const primaryImage = usePublicAsset(aboutSection.image)
</script>

<template>
  <section id="about-partnership" class="relative scroll-mt-20 overflow-hidden bg-white section-py"
    aria-labelledby="about-partnership-heading">
    <div class="container-page">
      <div class="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <!-- Left: intro + image -->
        <div class="lg:col-span-6" v-motion :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 550 } }">
          <CardHeader heading-id="about-partnership-heading" align="left" :badge="aboutSection.kicker"
            :title="aboutSection.title" :description="aboutSection.description" :classes="aboutSection.classes" />

          <div class="relative mt-8 overflow-hidden rounded-2xl sm:mt-10 sm:rounded-3xl">
            <img :src="primaryImage" alt="Indian Mentors team collaborating on partnership growth"
              class="aspect-[16/10] w-full object-cover" loading="lazy" decoding="async" />
            <span
              class="absolute bottom-4 left-4 inline-flex items-center rounded-full bg-amber-400 px-3.5 py-1.5 text-[11px] font-bold tracking-wide text-white shadow-md sm:bottom-5 sm:left-5 sm:px-4 sm:text-xs">
              {{ aboutSection.imageBadge }}
            </span>
          </div>
        </div>

        <!-- Right: benefits + quote -->
        <div class="lg:col-span-6">
          <ul class="space-y-4 sm:space-y-5" role="list">
            <li v-for="(benefit, i) in aboutSection.benefits" :key="benefit"
              class="flex items-center gap-3.5 sm:gap-4" v-motion :initial="{ opacity: 0, x: 12 }"
              :visibleOnce="{ opacity: 1, x: 0, transition: { delay: 60 + i * 55, duration: 420 } }">
              <span
                class="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-blue-100 text-blue-600 sm:h-9 sm:w-9"
                aria-hidden="true">
                <IconCheck class="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </span>
              <span class="font-display text-[15px] font-semibold text-slate-800 sm:text-base">
                {{ benefit }}
              </span>
            </li>
          </ul>

          <blockquote
            class="mt-8 rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_12px_40px_-16px_rgba(15,23,42,0.18)] sm:mt-10 sm:rounded-3xl sm:p-6"
            v-motion :initial="{ opacity: 0, y: 14 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 380, duration: 480 } }">
            <p class="text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
              {{ aboutSection.quote.text }}
            </p>
            <footer class="mt-4 flex items-center gap-3">
              <span class="h-0.5 w-8 rounded-full bg-amber-400" aria-hidden="true" />
              <cite class="text-[11px] font-bold uppercase tracking-[0.14em] text-amber-500 not-italic">
                {{ aboutSection.quote.attribution }}
              </cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  </section>
</template>
