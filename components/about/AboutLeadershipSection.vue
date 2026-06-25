<script setup lang="ts">
import { computed } from 'vue'
import CardHeader from '~/components/ui/cardheader.vue'
import { aboutLeadership, aboutLeadershipQuote } from '~/data/about'

const bannerImage = usePublicAsset('assets/img/banner/banner-1.png')

const founder = computed(() => aboutLeadership.find((l) => l.id === 'founder'))
const otherLeaders = computed(() => aboutLeadership.filter((l) => l.id !== 'founder'))
const leadershipCards = computed(() => otherLeaders.value.slice(0, 4))
</script>

<template>
  <section id="leadership" class="bg-[#f8fafc] py-14 sm:py-16 lg:py-20" aria-labelledby="leadership-heading">
    <div class="container-page">
      <CardHeader variant="section" heading-id="leadership-heading" content-class="!px-0 !py-0"
        title="A structured Team Powering <span class='text-gradient-brand'>Academic Excellence</span>"
        description=" The people guiding academic quality, operations, and mentor excellence across India." />

      <!-- Founder & CEO -->
      <article v-if="founder"
        class="group mx-auto mt-12 overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_1px_3px_rgba(15,23,42,0.04),0_18px_48px_-22px_rgba(15,23,42,0.18)] lg:grid lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)]"
        v-motion :initial="{ opacity: 0, y: 18 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 520 } }">
        <!-- Image rail -->
        <div class="relative min-h-[18rem] overflow-hidden lg:min-h-full">
          <img :src="bannerImage" :alt="founder.name"
            class="absolute inset-0 h-full w-full object-cover object-center grayscale transition duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
            loading="lazy" />
          <div aria-hidden="true"
            class="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/35 to-slate-900/10" />

          <div class="relative flex h-full flex-col justify-end p-7 sm:p-9">
            <h3 class="mt-4 font-display text-2xl font-bold tracking-tight text-white sm:text-[1.7rem]">
              {{ founder.name }}
            </h3>
            <p class="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/60">
              {{ founder.role }}
            </p>
          </div>
        </div>

        <!-- Content -->
        <div class="px-8 py-10 sm:px-10 sm:py-12">
          <p class="text-base leading-[1.8] text-slate-600 sm:text-[17px] italic">
            "{{ founder.bio }}"
          </p>

          <div class="mt-9 flex items-center gap-3">
            <span class="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
              Guiding principles
            </span>
            <span aria-hidden="true" class="h-px flex-1 bg-slate-100" />
          </div>

          <ul class="mt-6 space-y-5" role="list">
            <li v-for="(quote, qi) in founder.inTheirWords" :key="quote" class="flex items-start gap-4" v-motion
              :initial="{ opacity: 0, x: 10 }"
              :visibleOnce="{ opacity: 1, x: 0, transition: { duration: 420, delay: 80 + qi * 80 } }">
              <span class="font-display mt-0.5 shrink-0 text-sm font-bold tabular-nums text-blue-600/80"
                aria-hidden="true">
                {{ String(qi + 1).padStart(2, '0') }}
              </span>
              <p class="border-l border-slate-200 pl-4 text-[15px] leading-relaxed text-slate-700">
                {{ quote }}
              </p>
            </li>
          </ul>
        </div>
      </article>

      <!-- Leadership cards -->
      <div v-if="leadershipCards.length" class="mx-auto mt-8 grid  gap-5 sm:grid-cols-2 lg:grid-cols-4" role="list"
        aria-label="Leadership team">
        <article v-for="(leader, li) in leadershipCards" :key="leader.id"
          class="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_10px_30px_-24px_rgba(15,23,42,0.55)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_-28px_rgba(15,23,42,0.55)]"
          role="listitem" v-motion :initial="{ opacity: 0, y: 18 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 480, delay: 80 + li * 90 } }">
          <div class="relative aspect-[4/5] overflow-hidden bg-slate-200">
            <img :src="leader.image ? usePublicAsset(leader.image) : bannerImage" :alt="leader.name"
              class="h-full w-full object-cover grayscale transition duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
              loading="lazy" />
            <div aria-hidden="true"
              class="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/20 to-transparent" />
            <div class="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
              <h3 class="font-display text-base font-bold tracking-tight">
                {{ leader.name }}
              </h3>
              <p class="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
                {{ leader.role }}
              </p>
            </div>
          </div>

          <div class="p-4 sm:p-5">
            <p class="line-clamp-4 text-sm leading-relaxed text-slate-600 italic">
              " {{ leader.message ?? leader.bio }}"
            </p>
          </div>
        </article>
      </div>

      <!-- closer quote -->
      <div class="group relative mx-auto mt-10 overflow-hidden rounded-2xl">
        <img :src="bannerImage" alt="Indian Mentors leadership team"
          class="h-48 w-full object-cover object-top transition duration-700 ease-out group-hover:scale-105 sm:h-56 lg:h-64"
          loading="lazy" />
        <div aria-hidden="true"
          class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/35 to-slate-900/5" />
        <div class="absolute inset-x-0 bottom-0 px-7 pb-8 pt-20 sm:px-10 sm:pb-10">
          <blockquote>
            <p
              class="mx-auto max-w-3xl text-center font-display text-base font-medium italic leading-relaxed text-white/95 sm:text-lg lg:text-xl">
              “{{ aboutLeadershipQuote }}”
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  </section>
</template>
