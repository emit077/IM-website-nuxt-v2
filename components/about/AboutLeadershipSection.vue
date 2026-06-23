<script setup lang="ts">
import { computed } from 'vue'
import CardHeader from '~/components/ui/cardheader.vue'
import { aboutLeadership, aboutLeadershipQuote } from '~/data/about'

const bannerImage = usePublicAsset('assets/img/banner/banner-1.png')

const founder = computed(() => aboutLeadership.find((l) => l.id === 'founder'))
const otherLeaders = computed(() => aboutLeadership.filter((l) => l.id !== 'founder'))
const leadershipCards = computed(() => otherLeaders.value.slice(0, 3))
</script>

<template>
  <section id="leadership" class="bg-[#f8fafc] py-14 sm:py-16 lg:py-20" aria-labelledby="leadership-heading">
    <div class="container-page">
      <CardHeader
        variant="section"
        heading-id="leadership-heading"
        content-class="!px-0 !py-0"
        title="Founders &amp; Leadership"
        description="The people guiding academic quality, operations, and mentor excellence across India."
      />

      <!-- Founder & CEO -->
      <article v-if="founder"
        class="mx-auto mt-12  overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_1px_3px_rgba(15,23,42,0.04),0_18px_48px_-22px_rgba(15,23,42,0.18)] lg:grid lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)]"
        v-motion :initial="{ opacity: 0, y: 18 }" :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 520 } }">
        <!-- Image rail -->
        <div class="relative min-h-[18rem] overflow-hidden lg:min-h-full">
          <img :src="bannerImage" :alt="founder.name" class="absolute inset-0 h-full w-full object-cover object-center"
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
          <p class="text-base leading-[1.8] text-slate-600 sm:text-[17px]">
            {{ founder.bio }}
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
      <div v-if="leadershipCards.length"
        class="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        role="list"
        aria-label="Leadership team">
        <article v-for="(leader, li) in leadershipCards" :key="leader.id"
          class="group overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_1px_3px_rgba(15,23,42,0.04),0_18px_48px_-26px_rgba(15,23,42,0.16)]"
          role="listitem"
          v-motion
          :initial="{ opacity: 0, y: 18 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 480, delay: 80 + li * 90 } }">
          <div class="relative aspect-[4/3] overflow-hidden bg-slate-200">
            <img
              :src="leader.image ? usePublicAsset(leader.image) : bannerImage"
              :alt="leader.name"
              class="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div aria-hidden="true"
              class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />
          </div>

          <div class="p-6 sm:p-7">
            <h3 class="font-display text-xl font-bold tracking-tight text-slate-950">
              {{ leader.name }}
            </h3>
            <p class="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">
              {{ leader.role }}
            </p>
            <p class="mt-5 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
              {{ leader.message ?? leader.bio }}
            </p>
          </div>
        </article>
      </div>

      <!-- closer quote -->
      <div class="relative mx-auto mt-10  overflow-hidden rounded-2xl">
        <img :src="bannerImage" alt="Indian Mentors leadership team"
          class="h-48 w-full object-cover object-top sm:h-56 lg:h-64" loading="lazy" />
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
